import React from 'react';

export default function MasonryPost({ post, tagsOnTop }) {
  const style = {
    backgroundImage: `url("${require(`../../assets/images/${post.image}`)}`,
  };

  return (
    <a href={post.link} className="masonry-post overlay" style={style}>
      <div className="image-text">
        <h2 className="image-title">{post.title}</h2>
      </div>
    </a>
  );
}
