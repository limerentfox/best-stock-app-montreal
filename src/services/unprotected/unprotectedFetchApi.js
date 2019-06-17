import fetchApi from '../fetchApi';

const unprotectedFetchApi = (endpoint, variables, isProtected = false) =>
  fetchApi(endpoint, variables, isProtected);

export default unprotectedFetchApi;
