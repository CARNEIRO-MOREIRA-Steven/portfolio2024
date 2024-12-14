"use client"
import './scroll.css';
import Banner from '../Banner/Banner';
import Profil from '../Profil/Profil';
import Skills from '../Skills/Skills';
import React, { useEffect } from "react";
import gsap from "gsap";

const App = () => {
  useEffect(() => {
    let sections = document.querySelectorAll(".section");
    let currentIndex = -1;
    let animating = false;

    const directions = ['left', 'right', 'up', 'down'];

    function calculateDirection(currentIndex, targetIndex) {
      const sequenceIndex = (targetIndex - currentIndex + sections.length) % sections.length % 4;
      return directions[sequenceIndex];
    }

    function animateSection(targetIndex, direction) {
      if (animating || targetIndex === currentIndex) return;
      animating = true;

      const targetSection = sections[targetIndex];
      let animationProps = {};

      switch (direction) {
        case 'left': animationProps = { x: '-100%', autoAlpha: 0 }; break;
        case 'right': animationProps = { x: '100%', autoAlpha: 0 }; break;
        case 'up': animationProps = { y: '-100%', autoAlpha: 0 }; break;
        case 'down': animationProps = { y: '100%', autoAlpha: 0 }; break;
      }

      if (currentIndex >= 0) {
        const currentSection = sections[currentIndex];
        gsap.to(currentSection, { ...animationProps, autoAlpha: 0, duration: 1, ease: "power2.inOut" });
      }

      gsap.set(targetSection, { x: 0, y: 0, autoAlpha: 0 });

      gsap.to(targetSection, { x: 0, y: 0, autoAlpha: 1, duration: 1, ease: "power2.inOut", 
        onComplete: () => {
          animating = false;
          currentIndex = targetIndex; 
        }
      });
    }

    window.addEventListener('wheel', (event) => {
      if (animating) return;
      const direction = event.deltaY > 0 ? 'down' : 'up';
      const targetIndex = (currentIndex + (direction === 'down' ? 1 : -1) + sections.length) % sections.length;
      animateSection(targetIndex, calculateDirection(currentIndex, targetIndex));
    });

    document.querySelectorAll("nav a").forEach((a, index) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = a.getAttribute('href').replace('#', '');
        const targetSection = Array.from(sections).find((section) => section.id === targetId);
        const targetIndex = Array.from(sections).indexOf(targetSection);
        animateSection(targetIndex, calculateDirection(currentIndex, targetIndex));
      });
    });

    animateSection(0, 'right');
  }, []);

  return (
    <div className="app-container">
      <Section id="banner" title="Dream Big" >
        <Banner />
      </Section>
      <Section id="profil" title="Dream Big" >
        <Profil />
      </Section>
      <Section id="skills" title="Dream Big" >
        <Skills />
      </Section>
    </div>
  );
};

const Section = ({ id, children }) => {
  return (
    <section id={id} className="section">
      <div className="wrapper-outer">
        <div className="wrapper-inner">
          {children}
        </div>
      </div>
    </section>
  );
};

export default App;
