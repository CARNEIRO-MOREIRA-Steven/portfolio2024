"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './contact.css'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    firstname : "",
    email: "",
    subject: "",
    tel: "",
    message: "",
  });

  const [isSuccess, setIsSucces] = useState(false)

  const closeSend = (e) => {
    setIsSucces(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message envoyé avec succès !");
        setIsSucces(true)
        setFormData({
          name: "",
          firstname:"",
          email: "",
          subject: "",
          tel: "",
          message: "",
        });
      } else {
        console.error(
          "Une erreur s'est produite lors de l'envoi du formulaire :",
          response.status, // log the status code
          response.statusText // log the status text            
        );
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'envoi du formulaire :",
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const [contactVisible, contactIsVisible] = useState(false);
  const label1Controls = useAnimation();
  const label2Controls = useAnimation();
  const label3Controls = useAnimation();
  const label4Controls = useAnimation();
  const label5Controls = useAnimation();
  const label6Controls = useAnimation();
  const input1Controls = useAnimation();
  const input2Controls = useAnimation();
  const input3Controls = useAnimation();
  const input4Controls = useAnimation();
  const input5Controls = useAnimation();
  const textareaControls = useAnimation();
  const buttonControls = useAnimation();
  const contactRef = useRef(null);

  useEffect(() => {
    const contactTopOffset = contactRef.current.offsetTop;
    const handleScroll = () => {
      if (window.scrollY > contactTopOffset - window.innerHeight / 1.5) {
        contactIsVisible(true)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateContact = async () => {
      if (contactVisible) {
        await label1Controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.3 }
        }),
          await input1Controls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 }
          }),
          await label2Controls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 }
          })
        await input2Controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.3 }
        })
        await label3Controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.3 }
        })
      await input3Controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.3 }
      })
      await label4Controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 }
      })
    await input4Controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    })
    await label5Controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    })
  await input5Controls.start({
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 }
  })
  await label6Controls.start({
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 }
  })
await textareaControls.start({
  y: 0,
  opacity: 1,
  transition: { duration: 0.3 }
})
await buttonControls.start({
  scale: 1,
  opacity: 1,
  transition: { duration: 0.5 }
})
      }
    }
    animateContact();
  }, [contactVisible,])

  return (
    <section ref={contactRef} className={`contact ${isSuccess ? 'success' : ''}`}>
      <section className='form_content'>
      <h2 className='form_title'>Me contacter</h2>
      <form id='contact' className='form' onSubmit={handleSubmit} defer>
        {isSuccess ? (
          <div className='success_message'>
            <img onClick={closeSend} id='return_button' alt='logo button retour' src='./arrow-left-solid.svg'></img>
            <img id='validate_icon' alt='logo validation' src="./check-solid.svg"></img>
            <p>Votre message a été envoyé avec succès!</p>
          </div>
        ) : (
          <section className='form_container'>
            <div className='form_group'>
              <div className='name'>
                <motion.label
                  animate={label1Controls}
                  initial={{ x: -250, opacity: 0 }}
                  htmlFor='name'>Nom</motion.label>
                <motion.input
                  animate={input1Controls}
                  initial={{ x: -250, opacity: 0 }}
                  autoComplete='name'
                  id='name'
                  value={formData.name}
                  type='text'
                  name='name'
                  required onChange={handleChange}></motion.input>
              </div>
              <div className='firstname'>
                <motion.label
                  animate={label2Controls}
                  initial={{ x: 250, opacity: 0 }}
                  htmlFor='firstname'>Prénom</motion.label>
                <motion.input id='firstname'
                  animate={input2Controls}
                  initial={{ x: 250, opacity: 0 }}
                  autoComplete='firstname'
                  value={formData.firstname}
                  type='text'
                  name='firstname'
                  required onChange={handleChange}></motion.input>
              </div>
            </div>
            <div className='email'>
              <motion.label
                animate={label3Controls}
                initial={{ y: -40, opacity: 0 }}
                htmlFor='email'>Email</motion.label>
              <motion.input 
              animate={input3Controls}
              initial={{y : -40, opacity : 0}}
              autoComplete='email' 
              id='email' 
              value={formData.email} 
              type='email' 
              name='email' required onChange={handleChange}></motion.input>
            </div>
            <div className='form_group'>
              <div className='objet'>
                <motion.label
                  animate={label4Controls}
                  initial={{ x: -250, opacity: 0 }}
                  htmlFor='objet'>Objet</motion.label>
                <motion.input
                  animate={input4Controls}
                  initial={{ x: -250, opacity: 0 }}
                  autoComplete='objet'
                  id='objet'
                  value={formData.subject}
                  type='text'
                  name='subject'
                  required onChange={handleChange}></motion.input>
              </div>
              <div className='tel'>
                <motion.label
                  animate={label5Controls}
                  initial={{ x: 250, opacity: 0 }}
                  htmlFor='tel'>Téléphone</motion.label>
                <motion.input 
                animate={input5Controls}
                initial={{x : 250, opacity : 0}}
                autoComplete='tel' 
                id='tel' 
                value={formData.tel} 
                type='text' 
                name='tel' required onChange={handleChange}></motion.input>
              </div>
            </div>
            <div className='message'>
              <motion.label
                animate={label6Controls}
                initial={{ y: 250, opacity: 0 }}
                htmlFor='message'>Message</motion.label>
              <motion.textarea 
              animate={textareaControls}
              initial={{y : 250, opacity : 0}}
              autoComplete='message' 
              id='message' 
              rows="6" 
              value={formData.message} 
              name='message' 
              maxLength={250} required onChange={handleChange}></motion.textarea>
            </div>
            <motion.button
            animate={buttonControls}
            initial={{opacity : 0, scale : 0.5}}
             className='submit' type='submit'>
              {isSubmitting ? <>En cours...</> : "Envoyer"}
            </motion.button>

          </section>
        )}
      </form>
      </section>
      <section className='info_contact_content'>
        <h2>Information de contact</h2>
        <h3>codemetasolutions@gmail.com</h3>
        <h3>Téléphone : 06.27.57.59.07</h3>
        <h3>Adresse : 02300 Chauny </h3>
      </section>
    </section>
  )
}

export default Contact