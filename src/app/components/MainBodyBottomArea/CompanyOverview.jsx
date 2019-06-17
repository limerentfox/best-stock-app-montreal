import React from 'react';

const CompanyOverview = props => {
  return (
    <div clasName="company-overview-area">
      <h3 className="company-name">{props.companyName}</h3>
      <h5 className="company-link">
        <a href={props.companyLink}>{props.companyLink}</a>
      </h5>
      <p className="company-description">{props.companyDescription}</p>
    </div>
  );
};

export default CompanyOverview;
