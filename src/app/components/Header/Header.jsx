"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import './header.css'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });}

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePath(window.location.pathname);
    };

    handleRouteChange();

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);
  return (
    <header>
        <section className='desktop-nav'>
        <h2 className='title_banner'><a href='/'>SCM</a></h2>
        <nav>
            <Link href='/#profil'>Mon profil</Link>
            <Link href='/#experiences'>Expériences</Link>
            <Link href='/#projets'>Projets</Link>
            <Link href='/#contact'>Contactez-moi</Link>
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
            <li><Link href='/' className={activePath === '/#profil' ? 'active' : ''}onClick={closeMenu}>Mon profil</Link></li>
            <li><Link href='/#tatoueuse' className={activePath === '/#experiences' ? 'active' : ''}onClick={closeMenu}>Expériences</Link></li>
            <li><Link href='/soins' className={activePath === '/#projets' ? 'active' : ''}onClick={closeMenu}>Projets</Link></li>
            <li><Link href='/#contact' className={activePath === '/#contact' ? 'active' : ''}onClick={closeMenu}>Contactez-moi</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header