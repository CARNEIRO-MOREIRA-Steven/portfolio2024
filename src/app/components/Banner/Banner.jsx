"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import './banner.css';

const Banner = () => {

  const [isVisible, setIsVisible] = useState(false);

  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const buttonControls = useAnimation();

  const sectionRef = useRef(null);

  const checkVisibility = () => {
    const section = sectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.top <= window.innerHeight * 0.8; 
      if (isInView) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    if (isVisible) {
      titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay : 0.5 } });
      subtitleControls.start({ opacity: 1, transition: { duration: 1, delay : 1 } });
      buttonControls.start({ opacity: 1, y: 0, transition: { duration: 1 , delay : 1.5 } });
    } else {
      titleControls.start({ opacity: 0, y: 20 });
      subtitleControls.start({ opacity: 0 });
      buttonControls.start({ opacity: 0, y: -75 });
    }
  }, [isVisible, titleControls, subtitleControls, buttonControls]);

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const targetSection = document.getElementById(id);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section ref={sectionRef} className="banner_container">
      <img className="image_background" src="./photodev.jpg" alt="background"/>
      <section className="banner_content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={titleControls}
          className="banner_title"
        >
          {"CARNEIRO MOREIRA Steven"}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={subtitleControls}
          className="banner_subtitle"
        >
          {"Développeur Web - Intégrateur"}
        </motion.h2>

        <motion.section
          initial={{ opacity: 0, y: -75 }}
          animate={buttonControls}
          className="banner_button"
        >
          <div className="link_button">
            <a
              className="button_profil"
              href="#profil"
              onClick={(e) => handleScrollToSection(e, "profil")}
            >
              Me découvrir
            </a>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
              </svg>
            </div>
          </div>
        </motion.section>
      </section>
    </section>
  );
};

export default Banner;
