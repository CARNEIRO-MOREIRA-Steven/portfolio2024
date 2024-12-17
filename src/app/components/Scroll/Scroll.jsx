"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import './scroll.css'
import Banner from '../Banner/Banner';
import Profil from '../Profil/Profil';
import Skills from '../Skills/Skills';
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
      >
        <Banner />
      </motion.section>

      <motion.section
        className='content_section'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Profil />
      </motion.section>

      <motion.section
      className='content_section'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Skills />
      </motion.section>

      <motion.section
      className='content_section'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Realisation />
      </motion.section>

      <motion.section
      className='content_section'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Contact />
      </motion.section>

      <div className="progress"></div>
    </main>
  );
}

export default Scroll;
