"use client"
import React, { useState,useEffect } from 'react';
import "./Portfolio.css";
import Menu from './Menu';
import Image from 'next/image';
import CustomModal from './CustomModal.js';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const [Items,setItems] = useState(Menu)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const openModal = (elem) => {
    setCurrentItem(elem)
    setIsModalOpen(true)
  };
  const closeModal = () => {
    setCurrentItem(null)
    setIsModalOpen(false)
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
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500
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
                <Image src={image} width={700} height={700} alt="image" className='work__img'/>
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
          <Box>
            <p onClick={closeModal} style={{cursor:"pointer",fontWeight:"bold",fontSize:"30px",width:"30px",position:"absolute"}}>X</p>
            <Box style={{paddingTop:"30px"}}>
              <Typography variant='h4' component="div" style={{textAlign:"center",fontWeight:"bold"}}>{currentItem && currentItem.subtitle}</Typography>
              <Typography variant='h6' component="div" style={{textAlign:"center"}}>{currentItem && currentItem.subcontent}</Typography>
              <Button onClick={()=>{currentItem && window.open(`${currentItem.url}`)}} style={{float:"right",cursor:"pointer"}}>사이트 바로가기</Button>
              <Button onClick={()=>{currentItem && window.open(`${currentItem.github}`)}} style={{float:"right",cursor:"pointer"}}>Github 바로가기</Button>
            </Box>
            <Box display="flex" style={{marginTop:"30px"}}>
              <Image src={currentItem && currentItem.main.image} width={500} height={500} alt='main'/>
              <Box style={{marginTop:"30px"}}>
                <Typography variant='h7' component="div" style={{fontSize:"25px",fontWeight:"bold"}}>{currentItem && currentItem.main.title}</Typography>
                <Typography variant='subtitle1' component="div" style={{marginTop:"20px",fontSize:"17px",fontWeight:"bold"}}>🛠️ 기능 요약</Typography>
                <Typography variant='subtitle2' component="div" style={{fontSize:"15px"}}>{currentItem && currentItem.main.skills}</Typography>
              </Box>
            </Box>
            <Typography variant='h5' component="div" style={{marginTop:"20px",fontWeight:"bold"}}>🛠️ 기능 상세</Typography><br></br>
            <Slider {...sliderSettings}>
                {currentItem && currentItem.features.map((e,index)=>{
                  return(
                      <Box display="flex" key={index}>
                        <Image src={e.image} width={350} height={350} alt='image' style={{float:"left"}}/>
                        <Box marginLeft={50}>
                          <Typography variant='subtitle1' component="div" style={{fontWeight:"bold",marginBottom:"15px"}}>{e.title}</Typography>
                          {e.contents.map((e,index)=> {return(<Typography variant='subtitle2' component="div" key={index}>{e}</Typography>)})}<br></br>
                          <Typography variant='subtitle2' component="div">{e.skills}</Typography>
                        </Box>
                      </Box>
                  )
                })}
            </Slider>
          </Box>
        </CustomModal>
      </div>
    </section>
  )
}


export default Portfolio