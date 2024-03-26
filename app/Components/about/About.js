
import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';
import Image from 'next/image';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <Image src= "/img/myimage.jpg" alt='' width={250} height={330} className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
        사람의 편익을 위해 무언가를 만드는 것에 흥미를 가지고 있습니다. 
        인공지능 교육 프로젝트 발표회 대상, 세종시 빅데이터 공모전 본선 진출, 관련 개발 교육을 수강한 경험이 있습니다. <br></br>
        프로젝트를 통해 다양한 사람들과 협력하며, 함께 일하고 공유함으로써 더 나은 결과물을 만들어내려고 노력하고 있습니다. 
        성공적인 프로젝트를 완성하여 사람들에게 이로운 서비스를 개발하는 것이 제 목표입니다.
        </p>
        <a href='https://drive.google.com/file/d/17rTu8y9bC8AW5cKiqU_qTV0JophyMozQ/view?usp=drive_link' target="_blank" className='btn' download={"Simpangyo_Resume"}>이력서보기 &gt;</a>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Java
            </h3>
            <span className='skills__number'>80%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Mybatis/JPA</h3>
            <span className='skills__number'>60%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage data'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Spring/Springboot</h3>
            <span className='skills__number'>70%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage ui__design'></span>
          </div>
        </div>
        
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>AWS</h3>
            <span className='skills__number'>70%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage DSA'></span>
          </div>
        </div>
      </div>

    </div>
    </div>

    <AboutBox/>

    </section>
  )
}

export default About