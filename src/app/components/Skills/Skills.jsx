import './skills.css';
import './skills.css';
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 100 },
    { name: "JavaScript", percentage: 85 },
    { name: "Next.js", percentage: 80 },
    { name: "Framer Motion", percentage: 80 },
    { name: "React", percentage: 70 },
  ];

  const checkVisibility = () => {
    const section = sectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.top <= window.innerHeight * 0.8;
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <section ref={sectionRef}
    className='skills_container'
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1, transition: { duration: 0.5 } } : {}}>
    <section className="skills_content">
      <h2>Mes Compétences</h2>
      <section className="skills_list">
        {skills.map((skill, index) => (
          <section key={index} className="skill_item">
            <section className="skill_name">{skill.name}</section>
            <section className="skill_bar_container">
              <motion.section
                className="skill_bar"
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${skill.percentage}%`, transition: { duration: 1.5, delay: index * 0.3 } } : {}}
              />
            </section>
          </section>
        ))}
      </section>
    </section>
    <section className='soft_skills'>
        <p className='soft_skills_name'>Communication </p>
        <p className='soft_skills_name'>Collaboration</p>
        <p className='soft_skills_name'>Gestion du temps</p>
        <p className='soft_skills_name'>Adaptabilité</p>
      </section>
    </section>
  );
};

export default Skills;
