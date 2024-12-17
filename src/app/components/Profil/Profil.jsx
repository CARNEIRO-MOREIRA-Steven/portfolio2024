"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Importer ScrollTrigger

import './profil.css';

const Profil = () => {
  const profilRef = useRef(null);
  const TitleTextRef = useRef([]);
  const SubtitleTextRef = useRef([]);
  const descriptionTextRef = useRef([]);
  const imageProfilRef = useRef(null); // Référence unique pour l'image
  const jobDetailsTextRef = useRef([]);
  const hobbiesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Enregistrer ScrollTrigger

    // Fonction pour animer les sections
    const animateSection = (el, delay = 0, animationProps = {}) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          delay: delay,
          duration: 1,
          ease: "power2.out",
          ...animationProps,
        }
      );
    };

    // Fonction pour configurer ScrollTrigger pour redémarrer l'animation à chaque fois
    const applyScrollTrigger = (el, delay = 0) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "restart none none none", // Redémarre l'animation chaque fois que la section entre dans la vue
            markers: false, // Optionnel pour déboguer
          }
        }
      );
    };

    // Applique ScrollTrigger à chaque élément
    if (imageProfilRef.current) {
      applyScrollTrigger(imageProfilRef.current, 1.2); // Animation de l'image avec délai spécifique
    }

    TitleTextRef.current.forEach((el, index) => applyScrollTrigger(el, 2 + index * 0.5));
    SubtitleTextRef.current.forEach((el, index) => applyScrollTrigger(el, 2.5 + index * 0.5));
    descriptionTextRef.current.forEach((el, index) => applyScrollTrigger(el, 3 + index * 0.5));
    jobDetailsTextRef.current.forEach((el, index) => applyScrollTrigger(el, 3.5 + index * 0.5));
    hobbiesRef.current.forEach((el, index) => applyScrollTrigger(el, 4 + index * 0.5));

  }, []);

  return (
    <section id="profil" className="profil_container" ref={profilRef}>
      <img  className='section2_background' src='3213337.jpg' alt="Background" />
      <section className="profil_description">
        <h2 ref={el => TitleTextRef.current.push(el)}>Qui suis-je ?</h2>
        <h3 ref={el => SubtitleTextRef.current.push(el)}>Steven - Développeur web frontend</h3>
        <p ref={el => descriptionTextRef.current.push(el)}>
          J'ai 25 ans et j'ai décidé de changer radicalement de métier pour m'orienter vers un univers qui m'intéresse réellement et dans lequel
          je m'épanouis pleinement.
        </p>
        <section ref={el => jobDetailsTextRef.current.push(el)} className="details_profil_jobs">
          <p>
            Ancien salarié dans le BTP, j'ai choisi de me tourner vers un domaine pour lequel j'ai une véritable passion. Toujours animé par un
            intérêt pour la construction, celle-ci est désormais bien différente : au lieu de bâtir des toitures, je construis des sites web.
          </p>
        </section>
        <section ref={el => hobbiesRef.current.push(el)} className='profil_hobbies_details'>
          <h3>Quelques hobbies</h3>
          <ul>
            <li>Je suis passionné par les jeux vidéo, notamment les RPG et les jeux d'aventure.</li>
            <li>J'aime apprendre de nouvelles technologies pour rester à la pointe du développement web.</li>
            <li>Je suis un adepte des séries et d'animés.</li>
          </ul>
        </section>
      </section>
      <section className="profil_image">
        <img id="profil_image" src="photoprofil.png" alt="Photo de dev" ref={imageProfilRef} />
      </section>
    </section>
  );
};

export default Profil;
