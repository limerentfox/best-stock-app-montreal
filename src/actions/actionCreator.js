import {
  FETCH_API_BEGIN,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
  SET_COMPANY_SYMBOL,
} from '../const/actions';

export function setCompanySymbol(companySymbol) {
  return {
    type: SET_COMPANY_SYMBOL,
    payload: companySymbol,
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
