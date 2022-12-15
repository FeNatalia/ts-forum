import React, { useEffect, useContext } from 'react';
import ListForm from '../components/PostForm';
import { getPosts } from '../api';
import PostCard from '../components/PostCard';
import { DataContext } from '../state/DataProvider';
import { PostItem } from '../ts-utils/interfaces';

const Home = () => {
  const {posts, setPosts} = useContext(DataContext);

  useEffect(() => {
      getPosts()
        .then(res => {
          setPosts(res);
        });
  }, [setPosts]);

  return (
    <div className="page-wrapper">
      <header className="header">
        <h1 className="header__title">TS Forum App</h1>
        <h2 className="header__subtitle">You can post here!</h2>
      </header>
      <ListForm />
      {posts.length === 0 ? (
          <p className='message-warning'>No posts found! Add by filling the form above</p>
        ) : (
          posts.map((post: PostItem, index: React.Key | null | undefined) => (
            <PostCard key={index} post={post} index={index}/>
         ))
        )}
    </div>
  );
}

export default Home;
