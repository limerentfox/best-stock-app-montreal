import React from "react";

import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";
import MarketStatus from "./components/marketStatus";
import RealTimeStatus from "./components/realTimeStatus";

const SearchBarArea = props => {
  return (
    <div className="searchBar-area">
      <SearchBar />
      <Tags tagsList={["NASDAQ", "Technology", "USD"]} />
      <RealTimeStatus currentTime="12:00" />
      <MarketStatus marketStatusSymbol="soleil" marketStatus="Open" />
    </div>
  );
};

export default SearchBarArea;
