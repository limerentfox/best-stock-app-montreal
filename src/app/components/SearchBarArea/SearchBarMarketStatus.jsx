import React from 'react';

const SearchBarMarketStatus = props => {
  return (
    <div className="searchBarMarketStatus">
      <span>{props.marketStatusSymbol}</span>
      <span>Market{props.marketStatus}</span>
    </div>
  );
};

export default SearchBarMarketStatus;
