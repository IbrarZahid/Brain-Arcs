import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import BlogsMain from './BlogsMain';
import BlogsShow from './BlogsShow';

const BlogsShowFeed = () => {
  return (
    <div>
      <Navbar />
      <BlogsMain />
      <BlogsShow />
      <Footer />
    </div>
  );
};

export default BlogsShowFeed;