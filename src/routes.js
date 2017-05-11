import App from './containers/Layout';
import LandingPage from './containers/LandingPage';
import DramaPage from './containers/DramaPage';

const routes = () => ({
  path: '/',
  component: App,
  indexRoute: {
    component: LandingPage,
  },
  childRoutes: [{
    path: 'drama/*/*',
    component: DramaPage
  }]
});

export default routes;
