import React from 'react'
import './globals.css'


import Header from './components/Header/Header'
import Scroll from './components/Scroll/Scroll'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'


const page = () => {
  return (
    <>
      <Header />
      <section className='page_container'>
        <Banner />
        <Scroll />
        <Contact />
      </section>
    </>
  )
}

export default page