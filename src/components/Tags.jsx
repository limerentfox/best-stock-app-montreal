import React from "react";
import TagItem from "./TagItem";

const Tags = props => {
  return (
    <div className="tags-area">
      {props.tagsList.map(n => (
        <TagItem name={n} />
      ))}
    </div>
  );
};

export default Tags;
