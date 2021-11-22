import React from 'react'
import { StyledSidebar, Icon, CloseIcon } from './SidebarElements'
import {Link} from 'gatsby'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <StyledSidebar isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}> 
                <CloseIcon />
            </Icon>
            <nav>
                <ul>
                    <li><Link to='/' onClick={toggle}>Home</Link></li>
                    <li><Link to='/about' onClick={toggle}>About</Link></li>
                    <li><Link to='/projects' onClick={toggle}>Projects</Link></li>
                    <li><Link to='/contact' onClick={toggle}>Contact</Link></li>
                </ul>
            </nav>
        </StyledSidebar>
    )
}

export default Sidebar
