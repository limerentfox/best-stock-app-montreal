import React from 'react';

const SearchBarStockStatus = props => {
  return (
    <div className="searchBarStockStatus">
      <span>{props.stockStatusUnitPrice}</span>
      <span>{props.stockStatusIndexChange}</span>
      <span>{props.stockStatusPercentage}</span>
    </div>
  );
};

export default SearchBarStockStatus;
