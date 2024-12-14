"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import './profil.css';

const Profil = () => {
  const profilRef = useRef(null);
  const TitleTextRef = useRef([]);
  const SubtitleTextRef = useRef([]);
  const descriptionTextRef = useRef([]);
  const imageProfilRef = useRef([]);
  const jobDetailsTextRef = useRef([]);
  const hobbiesRef = useRef([]);

  useEffect(() => {
    const animateSection = (el, delay = 1, animationProps = {}) => {
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

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const delay = target === imageProfilRef.current ? 1.2 : 0.9; 
          const animationProps = target === imageProfilRef.current 
            ? { opacity: 1, scale: 0.8, delay:2.2 }
            : target === jobDetailsTextRef.current[0]
              ? { opacity: 1, delay : 2 }
            : target === jobDetailsTextRef.current[0]
              ? { opacity: 1, delay : 2 } 
              : target === hobbiesRef.current[0]
                ? { opacity: 1, delay : 3 } 
                : {}; 

          animateSection(target, delay, animationProps);
          observer.unobserve(target); 
        }
      });
    }, {
      threshold: 0.7,  
    });

    if (imageProfilRef.current) {
      observer.observe(imageProfilRef.current); 
    }
    TitleTextRef.current.forEach((el, index) => observer.observe(el)); 
    SubtitleTextRef.current.forEach((el, index) => observer.observe(el)); 
    descriptionTextRef.current.forEach((el, index) => observer.observe(el)); 
    jobDetailsTextRef.current.forEach((el, index) => observer.observe(el)); 
    hobbiesRef.current.forEach((el, index) => observer.observe(el)); 
  }, []);

  return (
    <section id="profil" className="profil_container" ref={profilRef}>
      <img className='section2_background' src='3213337.jpg' alt="Background"></img>
      <section className="profil_description">
        <h2 ref={el => TitleTextRef.current.push(el)}>Qui suis-je ?</h2>
        <h3 ref={el => SubtitleTextRef.current.push(el)}>Steven - Développeur web frontend</h3>
        <p ref={el => descriptionTextRef.current.push(el)} >
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
        <img className="profil_photo" src="photoprofil.png" alt="Photo de dev" ref={imageProfilRef} />
      </section>
    </section>
  );
};

export default Profil;
