import * as React from 'react'
import {GlobalStyle, StyledMain} from '../styles'
import Footer from './Footer/footer'
import Header from './header'
import Sidebar from './Sidebar'
import { useState } from 'react'

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        <GlobalStyle/>
        <div className="App">
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <StyledMain>
                {children}
            </StyledMain>
            <Footer/>
        </div>
        </>
    )
}

export default Layout