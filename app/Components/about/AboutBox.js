import React from 'react'
import Image from 'next/image';

const AboutBox = () => {
  return (
     <div className='about__boxes grid'>

        <div className='about__box'>
            <div className='about__box__inner'>
                <Image src="/img/java.png" alt="javaimage" width={20} height={20}/>
                <span className='about__title' style={{color:"#f99c24"}}>&nbsp;Java</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image src="/img/spring.png" alt="springimage" width={25} height={25}/>
                <span className='about__title' style={{color:"#72b446"}}>&nbsp;Spring</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image src="/img/jpa.png" alt="jpaimage" width={30} height={30}/>
                <span className='about__title'>&nbsp;JPA</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image src="/img/mybatis.png" alt="mybatisimage" width={30} height={30}/>
                <span className='about__title' style={{color:"black"}}>&nbsp;Mybatis</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image src="/img/mysql.png" alt="mysqlimage" width={30} height={30}/>
                <span className='about__title' style={{color:"#12668e"}}>&nbsp;My</span><span className='about__title' style={{color:"#e59115"}}>SQL</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image src="/img/oracle.png" alt="oracleimage" width={30} height={30}/>
                <span className='about__title'style={{color:"black"}}>&nbsp;Oracle</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image src="/img/aws.png" alt="awsimage" width={30} height={30}/>
                <span className='about__title'>&nbsp;AWS</span>
            </div>
        </div>
     </div>
  )
}

export default AboutBox