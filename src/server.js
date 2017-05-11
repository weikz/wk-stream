/* global webpackIsomorphicTools */
import Express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { match, createMemoryHistory, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import React from 'react';
import routes from './routes';
import configureStore from './store/configureStore';
import Html from './helpers/Html';
import request from 'request';


export default (app, webpackIsomorphicTools) => {

  app.use(Express.static(path.join(__dirname, '..', 'dist'), { index: false })); // eslint-disable-line max-len

  if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
      webpackIsomorphicTools.refresh();
      next();
    });
  }

  app.use((req, res, next) => {
    const memoryHistory = createMemoryHistory(req.originalUrl);
    const store = configureStore();
    const history = syncHistoryWithStore(memoryHistory, store);

    const location = req.originalUrl;

    match({ routes: routes(), location, history }, (err, redirectLocation, renderProps) => { // eslint-disable-line max-len
      if (err) {
        next(err);
        return;
      }

      if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search); // eslint-disable-line max-len
        return;
      }
      if (!renderProps) {
        next(new Error('Missing render props'));
        return;
      }

      function getReduxPromise() {
        const { query, params } = renderProps;
        const component = renderProps.components[renderProps.components.length - 1].WrappedComponent; // eslint-disable-line max-len

        if (component && component.fetchData) {
          return component.fetchData({ query, params, store, history });
        }

        return Promise.resolve();
      }

      getReduxPromise().then(() => {
        const assets = webpackIsomorphicTools.assets();
        const component = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        const html = ReactDOMServer.renderToString(
          <Html assets={assets} component={component} store={store} />
        );

        res.send(`<!doctype html>\n${html}`);
      });
    });
  });

};
