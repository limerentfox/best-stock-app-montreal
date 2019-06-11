import React from "react";

export default class SearchBar extends React.Component {

    constructor(){
        this.state = {
         dummy: null    
        }
    }

  render() {
    return (
      <div className="search-bar-area">
        <input type="text" placeholder="Type to search..." />
      </div>
    );
  }
}