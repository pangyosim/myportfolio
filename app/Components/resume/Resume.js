import React,{useEffect} from 'react';
import "./Resume.css";
import Data from './Data';
import Card from './Card';

const Resume = () => {
  useEffect(()=>{
    const eventHandler = () => {
      var windowHeight = window.innerHeight
      const container = document.querySelector('#resume')
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
    <section className='resume container section' id='resume'>
      <h2 className='section__title'>
        🎓 EDUCATION / CAREER
      </h2>

      <div className='resume__container grid'>
        <div className='timeline grid'> 
        {Data.map((val, id) =>{
            if(val.category === "education") {
              return(
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/> 
              )
            }
        })}
        </div>

        <div className='timeline grid'> 
        {Data.map((val, index) =>{
            if(val.category === "experience") {
              return(
                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/> 
              )
            }
        })}
        </div>


      </div>
    </section>
  )
}

export default Resume