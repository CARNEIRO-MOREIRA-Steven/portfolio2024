"use client"
import './skills.css'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const containerRef = useRef(null);
  const logoRefs = useRef([]);

  const getRandomPosition = (container, logo) => {
    const maxX = container.offsetWidth - logo.offsetWidth;
    const maxY = container.offsetHeight - logo.offsetHeight;
    return {
      x: Math.random() * maxX, 
      y: Math.random() * maxY, 
    };
  };

  const animateLogo = (logo, container) => {
    const randomPosition = getRandomPosition(container, logo);
    gsap.to(logo, {
      x: randomPosition.x,
      y: randomPosition.y,
      duration: Math.random() * 4 + 3, 
      ease: "power1.inOut",
      onComplete: () => animateLogo(logo, container),
    });
  };

  useEffect(() => {
    const container = containerRef.current;

    logoRefs.current.forEach((logo) => {
      const initialPosition = getRandomPosition(container, logo);
      gsap.set(logo, { x: initialPosition.x, y: initialPosition.y });

      animateLogo(logo, container);
    });
  }, []);

  return (
    <section className="skills_container">
      <section className='hard_skills'>
      <h2>Hard skills</h2>
      <div className="floating-logos-container" ref={containerRef}>
        <img src="react.png" alt="React Logo" className="floating-logo" ref={(el) => logoRefs.current.push(el)} />
        <img src="next.webp" alt="Next.js Logo" className="floating-logo" ref={(el) => logoRefs.current.push(el)} />
        <img src="html.webp" alt="HTML Logo" className="floating-logo" ref={(el) => logoRefs.current.push(el)} />
        <img src="css.png" alt="CSS Logo" className="floating-logo" ref={(el) => logoRefs.current.push(el)} />
        <img src="JavaScript-logo.png" alt="JavaScript Logo" className="floating-logo" ref={(el) => logoRefs.current.push(el)} />
        <img src="gsap.jpeg" alt="Gsap Logo" className="floating-logo" ref={(el) => logoRefs.current.push(el)} />
        <img src="framer.png" alt="Framer Logo" className="floating-logo" ref={(el) => logoRefs.current.push(el)} />
      </div>
      </section>
      <section className='soft_skills'>
      <h2>Soft skills</h2>
      <ul>
      <li>Communication</li>
      <li>Créativité</li>
      <li>Gestion du temps</li>
      <li>L'adaptabilité</li>
      </ul>
      </section>
    </section>
  );
};

export default Skills;