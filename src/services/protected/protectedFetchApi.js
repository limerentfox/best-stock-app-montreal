import fetchApi from "../fetchApi";

const protectedFetchApi = (endpoint, variables, isProtected = true) =>
  fetchApi(endpoint, variables, isProtected);

export default protectedFetchApi;
