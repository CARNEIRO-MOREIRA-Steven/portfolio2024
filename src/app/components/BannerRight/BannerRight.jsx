import React from 'react'
import './bannerright.css'

const BannerRight = () => {
  return (
    <section className='banner_right_container'>
      <img className='banner_right_svg code' src='code-solid.svg'></img>
        <p className='banner-right-texte'>Développeur frontend</p>
        <aside className='banner_right_link'>
        <img className='banner_right_svg' src='linkedin-brands-solid.svg'></img>
        <img className='banner_right_svg' src='github-brands-solid.svg'></img>
        </aside>
    </section>
  )
}

export default BannerRight