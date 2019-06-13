import protectedFetchApi from "./protectedFetchApi";

export const fetchNews = (companySymbol, last = 5) =>
  protectedFetchApi(`stock/${companySymbol}/news/last/${last}`);

export const fetchStats = (companySymbol, stat = "") =>
  protectedFetchApi(`stock/${companySymbol}/stats/${stat}`);

export const fetchPeers = companySymbol =>
  protectedFetchApi(`stock/${companySymbol}/peers`);

export const fetchOverview = companySymbol =>
  protectedFetchApi(`stock/${companySymbol}/company`);
