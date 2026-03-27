import React from 'react'
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Testimonials = () => {
  return (
    <div className="bg-white ">
    <div className="container pb-10 px-10 w-100% ">
      {/* header section */}
      <motion.div variants={SlideUp(0.8)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <p className='text-center font-light text-sm text-gray-600'>
          Services We Provided
          </p>
          <p className="font-semibold text-3xl">
          Client’s Reviews </p>
      </motion.div>
      <motion.div variants={SlideUp(1.1)}
                  initial="hidden"
                  whileInView={"visible"}
                  className= 'bg-gray-100 py-10 px-20 justify-center rounded-2xl text-center lg:w-auto '>
            <p className='font-normal text-sm text-black text-wrap pb-5'>
            “There response times have been stellar, even across multiple time-zone differences of our team.”
            </p>
            <h1 className="font-semibold text-2xl text-primary pb-2" >
            Mukami Kinothi Kimotho
            </h1>
            <p className='font-light text-xs text-gray-600'>
            Specializing in GIS, AI/ML, AR/VR, and Digital transformation
            </p>
          </motion.div>
    </div>
  </div>
  )
}

export default Testimonials
