import React from 'react'
import { StyledHome } from './HomeElements'
import Button from '@mui/material/Button'
import {Link as LinkS } from 'react-scroll'
import {GitLogo, LinkLogo } from '../Footer/FooterElements';

const Home = () => {
    return (
        <StyledHome id="home">
            <div class="info">
                {/* <p>Hello, I'm</p> */}
                <h1 class="myname">Tyler Rice</h1>
                <h1 class="description">Full-stack software engineer</h1>
                <Button variant="outlined">
                    <LinkS to='projects'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>
                        View My Work
                    </LinkS>
                </Button>
            </div>
            <div class="logos">
                <div class="leftline">
                </div>
                <div class="logolinks">
                    <a class="link" href='https://github.com/tylerrice121' target='_blank' rel="noreferrer" aria-label="github"><GitLogo/></a>
                    <a class="link" href='https://www.linkedin.com/in/tyler-rice-1b525595/' target='_blank' rel="noreferrer" aria-label="linkedin"><LinkLogo/></a>
                </div>
                <div class="rightline">
                </div>
            </div>
        </StyledHome>
    )
}

export default Home