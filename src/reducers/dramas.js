import createReducer from 'utils/createReducer';
import { FETCH_DRAMAS } from '../actions/dramas';

const preloadedState = {}

const dramas = createReducer(preloadedState, {
    [FETCH_DRAMAS]: (state, action) => state.push('drama')
})

export default dramas;