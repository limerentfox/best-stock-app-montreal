import React from 'react';
import { connect } from 'react-redux';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

import { getTimeSeries } from '../../../reducers/reducer';

const Graph = props => {
  const data = props.timeSeries
    ? extractClosePrice(props.timeSeries.fiveD)
    : null;
  return (
    <div className="graph-area">
      {props.timeSeries ? (
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
      ) : null}
    </div>
  );
};

const extractClosePrice = data => {
  return data.map(d => {
    return { x: new Date(d.date).toDateString(), y: d.close };
  });
};

const mapStateToProps = state => ({
  timeSeries: getTimeSeries(state),
});

export default connect(mapStateToProps)(Graph);
