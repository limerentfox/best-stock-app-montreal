import { API_URL, API_KEY } from "../const/config";

const protectedApiCall = async (endpoint, variables) => {
  const BASE_URL = `${API_URL}/${endpoint}?token=${API_KEY}`;
  const FETCH_URL = variables ? `${BASE_URL}&${variables}` : BASE_URL;
  const RESPONSE = await fetch(FETCH_URL);
  return await RESPONSE.json();
};

export default protectedApiCall;
