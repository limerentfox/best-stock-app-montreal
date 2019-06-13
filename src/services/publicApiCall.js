import { BASIC_API_URL } from "../const/config";

const publicApiCall = async (endpoint, variables) => {
  const BASE_URL = `${BASIC_API_URL}/${endpoint}`;
  const FETCH_URL = variables ? `${BASE_URL}&${variables}` : BASE_URL;
  const RESPONSE = await fetch(FETCH_URL);
  return await RESPONSE.json();
};
export default publicApiCall;
