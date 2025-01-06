import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import "./realisation.css";

const Realisation = () => {
  const projects = [
    { title: "L'espace d'un Instant", image: "lespaceduninstant.png", description: "Réalisation d'un site internet pour une maison d'hote avec système de réservation", link: "https://lespaced1instant.com/" },
    { title: "Neuf Mois Demain", image: "neufmoisdemain.png", description: "Réalisation d'un site internet pour de la location de matériel de puériculture avec gestion des locations et cautions", link: "https://neufmoisdemain.com/accueil/" },
    { title: "Greenz Ink Tattoo", image: "greenzink.png", description: "Réalisation d'un site internet pour une tatoueuse", link: "https://greenz-tattoo.vercel.app/" },
    { title: "Les Talents Emergents", image: "lestalentsemergents.png", description: "Intégration d'un site pour de la formation, contenu modifié par le client par la suite", link: "https://les-talents-emergents.com/" },
  ];

  return (
    <div id="realisation-container">
      {projects.map((project, index) => (
        <TiltCard key={index} title={project.title} image={project.image} description={project.description} link={project.link} />
      ))}
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ title, image, description, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsFlipped(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`tilt-card ${isFlipped ? "flipped" : ""}`}
    >
      <div className={`tilt-card-content front`} style={{ backgroundImage: `url(${image})` }}>
      </div>

      <div className={`tilt-card-content back`}>
        <div className="back-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Voir le projet</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Realisation;
