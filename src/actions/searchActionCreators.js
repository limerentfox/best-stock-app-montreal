import { SET_SEARCH_TERM, SET_TAGS_TERMS, SET_MARKET_STATUS, SET_MARKET_REALTIME_STATUS, SET_STOCK_STATUS } from './actions';

export function setSearchTerm(searchTerm) {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm
    }
}

export function setTagTerms(tagTermsList) {
    return {
        type: SET_TAGS_TERMS,
        payload: tagTermsList
    }
}



export function setMarketStatus(marketStatus) {
    return {
        type: SET_MARKET_STATUS,
        payload: marketStatus
    }
}

export function setMarketRealtimeStatus(marketRealtime) {
    return {
        type: SET_MARKET_REALTIME_STATUS,
        payload: marketRealtime
    }
}

export function getMarketRealtimeStatusAPI() {

}

export function setStockStatus(stockStatus) {
    return {
        type: SET_STOCK_STATUS,
        payload: stockStatus
    }
}