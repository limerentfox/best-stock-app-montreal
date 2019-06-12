import React from "react";
import { connect } from "react-redux";
import {setSearchTerm, getMarketRealtimeStatusAPI} from '../actions/searchActionCreators';

export const SearchBar = props => {
  return (
    <div className="search-bar-area">
      <input type="text" placeholder="Type to search..." value={props.searchTerm} onChange={props.testSearchTerm}/>
      <button type='submit' onClick={props.testSubmit}>Submit</button>
      <div>{props.searchTerm}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  testSearchTerm(event){
    console.log("yoooo im dispatching " + event.target.value);
    dispatch(setSearchTerm(event.target.value))
  },
  testSubmit(){
    console.log("ayyyy let's find this stock!");
    dispatch(getMarketRealtimeStatusAPI(ownProps.searchTerm));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
