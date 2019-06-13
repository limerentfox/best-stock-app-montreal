import fetchApi from "../fetchApi";

const basicFetchApi = (endpoint, variables, isProtected = false) =>
  fetchApi(endpoint, variables, isProtected);

export default basicFetchApi;
