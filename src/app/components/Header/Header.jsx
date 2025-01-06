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
      <motion.a
            href="#banner"
            onClick={(e) => handleScrollToSection(e, "banner")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
        <img className="title_banner"
        src="logo_scm.png">
          </img></motion.a>
        <nav>
        <motion.a
            href="#banner"
            onClick={(e) => handleScrollToSection(e, "banner")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
        <img className="icon_banner"
        src="house-solid.svg">
          </img></motion.a>
          <motion.a
            href="#profil"
            onClick={(e) => handleScrollToSection(e, "profil")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
        <img className="icon_banner"
        src="user-solid.svg">
          </img></motion.a>
          <motion.a
            href="#skills"
            onClick={(e) => handleScrollToSection(e, "skills")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
        <img className="icon_banner"
        src="gears-solid.svg">
          </img></motion.a>
          <motion.a
            href="#realisations"
            onClick={(e) => handleScrollToSection(e, "realisations")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
        <img className="icon_banner"
        src="laptop-code-solid.svg">
          </img></motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, "contact")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
        <img className="icon_banner"
        src="address-card-solid.svg">
          </img></motion.a>
        </nav>
      </aside>
      <img className='header_right_svg code' src='code-solid.svg'></img>
    </header>
  );
};

export default Header;
