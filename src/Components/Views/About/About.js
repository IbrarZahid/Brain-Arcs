import React from 'react';
import Footer from '../Footer/Footer';
import IntrestingFect from '../home/IntrestingFect';
import Providing from '../home/Providing';
import Sponserd from '../home/Sponserd';
import Navbar from '../Navbar/Navbar';
import AboutMain from './AboutMain';

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutMain />
      <Providing />
      <IntrestingFect />
      <Sponserd />
      <Footer />
    </div>
  );
};

export default About;