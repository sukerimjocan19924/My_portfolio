import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Tools from '../../components/tools/Tools'
import Project from '../../components/project/Project'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Tools/>
      <Project/>
    </div>
  )
}

export default Home
