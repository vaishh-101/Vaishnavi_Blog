// src/PostDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from './BlogContext';

function PostDetail() {
  const { id } = useParams();
  const { posts } = useBlogContext();
  const post = posts[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
