import React from 'react';

import Graph from './Graph';
import LatestNews from './LatestNews';

const MainBodyTopArea = () => {
  return (
    <div className="main-body-top-area">
      <Graph />
      <LatestNews />
    </div>
  );
};

export default MainBodyTopArea;
