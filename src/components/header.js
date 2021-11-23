import * as React from 'react'
import {FaBars} from 'react-icons/fa'
import { StyledHeader, MobileIcon } from '../styles'
import {Link as LinkS } from 'react-scroll'


const Header = ({toggle}) => {
    return (
        <StyledHeader> 
            <nav>
                <ul>
                    <li><LinkS to='home'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>Home</LinkS></li>
                    <li><LinkS to='about'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>About</LinkS></li>
                    <li><LinkS to='projects'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>Projects</LinkS></li>
                    <li><LinkS to='contact' smooth={true} duration={450} spy={true} hashSpy={true} offset={-100}>Contact</LinkS></li>
                </ul>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            </nav>
        </StyledHeader>
    )
}
export default Header