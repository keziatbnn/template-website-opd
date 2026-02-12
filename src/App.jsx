import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/LandingPage/Navbar';
import AccessibilityWidget from './components/LandingPage/Accessibility';
import Hero from './components/LandingPage/Hero';
import Layanan from './components/LandingPage/Layanan';
import Artikel from './components/LandingPage/Artikel';
import Inovasi from './components/LandingPage/Inovasi';
import Footer from './components/Footer';
import Informasi from './components/Informasi';
import JenisLayanan from './components/Layanan/JenisLayanan'
import KomitmenPelayanan from './components/Layanan/KomitmenPelayanan'
import PusatBantuan from './components/Layanan/PusatBantuan'
import ProfilPPID from './components/ProfilPPID'
import Profil from './components/Profil'
import SKM from './components/SKM'


const LandingPage = () => (
  <>
    <Hero />
    <Layanan/>
    <Artikel/>
    <Inovasi/>
  </>
);

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-poppins bg-batik-pattern"> 
        <Navbar />
        <AccessibilityWidget />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/informasi" element={<Informasi />} />
            <Route path="/layanan/jenis" element={<JenisLayanan />} />
            <Route path="/layanan/komitmen" element={<KomitmenPelayanan />} />
            <Route path="/layanan/pusat" element={<PusatBantuan />} />
            <Route path="/profil-ppid" element={<ProfilPPID />}></Route>
            <Route path="/profil" element={<Profil />}></Route>
            <Route path="/skm" element={<SKM />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;