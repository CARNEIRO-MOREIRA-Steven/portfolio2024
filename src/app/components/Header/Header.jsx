"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollToSection = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActivePath(`#${id}`);
    closeMenu();
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePath(window.location.hash);
    };

    handleRouteChange();

    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  return (
    <header>
      <section className='desktop-nav'>
        <h2 className='title_banner'><a href='/'>SCM</a></h2>
        <nav>
          <a onClick={() => handleScrollToSection('profil')}>Qui suis-je ?</a>
          <a onClick={() => handleScrollToSection('competences')}>Compétences</a>
          <a onClick={() => handleScrollToSection('projets')}>Projets</a>
          <a onClick={() => handleScrollToSection('contact')}>Contactez-moi</a>
        </nav>
      </section>
      <div className="mobile-menu">
        <h2 className='title_banner'><a href='/'>SCM</a></h2>
        <div id="menuToggle">
          <label htmlFor="menu"></label>
          <input id='menu' name="menu" type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><a onClick={() => handleScrollToSection('profil')} className={activePath === '#profil' ? 'active' : ''}>Qui suis-je ?</a></li>
            <li><a onClick={() => handleScrollToSection('competences')} className={activePath === '#competences' ? 'active' : ''}>Compétences</a></li>
            <li><a onClick={() => handleScrollToSection('projets')} className={activePath === '#projets' ? 'active' : ''}>Projets</a></li>
            <li><a onClick={() => handleScrollToSection('contact')} className={activePath === '#contact' ? 'active' : ''}>Contactez-moi</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
