import React from "react";

export const BlogItem = ({ post, className, index }) => {
    
  const { title, body } = post;

  return (
    <div className={className} key={index}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
