"use client";

import './scroll.css';
import Banner from '../Banner/Banner';
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
          start: "top top", 
          end: () => `+=${section2.offsetWidth}`,
          pin: true, 
          scrub: 0.1,
        },
      });
    }
  }, []);
  return (
    <section>
      <section className="wrapper center">
        <section className="container no-overflow">
          <section className="content">
            <section className="section section1">
              <section className="panel">
                <Banner />
              </section>
            </section>

<section className="section section2" ref={section2Ref}>
  <section className="panels">
    <section className="panel"> <Profil /></section>
    <section className="panel"><Experiences/></section>
    <section className="panel"><Projets/></section>
  </section>
</section>

            <section className="section section3">
              <section className="panel">
                <h3>Section 3<br />Panel 1</h3>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Scroll;
