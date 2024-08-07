"use client" // Next.js works on both client and backend so we need to specify this we are using it on clint side only
import React from 'react';
import Sidebar from './Components/sidebar/Sidebar';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';

// Here refer to page as App Layout
const page = () => {
  return(
    <>
      <Sidebar/>
      <main className='main'>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      </main>
    </>
  )
}

export default page