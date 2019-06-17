import React from 'react';

const FavoriteItem = props => {
  return (
    <div className="favorite-item">
      <strong className="company-index-name">{props.companyIndex}</strong>
      <span className="company-money-value">{props.companyValue}</span>
      <span className="company-progress-ratio">
        {props.companyProgressRatio}
      </span>
      <span className="company-progress-percentage">
        {props.companyProgressPercentage}
      </span>
    </div>
  );
};

export default FavoriteItem;
