import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { SlideUp } from "../../utility/animation";
import Photo1 from '../../assets/Cards/Image1.png'
import Photo2 from '../../assets/Cards/Image2.png'
import Photo3 from '../../assets/Cards/Image3.png'


const WhyChooseData = [
  {
    id: 1,
    title: "GIS & AI/ML",
    desc: <ul className='list-disc'>
            <li>VR Industrial Training Modules</li>
            <li>Simulations in VR</li>
            <li>Mixed Reality</li>
            <li>AR & VR in Web</li>
            <li>Healthcare and Therapy</li>
            <li>Retail and E-commerce Solutions</li>
            <li>Remote Collaboration</li>
            <li>Interactive Labs in VR</li>
            <li>Marketing and Advertising with AR/VR</li>
          </ul>,
    icon: Photo1,
    delay: 1.5,
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: <ul className='list-disc'>
            <li>VR Industrial Training Modules</li>
            <li>Simulations in VR</li>
            <li>Mixed Reality</li>
            <li>AR & VR in Web</li>
            <li>Healthcare and Therapy</li>
            <li>Retail and E-commerce Solutions</li>
            <li>Remote Collaboration</li>
            <li>Interactive Labs in VR</li>
            <li>Marketing and Advertising with AR/VR</li>
        </ul>,
    link: "/",
    icon: Photo2,
    bgColor: "#73bc00",
    delay: 1.8,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: <ul className='list-disc'>
                <li>VR Industrial Training Modules</li>
                <li>Simulations in VR</li>
                <li>Mixed Reality</li>
                <li>AR & VR in Web</li>
                <li>Healthcare and Therapy</li>
                <li>Retail and E-commerce Solutions</li>
                <li>Remote Collaboration</li>
                <li>Interactive Labs in VR</li>
                <li>Marketing and Advertising with AR/VR</li>
         </ul>,
    link: "/",
    icon: Photo3,
    bgColor: "#fa6400",
    delay: 2.1,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="bg-white">
      <div className="container py-10 px-10">
        {/* header section */}
        <motion.div variants={SlideUp(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
            <p className='text-center font-light text-sm text-gray-600'>
            Services We Provided
            </p>
            <p className="font-semibold text-3xl">
            Software Development Services
            </p>
        </motion.div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4  rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* icon section */}
                <div className="rounded-lg flex w-100% justify-center items-center text-white">
                  <img src={item.icon} alt="" className="w-full"/>
                </div>
                <div className="px-7 pb-7">
                    <p className="font-semibold py-3">{item.title}</p>
                    <p className="text-sm text-gray-500 px-7 leading-relaxed">{item.desc}</p>
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
