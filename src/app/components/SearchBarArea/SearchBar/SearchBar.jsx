import React from "react";
import { connect } from "react-redux";
import {setSearchTerm, testApiFetch} from '../../../../actions/searchActionCreators';

export const SearchBar = props => {
  return (
    <div className="search-bar-area">
      <button type='submit' onClick={props.testApi(props.searchTerm)}>Submit</button>
      <input type="text" placeholder="Type to search..." value={props.searchTerm} onChange={props.testSearchTerm}/>
      <div>{props.searchTerm}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
  testSearchTerm: event => {
    dispatch(setSearchTerm(event.target.value));
    console.log("dispatching test search term");},
  testApi: value => {
    dispatch(testApiFetch(value));
    console.log("dispatching test api fetch");
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
