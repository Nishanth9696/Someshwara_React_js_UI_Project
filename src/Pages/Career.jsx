import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const Career = () => {
  return (
    <div>
      <Navbar/>
        <motion.div variants={SlideUp(1.1)}
          initial="hidden"
          whileInView={"visible"}
          className='container py-10 px-10'>
        <div className="text-black font-semibold pt-10 text-4xl py-3 text-center w-100%">Collaborate with the Industry’s Finest Experts</div>
        <div className=' px-10 py-10 items-left  border-gray-200'>
          {/* buttons */} 
          <div className='container pl-0'>
          <button className="text-primary border border-primary bg-white hover:text-secondary rounded-full px-6 py-2 font-semibold mb-5 hover:shadow-md mr-6">All</button>
          <button className="text-white bg-gradient-to-r from-secondary to-primary rounded-full px-6 py-2 font-semibold mb-5 hover:shadow-md mr-6">Senior Unity 3D Developer (Lead)</button>
          <button className="text-primary border border-primary bg-white hover:text-secondary rounded-full px-6 py-2 font-semibold mb-5 hover:shadow-md mr-6">WebGL Developer (ThreeJS)</button>
          <button className="text-primary border border-primary bg-white hover:text-secondary rounded-full px-6 py-2 font-semibold mb-5 hover:shadow-md mr-6">Technical Project Manager</button>
          
          </div>
        
        {/* section container */}
             <div className="text-black font-semibold pt-10 text-5xl py-3 w-100%">Senior Unity 3D Developer (Lead)</div>
             <p className='text-base font-light text-lightcolor py-3'>We are looking for a Unity3D Developer to join our team! As a Unity3D Developer in Someshwara Software, you will be responsible for implementing games, augments reality, virtual reality functionality translating design ideas, concepts, and requirements into a functional and engaging game/app.</p>
             <button className="py-3 text-white bg-gradient-to-r justify-center from-secondary to-primary rounded-full px-6 font-medium hover:shadow-md">Apply Now</button>
             <div>
             <div className="pb-7 pt-7">
                    <p className="font-semibold text-xl py-3">Responsibilities</p>
                    <ul className="text-sm text-gray-500 px-7 leading-relaxed list-disc">
                        <li>Plan and implement games, augmented reality and virtual reality functionality</li>
                        <li>Transform design specification into functional games/apps</li>
                        <li>Communicate with other team members</li>
                        <li>Establish effective strategy and development pipeline</li>
                        <li>Design, build, and maintain efficient, reusable, and reliable code</li>
                        <li>Ensure the best performance, quality, and responsiveness of applications and games</li>
                        <li>Identify process and application bottlenecks and bugs</li>
                        <li>Offer and implement solutions in a timely manner</li>
                    </ul>
             </div>
             <div className="pb-7">
                    <p className="font-semibold text-xl py-3">Qualifications</p>
                    <ul className="text-sm text-gray-500 px-7 leading-relaxed list-disc">
                        <li>1-4 years of experience as Unity3D Developer</li>
                        <li>Excellent knowledge of Unity3D</li>
                        <li>Experience with scripting, textures, animation, GUI styles, and user session management</li>
                        <li>Handson experience with game physics</li>
                        <li>Handson experience with mobile, desktop, Web game development</li>
                        <li>Handson experience in optimizing memory and space usage</li>
                        <li>Understand all 3D model concepts and know hot optimize for mobile and web games.</li>
                        <li>Handson experience in baking</li>
                        <li>Handon experience UDRP and HDRP</li>
                    </ul>
             </div>
             <button className="py-3 text-white bg-gradient-to-r justify-center from-secondary to-primary rounded-full px-6 font-medium hover:shadow-md">Apply Now</button>

             </div>
        </div>
        </motion.div>
      <Footer/>
    </div>
  )
}

export default Career
