import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './App';
import About from './Pages/About/index.jsx';
import Expertise from './Pages/Expertise/index.jsx';
import Question from './Pages/Question/index.jsx';
import Contact from './Pages/Contact/contact.jsx';

import Arm from './Pages/Jobs/arm.jsx';
import Audio from './Pages/Jobs/audio.jsx';
import Baby from './Pages/Jobs/baby.jsx';
import Bile from './Pages/Jobs/bile.jsx';
import Bone from './Pages/Jobs/bone.jsx';
import Breast from './Pages/Jobs/breast.jsx';
import Cerebral from './Pages/Jobs/cerebral.jsx';
import Ear from './Pages/Jobs/ear.jsx';
import Eye from './Pages/Jobs/eye.jsx';
import Hernia from './Pages/Jobs/hernia.jsx';
import Kidney from './Pages/Jobs/kidney.jsx';
import Liver from './Pages/Jobs/liver.jsx';
import Neurology from './Pages/Jobs/neurology.jsx';
import Neurosurgery from './Pages/Jobs/neurosurgery.jsx';
import Orthopedics from './Pages/Jobs/orthopedics.jsx';
import Pancreas from './Pages/Jobs/pancreas.jsx';
import Pelvis from './Pages/Jobs/pelvis.jsx';
import Prostat from './Pages/Jobs/prostat.jsx';
import Size from './Pages/Jobs/size.jsx';
import Speech from './Pages/Jobs/speech.jsx';
import Stomach from './Pages/Jobs/stomach.jsx';
import Thyroid from './Pages/Jobs/thyroid.jsx';

import './Laungage/i18n.js'

import { I18nextProvider } from "react-i18next"
import i18next from 'i18next';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Index() {
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Expertise" element={<Expertise />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Arm" element={<Arm />} />
          <Route path="/Audio" element={<Audio />} />
          <Route path="/Baby" element={<Baby />} />
          <Route path="/Bile" element={<Bile />} />
          <Route path="/Bone" element={<Bone />} />
          <Route path="/Breast" element={<Breast />} />
          <Route path="/Cerebral" element={<Cerebral />} />
          <Route path="/Ear" element={<Ear />} />
          <Route path="/Eye" element={<Eye />} />
          <Route path="/Hernia" element={<Hernia />} />
          <Route path="/Kidney" element={<Kidney />} />
          <Route path="/Liver" element={<Liver />} />
          <Route path="/Neurology" element={<Neurology />} />
          <Route path="/Neurosurgery" element={<Neurosurgery />} />
          <Route path="/Orthopedics" element={<Orthopedics />} />
          <Route path="/Pancreas" element={<Pancreas />} />
          <Route path="/Pelvis" element={<Pelvis />} />
          <Route path="/Prostat" element={<Prostat />} />
          <Route path="/Size" element={<Size />} />
          <Route path="/Speech" element={<Speech />} />
          <Route path="/Stomach" element={<Stomach />} />
          <Route path="/Thyroid" element={<Thyroid />} />

        </Routes>
        <ScrollToTop />

      </BrowserRouter>
    </I18nextProvider>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
AOS.init();
