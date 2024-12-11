import React from 'react'
import Link from 'next/link'
import './header.css'

const Header = () => {
  return (
    <header>
        <h2 className='title_banner'><a href='/'>SCM</a></h2>
        <nav>
            <Link href='/#profil'>Mon profil</Link>
            <Link href='/#experiences'>Expériences</Link>
            <Link href='/#projets'>Projets</Link>
            <Link href='/#contact'>Contactez-moi</Link>
        </nav>
    </header>
  )
}

export default Header