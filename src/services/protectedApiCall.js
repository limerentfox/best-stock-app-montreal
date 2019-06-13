import { CLOUD_API_URL, CLOUD_API_KEY } from "../const/config";

const protectedApiCall = async (endpoint, variables) => {
  const BASE_URL = `${CLOUD_API_URL}/${endpoint}?token=${CLOUD_API_KEY}`;
  const FETCH_URL = variables ? `${BASE_URL}&${variables}` : BASE_URL;
  const RESPONSE = await fetch(FETCH_URL);
  return await RESPONSE.json();
};

export default protectedApiCall;
