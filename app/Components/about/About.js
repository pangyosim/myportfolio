
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
        <span className='about__name' style={{color:"black",fontSize:"25px",fontWeight:"bold"}}>
          심판교
        </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-cake-candles">&nbsp;&nbsp;1996.12.30</i>
        <p className='icon-information' style={{fontWeight:"bold",fontSize:"17px"}}>학력 및 경력사항</p>
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          <i className='icon-graduation' style={{fontWeight:"bold"}}> 2023.08-2024.02</i> Spring기반 개발자 양성과정 이수<br></br>
          <p className='about__info__content'>- Java 개념과 기초이론부터 응용하여 다양한 실무 예제를 통한 실습으로 프로그래밍에 대한 기초지식 학습.</p>
          <p className='about__info__content'>- OTT서비스 아이디 공유 프로젝트 OYES (2023.08~2024.10)</p>
          <p className='about__info__content'>- 은행대기인원 주차장 정보 안내 프로젝트 DWBB (2023.08~2024.10)</p>
          <i className='icon-graduation' style={{fontWeight:"bold"}}> 2024.05-2024.07</i> 미래내일 일경험 프로젝트형 이수<br></br>
          <p className='about__info__content'>- 작업추적프로그램 Jira를 사용하여 기능별로 목표를 백로그/스토리에 적으며 스프린트 계획수립.</p>
          <p className='about__info__content'>- 스프린트 계획들을 완료한 후에는 회고 회의를 열어 POSTMAN로 테스트하며 이슈정리.</p>
          <p className='about__info__content'>- 이력서 공유 및 판매 플랫폼 웹사이트 프로젝트 DevCV(2024.05~2024,07)</p>
          <i className='icon-briefcase' style={{fontWeight:"bold"}}> 前메타넷디지털 클라우드엔지니어</i>
        </div>
      </div>

      {/* <div className='about__skills grid'>
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
      </div> */}

    </div>
    </div>
    
    <AboutBox/>

    </section>
  )
}

export default About