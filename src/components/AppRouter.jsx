import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate replace to="/error" />} />
      <Route path="/" element={<Navigate replace to="/posts" />} />
    </Routes>
  );
};

export default AppRouter;
