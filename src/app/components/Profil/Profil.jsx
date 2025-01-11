"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import './profil.css';
import Skills from "../Skills/Skills";

const Profil = () => {
  const [isVisible, setIsVisible] = useState(false);

  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const descriptionControls = useAnimation();
  const jobDetailsControls = useAnimation();
  const hobbiesControls = useAnimation();
  const imageControls = useAnimation();
  const hobbiesTitle = useAnimation();
  const listeHobbies1 = useAnimation();
  const listeHobbies2 = useAnimation();
  const listeHobbies3 = useAnimation();
  const manetteHobbies = useAnimation();
  const pcHobbies = useAnimation();


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
      titleControls.start({ opacity: 1, transition: { duration: 1.5 } });
      subtitleControls.start({ opacity: 1, x: 0, transition: { duration: 1, delay : 1 } });
      descriptionControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay : 1.5 } });
      jobDetailsControls.start({ x: 0, transition: { duration: 1, delay : 2 } });
      jobDetailsControls.start({ opacity: 1, transition: { duration: 1, delay : 2.05 } });
      hobbiesControls.start({ opacity: 1, scale :1, transition: { duration: 1, delay : 2.5 } });
      imageControls.start({ opacity: 1, scale :1, transition: { duration: 0.5, delay : 0.5 } });


    } else {
      titleControls.start({ opacity: 0 });
      subtitleControls.start({ opacity: 0, x: -500 });
      descriptionControls.start({ opacity: 0, y: 100 });
      jobDetailsControls.start({ opacity: 0, x: -550 });
      hobbiesControls.start({ opacity: 0, scale :1 });
      imageControls.start({ opacity: 0, scale :0.5 });
    }
  }, [isVisible, titleControls, subtitleControls, descriptionControls, jobDetailsControls, hobbiesControls, imageControls, hobbiesTitle]);

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <section ref={sectionRef} className="profil_container">
      <section className="profil_description">
        <section className="name_description">
        <motion.h2
          initial={{ opacity: 0, }}
          animate={titleControls}
          className="profil_title"
        >
          Steven
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, x: -500 }}
          animate={subtitleControls}
          className="profil_subtitle"
        >
           Développeur web frontend
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={descriptionControls}
          className="profil_description_text"
        >
          25 ans
        </motion.p>
        <motion.section
          initial={{ opacity: 0, x: -550 }}
          animate={jobDetailsControls}
          className="details_profil_jobs"
        >
          <p className="next_experience">
            Ancien salarié dans le BTP, j'ai choisi de me tourner vers un domaine pour lequel j'ai une véritable passion. Toujours animé par un
            intérêt pour la construction, celle-ci est désormais bien différente : au lieu de bâtir des toitures, je construis des sites web.
          </p>
        </motion.section>
        </section>
        <section className="image_profil">
        <motion.section
        initial={{ opacity: 0, scale :0.5 }}
        animate={imageControls}
        className="profil_image"
      >
        <img id="profil_image" src="photoprofil.png" alt="Photo de dev" />
        <img src="klipartz.png" id="background_image"></img>
      </motion.section>
      </section>
      <Skills />
      </section>
    </section>
  );
};

export default Profil;
