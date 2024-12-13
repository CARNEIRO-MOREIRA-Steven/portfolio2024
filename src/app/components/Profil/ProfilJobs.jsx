"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './profil.css';

gsap.registerPlugin(ScrollTrigger);

const ProfilJobs = () => {
  const svgRef = useRef(null);
  const jobDetailsTextRef = useRef([]);

  useEffect(() => {
    const section2 = document.querySelector("#section2"); 
    const svgElement = svgRef.current

    if (section2 && svgElement) {
      gsap.to(svgElement, {
        rotation: 360, 
        ease: "none", 
        scrollTrigger: {
          trigger: section2, 
          start: "top top", 
          end: "bottom+=1000 top", 
          scrub: true, 
        },
      });
    }


    jobDetailsTextRef.current.forEach((el) => {
      gsap.fromTo(
        el, 
        {
          opacity: 0,
          scale : 0,
        },
        {
          opacity: 1,
          scale : 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", 
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    if(svgRef.current){
      gsap.fromTo(
        svgRef.current,
        {
          scale : 0
        },
        {
          scale : 1,
          scrollTrigger: {
            trigger: section2,
            start: "top 60%", 
            end: "top 10%",    
            scrub: true, 
          },
        }
        
      )
    }

  }, []);

  return (
    <section className="profil_jobs_details">
    <img className="construction_svg" src="reshot-icon-gear.svg" ref={svgRef} alt="Rotating Icon" />
    <section ref={el => jobDetailsTextRef.current.push(el)} className="details_profil_jobs">
    <p>
      Ancien salarié dans le BTP, j'ai choisi de me tourner vers un domaine pour lequel j'ai une véritable passion. Toujours animé par un
      intérêt pour la construction, celle-ci est désormais bien différente : au lieu de bâtir des toitures, je construis des sites web.
    </p>
    <p >
      L'informatique et les jeux vidéo ont toujours été une passion pour moi. C'est pourquoi j'ai décidé de me former en suivant une formation
      de développeur intégrateur web.
    </p>
    </section>
  </section>
  )
}

export default ProfilJobs