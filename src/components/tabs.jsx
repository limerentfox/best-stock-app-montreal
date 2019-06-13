import React from "react";
import TabItem from './TabItem';

const generateTabItems = items => {
    return items.map((tabName) => <div className="tab-item">{<TabItem tabName={tabName}/>}</div>);
}

const Tabs = props => {
  return <div className="tabs-area">{generateTabItems(props.tabListNames)}</div>;
};

export default Tabs;
