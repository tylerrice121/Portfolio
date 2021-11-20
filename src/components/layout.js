import * as React from 'react'
import GlobalStyle from '../styles'
import Footer from './footer'
import Header from './header'



const Layout = ({children}) => {

    return (
        <>
        <GlobalStyle/>
        <div className="App">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default Layout