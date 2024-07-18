import React from 'react'
import Image from 'next/image';

const AboutBox = () => {
  return (
     <div className='about__boxes grid'>

        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/java.png" alt="javaimage" width={25} height={25} style={{width: 25, height: 25}}/>
                <span className='about__title' style={{color:"#f99c24"}}>&nbsp;Java</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/spring.png" alt="springimage" width={25} height={25} style={{width: 25, height: 25}}/>
                <span className='about__title' style={{color:"#72b446"}}>&nbsp;Spring</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/jpa.png" alt="jpaimage" width={35} height={30} style={{width: 35, height: 30}}/>
                <span className='about__title'>&nbsp;JPA</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/mybatis.png" alt="mybatisimage" width={30} height={30} style={{width: 30, height: 30}}/>
                <span className='about__title' style={{color:"black"}}>&nbsp;Mybatis</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/mysql.png" alt="mysqlimage" width={30} height={30} style={{width: 30, height: 30}}/>
                <span className='about__title' style={{color:"#12668e"}}>&nbsp;My</span><span className='about__title' style={{color:"#e59115"}}>SQL</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/docker.png" alt="dockerimage" width={40} height={30} style={{width: 40, height: 30}}/>
                <span className='about__title' style={{color:"#384c53"}}>&nbsp;Docker</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/jenkins.png" alt="jenkinsimage" width={25} height={25} style={{width: 25, height: 25}}/>
                <span className='about__title' style={{color:"black"}}>&nbsp;Jenkins</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/oracle.png" alt="oracleimage" width={35} height={25} style={{width: 35, height: 25}}/>
                <span className='about__title' style={{color:"black"}}>&nbsp;Oracle</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/aws.png" alt="awsimage" width={40} height={25} style={{width: 40, height: 25}}/>
                <span className='about__title'>&nbsp;&nbsp;AWS</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/github.png" alt="githubimage" width={30} height={30} style={{width: 30, height: 30}}/>
                <span className='about__title' style={{color:"black"}}>&nbsp;Github</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/notion.png" alt="notionimage" width={30} height={30} style={{width: 30, height: 30}}/>
                <span className='about__title' style={{color:"black"}}>&nbsp;Notion</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/slack.png" alt="slackimage" width={25} height={25} style={{width: 25, height: 25}}/>
                <span className='about__title' style={{color:"black"}}>&nbsp;Slack</span>
            </div>
        </div>
        <div className='about__box'>
            <div className='about__box__inner'>
                <Image className="about__image" src="/img/jira.png" alt="jiraimage" width={25} height={25} style={{width: 25, height: 25}}/>
                <span className='about__title' style={{color:"#2c3d5d"}}>&nbsp;Jira</span>
            </div>
        </div>
     </div>
  )
}

export default AboutBox