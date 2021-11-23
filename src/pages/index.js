import * as React from 'react'
import Layout from '../components/layout'
import Home from './Home/index'
import About from './About/about'
import Projects from './Projects/projects'
import Contacts from './Contacts/contacts'

const Index = () => {
  return (
      <Layout>
        <Home/>
        <About/>
        <Projects/>
        <Contacts/>
      </Layout>
  )
}

export default Index