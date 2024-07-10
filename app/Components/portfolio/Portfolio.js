"use client"
import React, { useState,useEffect } from 'react';
import "./Portfolio.css";
import Menu from './Menu';
import Image from 'next/image';
// import Pay from './Pay';

const Portfolio = () => {

  const [Items,setItems] = useState(Menu)

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
        window.removeEventListener('scroll',eventHandler)
      }
    }
    window.addEventListener('scroll',eventHandler)
  },[])
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title' style={{textAlign:"center"}}>🛠️ PROJECT / BLOG</h2>
      <div className='work__filters'>
        <span className='work__item' onClick={() => setItems(Menu)}>ALL</span>
        <span className='work__item' onClick={() => filterItem ("PROJECT")}>PROJECT</span>
        <span className='work__item' onClick={() => filterItem ("BLOG")}>BLOG</span>
        {/* <span className='work__item' onClick={() => filterItem ("Sample")}>Sample</span> */}
      </div>
      <br></br>
      <div className='work__container grid'>

        {Items.map((elem) => {
          const{id,image, title, category,content,url,iname,buttontitle} = elem;
          return (
            <div className='work__card' key={id}>
              <div className='work__thumbnail'>
                <Image src={image} width={1000} height={1000} alt="" className='work__img'/>
                <div className='work__mask'></div>
              </div>

              <span className='work__category' style={{backgroundColor: category === "PROJECT" ? "#2a3ea7" : "#1ec997"}}>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <a className="work__content">{content}</a>
              <a href={url} className='work__button' target="_blank">&nbsp;<i className={`${iname}`}></i> {buttontitle}&nbsp;</a>
              
              {/* <i className='icon-link work__button-icon'></i> */}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio