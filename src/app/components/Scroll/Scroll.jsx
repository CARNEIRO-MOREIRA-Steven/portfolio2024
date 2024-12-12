"use client"

import './scroll.css';
import Profil from '../Profil/Profil';
import Projets from '../Projets/Projets';
import Experiences from '../Experiences/Experiences';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
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
          start: "top+=5 top", 
          end: () => `+=${section2.offsetWidth}`,
          pin: true, 
          markers: true,
          scrub: 0.1,
        },
      });
    }
  }, []);
  return (
            <section className="section section2" ref={section2Ref}>
              <section className="panels">
                <section className="panel"> <Profil /></section>
                <section className="panel"><Experiences/></section>
                <section className="panel"><Projets/></section>
              </section>
            </section>
  );
};

export default Scroll;
