
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
        <p className='about__name' style={{color:"black",fontSize:"25px",fontWeight:"bold"}}>
          심판교
        </p>
        <p className='about__description' style={{color:"black"}} >
          <i className="fa-solid fa-cake-candles"></i>&nbsp;&nbsp;1996.12.30
        </p>
        <p className='icon-information' style={{fontWeight:"bold",fontSize:"17px"}}>학력 및 경력사항</p>
        <i className='icon-graduation' style={{fontWeight:"bold", fontSize:"15px"}}> 2016.03-2022.02</i> 강원대학교 바이오시스템공학과 졸업<br></br>
        <p className='about__info__content'>- 뇌파장치를 통한 정식작업시 작업자 스트레스 분석을 주제로 졸업논문발표회 최우수상.</p>
        <i className='icon-graduation' style={{fontWeight:"bold"}}> 2021.05-2021.11</i> 인공지능 자연어처리NLP기반 과정 이수<br></br>
        {/* <p className='about__info__content'>- Python에 대한 기초지식 학습, pandas, matplotlib, seaborn 모듈을 사용한 데이터 시각화.</p>
        <p className='about__info__content'>- MachineLearning의 지도학습 SGD 학습을 통한 책,영화 추천시스템 구현실습진행.</p> */}
        <p className='about__info__content'>- DeepLearning의 LSTM + CNN 학습을 통한 주가 예측 프로그램 구현실습진행.</p>
        <i className='icon-graduation' style={{fontWeight:"bold"}}> 2022.08-2022.11</i> Azure cloud 전문가양성과정 이수<br></br>
        <p className='about__info__content'>- Docker container 생성/관리, DockerHub 사용실습, volume을 사용한 다중 container로 배포실습진행.</p>
        <p className='about__info__content'>- Kubernetes를 사용한 배포,yaml 파일로 pods 관리, cluster 실습을 진행하여 Docker 관리를 단순화.</p>
        <i className='icon-graduation' style={{fontWeight:"bold"}}> 2023.08-2024.02</i> Spring기반 개발자 양성과정 이수<br></br>
        <p className='about__info__content'>- Java 개념과 기초이론부터 응용하여 다양한 실무 예제를 통한 실습으로 프로그래밍에 대한 기초지식 학습.</p>
        <p className='about__info__content'>- JPA, Mybatis와같은 ORM을 사용하여 객체지향적인 Java 클래스를 통해 데이터베이스를 조작하는 방법 학습.</p>
        <p className='about__info__content'>- Spring Framework를 이용해서 MVC 패턴으로 게시판 구현 실습진행.</p>
        <i className='icon-graduation' style={{fontWeight:"bold"}}> 2024.05-2024.07</i> 미래내일 일경험 프로젝트형 이수<br></br>
        <p className='about__info__content'>- 작업추적프로그램 Jira를 사용하여 기능별로 목표를 백로그/스토리에 적으며 스프린트 계획수립.</p>
        <p className='about__info__content'>- 스프린트 계획들을 완료한 후에는 회고 회의를 열어 POSTMAN로 테스트하며 이슈정리.</p>
        <i className='icon-briefcase' style={{fontWeight:"bold"}}> 前메타넷디지털 클라우드엔지니어</i>
        {/* <a href='https://drive.google.com/file/d/1sGEQoco3_hE4oXJl_hTtoAov_jXOOmli/view?usp=drive_link' target="_blank" className='btn' download={"Simpangyo_Resume"}>클라우드프로젝트보기 &gt;</a> */}
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