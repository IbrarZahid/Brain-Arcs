import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContactIndex from './ContactIndex';
import ContactMain from './ContactMain';
import Footer from '../Footer/Footer';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactMain />
      <ContactIndex />
      <Footer />
    </div>
  );
};

export default Contact;