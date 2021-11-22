import * as React from 'react'
import {FaBars} from 'react-icons/fa'
import { StyledHeader, MobileIcon } from '../styles'
import {Link} from 'gatsby'
// import scrollTo from 'gatsby-plugin-smoothscroll';


const Header = ({toggle}) => {
    return (
        <StyledHeader> 
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            </nav>
        </StyledHeader>
    )
}
export default Header