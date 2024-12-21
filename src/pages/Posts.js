import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from '../components/Layout/Navbar';
import { OrbitProgress } from 'react-loading-indicators';
import SwimmerUI from './ShimmerUI';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      setPosts(prevPosts => [...prevPosts, ...response.data]);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      setHasMore(false);
    }
  };

  if (posts.length === 0) {
    return (
      <div>
       <SwimmerUI/>
      </div>
    );
    
  }

  return (
    <div>
      <Navbar />

      <InfiniteScroll
        dataLength={posts.length}
        next={() => setPage(prevPage => prevPage + 1)}
        hasMore={hasMore}
        loader={<h4 className='text-center'>
          <OrbitProgress variant="spokes" dense color="#ff5a43" size="medium" text="" textColor="" />
        </h4>}
        
      >
        <div>
          {posts.map(post => (
            <div key={post.id} style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
              <h2 className='text-lg font-bold'>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Posts;
