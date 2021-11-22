import * as React from 'react'
import GlobalStyle from '../styles'
import Footer from './footer'
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
            <main>
                {children}
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default Layout