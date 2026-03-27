import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Product1 from "../assets/Products/Product1.svg"
import Product2 from "../assets/Products/Product2.svg"
import Product3 from "../assets/Products/Product3.svg"
import Product4 from "../assets/Products/Product4.svg"
import Product5 from "../assets/Products/Product5.svg"
import Product6 from "../assets/Products/Product6.svg"

const ProductDetauils = [
    {
      id: 1,
      icon: Product1,
      location: "Professionals | Schools | Edutech companies",
      title: "VExhibit",
      subtitle: "VExhibit: Create games/interactive experiences in 1/10 th of the time and cost",
      desc: <ul className='list-disc'>
                <li>Logical Programming</li>
                <li>Visual Coding Platform</li>
                <li>2D Edutech Games / Gamified learning content</li>
                <li>Augmented Reality and 3D Web experiences</li>
         </ul>,
    },
    {
        id: 2,
        icon: Product2,
        location: "AR Painter | Edutech | Augmented Reality | children",
        title: "AR Painter",
        subtitle: "AR Painter: Bring back kids to books using technology",
        desc: <ul className='list-disc'>
                  <li>Logical Programming</li>
                  <li>Painting / Coloring</li>
                  <li>3D & Augmented Reality</li>
                  <li>Sharing</li>
           </ul>,
      },
      {
        id: 3,
        icon: Product3,
        location: "Unity 3D Game",
        title: "Super Bicycle Racing",
        subtitle: "Super Bicycle Racing Game : Developed and published by Someshwara",
        desc: <ul className='list-disc'>
                  <li>11+ million downloads</li>
                  <li>Best bicycle racing game ever</li>
                  <li>3D & Augmented Reality</li>
                  <li>Machine learned opponents (Reinforcement machine learning)</li>
           </ul>,
      },
      {
        id: 4,
        icon: Product4,
        location: "Metaverse | RealEstate | VR | Mobile",
        title: "Metaverse : Real Estate",
        subtitle: "Metaverse Real Estate : A new way of selling Real Estate created in Metaverse",
        desc: <ul className='list-disc'>
                  <li className='text-gray-700'>EdutechMeteverse</li>
                  <p className='text-gray-500 leading-normal pb-2'> A 3D metaverse with real time communication has been created to
                  facilitate buyer and seller comunnication from various type of devices. </p>
                  <li className='text-gray-700'>3D & Augmented Reality</li>
                  <p className='text-gray-500 leading-normal pb-2'> A real 3D environment with detailed movement or 360 photos with hotspot
                  navigation. Details of every interest in the 3D scene. </p>
           </ul>,
      },
      {
        id: 5,
        icon: Product5,
        location: "Virtual Reality",
        title: "Interactive VR Physics experiments",
        subtitle: "Pilikula VR",
        desc: <ul className='list-disc'>
                  <li className='text-gray-700'>Award Winning</li>
                  <p className='text-gray-500 leading-normal pb-2'> National Science Congress 2020: Happy to announce that the stall was
                        judged by the jury as the Most Innovative Stall in the Expo -- H Honne
                        Gowda, Managing Director, Karnataka Science and Technology Promotion
                        Society</p>
                  <li className='text-gray-700'>Creating the Experience</li>
                  <p className='text-gray-500 leading-normal pb-2'> Large campus and different zones. We had to focus on what creates the
                  most impact while balancing what is feasible in the virtual world. </p>
           </ul>,
      },
      {
        id: 6,
        icon: Product6,
        location: "Unity 3D Simulation",
        title: "3D product simulation in browser",
        subtitle: "Super Bicycle Racing Game : Developed and published by Someshwara",
        desc: <ul className='list-disc'>
                  <li className='text-gray-700 sm:text-left xs:text-left'>Product showcase</li>
                  <p className='text-gray-500 leading-normal pb-2'> Company’s Sales team was finding it difficult to showcase their complex
                        undersea products and make prospects fully understand the product
                        features, as these products integrated into the customer’s Production
                        ecosystem</p>
                  <li className='text-gray-700 '>Full fledged realistic 3d simulation in WebGL</li>
                  <li className='text-gray-700'>Support for WebGL 1.0 and WebGL 2.0</li>
                  
           </ul>,
      },

]
const Portfolio = () => {
  return (
    <div>
      <Navbar/>
      <>
      <motion.div 
      variants={SlideUp(1.1)}
      initial="hidden"
      whileInView={"visible"}
      className="text-black font-semibold pt-10 text-4xl py-3 text-center w-100%">Our Portfolio</motion.div>
      {ProductDetauils.map((item) => {
            return (
                <div className="container  ">
                    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[400px] relative gap-12'>
                        {/* Hero image */}
                        <div className="flex justify-center items-center">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 30 , delay: 0.5 }}
                                src={item.icon}
                                alt=""
                                className="w-fill"
                            />
                        </div>
                    {/* Left-section */}
                        <motion.div 
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
                        className="flex flex-col justify-center py-14 md:pr-10  md:py-0 ">
                            <div className="text-center md:text-left  ">
                            <p className="text-primary font-medium text-sm " >   
                                {item.location} </p>
                            <p className="text-black font-medium text-3xl py-3">  
                                {item.title}</p>
                            <p className="text-gray-600 font-semibold text-sm "
                                > {item.subtitle}</p>
                                <div className="pb-7">
                                <p className="text-sm text-gray-500 px-5 py-3 leading-loose sm:text-left xs:text-left sm:list-none">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            )
             })}
      </>
      <Footer/>
    </div>
  )
}

export default Portfolio
