import React from 'react';
import './index.css';
import { Helmet } from "react-helmet";
import logo from './sabimedLogo.jpg'

import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';

import About from '../sections/About';


function Employers() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SabiMed - About</title>
        <link rel="canonical" href={logo} />
      </Helmet>

      <Navbar />
      <About />
      <Footer />
    </>
  );
}

export default Employers;