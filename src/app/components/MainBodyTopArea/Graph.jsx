import React from 'react';
import { connect } from 'react-redux';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

import { getTimeSeries, getLoading, getError } from '../../../reducers/selectors';
import AdaptiveLoader from '../loader/adaptiveLoader';

const Graph = props => {
  return (
    <>
      {props.loading && <AdaptiveLoader />}
      {props.timeSeries && !props.loading && (
        <div className="graph-area">
          <VictoryChart theme={VictoryTheme.material} width={900}>
            <VictoryLine
              data={extractClosePrice(props.timeSeries.fiveD)}
              style={{
                data: { stroke: 'F4F6F9' },
                parent: { border: '1px solid #F4F6F9' },
                labels: { fill: '#F4F6F9' },
              }}
            />
          </VictoryChart>
        </div>
      )}
      {props.error && <div>Error: {props.error} </div>}
    </>
  );
};

const extractClosePrice = data => {
  return data.map(d => {
    return { x: new Date(d.date).toDateString(), y: d.close };
  });
};

const mapStateToProps = state => ({
  timeSeries: getTimeSeries(state),
  loading: getLoading(state),
  error: getError(state),
});

export default connect(mapStateToProps)(Graph);
