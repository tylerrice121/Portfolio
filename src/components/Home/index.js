import React from 'react'
import { StyledHome } from './HomeElements'
import Button from '@mui/material/Button'
import {Link as LinkS } from 'react-scroll'
import {GitLogo, LinkLogo } from '../Footer/FooterElements'
import serious from '/Users/tylerrice/Code/Portfolio/public/images/drama.jpg'

const Home = () => {
    return (
        <StyledHome id="home">

            <div className="BG">
                <div className="info">
                    <h1 className="myname">Tyler Rice</h1>
                    <h1 className="description">Full-stack software engineer</h1>
                    <Button variant="outlined">
                        <LinkS to='projects'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>
                            View My Work
                        </LinkS>
                    </Button>
                </div>
                <div className="logos">
                    <div className="leftline">
                    </div>
                    <div className="logolinks">
                        <a className="link" href='https://github.com/tylerrice121' target='_blank' rel="noreferrer" aria-label="github"><GitLogo/></a>
                        <a className="link" href='https://www.linkedin.com/in/tyler-rice-1b525595/' target='_blank' rel="noreferrer" aria-label="linkedin"><LinkLogo/></a>
                    </div>
                    <div className="rightline">
                    </div>
                </div>
            </div>
            <img src={serious} alt="" />

        </StyledHome>
    )
}

export default Home