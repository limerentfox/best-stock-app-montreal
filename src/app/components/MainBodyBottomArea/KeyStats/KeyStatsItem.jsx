import React from "react";

const KeyStatsItem = props => {
  return (
    <div className="keystat-item">
      <span className="stat-name">{props.keyStatItemName}</span>
      <span className="stat-value">{props.keyStatItemValue}</span>
    </div>
  );
};

export default KeyStatsItem;
