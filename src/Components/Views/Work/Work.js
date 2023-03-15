import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Projects from './Projects';
import WorkMain from './WorkMain';

const Work = () => {
  return (
    <div>
      <Navbar />
      <WorkMain />
      <Projects />
      <Footer />
    </div>
  );
};

export default Work;