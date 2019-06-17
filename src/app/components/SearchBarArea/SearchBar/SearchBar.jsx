import React from 'react';
import { connect } from 'react-redux';

import {
  getCompanySymbol,
  getError,
  getLoading,
} from '../../../../reducers/reducer';
import { setCompanySymbol } from '../../../../actions/actionCreator';
import fetchCompanyData from '../../../../actions/fetchCompanyData';

export const SearchBar = props => {
  return (
    <div className="search-bar-area">
      <form>
        <button
          type="submit"
          value={props.companySymbol}
          onClick={props.fetchData}
        >
          Submit
        </button>
        <input
          type="text"
          placeholder="Type to search..."
          value={props.companySymbol}
          onChange={props.setCompanySymbol}
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: getError(state),
  loading: getLoading(state),
  companySymbol: getCompanySymbol(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: e => {
    e.preventDefault();
    dispatch(fetchCompanyData(e.target.value));
  },
  setCompanySymbol: e => {
    dispatch(setCompanySymbol(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
