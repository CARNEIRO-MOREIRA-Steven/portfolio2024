import React from 'react'
import './bannerright.css'

const BannerRight = () => {
  return (
    <section className='banner_right_container'>
        <p className='banner-right-texte'>
        <span>Développeur frontend</span>
        </p>
        <aside className='banner_right_link'>
        <a href='https://www.linkedin.com/in/steven-carneiro-moreira-742626264/' target='blank'>
        <img className='banner_right_svg' src='linkedin-brands-solid.svg'></img></a>
        <a href='https://github.com/CARNEIRO-MOREIRA-Steven' target='blank'>
        <img className='banner_right_svg' src='github-brands-solid.svg'></img></a>
        </aside>
    </section>
  )
}

export default BannerRight