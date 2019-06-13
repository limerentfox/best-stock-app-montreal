import React from "react";
import { connect } from "react-redux";
import {setSearchTerm, testApiFetch} from '../actions/searchActionCreators';

export const SearchBar = props => {
  return (
    <div className="search-bar-area">
      <input type="text" placeholder="Type to search..." value={props.searchTerm} onChange={props.testSearchTerm}/>
      <button type='submit' onClick={props.testApi} value={props.searchTerm}>Submit</button>
      <div>{props.searchTerm}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  testSearchTerm(event){
    console.log("yoooo im dispatching " + event.target.value);
    dispatch(setSearchTerm(event.target.value))
  },
  testApi(event){
    dispatch(testApiFetch(event.target.value));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
