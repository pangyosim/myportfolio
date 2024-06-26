import React from 'react'

const AboutBox = () => {
  return (
     <div className='about__boxes grid'>

        <div className='about__box'>
            <div>
                <h3 className='about__title'>Java</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
        <div className='about__box'>
            <div>
                <h3 className='about__title'>JPA</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
        <div className='about__box'>
            <div>
                <h3 className='about__title'>Mybatis</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
        {/* <div className='about__box'>
            <div>
                <h3 className='about__title'>JSP</h3>
                <span className='about__subtitle'></span>
            </div>
        </div> */}
        <div className='about__box'>
            <div>
                <h3 className='about__title'>Oracle</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
        <div className='about__box'>
            <div>
                <h3 className='about__title'>React</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
        <div className='about__box'>
            <div>
                <h3 className='about__title'>Springboot</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
    
        <div className='about__box'>
            <div>
                <h3 className='about__title'>AWS cloud</h3>
                <span className='about__subtitle'></span>
            </div>
        </div>
     </div>
  )
}

export default AboutBox