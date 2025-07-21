import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Image from 'next/image';

const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
    <Image src='/img/myimage.png' height={160} width={160} alt='myimg' priority className='home__img' style={{width: 160, height: 160}}/>
    <h1 className='home__name'>심판교 </h1>

    <HeaderSocials/>

    <a href='#contact' className='btn'>Contact Me !</a>
    <ScrollDown/>
   </div>

   <Shapes/>

   </section> 
  )
}

export default Home

