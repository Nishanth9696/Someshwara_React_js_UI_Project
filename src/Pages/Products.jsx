import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Product1 from '../assets/Products/Product1.svg'
import Product2 from '../assets/Products/Product2.svg'
import Product3 from '../assets/Products/Product3.svg'

// import Product1 from "../../assets/Products/Product1.svg"
// import Product2 from "../../assets/Products/Product2.svg"
// import Product3 from "../../assets/Products/Product3.svg"

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
]
const Products = () => {
  return (
    <div>
      <Navbar/>
      <>
      <motion.div 
      variants={SlideUp(1.1)}
      initial="hidden"
      whileInView={"visible"}
      className="text-black font-semibold pt-10 text-4xl py-3 text-center w-100%">Our Products</motion.div>
      {ProductDetauils.map((item) => {
            return (
                <div className="container  ">
                    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[400px] relative gap-12'>
                        {/* Hero image */}
                        <div className="flex justify-center items-center">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 30, delay: 0.8 }}
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
                        className="flex flex-col justify-center py-14 md:py-0 ">
                            <div className="text-center md:text-left  ">
                            <p className="text-primary font-medium text-sm " >   
                                {item.location} </p>
                            <p className="text-black font-medium text-3xl py-3">  
                                {item.title}</p>
                            <p className="text-gray-600 font-semibold text-sm "
                                > {item.subtitle}</p>
                                <div className="pb-7">
                                <p className="text-sm text-gray-500 px-5 py-3 leading-loose sm:text-left sm:list-none">{item.desc}</p>
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

export default Products
