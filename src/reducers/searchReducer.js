import { SET_SEARCH_TERM } from '../actions/actions';

const SEARCH_BAR_DEFAULT_STATE = {
    searchTerm: ''
}

const setSearchTerm = (state, action) => {
    return Object.assign({}, state, { searchTerm: action.payload });
}

const Reducer = (state = SEARCH_BAR_DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return setSearchTerm(state, action);
        default:
            return state
    }
}

export default Reducer;