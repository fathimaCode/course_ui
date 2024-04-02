import React from 'react'
import Header from '../components/header'
import HomeContent from '../components/home_content'
import About from '../components/about'
import Staff from '../components/staff'
import Contact from '../components/contact'

function Home() {
  return (
    <>
      <Header/>
      <HomeContent/>
      <About/>
      <Staff/>
      <Contact/>
    </>
  )
}

export default Home