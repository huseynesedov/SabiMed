import React from 'react';
import Sss from '../sections/Question/sss';
import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';
import { Helmet } from 'react-helmet';

function Question() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SabiMed - Question</title>
      </Helmet>

      <Navbar />
      <Sss />
      <Footer />
    </>
  );
}

export default Question;
