import React from 'react';
import KeyStats from './KeyStats/KeyStats';
import CompanyOverview from './CompanyOverview';
import TopPeers from './TopPeers/TopPeers';

const tempKeyStateListItems = [
  {
    name: 'stat1',
    value: 1234,
  },
  {
    name: 'stat2',
    value: 2345,
  },
];

const MainBodyBottomArea = props => {
  return (
    <div className="main-body-bottom-area">
      <KeyStats keyStatsListItems={tempKeyStateListItems} />
      <CompanyOverview
        companyName={'Some company'}
        companyLink={'some link'}
        companyDescription={'some description'}
      />
      <TopPeers topPeersList={['MSFT', 'NOK', 'IBM', 'BBRY', 'HPQ']} />
    </div>
  );
};

export default MainBodyBottomArea;
