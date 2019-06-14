import { CLOUD_API_URL, CLOUD_API_KEY, BASIC_API_URL } from "../const/config";

const fetchApi = async (endpoint, variables, isProtected) => {
  const BASE_URL = isProtected
    ? `${CLOUD_API_URL}/${endpoint}?token=${CLOUD_API_KEY}`
    : `${BASIC_API_URL}/${endpoint}`;
  const FETCH_URL = variables ? `${BASE_URL}&${variables}` : BASE_URL;
  const RESPONSE = await fetch(FETCH_URL);

  return await RESPONSE.json();
};

export default fetchApi;
