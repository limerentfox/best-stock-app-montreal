import React from "react";
import "./css/SearchBarArea.css";

import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";
import MarketStatus from "./components/marketStatus";
import RealTimeStatus from "./components/realTimeStatus";
import StockStatus from "./components/stockStatus";

const SearchBarArea = props => {
  return (
    <div className="searchBar-area">
      <div className="searchBar-area-top">
        <SearchBar />
        <StockStatus
          stockStatusUnitPrice="$160.03"
          stockStatusIndexChange="arrow 2.94"
          stockStatusPercentage="1.88%"
        />
      </div>
      <div className="searchBar-area-bottom">
        <Tags tagsList={["NASDAQ", "Technology", "USD"]} />
        <div className="market-status-area">
          <RealTimeStatus currentTime="12:00" />
          <MarketStatus marketStatusSymbol="soleil" marketStatus="Open" />
        </div>
      </div>
    </div>
  );
};

export default SearchBarArea;
