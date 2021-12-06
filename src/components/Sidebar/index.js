import React from 'react'
import { StyledSidebar, Icon, CloseIcon, Logo } from './SidebarElements'
import {Link as LinkS } from 'react-scroll'
import logoTR from '/Users/tylerrice/Code/Portfolio/src/images/logoTR.png'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <StyledSidebar isOpen={isOpen} onClick={toggle}>
            <Logo>
                <LinkS onClick={toggle} to='home'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>
                    <img src={logoTR} alt="logoTR" style={{width: '75px'}}/>
                </LinkS>                 
            </Logo>
            <Icon onClick={toggle}> 
                <CloseIcon />
            </Icon>
            <nav>
                <ul>
                    <li><LinkS onClick={toggle} to='about'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>About</LinkS></li>
                    <li><LinkS onClick={toggle} to='projects'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>Projects</LinkS></li>
                    <li><LinkS onClick={toggle} to='contact' smooth={true} duration={450} spy={true} hashSpy={true} offset={-100}>Contact</LinkS></li>
                </ul>
            </nav>
        </StyledSidebar>
    )
}

export default Sidebar
