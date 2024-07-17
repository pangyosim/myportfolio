"use client"
import React, { useState,useEffect } from 'react';
import "./Portfolio.css";
import Menu from './Menu';
import Image from 'next/image';
import CustomModal from './CustomModal.js';
import Button from "@mui/material/Button";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="modal__arrow__next"
      onClick={onClick}
    >
      <i class="fa-solid fa-chevron-right">&nbsp;next</i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="modal__arrow__prev"
      onClick={onClick}
    >
      <i class="fa-solid fa-chevron-left">&nbsp;prev</i>
    </div>
  );
}
const Portfolio = () => {
  const [Items,setItems] = useState(Menu)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [ariaHidden, setAriaHidden] = useState(false);
  const openModal = (elem) => {
    setCurrentItem(elem)
    setAriaHidden(true)
    setIsModalOpen(true)
  };
  const closeModal = () => {
    setCurrentItem(null)
    setIsModalOpen(false)
    setAriaHidden(false)
  };
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  useEffect(()=>{
    const eventHandler = () => {
      var windowHeight = window.innerHeight
      const container = document.querySelector('#work')
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

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    arrows: true,
    prevArrow : <SamplePrevArrow/>,	
	  nextArrow : <SampleNextArrow/>,
  };

  return (
    <section className='work container section' id='work'>
      <h2 className='section__title' style={{textAlign:"center"}}>🎨 PROJECT / BLOG</h2>
      <div className='work__filters'>
        <span className='work__item' onClick={() => setItems(Menu)}>ALL</span>
        <span className='work__item' onClick={() => filterItem ("PROJECT")}>PROJECT</span>
        <span className='work__item' onClick={() => filterItem ("BLOG")}>BLOG</span>
      </div>
      <br></br>
      <div className='work__container grid'>
        {Items.map((elem,index) => {
          const{id,image,title,category,content,url,iname,buttontitle,subtitle,features,subcontent,github,main} = elem;
          return (
            <div className='work__card' key={index}>
              <div className='work__thumbnail'>
                <Image src={image} width={700} height={700} alt="image" className='work__img' aria-hidden="true"/>
                <div className='work__mask'></div>
              </div>

              <span className='work__category' style={{backgroundColor: category === "PROJECT" ? "#2a3ea7" : "#00671d"}}>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <a className="work__content">{content}</a>
              {category === "PROJECT" ? 
                <Button className='work__button' onClick={()=> openModal(elem)}>&nbsp;<i className={`${iname}`}></i> {buttontitle}&nbsp;</Button> :
                <a href={url} className='work__button' target='__blank'>&nbsp;<i className={`${iname}`}></i> {buttontitle}&nbsp;</a>
              }
            </div>
          )
        })}
        <CustomModal
          open={isModalOpen}
          onClose={closeModal}
        >
          <div className="modal__wrap" aria-hidden={ariaHidden}>
            {/* <p className="modal__close__text" onClick={closeModal}>X</p> */}
            <p className="modal__close__text"><i className="fa-solid fa-xmark" onClick={closeModal} style={{fontSize:"30px",position:"absolute"}}></i></p>
            <div className="modal__title">
              <h1>{currentItem && currentItem.subtitle}</h1>
              <h3>{currentItem && currentItem.subcontent}</h3>
            </div>
            <div className="modal__moreview">
              <Button onClick={()=>{currentItem && window.open(`${currentItem.url}`)}}><i className="fa-regular fa-paper-plane"></i>&nbsp;사이트 바로가기</Button>
              <Button onClick={()=>{currentItem && window.open(`${currentItem.github}`)}}><i className="fa-brands fa-github"></i>&nbsp;Github 바로가기</Button>
            </div>
            <div className="modal__main">
              <Image src={currentItem && currentItem.main.image} width={500} height={500} alt='main' />
              <div className="modal__main__inner">
                <p className='modal__main__title'>{currentItem && currentItem.main.title}</p>
                <p className="modal__main__features">🧑🏻‍💻 WORKS</p>
                <p className="modal__main__skills">{currentItem && currentItem.main.skills}</p>
              </div>
            </div>
            <h2 className="modal__main__skills__details">📍 FEATURE DETAILS</h2><br></br>
            <Slider {...sliderSettings}>
                {currentItem && currentItem.features.map((e,index)=>{
                  return(
                      <div className="modal__skills__details__wrap" key={index} aria-hidden={ariaHidden}>
                        <Image src={e.image} width={350} height={350} alt='image' style={{float:"left"}} />
                        <div className="modal__skills__details__inner" >
                          <p className="modal__skills__details__title">{e.title}</p>
                          {e.contents.map((e,index)=> {return(<p key={index}>{e}</p>)})}<br></br>
                          <p style={{fontWeight:"bold"}}>⚡️TOOLS</p>
                          <p>{e.skills}</p>
                        </div>
                      </div>
                  )
                })}
            </Slider>
          </div>
        </CustomModal>
      </div>
    </section>
  )
}


export default Portfolio