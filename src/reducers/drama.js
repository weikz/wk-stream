import createReducer from 'utils/createReducer';
import { FETCH_DRAMA_REQUEST } from '../actions/drama';

const preloadedState = {}

const drama = createReducer(preloadedState, {
    [FETCH_DRAMA_REQUEST]: (state, action) => Object.assign({}, state, {
        title: 'hello',
        episode: '',
        description: '',
        recommanded: '',
        drama: 'this',

    })
})

export default drama;