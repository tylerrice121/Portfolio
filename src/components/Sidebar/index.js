import React from 'react'
import { StyledSidebar, Icon, CloseIcon } from './SidebarElements'
import {Link as LinkS } from 'react-scroll'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <StyledSidebar isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}> 
                <CloseIcon />
            </Icon>
            <nav>
                <ul>
                    <li><LinkS onClick={toggle} to='home'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>Home</LinkS></li>
                    <li><LinkS onClick={toggle} to='about'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>About</LinkS></li>
                    <li><LinkS onClick={toggle} to='projects'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>Projects</LinkS></li>
                    <li><LinkS onClick={toggle} to='contact' smooth={true} duration={450} spy={true} hashSpy={true} offset={-100}>Contact</LinkS></li>
                </ul>
            </nav>
        </StyledSidebar>
    )
}

export default Sidebar
