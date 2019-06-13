import * as actions from './actions/actions';

const DEFAULT_STATE = {
    searchTerm: '',
    tagTerms: [],
    marketStatus: '',
    marketRealtime: 0,
    stockStatus: []
}

const setSearchTerm = (state, action) => {
    return Object.assign({}, state, { searchTerm: action.payload });
}

const setTagTerms = (state, action) => {
    return {...state, tagTerms: action.payload };
}

const setMarketStatus = (state, action) => {
    return Object.assign({}, state, { marketStatus: action.payload });
}

const setMarketRealtimeStatus = (state, action) => {
    return Object.assign({}, state, { marketRealtime: action.payload });
}

const setStockStatus = (state, action) => {
    return Object.assign({}, state, { stockStatus: action.payload });
}


const Reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actions.SET_SEARCH_TERM:
            return setSearchTerm(state, action);
        case actions.SET_TAGS_TERMS:
            return setTagTerms(state, action);
        case actions.SET_MARKET_STATUS:
            return setMarketStatus(state, action);
        case actions.SET_MARKET_REALTIME_STATUS:
            return setMarketRealtimeStatus(state, action);
        case actions.SET_STOCK_STATUS:
            return setStockStatus(state, action);
        default:
            return state
    }
}

export default Reducer;