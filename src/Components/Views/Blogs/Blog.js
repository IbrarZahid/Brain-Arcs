import React from 'react';
import Navbar from '../Navbar/Navbar';
import Blogsindex from './Blogsindex';
import BlogsMain from './BlogsMain';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogsMain/>
      <Blogsindex />
    </div>
  );
};

export default Blog;