import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import IntrestingFect from './IntrestingFect';
import Main from './Main';
import Pricing from './Pricing';
import Projects from './Projects';
import Providing from './Providing';
import Sponserd from './Sponserd';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Providing />
      <IntrestingFect />
      <Projects />
      <Pricing />
      <Sponserd />
      <Footer />
    </div>
  );
};

export default Home;