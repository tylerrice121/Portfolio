import * as React from 'react'
import Layout from '../components/layout'
import Home from '../components/Home/index'
import About from '../components/About/about'
import Projects from '../components/Projects/projects'
import Contact from '../components/Contact/contact'


const Index = () => {

  return (
      <Layout>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </Layout>
  )
}

export default Index