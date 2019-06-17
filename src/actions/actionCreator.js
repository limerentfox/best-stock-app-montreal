import {
  FETCH_API_BEGIN,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
  SET_SEARCH_TERM,
} from '../const/actions';

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
}

export const fetchApiBegin = () => {
  return {
    type: FETCH_API_BEGIN,
  };
};

export const fetchApiSuccess = res => {
  return {
    type: FETCH_API_SUCCESS,
    payload: res,
  };
};

export const fetchApiFailure = error => {
  return {
    type: FETCH_API_FAILURE,
    payload: error,
  };
};
