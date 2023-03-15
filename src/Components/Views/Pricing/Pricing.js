import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import MainPricing from './MainPricing';
import PricingDetails from './PricingDetails';

const Princing = () => {
  return (
    <div>
      <Navbar />
      <MainPricing />
      <PricingDetails />
      <Footer />
    </div>
  );
};

export default Princing;