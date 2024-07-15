
import React,{useEffect} from 'react';
import "./About.css"
import AboutBox from './AboutBox';
import Image from 'next/image';

const About = () => {
  useEffect(()=>{
    const eventHandler = () => {
      var windowHeight = window.innerHeight
      const container = document.querySelector('#about')
      if( container.getBoundingClientRect().top < windowHeight-200){
        setTimeout(()=>{
          container.style.animation = 'appear_from_bottom ease 1.5s'
          container.style.opacity = 1
      },200) 
        window.removeEventListener('scroll',eventHandler,{ passive: true })
      }
    }
    window.addEventListener('scroll',eventHandler,{ passive: true })
  },[])
  return (
    <section className='about container section' id='about'>
      {/* <h2 className='section__title'>
        🧑🏻‍💻 About Me
      </h2> */}

    <div className='about__container grid'>
      <Image src= "/img/myimg.jpeg" alt='Myimg' width={500} height={400} style={{borderRadius:"30px"}} className='about__img' aria-hidden="true"/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description' style={{color:"black",fontSize:"20px",fontWeight:"bold"}}>
          심판교
        </p>
        <p className='about__description' style={{color:"black"}} >
          1996.12.30<br></br>
          학력 및 경력사항<br></br><br></br>
          <i className='icon-graduation' style={{fontWeight:"bold"}}> 2016.03-2022.02</i> <br></br>강원대학교 바이오시스템공학과 졸업<br></br>
          <i className='icon-graduation' style={{fontWeight:"bold"}}> 2021.05-2021.11</i> <br></br>인공지능 자연어처리NLP기반 과정 이수<br></br>
          <i className='icon-graduation' style={{fontWeight:"bold"}}> 2022.08-2022.11</i> <br></br>Azure cloud 전문가양성과정 이수<br></br>
          <i className='icon-graduation' style={{fontWeight:"bold"}}> 2023.08-2024.02</i> <br></br>Spring기반 개발자 양성과정 이수<br></br><br></br>
          <i className='icon-briefcase' style={{fontWeight:"bold"}}> 前메타넷디지털 클라우드엔지니어</i> <br></br>
        </p>
        {/* <a href='https://drive.google.com/file/d/1sGEQoco3_hE4oXJl_hTtoAov_jXOOmli/view?usp=drive_link' target="_blank" className='btn' download={"Simpangyo_Resume"}>클라우드프로젝트보기 &gt;</a> */}
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Java
            </h3>
            <span className='skills__number'>60%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage development'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>JPA</h3>
            <span className='skills__number'>60%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage data'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>SQL Query</h3>
            <span className='skills__number'>60%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage ui__design'></span>
          </div>
        </div>
        
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Cloud</h3>
            <span className='skills__number'>80%</span>
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