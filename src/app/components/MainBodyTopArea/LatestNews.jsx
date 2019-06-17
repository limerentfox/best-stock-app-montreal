import React from 'react';
import { connect } from 'react-redux';
import { getTopNews } from '../../../reducers/reducer';

const LatestNews = props => {
  return (
    <div className="news-area">
      {props.topNews ? generateNews(props.topNews) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  topNews: getTopNews(state),
});

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

export default connect(mapStateToProps)(LatestNews);
