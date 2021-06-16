import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return { ...state, loading: true };
    case 'POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload, error: '' };
    case 'POSTS_FAIL':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
    posts: [],
  });
  const { loading, error, posts } = state;
  const loadPosts = async () => {
    dispatch({ type: 'POSTS_REQUEST' });
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      dispatch({ type: 'POSTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'POSTS_FAIL', payload: error.message });
    }
  };
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="blog">
      <div className="content">
        <h1>Posts</h1>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error:{error}</div>
        ) : posts.length === 0 ? (
          <div>No Posts Found</div>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
        <ul>
          <li>
            <h2>Post 1</h2>
            <p>post 1 content</p>
          </li>
          <li>
            <h2>Post 2</h2>
            <p>post 2 content</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
