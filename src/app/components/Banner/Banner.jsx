"use client"
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './banner.css';

const Banner = () => {
  const [buttonHover, setButtonHover] = useState(false);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const buttonRef = useRef(null);

  const [clicked, setClicked] = useState(false);

  const isMobile = () => window.innerWidth <= 768;

  const handleClick = () => {
    if (isMobile()) {
      setClicked(true);

      // Déplacer le bouton de -25px à gauche
      gsap.to(buttonRef.current, {
        x: -25, // Décalage horizontal
        duration: 0.3, // Durée de l'animation
        ease: "power3.out",
      });

      // Après 2 secondes, faire revenir le bouton à sa position initiale
      setTimeout(() => {
        if (clicked) {
          gsap.to(buttonRef.current, {
            x: 0, // Retour à la position initiale
            duration: 0.3, // Durée de l'animation
            ease: "power3.out",
          });
          setClicked(false);
        }
      }, 2000); // Délai avant de revenir à la position
    }
  };

  const handleOutsideClick = (e) => {
    // Si le clic est à l'extérieur du bouton, le réinitialiser
    if (buttonRef.current && !buttonRef.current.contains(e.target)) {
      gsap.to(buttonRef.current, {
        x: 0, // Retour à la position initiale
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  // Ajouter un écouteur d'événements pour les clics à l'extérieur
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const animateText = () => {

    const h1Text = h1Ref.current.querySelectorAll('span');
    const h2Text = h2Ref.current;
    const buttonContent = buttonRef.current

    const tl = gsap.timeline();

    tl.fromTo(
        h1Text, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, 
          y: 0,
          stagger: 0.15, 
          duration: 1,
          ease: 'power3.out',
        }
      )
      .fromTo(
        h2Text, 
        { opacity: 0 }, 
        {
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out',
        },
        "-=0.5" 
      )
      .fromTo(
        buttonContent,
        {opacity:0, y:-75},
        {
        opacity : 1,
        y : 0
        }, 
        "-=0.7"
      );
    };

  useEffect(() => {
    animateText();  
  }, []);

  return (
    <section className="banner_container">
      <img className="image_background" src="./photodev.jpg" alt="background" />
      
      <h1 ref={h1Ref}>
        {"CARNEIRO MOREIRA Steven".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>

      <h2 ref={h2Ref}>
        {"Développeur Web - Intégrateur"}
      </h2>

      <section ref={buttonRef} className="button">
        <div className="link_button">
          <a 
            className="button_profil" 
            href="/#profil" 
            onMouseEnter={() => setButtonHover(true)} 
            onMouseLeave={() => setButtonHover(false)}
            onClick={handleClick}
          >
            {buttonHover ? "Qui suis-je ?" : "Me découvrir"}
          </a>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
            </svg>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
