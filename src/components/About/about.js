import React from 'react'
import { StyledAbout } from './AboutElements'
import typic from '../../images/typic.jpg'


const About = () => {
    return (
        <StyledAbout id="about">
            <div className="abtme">
                <div className="left"></div>
                <h1>About Me</h1>
                <div className="right"></div>
            </div>
            <div className="content">
                <div className="imgdiv2">
                    <img src={typic} alt="typic" />
                </div>
                <div className="titletext">
                    <div className="textsection">
                        <p> Hello! I’m a full-stack software engineer based out of Chicago, IL. I love to code and build things for the web.</p>
                        <br />
                        <p> I graduated from General Assembly’s Software Engineering Immersive program where I studied Javascript, Python, React and Django among many other things. It was here that I found my passion for coding and my excitement for building things from scratch. I have always been one to push myself to learn and grow, which is why I have such a passion for coding and software. The tech field is always changing and I strive to keep up and change with it.  </p>
                        <br />
                        <p> Before software engineering, I was an audio engineer, studio manager and musician in Chicago. I produced, wrote and recorded with numerous amazing artists of all different styles and backgrounds. My past experience in the arts has given me a unique and creative perspective on collaboration and building applications.</p>
                        <br />
                        <p> I strive to make the web an inspiring place. Please see some of my recent projects below.</p>
                    </div>
                </div>
                <div className="imgdiv">
                    <img src={typic} alt="typic" />
                </div>
            </div>
        </StyledAbout>
    )
}

export default About