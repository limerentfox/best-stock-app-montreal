import React from "react";
import TagItem from "./TagItem";

const Tags = props => {
  return (
    <div className="tags-area">
      {props.tagName.map(n => (
        <div className="tag-item">{<TagItem name={n} />}</div>
      ))}
    </div>
  );
};

export default Tags;
