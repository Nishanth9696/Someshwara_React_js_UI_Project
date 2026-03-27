import React from 'react';
import Heroimage from '../../assets/website/Hero.png'
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";


const Hero = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Left-section */}
        <div className="flex flex-col justify-center py-12 md:pr-10 xl:pr-15 md:py-0">
          <div className="text-center md:text-left space-y-6 ">
          <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-black font-thin text-5xl"
            >
              Leaders in <span className="text-primary font-semibold">GIS, AI/ML, Life Sciences, and Immersive Technologies</span>
            </motion.p>
            <motion.p
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className='text-base font-light text-lightcolor'
            >
              We are pioneers in digital transformation,<span className='font-bold'>Specializing in GIS, AI/ML, AR/VR, and life sciences innovation.</span> Our commitment to pushing technological boundaries enables us to deliver forward-thinking solutions that drive success in various industries, from Manufacturing and Defense to EdTech, Healthcare, and Gaming.
            </motion.p>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className='items-center space-x-6 flex-auto'
            >
            <button className="text-white bg-gradient-to-r from-secondary to-primary rounded-full px-6 py-2 font-semibold mb-5 hover:shadow-md">Get  Quate</button>
            <button className="text-secondarybutton border-secondarybutton bg-gray-200 hover:text-white hover:bg-gray-500 rounded-full px-6 py-2 font-semibold mb-5 hover:shadow-md">How it works</button>
            </motion.p>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
            src={Heroimage}
            alt=""
            className="w-[400px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
