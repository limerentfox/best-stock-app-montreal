import * as actions from "../const/actions";

const DEFAULT_STATE = {
    searchTermInput: '',
    searchTermToSearch: '',
    tagTerms: [],
    marketStatus: '',
    marketRealtime: 0,
    stockStatsSearchBar: []
};

const setSearchTermInput = (state, action) => {
    return Object.assign({}, state, { searchTermInput: action.payload });
};

const setSearchTermToSearch = (state, action) => {
    return Object.assign({}, state, { searchTermToSearch: action.payload });
};

const setTagTerms = (state, action) => {
    return {...state, tagTerms: action.payload };
};

const setMarketStatus = (state, action) => {
    return Object.assign({}, state, { marketStatus: action.payload });
};

const setMarketRealtimeStatus = (state, action) => {
    return Object.assign({}, state, { marketRealtime: action.payload });
};

const setStockStatus = (state, action) => {
    return Object.assign({}, state, { stockStatus: action.payload });
};

const SearchBarReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actions.SET_SEARCH_TERM_INPUT:
            return setSearchTermInput(state, action);
        case actions.SET_SEARCH_TERM_TO_SEARCH:
            return setSearchTermToSearch(state, action);
        case actions.SET_TAGS_TERMS:
            return setTagTerms(state, action);
        case actions.SET_MARKET_STATUS:
            return setMarketStatus(state, action);
        case actions.SET_MARKET_REALTIME_STATUS:
            return setMarketRealtimeStatus(state, action);
        case actions.SET_STOCK_STATUS:
            return setStockStatus(state, action);
        default:
            return state;
    }
};

export default SearchBarReducer;