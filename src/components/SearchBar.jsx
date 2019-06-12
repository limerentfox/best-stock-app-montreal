import React from "react";
import { Provider } from "react-redux";
import Store from '../store';

const SearchBar = props => {
  return (
    <Provider store={Store}>
      <div className="search-bar-area">
        <input type="text" placeholder="Type to search..." />
      </div>
    </Provider>
  );
};

export default SearchBar;
