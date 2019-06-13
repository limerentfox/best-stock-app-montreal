import * as actions from '../const/actions';

export function setSearchTerm(searchTerm) {
    return {
        type: actions.SET_SEARCH_TERM,
        payload: searchTerm
    }
}

export function setTagTerms(tagTermsList) {
    return {
        type: actions.SET_TAGS_TERMS,
        payload: tagTermsList
    }
}

export function setMarketStatus(marketStatus) {
    return {
        type: actions.SET_MARKET_STATUS,
        payload: marketStatus
    }
}

export function setMarketRealtimeStatus(marketRealtime) {
    return {
        type: actions.SET_MARKET_REALTIME_STATUS,
        payload: marketRealtime
    }
}

export function setStockStatus(stockStatus) {
    return {
        type: actions.SET_STOCK_STATUS,
        payload: stockStatus
    }
}

export const testApiFetch = (stockIndex) => ({
    type: actions.TEST_API_REQUEST,
    payload: {
        url: `https://api.iextrading.com/1.0/stock/${stockIndex}/company`,
    }
})