import React, {useState, useCallback} from 'react';
import { connect } from 'react-redux';
import {
  getError,
  getLoading,
} from '../../../../reducers/selectors';
import fetchCompanyData from '../../../../actions/fetchCompanyData';

export const SearchBar = ({ fetchData }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleFetchData = useCallback(
    () => {
      fetchData(searchTerm)
    },[searchTerm]
  )

  return (
    <div className="search-bar-area">
        <button
          type="submit"
          value={searchTerm}
          onClick={handleFetchData}
        >
          Submit
        </button>
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={newInput => setSearchTerm(newInput.target.value)}
          required
        />
    </div>
  );
};

const mapStateToProps = state => ({
  error: getError(state),
  loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: searchTerm => {
    dispatch(fetchCompanyData(searchTerm));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
