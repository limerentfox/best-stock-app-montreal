import {
  PROTECTED_API_URL,
  PROTECTED_API_KEY,
  UNPROTECTED_API_URL,
} from '../const/config';

const fetchApi = async (endpoint, queryVariables, isProtected) => {
  const BASE_URL = isProtected
    ? `${PROTECTED_API_URL}/${endpoint}?token=${PROTECTED_API_KEY}`
    : `${UNPROTECTED_API_URL}/${endpoint}`;
  const FETCH_URL = queryVariables ? `${BASE_URL}&${queryVariables}` : BASE_URL;
  const RESPONSE = await fetch(FETCH_URL);
  return await RESPONSE.json();
};

export default fetchApi;
