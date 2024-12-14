"use client"
import React from 'react';
import './header.css';

const Header = () => {

  const handleScrollToSection = (e, id) => {
    e.preventDefault(); 

    const targetSection = document.getElementById(id);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',  
      });
    }

    setActivePath(`#${id}`);
    closeMenu();
  };

  return (
    <header>
      <section className='nav'>
        <h2 className='title_banner'>SCM</h2>
        <nav>
          <a href="#banner">Accueil</a>
          <a href="#profil">Qui suis-je ?</a>
          <a href="#skills">Skills</a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
