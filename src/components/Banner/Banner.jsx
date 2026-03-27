import React from 'react'
import Image1 from '../../assets/website/Image1.svg'
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px] relative">
        {/* Left-section */}
        <div className="flex flex-col justify-center py-14 md:pr-10 xl:pr-20 md:py-0">
          <div className="text-center md:text-left  ">
          <motion.p
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"} 
              className="text-black font-medium text-3xl"
            >
              We Help in GIS Solutions, AI/ML Integration, AR/VR, and Immersive Technology Development
            </motion.p>
            <motion.p
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"} 
              className='text-lightcolor lg:text-left py-6 font-light text-sm sm:text-center sm:pl-0'
            >
              Founded in 2014 in the Silicon Valley of India, Bengaluru, Someshwara is a startup with a strong focus on emerging deep technologies, including GIS, AI/ML, and AR/VR. Our expertise lies in harnessing the power of these technologies to create innovative and transformative solutions.
            </motion.p>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 30, delay: 1.6 }}
            src={Image1}
            alt=""
            className="w-[400px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  )
}

export default Banner
