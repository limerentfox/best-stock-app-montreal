import {
    FETCH_API_BEGIN,
    FETCH_API_SUCCESS,
    FETCH_API_FAILURE,
    SET_COMPANY_SYMBOL,
} from '../const/actions';

const DEFAULT_STATE = {
    companySymbol: '',
    error: undefined,
    loading: undefined,
    timeSeries: undefined,
    topPeers: undefined,
    companyOverview: {
        tags: undefined
    },
    topNews: undefined,
    keyStats: undefined,
};

const setCompanySymbol = (state, action) => {
    return {...state, companySymbol: action.payload };
};

const fetchApiBegin = state => {
    return {...state, loading: true };
};

const fetchApiSuccess = (state, action) => {
    const [
        _topNews,
        _topPeers,
        _companyOverview,
        _keyStats,
        _timeSeries,
    ] = action.payload;

    return {
        ...state,
        loading: undefined,
        topNews: _topNews,
        topPeers: _topPeers,
        companyOverview: _companyOverview,
        keyStats: _keyStats,
        timeSeries: {
            oneD: _timeSeries[0],
            fiveD: _timeSeries[1],
            oneM: _timeSeries[2],
            oneY: _timeSeries[3],
            MAX: _timeSeries[4],
        },
    };
};

const fetchApiFailure = (state, action) => {
    return {...state, loading: undefined, error: action.payload };
};

export const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_API_BEGIN:
            return fetchApiBegin(state);
        case FETCH_API_SUCCESS:
            return fetchApiSuccess(state, action);
        case FETCH_API_FAILURE:
            return fetchApiFailure(state, action);
        case SET_COMPANY_SYMBOL:
            return setCompanySymbol(state, action);
        default:
            return state;
    }
};