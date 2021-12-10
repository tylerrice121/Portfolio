import React from 'react'
import { StyledSidebar, Icon, CloseIcon, Logo } from './SidebarElements'
import {Link as LinkS } from 'react-scroll'
import logoTR from '../../images/logoTR.png'
import { useState } from 'react'

const Sidebar = ({toggle, isOpen}) => {

    const [dropdown, setDropdown] = useState(false)


    const changeBG = () => {
        if (window.scrollY >= 400) {
            setDropdown(true);
        } else {
            setDropdown(false);
        }
    }

    const isBrowser = () => typeof window !== "undefined"
    isBrowser() && window.addEventListener('scroll', changeBG)
    return (
        <StyledSidebar isOpen={isOpen} onClick={toggle} style={dropdown ? {border: 'none'} : {borderBottom: '1px solid white'}}>
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
                    <li><LinkS onClick={toggle} to='about'smooth={true} duration={450} spy={true} hashSpy={true}>About</LinkS></li>
                    <li><LinkS onClick={toggle} to='projects'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>Projects</LinkS></li>
                    <li><LinkS onClick={toggle} to='contact' smooth={true} duration={450} spy={true} hashSpy={true} offset={-100}>Contact</LinkS></li>
                    <li><a href='/resume' target='_blank' rel="noreferrer" aria-label="linkedin">Resume</a></li>
                </ul>
            </nav>
        </StyledSidebar>
    )
}

export default Sidebar
