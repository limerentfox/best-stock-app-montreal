import {
  FETCH_API_BEGIN,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
  SET_COMPANY_SYMBOL,
} from '../const/actions';

const DEFAULT_STATE = {
  companySymbol: '',
  error: null,
  loading: false,
  timeSeries: null,
  topPeers: null,
  companyOverview: null,
  topNews: null,
  keyStats: null,
};

const setCompanySymbol = (state, action) => {
  return { ...state, companySymbol: action.payload };
};

const fetchApiBegin = state => {
  return { ...state, loading: true };
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
    loading: false,
    topNews: _topNews,
    topPeers: _topPeers,
    companyOverview: _companyOverview,
    keyStats: _keyStats,
    timeSeries: {
      '1D': _timeSeries[0],
      '5D': _timeSeries[1],
      '1M': _timeSeries[2],
      '1Y': _timeSeries[3],
      MAX: _timeSeries[4],
    },
  };
};

const fetchApiFailure = (state, action) => {
  return { ...state, loading: false, error: action.payload };
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

export const getCompanySymbol = state => state.companySymbol;
export const getError = state => state.error;
export const getLoading = state => state.loading;
export const getTimeSeries = state => state.timeSeries;
export const getTopPeers = state => state.topPeers;
export const getTopNews = state => state.topNews;
export const getCompanyOverview = state => state.companyOverview;
export const getKeyStats = state => state.keyStats;
