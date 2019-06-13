import React from "react";
import TopPeerItem from "./TopPeerItem";

const generateTopPeers = items => 
   items.map((topPeerName) =>
      <TopPeerItem topPeerName={topPeerName}/>
   );

const TopPeers = props => {
  return <div className="top-peers">{generateTopPeers(props.topPeersList)}</div>;
};

export default TopPeers;
