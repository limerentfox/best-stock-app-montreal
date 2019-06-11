import React from "react";

const KeyStatsItem = props => {
  return (
    <div className="keystat-item">
      <span className="stat-name">{props.statName}</span>
      <span className="stat-value">{props.statValue}</span>
    </div>
  );
};

export default KeyStatsItem;
