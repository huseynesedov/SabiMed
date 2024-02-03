import React from 'react';
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";

import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';

import Counter from '../sections/Counters';
import EmployersSection from '../sections/Employers';
import HealthcareSection from '../sections/Healthcare-Staffing';

const Home = () => {

  return (
    
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SabiMed - Home</title>
      </Helmet>

      <ScrollToTop smooth />
      <Navbar />

      <HealthcareSection />
      <Counter />

      <EmployersSection />

      <Footer />
    </>
  );
};
export default Home;