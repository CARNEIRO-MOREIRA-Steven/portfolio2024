"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./scroll.css"; 
import Banner from "../Banner/Banner";
import Profil from "../Profil/Profil";
import Skills from "../Skills/Skills";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    gsap.utils.toArray(sections).forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true, 
        pinSpacing: false, 
        snap: {
          snapTo: 1, 
          duration: 0.5,
          ease: "power2.inOut",
        },
      });

      gsap.from(section.querySelector(".wrapper-inner"), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "top top",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="app-container">
      <Section id="banner">
        <Banner />
      </Section>
      <Section id="profil">
        <Profil />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
    </div>
  );
};

const Section = ({ id, children }) => (
  <section id={id} className="section">
    <div className="wrapper-outer">
      <div className="wrapper-inner">{children}</div>
    </div>
  </section>
);

export default App;
