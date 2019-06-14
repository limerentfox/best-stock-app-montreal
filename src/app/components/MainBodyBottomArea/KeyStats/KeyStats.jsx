import React from "react";
import KeyStatsItem from "./KeyStatsItem";

const generateKeyStatsItem = items =>
  items.map(keyStatItem => (
    <KeyStatsItem
      keyStatItemName={keyStatItem.name}
      keyStatItemValue={keyStatItem.value}
    />
  ));

const KeyStats = props => {
  return (
    <div className="key-stats">
      {generateKeyStatsItem(props.keyStatsListItems)}
    </div>
  );
};

export default KeyStats;
