import unprotectedFetchApi from './unprotectedFetchApi';

export const fetchTimeSeries = (companySymbol, range = '5y') =>
  unprotectedFetchApi(`stock/${companySymbol}/time-series/${range}`);
