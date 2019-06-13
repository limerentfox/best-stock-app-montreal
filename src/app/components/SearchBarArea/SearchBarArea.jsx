import React from "react";
import "./SearchBarArea.css";

import SearchBar from "./SearchBar/SearchBar";
import Tags from "./Tags/Tags";
import SearchBarMarketStatus from "./SearchBarMarketStatus";
import RealTimeStatus from "./RealTimeStatus";
import SearchBarStockStatus from "./SearchBarStockStatus";

const SearchBarArea = props => {
  return (
    <div className="searchBar-area">
      <div className="searchBar-area-top">
        <SearchBar />
        <SearchBarMarketStatus
          stockStatusUnitPrice="$160.03"
          stockStatusIndexChange="arrow 2.94"
          stockStatusPercentage="1.88%"
        />
      </div>
      <div className="searchBar-area-bottom">
        <Tags tagsList={["NASDAQ", "Technology", "USD"]} />
        <div className="market-status-area">
          <RealTimeStatus currentTime="12:00" />
          <SearchBarStockStatus marketStatusSymbol="soleil" marketStatus="Open" />
        </div>
      </div>
    </div>
  );
};

export default SearchBarArea;
