"use client";

import './scrollbottom.css';
import Profil from '../Profil/Profil';
import Projets from '../Projets/Projets';
import Competences from '../Competences/Competences';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollBottom= () => {
  const section2Ref = useRef(null);

  useEffect(() => {
    const section2 = section2Ref.current;
    const panels = section2.querySelector(".panels_bottom");

    if (section2 && panels) {
      const panelCount = panels.children.length;

      gsap.to(panels, {
        yPercent: -100 * (panelCount - 1), // Déplacement vertical
        ease: "none",
        scrollTrigger: {
          trigger: section2,
          start: "top top",
          end: () => `+=${section2.offsetHeight}`, // Hauteur totale
          pin: true,
          markers: true,
          scrub: 0.1,
        },
      });
    }
  }, []);

  return (
    <section className="section section2" ref={section2Ref}>
      <section className="panels_bottom">
        <section className="panel"> <Competences/></section>
        <section className="panel"><Competences/></section>
        <section className="panel"><Competences/></section>
      </section>
    </section>
  );
};

export default ScrollBottom;
