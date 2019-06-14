import React from "react";
import { connect } from "react-redux";
import * as searchActions from '../../../../actions/searchActionCreators';

export const SearchBar = props => {
  return (
    <div className="search-bar-area">
      <button type='submit' onClick={props.SetSearchTermToSearch(props.searchTermInput)}>Submit</button>
      <input type="text" placeholder="Type to search..." value={props.searchTermInput} onChange={props.SetSearchTermInput}/>
      <div>{props.searchTermInput}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTermInput: state.SearchBarReducer.searchTermInput,
  searchTermToSearch: state.SearchBarReducer.searchTermToSearch
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  SetSearchTermInput: event => {
    dispatch(searchActions.setSearchTermInput(event.target.value));
  },
  SetSearchTermToSearch: value => {
    dispatch(searchActions.setSearchTermToSearch(value));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
