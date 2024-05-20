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
    <Image src='/img/myimage.png' height={145} width={160} alt='myimg' className='home__img'/>
    <h1 className='home__name'>심판교 </h1>
    <span className='home__education'>
    JAVA 개발자
    </span>

    <HeaderSocials/>

    <a href='#contact' className='btn'>Contact Me !</a>
    <ScrollDown/>
   </div>

   <Shapes/>

   </section> 
  )
}

export default Home

