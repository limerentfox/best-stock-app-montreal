import React from "react";

const MarketStatus = props => {
  return (
    <div className="marketStatus">
      <span>{props.marketStatusSymbol}</span>
      <span>{props.marketStatus}</span>
    </div>
  );
};

export default MarketStatus;
