import React, {useState, useCallback} from 'react';
import { connect } from 'react-redux';
import {
  getCompanySymbol,
  getError,
  getLoading,
} from '../../../../reducers/selectors';
import { setCompanySymbol } from '../../../../actions/actionCreator';
import fetchCompanyData from '../../../../actions/fetchCompanyData';

export const SearchBar = ({companySymbol, fetchData, setCompanySymbol}) => {

  const[searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-bar-area">
      <form>
        <button
          type="submit"
          value={companySymbol}
          onClick={fetchData}
        >
          Submit
        </button>
        <input
          type="text"
          placeholder="Type to search..."
          value={companySymbol}
          onChange={setCompanySymbol}
          required
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
