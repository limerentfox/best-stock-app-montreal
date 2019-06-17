import {
  fetchApiBegin,
  fetchApiSuccess,
  fetchApiFailure,
} from './actionCreator';

import {
  fetchOverview,
  fetchNews,
  fetchPeers,
  fetchKeyStats,
} from '../services/protected/protectedFetches';

import { fetchTimeSeries } from '../services/unprotected/unprotectedFetches';

/** This might be one of the most disgusting fetching function in history (MASSIVE FETCH)
 *
 * The nested promises are to make sure we get the time-series data for all the graph intervals before
 * passing it as a prop.
 *
 *
 * Will return the data as :
 * [News,
 * Peers,
 * Overview,
 * [1d,5d,1m,1y,5y]
 * ]
 * In our case the api max interval is 5y
 */
const fetchCompanyData = companySymbol => {
  return dispatch => {
    dispatch(fetchApiBegin());
    Promise.all([
      fetchNews(companySymbol),
      fetchPeers(companySymbol),
      fetchOverview(companySymbol),
      fetchKeyStats(companySymbol),
      Promise.all([
        fetchTimeSeries(companySymbol, '1d'),
        fetchTimeSeries(companySymbol, '5d'),
        fetchTimeSeries(companySymbol, '1m'),
        fetchTimeSeries(companySymbol, '1y'),
        fetchTimeSeries(companySymbol),
      ])
        .then(response => {
          if (response.error) {
            throw response.error;
          }
          return response;
        })
        .catch(e => {
          dispatch(fetchApiFailure(e));
        }),
    ])
      .then(response => {
        if (response.error) {
          throw response.error;
        }
        dispatch(fetchApiSuccess(response));
        return response;
      })
      .catch(e => {
        dispatch(fetchApiFailure(e));
      });
  };
};

export default fetchCompanyData;
