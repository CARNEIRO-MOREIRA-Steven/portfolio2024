"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import './scroll.css'
import Banner from '../Banner/Banner';
import Profil from '../Profil/Profil';
import Avis from '../Avis/Avis';
import Realisation from '../Realisations/Realisation';
import Contact from '../Contact/Contact';
const Scroll = () => {
  return (
    <main className='scroll_section'>
      <motion.section
        className='content_section'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        id='banner'
      >
        <Banner />
      </motion.section>

      <motion.section
        className='content_section'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        id='profil'
      >
        <Profil />
      </motion.section>

      <motion.section
      className='content_section'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        id='avis'
      >
        <Avis />
      </motion.section>

      <motion.section
      className='content_section'
      defer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        id='realisations'
      >
        <Realisation />
      </motion.section>

      <motion.section
      className='content_section'
      defer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        id='contact'
      >
        <Contact />
      </motion.section>

      <div className="progress"></div>
    </main>
  );
}

export default Scroll;
