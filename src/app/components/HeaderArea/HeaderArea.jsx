import React from 'react';
import Tabs from './Tabs/Tabs';

const HeaderSection = props => {
  return (
    <div className="header-section">
      {/* <img atl='ADAPTIVE LOGO'/> */}
      <Tabs tabListNames={['Quotes', 'Markets', 'Watchlists']} />
    </div>
  );
};

export default HeaderSection;
