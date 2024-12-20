"use client";
import React from "react";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  const handleScrollToSection = (e, id) => {
    e.preventDefault();

    const targetSection = document.getElementById(id);

    if (targetSection) {
      const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      <aside className="nav">
        <h2 className="title_banner"><motion.a
            href="#banner"
            onClick={(e) => handleScrollToSection(e, "banner")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >SCM
          </motion.a></h2>
        <nav>
          <motion.a
            href="#banner"
            onClick={(e) => handleScrollToSection(e, "banner")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Accueil
          </motion.a>
          <motion.a
            href="#profil"
            onClick={(e) => handleScrollToSection(e, "profil")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Qui suis-je ?
          </motion.a>
          <motion.a
            href="#skills"
            onClick={(e) => handleScrollToSection(e, "skills")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#realisations"
            onClick={(e) => handleScrollToSection(e, "realisations")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projets
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, "contact")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact
          </motion.a>
        </nav>
      </aside>
      <img className='header_right_svg code' src='code-solid.svg'></img>
    </header>
  );
};

export default Header;
