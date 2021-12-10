import * as React from 'react'
import {FaBars} from 'react-icons/fa'
import { StyledHeader, MobileIcon } from '../styles'
import {Link as LinkS } from 'react-scroll'
import logoTR from '../images/logoTR.png'
import { useState } from 'react'



const Header = ({toggle}) => {

    const [navbar, setNavbar] = useState(false)


    const changeBG = () => {
        if (window.scrollY >= 800) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const isBrowser = () => typeof window !== "undefined"
    isBrowser() && window.addEventListener('scroll', changeBG)

    return (
        <StyledHeader style={navbar ? {backgroundColor: '#212121', border: 'none'} : {backgroundColor: 'transparent'}}> 
            <nav className="navbar">
                <div>
                    <LinkS to='home'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>
                        <img src={logoTR} alt="logoTR" style={{width: '75px'}}/>
                    </LinkS>
                </div>
                <ul>
                    <li><LinkS to='about'smooth={true} duration={450} spy={true} hashSpy={true}>About</LinkS></li>
                    <li><LinkS to='projects'smooth={true} duration={450} offset={-100} spy={true} hashSpy={true}>Projects</LinkS></li>
                    <li><LinkS to='contact' smooth={true} duration={450} spy={true} hashSpy={true} offset={-100}>Contact</LinkS></li>
                    <li><a href='/resume' target='_blank' rel="noreferrer" aria-label="linkedin">Resume</a></li>
                </ul>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            </nav>
        </StyledHeader>
    )
}
export default Header