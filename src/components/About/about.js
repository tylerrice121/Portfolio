import React from 'react'
import { StyledAbout } from './AboutElements'
import { Paper } from '@mui/material';

const About = () => {
    return (
        <StyledAbout id="about">
            <h1>About Me</h1>
            <div className="textsection">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae error quo adipisci possimus architecto nostrum explicabo repudiandae illo? Magni dolore veritatis architecto esse, nostrum alias nesciunt ullam obcaecati incidunt!</p>
            </div>
        </StyledAbout>
    )
}

export default About