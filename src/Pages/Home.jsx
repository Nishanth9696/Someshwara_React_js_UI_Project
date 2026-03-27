import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import NumberCounter from '../components/NumberCounter/NumberCounter'
import ContentSection1 from '../components/ContentSection1/ContentSection1'
import TextContent1 from '../components/TextContent/TextContent1'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import TextContent2 from '../components/TextContent/TextContent2'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components//Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NumberCounter/>
      <ContentSection1/>
      <TextContent1/>
      <ServiceCard/>
      <TextContent2/>
      <Banner/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
