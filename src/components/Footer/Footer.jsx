import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo2 from '../../assets/website/Logo2.svg';
import Arrow from '../../assets/website/Arrow.svg';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { NavbarMenu } from "../../mockData/data.js";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";


const Footer = () => {
  return (
    <motion.div variants={SlideUp(1.2)}
    initial="hidden"
    whileInView={"visible"}  className=" grid md:grid-cols-4 mt-5 py-5 px-10 bg-gray-200">
          {/* company Details */}
          <div className=" py-8 px-4 lg:col-span-2">
            <h1 className="sm:text-3xl lg:text-7xl font-base sm:text-left text-justify mb-3 flex items-center gap-3">
            Get in touch
            </h1>
            <img  src={Arrow} alt=""/>
            
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-3">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
            <br />
            <p className="text-sm text-gray-400">
            Copyright © 2024 Someshwara Software Pvt Ltd.{" "}
            </p>
          </div>   
         <div className="py-8 px-4 ">
                    <h1 className="sm:text-xl text-xl font-semibold sm:text-left text-justify mb-3">
                    Company
                    </h1>
                    <ul className={`flex flex-col gap-3`}>
                    {NavbarMenu.map((link) => (
                        <li
                        key={link.title}
                        className="cursor-pointer w-fit hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-600 "
                        >
                        <span>{link.title}</span>
                        </li>
                    ))}
                    </ul>
                    
            </div>
            <div className="container py-8 px-4 flex flex-col h-full ">
                    <h1 className="sm:text-xl text-xl font-semibold sm:text-left text-justify mb-3">
                    Contact Us
                    </h1>
                    <ul className='flex flex-col justify-center mb-3'>
                        <li className='flex flex-grow gap-3 mb-3 hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-600'> <span className='pt-1'><FaPhoneAlt /></span> +91 96060 84646</li>
                        <li className='flex flex-grow gap-3 mb-3 hover:translate-x-1 w-fit duration-300 hover:!text-primary space-x-1 text-gray-600'><span className='pt-1'><IoMail /></span>hello@someshwara.com</li>
                        <li className=' flex flex-grow gap-3 mb-3 hover:translate-x-1 w-fit duration-300 hover:!text-primary space-x-1 text-gray-600'><span className='pt-1'><IoLocationSharp /></span>Bengaluru, Karanataka, India</li>
                    </ul>
                    <div className='pt-16 justify-end' >
                    <img className=''src={Logo2} alt="" />
                    </div>
                    
                    
            </div>
            {/* <!--Copyright section--> */}
           {/* <div class="bg-black/5 p-6 text-center">
             <span>© 2023 Copyright:</span> </div> */}
        </motion.div>
  )
}

export default Footer
