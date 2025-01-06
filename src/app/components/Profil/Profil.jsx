"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import './profil.css';

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
      subtitleControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay : 1 } });
      descriptionControls.start({ opacity: 1, y: 0, transition: { duration: 1, delay : 1.5 } });
      jobDetailsControls.start({ x: 0, transition: { duration: 1, delay : 2 } });
      jobDetailsControls.start({ opacity: 1, transition: { duration: 1, delay : 2.05 } });
      hobbiesControls.start({ opacity: 1, scale :1, transition: { duration: 1, delay : 2.5 } });
      imageControls.start({ opacity: 1, scale :1, transition: { duration: 0.5, delay : 0.5 } });
      hobbiesTitle.start({ y : 0, transition: { duration: .5, delay : 2.9 } });
      listeHobbies1.start({ x : 0, opacity : 1, transition: { duration: 1, delay : 3.5 }});
      listeHobbies2.start({ x : 0, opacity : 1, transition: { duration: 1, delay : 4 }});
      listeHobbies3.start({ x : 0, opacity : 1, transition: { duration: 1, delay : 4.5 }});
      manetteHobbies.start ({x : 0, y :0, rotate :35 , opacity : 1, transition : { duration :.5, delay: 5}})
      pcHobbies.start ({x : 0, y :0, opacity : 1, transition : { duration :.5, delay: 5}})


    } else {
      titleControls.start({ opacity: 0 });
      subtitleControls.start({ opacity: 0, y: 50 });
      descriptionControls.start({ opacity: 0, y: -50 });
      jobDetailsControls.start({ opacity: 0, x: -550 });
      hobbiesControls.start({ opacity: 0, scale :1 });
      imageControls.start({ opacity: 0, scale :0.5 });
      hobbiesTitle.start({ y : -100})
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
      {/* <img className="profil_background" src="3213337.jpg" alt="Background" /> */}
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
          initial={{ opacity: 0, y: 50 }}
          animate={subtitleControls}
          className="profil_subtitle"
        >
           Développeur web frontend
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={descriptionControls}
          className="profil_description_text"
        >
          25 ans
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={descriptionControls}
          className="profil_description_text"
        >
          J'ai 25 ans et j'ai décidé de changer radicalement de métier pour m'orienter vers un univers qui m'intéresse réellement et dans lequel
          je m'épanouis pleinement.
        </motion.p>
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
      <section className="hobbies_description">
      <motion.section
          initial={{ opacity: 0, x: -550 }}
          animate={jobDetailsControls}
          className="details_profil_jobs"
        >
          <p>
            Ancien salarié dans le BTP, j'ai choisi de me tourner vers un domaine pour lequel j'ai une véritable passion. Toujours animé par un
            intérêt pour la construction, celle-ci est désormais bien différente : au lieu de bâtir des toitures, je construis des sites web.
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, scale :0 }}
          animate={hobbiesControls}
          className="profil_hobbies_details"
        >
          <motion.h3
          initial={{y : -100}}
          animate={hobbiesTitle}>Quelques hobbies</motion.h3>
          <ul>
            <motion.li animate={listeHobbies1} initial={{x : -700, opacity : 0}}>Je suis passionné par les jeux vidéo, notamment les RPG et les jeux d'aventure.</motion.li>
            <motion.li animate={listeHobbies2} initial={{x : -700, opacity : 0}}>J'aime apprendre de nouvelles technologies pour rester à la pointe du développement web.</motion.li>
            <motion.li animate={listeHobbies3} initial={{x : -700, opacity : 0}}>Je suis un adepte des séries et d'animés.</motion.li>
          </ul>
          <section className="image_hobbies">
          <motion.img animate={manetteHobbies} initial={{x : -50, y:-50, rotate :0, opacity : 0 }} id="manette_hobbies" src="./manette.png"></motion.img>
          <motion.img animate={pcHobbies} initial={{x : 50, y: 50, opacity : 0 }} src="./pc.png" id="pc_hobbies"></motion.img>
          </section>
        </motion.section>
        </section>
      </section>
    </section>
  );
};

export default Profil;
