import React from 'react';
import { connect } from 'react-redux';

import Graph from './Graph';
import LatestNews from './LatestNews';
import {
  getError,
  getLoading,
  getTimeSeries,
  getTopNews,
} from '../../../reducers/reducer';
import AdaptiveLoader from '../loader/adaptiveLoader';

const MainBodyTopArea = ({ news, data, loading, error }) => {
  return (
    <div className="main-body-top-area">
      {loading && <AdaptiveLoader />}
      {error && <div>Error : {error}</div>}
      {data && !loading && <Graph data={prepData(data.fiveD)} />}
      {news && !loading && <LatestNews news={prepNews(news)} />}
    </div>
  );
};

const prepNews = news => {
  return news.map(n => {
    return (
      <div className="news" key={`news-${n.headline}`}>
        <span>{n.headline}</span>
        <span>{n.summary}</span>
      </div>
    );
  });
};

const prepData = data => {
  return data.map(d => {
    return { x: new Date(d.date).toDateString(), y: d.close };
  });
};

const mapStateToProps = state => ({
  data: getTimeSeries(state),
  news: getTopNews(state),
  error: getError(state),
  loading: getLoading(state),
});

export default connect(mapStateToProps)(MainBodyTopArea);
