import React, { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const value = { posts, setPosts, comments, setComments };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};