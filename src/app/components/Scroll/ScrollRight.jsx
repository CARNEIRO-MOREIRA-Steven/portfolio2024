"use client"

import './scrollright.css';
import Profil from '../Profil/Profil';
import ProfilHobbie from '../Profil/ProfilHobbie';
import ProfilJobs from '../Profil/ProfilJobs';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRight = () => {
  const section2Ref = useRef(null);

  useEffect(() => {
    const section2 = section2Ref.current;
    const panels = section2.querySelector(".panels");

    if (section2 && panels) {
      const panelCount = panels.children.length;

      gsap.to(panels, {
        xPercent: -100 * (panelCount - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section2,
          start: "top top", 
          end: () => `+=${section2.offsetWidth}`,
          pin: true, 
          markers: true,
          scrub: 0.05,
          snap: {
            snapTo: 1 / (panelCount - 1),  // Assure que le défilement s'arrête sur chaque section
            ease: "power1.inOut",  // Effet de transition plus fluide
          },
        },
      });
    }
  }, []);
  return (
            <section className="section section2" id="section2" ref={section2Ref}>
              <img className='section2_background' src='3213337.jpg'></img>
              <section className="panels">
                <section className="panel"><Profil/></section>
                <section className="panel"><ProfilJobs/></section>
                <section className="panel hobbies"><ProfilHobbie /></section>
              </section>
            </section>
  );
};

export default ScrollRight;
