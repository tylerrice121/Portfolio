import * as React from 'react'
import { StyledHeader } from '../styles'
import {Link} from 'gatsby'

const Header = () => {
    return (
        <StyledHeader> 
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </StyledHeader>
    )
}
export default Header