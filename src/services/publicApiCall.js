import { API_URL } from "../const/config";

const publicApiCall = async (endpoint, companySymbol, queryVariables) =>
  await fetch(`${API_URL}/${endpoint}/${companySymbol}`);

export default publicApiCall;
