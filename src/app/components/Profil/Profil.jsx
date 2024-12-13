"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './profil.css';

gsap.registerPlugin(ScrollTrigger);

const Profil = () => {
  const svgRef = useRef(null);
  const profilRef = useRef(null);
  const TitleTextRef = useRef([]);
  const SubtitleTextRef = useRef([]);
  const descriptionTextRef = useRef([]);
  const jobDetailsTextRef = useRef([]);
  const imageProfilRef = useRef([]);

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


    TitleTextRef.current.forEach((el) => {
      gsap.fromTo(
        el,{
          opacity : 0,
        },
        {
          opacity : 1,
          delay: 0.7,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        },
       
      )
    }) ;

    SubtitleTextRef.current.forEach((el) => {
      gsap.fromTo(
        el,{
          scale : 0
        },
        {
          scale : 1,
          delay:  0.9,
          scrollTrigger: {
            trigger: el,
            start: "top 80%", 
            end: "top 50%",
            scrub: true,
          },
        }
      )
    }) 

    descriptionTextRef.current.forEach((el) => {
      gsap.fromTo(
        el, 
        {
          opacity: 0, 
          y: 50,
        },
        {
          opacity: 1,
          delay : 5,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });


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

    if (imageProfilRef.current) {
      gsap.fromTo(
        imageProfilRef.current, 
        {
          scale: 0,  
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: section2,
            start: "top 40%",  
            end: "top 10%",    
            scrub: true, 
          },
        }
      );
    }
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
    <section id="profil" className="profil_container">
      <section className="profil_description" ref={profilRef}>
        <h2 ref={el => TitleTextRef.current.push(el)}>Me découvrir</h2>
        <h3 ref={el => SubtitleTextRef.current.push(el)}>Steven - Développeur web frontend</h3>
        <p ref={el => descriptionTextRef.current.push(el)}>
          J'ai 25 ans et j'ai décidé de changer radicalement de métier pour m'orienter vers un univers qui m'intéresse réellement et dans lequel
          je m'épanouis pleinement.
        </p>
        <section className="profil_image">
          <img className="profil_photo" src="photodev.jpg" alt="Photo de dev" ref={imageProfilRef} />
        </section>
      </section>
    </section>
  );
};

export default Profil;
