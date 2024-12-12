import React from 'react'
import './globals.css'


import Header from './components/Header/Header'
import ScrollRight from './components/Scroll/ScrollRight'
import ScrollBottom from './components/Scroll/ScrollBottom'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'


const page = () => {
  return (
    <>
      <Header />
      <section className='page_container'>
        <Banner />
        <ScrollRight />
        <ScrollBottom />
        <Contact />
      </section>
    </>
  )
}

export default page