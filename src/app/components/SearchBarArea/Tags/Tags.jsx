import React from 'react';
import TagItem from './TagItem';
import { connect } from 'react-redux';
import { getCompanyOverviewTags } from '../../../../reducers/selectors';

const Tags = props => {
  return (
    <div>
      {props.tagsList !== undefined &&
        props.tagsList.map(n => <TagItem tagName={n} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  tagsList: getCompanyOverviewTags(state),
});

export default connect(mapStateToProps)(Tags);
