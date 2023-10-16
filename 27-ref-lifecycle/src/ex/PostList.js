import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import axios from 'axios';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1> Post List</h1>
        <div className="postList">
          {/* 각 포스트를 PostItem 컴포넌트로 전달 */}
          {posts.length === 0 ? (
            <p className="loading">Loading...</p>
          ) : (
            posts.map((post) => <PostItem key={post.id} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
}
