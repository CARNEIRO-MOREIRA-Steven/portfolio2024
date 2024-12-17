"use client";
import React from "react";
import "./header.css";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Header = () => {
  const handleScrollToSection = (e, id) => {
    e.preventDefault(); // Bloque le comportement par défaut

    const targetSection = document.getElementById(id);

    if (targetSection) {
      // Désactive les épinglages avant de scroller
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Animation fluide pour le scroll
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: targetSection, offsetY: 0 },
        ease: "power2.inOut",
        onComplete: () => {
          // Réinitialise les ScrollTriggers après l'animation
          ScrollTrigger.refresh();
        },
      });
    }
  };

  return (
    <header>
      <aside className="nav">
        <h2 className="title_banner">SCM</h2>
        <nav>
          <a
            href="#banner"
            onClick={(e) => handleScrollToSection(e, "banner")}
          >
            Accueil
          </a>
          <a
            href="#profil"
            onClick={(e) => handleScrollToSection(e, "profil")}
          >
            Qui suis-je ?
          </a>
          <a
            href="#skills"
            onClick={(e) => handleScrollToSection(e, "skills")}
          >
            Skills
          </a>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
