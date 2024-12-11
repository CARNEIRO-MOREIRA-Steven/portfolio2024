import React from 'react'
import './globals.css'


import Header from './components/Header/Header'
import Scroll from './components/Scroll/Scroll'


const page = () => {
  return (
    <>
      <Header />
      <section className='page_container'>
        <Scroll />
      </section>
    </>
  )
}

export default page