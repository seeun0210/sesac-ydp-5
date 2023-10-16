import React from 'react';

export default function PostItem({ post }) {
  return (
    <div className="postItem">
      <span className="postId">No. {post.id}</span>
      <span className="postTitle"> - {post.title}</span>
      <p className="postBody">
        {post.body.length > 150 ? post.body.slice(0, 150) + '...' : post.body}
      </p>
    </div>
  );
}
