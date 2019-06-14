import basicFetchApi from "./basicFetchApi";

/**
 * Might be useless, simply there to show the boilerplate of a basic fetch
 */
export const fetchBook = companySymbol =>
  basicFetchApi(`stock/${companySymbol}/book`);
