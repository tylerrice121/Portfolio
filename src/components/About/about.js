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
                <div className="titletext">
                    <div className="textsection">
                        <p>Hello! I'm a full-stack software engineer based out of Chicago IL. I love to code and build things for the web.</p>
                        <br />
                        <p>I was an audio engineer for 5 years working with musicians from all over the world.</p>
                        <br />
                        <p>I strive to make the web a creative and inspiring place. Please see some of my recent projects below.</p>
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