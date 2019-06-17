import React from 'react';
import TagItem from './TagItem';

const Tags = props => {
  return (
    <div className="tags-area">
      {props.tagsList.map(n => (
        <TagItem tagName={n} />
      ))}
    </div>
  );
};

export default Tags;
