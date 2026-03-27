import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <motion.div
      variants={SlideUp(1.1)}
      initial="hidden"
      whileInView={"visible"}
      >
      <div className="text-black font-semibold pt-10 text-4xl py-3 text-center w-100%">Ready to Get Quote?</div>
      <div className='lg:px-60 py-10 items-center  border-gray-200'>
        <form> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className="w-full">
              <input
                type="text"
                className="block w-full border bg-gray-100 border-gray-200 p-3 px-7 rounded-full outline-none focus:border-primary"
                placeholder="Name"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                className="block w-full border bg-gray-100 border-gray-200 p-3 px-7 rounded-full outline-none focus:border-primary"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="block w-full border bg-gray-100 border-gray-200 p-3 px-7 rounded-full outline-none focus:border-primary"
                placeholder="Phone"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="block w-full border bg-gray-100 border-gray-200 p-3 px-7 rounded-full outline-none focus:border-primary"
                placeholder="Subject"
              />
            </div>
          </div>
          <div>
                <div className="w-full py-10">
                <textarea
                    type="text"
                    className="block w-full border bg-gray-100 border-gray-200 p-3 pt-4 px-7 rounded-xl outline-none focus:border-primary"
                    placeholder="Message"
                />
                </div>
            </div>
          <div className="text-center space-x-6 w-full  ">
            <button className="text-white bg-gradient-to-r justify-center from-secondary to-primary rounded-full px-6 py-2 font-semibold hover:shadow-md">Summit</button>
            <button className="text-secondarybutton border-secondarybutton bg-gray-200 hover:text-white hover:bg-gray-500 rounded-full px-6 py-2 font-semibold mb-5 hover:shadow-md">Clear</button>
          </div>
        </form>
      </div>
      <div className='gap-4 pb-20 pt-10'>
      <div className="text-gray-600 font-normal pb-3 text-md text-center w-100%"> <span className='font-semibold' >Contact us by </span>Email Address</div>
      <div className="text-primary font-semibold text-3xl text-center w-100%">hello@someshwara.com</div> 
      </div>
      </motion.div>
      <Footer/>
    </div>
  )
}

export default Contact
