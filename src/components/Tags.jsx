import React from "react";
import TagItem from "./tagItem";

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
