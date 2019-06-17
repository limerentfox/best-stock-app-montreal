import React from 'react';

const LatestNewsItem = props => {
  return (
    <div className="latestNewsItem">
      <span>{props.newsItemContent}</span>
      <span>{props.newsItemTimestamp}</span>
    </div>
  );
};

export default LatestNewsItem;
