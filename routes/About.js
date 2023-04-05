import React from 'react'
import Heroimg2 from '../Components/Heroimg2'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutContent from '../Components/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg2 heading="About." text="I m a friendly Front-End Developer"></Heroimg2>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  )
}

export default About
