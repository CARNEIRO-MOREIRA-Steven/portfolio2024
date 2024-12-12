import React from 'react'

import './profil.css'

const Profil = () => {
  return (
    <section id='profil' className='profil_container'>
      <section className='profil_image'>
        <img className='profil_photo' src='photoprofil.png'></img>
      </section>
      <section className='profil_description'>
      <h2>Me découvrir</h2>
      <h3>Steven - Développeur web frontend</h3>
      <p>Après avoir efféctué une reconversion professionnel pour un univers ou je portais de l'intéret, depuis je ne cesse d'apprendre de nouvelle chose. </p>
      <p>Je crois que chaque projet est une opportunité de créer quelque chose de unique. Mon objectif est de concevoir des sites web non seulement
         fonctionnels, mais aussi attrayants et faciles à utiliser. Je travaille main dans la main avec mes clients pour
          comprendre leurs besoins spécifiques et leur offrir des solutions sur mesure qui les aident à atteindre leurs objectifs.</p>
      </section>
    </section>
  )
}

export default Profil