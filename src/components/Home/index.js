import React from 'react'
import { StyledHome } from './HomeElements'
import Button from '@mui/material/Button'
import {Link as LinkS } from 'react-scroll'

const Home = () => {
    return (
        <StyledHome id="home">
            <div>
                <p>Hello, I'm</p>
                <h1 class="myname">Tyler Rice</h1>
                <h1 class="description">Full-stack software engineer</h1>
                <Button variant="outlined">
                    <LinkS to='projects'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>
                        View My Work
                    </LinkS>
                </Button>
            </div>
        </StyledHome>
    )
}

export default Home