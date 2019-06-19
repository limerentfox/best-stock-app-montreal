import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

const Graph = ({ data }) => {
  return (
    <div className="graph-area">
      <VictoryChart theme={VictoryTheme.material} width={900}>
        <VictoryLine
          data={data}
          style={{
            data: { stroke: 'F4F6F9' },
            parent: { border: '1px solid #F4F6F9' },
            labels: { fill: '#F4F6F9' },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;
