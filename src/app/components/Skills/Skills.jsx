import './skills.css';
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef= useRef(null)

  const hardSkillsTitlte = useAnimation();
  const containerSkills = useAnimation ();
  const softSkillsTitle = useAnimation ();
  const listSoftSkills1 = useAnimation ();
  const listSoftSkills2 = useAnimation ();
  const listSoftSkills3 = useAnimation ();
  const listSoftSkills4 = useAnimation ();


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
        hardSkillsTitlte.start({ opacity: 1,  transition: { duration: 1, delay : 0.5 } });
        containerSkills.start({opacity : 1, transition: { duration: 0.5, delay : 1 }});
        softSkillsTitle.start({y : 0, transition : {duration : 1 , delay : 1.5}});
        listSoftSkills1.start({ opacity: 1, transition : {duration : 0.7 , delay : 2.2}});
        listSoftSkills2.start({ opacity: 1, transition : {duration : 0.7 , delay : 2.7}});
        listSoftSkills3.start({ opacity: 1, transition : {duration : 0.7, delay : 3.2}});
        listSoftSkills4.start({ opacity: 1, transition : {duration : 0.7 , delay : 3.7}});

        
      } else {
        hardSkillsTitlte.start({ opacity: 0,});
        containerSkills.start({opacity : 0, delay : 1.5})
        softSkillsTitle.start({ y : -100})
        listSoftSkills1.start({opacity :0})
        listSoftSkills2.start({opacity :0})
        listSoftSkills3.start({opacity :0})
        listSoftSkills4.start({opacity :0})

      }
    }, [isVisible,]);
  
    useEffect(() => {
      window.addEventListener('scroll', checkVisibility);
      checkVisibility();
  
      return () => {
        window.removeEventListener('scroll', checkVisibility);
      };
    }, []);
  
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [logoPositions, setLogoPositions] = useState([]);


  const logos = [
    { src: "react.png", alt: "React Logo" },
    { src: "next.webp", alt: "Next.js Logo" },
    { src: "html.webp", alt: "HTML Logo" },
    { src: "css.png", alt: "CSS Logo" },
    { src: "JavaScript-logo.png", alt: "JavaScript Logo" },
    { src: "gsap.jpeg", alt: "Gsap Logo" },
    { src: "framer.png", alt: "Framer Logo" },
  ];

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setContainerSize({ width: offsetWidth, height: offsetHeight });
    }
    const handleResize = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setContainerSize({ width: offsetWidth, height: offsetHeight });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const initialPositions = logos.map(() => getRandomPosition());
    setLogoPositions(initialPositions);
  }, [containerSize.width, containerSize.height]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoPositions((prevPositions) =>
        prevPositions.map(() => getRandomPosition())
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [containerSize]);

  const getRandomPosition = () => ({
    x: Math.random() * (containerSize.width * 0.6),
    y: Math.random() * (containerSize.height * 0.8),
  });

  return (
    <motion.section
      className="skills_container" ref={sectionRef}>
      <section className="hard_skills">
        <motion.h2 animate={hardSkillsTitlte} initial={{opacity : 0}}>Hard skills</motion.h2>
        <motion.div animate={containerSkills} initial={{opacity : 0}} className="floating-logos-container" ref={containerRef}>
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              id="floating-logo"
              animate={{
                x: logoPositions[index]?.x || 0,
                y: logoPositions[index]?.y || 0,
              }}
              transition={{
                duration: 6, 
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </section>
      <section className="soft_skills">
        <motion.h2 animate={softSkillsTitle} initial={{y : -100}}>Soft skills</motion.h2>
        <ul className='list_soft_skills'>
          <motion.li className='details_list_soft_skills' initial={{ opacity: 0 }} animate={listSoftSkills1}>Communication</motion.li>
          <motion.li className='details_list_soft_skills' initial={{ opacity: 0 }} animate={ listSoftSkills2 }>Créativité</motion.li>
          <motion.li className='details_list_soft_skills' initial={{ opacity: 0 }} animate={ listSoftSkills3 }>Gestion du temps</motion.li>
          <motion.li className='details_list_soft_skills' initial={{ opacity: 0 }} animate={listSoftSkills4 }>L'adaptabilité</motion.li>
        </ul>
      </section>
    </motion.section>
  );
};

export default Skills;
