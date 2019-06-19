import React from 'react';
import { connect } from 'react-redux';

import { getTopNews, getLoading, getError } from '../../../reducers/selectors';
import AdaptiveLoader from '../loader/adaptiveLoader';

const LatestNews = props => {
  return (
    <>
      {props.loading && <AdaptiveLoader />}
      <div className="news-area">
        {props.topNews && !props.loading && generateNews(props.topNews)}
      </div>
      {props.error && <div>Error: {props.error}</div>}
    </>
  );
};

const generateNews = news => {
  return news.map(n => {
    return (
      <div className={n.headline} key={`headline-${n.headline}`}>
        <span className="headline">{n.headline}</span>
        <span className="summary">{n.summary}</span>
      </div>
    );
  });
};

const mapStateToProps = state => ({
  topNews: getTopNews(state),
  loading: getLoading(state),
  error: getError(state),
});

export default connect(mapStateToProps)(LatestNews);
