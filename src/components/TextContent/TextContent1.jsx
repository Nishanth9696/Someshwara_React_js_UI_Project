import React from 'react'
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const TextContent1 = () => {
  return (
    <motion.div 
    variants={SlideUp(1.1)}
    initial="hidden"
    whileInView={"visible"} 
    className='container py-10'>
      <p className='text-black font-bold text-3xl line-clamp-5 justify-center border-gray-300 border-b-2 pb-6 lg:text-left sm:text-center '>
        We're Team of Creative Soul Clutch Creative Agency, <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>We're dedicated to helping businesses of all sizes thrive in the digital age.</span>
        </p>
        <p className='lg:text-right py-6 font-light text-sm lg:pl-40 sm:text-center sm:pl-0'>
        Our team of experts leverages cutting-edge technology and innovative design principles to create digital products that not only meet but exceed user expectations. From initial research and strategy to the final pixel-perfect design, we are dedicated to crafting experiences that are seamless, enjoyable, and impactful.
        </p>
    </motion.div>
  )
}

export default TextContent1
