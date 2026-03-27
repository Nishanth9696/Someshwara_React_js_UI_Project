import React from 'react'
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const TextContent1 = () => {
  return (
    <motion.div 
    variants={SlideUp(1.1)}
    initial="hidden"
    whileInView={"visible"} 
    className='container pb-10 pt-20'>
      <p className='text-black font-bold text-3xl line-clamp-5 justify-center border-gray-300 border-b-2 pb-6 lg:text-left sm:text-center '>
      At Clutch Creative Agency, <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>we’re committed to empowering businesses of all sizes to succeed in the digital era.</span>
        </p>
        <p className='lg:text-right py-6 font-light text-sm sm:text-center sm:pl-0'>
        Our mission is to engineer automobiles that seamlessly blend cutting-edge technology, superior performance, and unparalleled comfort        </p>
    </motion.div>
  )
}

export default TextContent1
