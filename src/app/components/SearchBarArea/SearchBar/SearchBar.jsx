import React from 'react';
import { connect } from 'react-redux';

import store from '../../../../store/store';
import {
  getSearchTermInput,
  getError,
  getLoading,
} from '../../../../reducers/reducer';
import { setSearchTerm } from '../../../../actions/actionCreator';
import fetchCompanyData from '../../../../actions/fetchCompanyData';

export const SearchBar = props => {
  return (
    <div className="search-bar-area">
      <form>
        <button
          type="submit"
          value={props.searchTermInput}
          onClick={props.fetchData}
        >
          Submit
        </button>
        <input
          type="text"
          placeholder="Type to search..."
          value={props.searchTermInput}
          onChange={props.setSearchTermInput}
        />
      </form>
      {console.log(store.getState())}
    </div>
  );
};

const mapStateToProps = state => ({
  error: getError(state),
  loading: getLoading(state),
  searchTermInput: getSearchTermInput(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: e => {
    e.preventDefault();
    dispatch(fetchCompanyData(e.target.value));
  },
  setSearchTermInput: e => {
    dispatch(setSearchTerm(e.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
