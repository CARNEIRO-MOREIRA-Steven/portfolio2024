"use client";

import './scroll.css'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import Banner from '../Banner/Banner';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Scroll = () => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    console.clear();

    const container = containerRef.current;
    const sections = gsap.utils.toArray(".section");
    const tl = gsap.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
        markers: true
      }
    });

    // Animation des sections
    sections.forEach((section, i) => {
      const panels = gsap.utils.toArray(".panel", section);
      tl.to(
        section,
        {
          y: section.clientHeight - section.scrollHeight,
          duration: panels.length * 0.5
        },
        "section-" + i 
      );
      if (sections[i + 1]) {
        tl.to(".content", {
          xPercent: -100 * (i + 1)
        });
      }
    }
  );

  }, []);

  return (
    <section>
      <div ref={wrapperRef} className="wrapper center">
        <div ref={containerRef} className="container no-overflow">
          <div className="content">
            <section className="section section1">
            <div className="panel">
                <Banner />
              </div>
              <div className="panel">
                <h3>Section 1<br />Panel 3</h3>
              </div>
            </section>

            <section className="section section2">
              <div className="panel">
                <h3>Section 2<br />Panel 1</h3>
              </div>
              <div className="panel">
                <h3>Section 2<br />Panel 2</h3>
              </div>
              <div className="panel">
                <h3>Section 2<br />Panel 3</h3>
              </div>
            </section>

            <section className="section section3">
              <div className="panel">
                <h3>Section 3<br />Panel 1</h3>
              </div>
              <div className="panel">
                <h3>Section 3<br />Panel 2</h3>
              </div>
              <div className="panel">
                <h3>Section 3<br />Panel 3</h3>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scroll;
