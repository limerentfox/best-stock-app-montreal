import React from "react";

const NewsItem = props => {
  return (
    <div className="newsItem">
      <span>{props.newsItemContent}</span>
      <span>{props.newsItemTimestamp}</span>
    </div>
  );
};

export default NewsItem;
