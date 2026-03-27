import React from 'react'
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
import Photos1 from '../../assets/ServiceImages/GIS.svg'
import Photos2 from '../../assets/ServiceImages/AIML.svg'
import Photos3 from '../../assets/ServiceImages/ARVR.svg'
import Photos4 from '../../assets/ServiceImages/Metaverse.svg'
import Photos5 from '../../assets/ServiceImages/WebDevelop.svg'
import Photos6 from '../../assets/ServiceImages/MobileApp.svg'
import Photos7 from '../../assets/ServiceImages/Edutech.svg'
import Photos8 from '../../assets/ServiceImages/Game.svg'

// export const Listitems =[
// {
//     id:1,
//     title:"GIS",
//     image:Photos1,
// },
// {
//     id:2,
//     title:"AIMl",
//     image:Photos2,
// },
// {
//     id:3,
//     title:"ARVR",
//     image:Photos3,
// },
// {
//     id:4,
//     title:"Metaverse",
//     image:Photos4,
// },
// {
//     id:5,
//     title:"WebDevelop",
//     image:Photos5,
// },
// {
//     id:6,
//     title:"MobileApp",
//     image:Photos6,
// },
// {
//     id:7,
//     title:"Edutech",
//     image:Photos7,
// },
// {
//     id:8,
//     title:"Game",
//     image:Photos8,
// }
// ]

const ContentSection1 = () => {
  return (
    <motion.div variants={SlideUp(1.1)}
                initial="hidden"
                whileInView={"visible"}
            className='container flex flex-wrap gap-4 md:gap-2 space-x-16 justify-center py-14' >
        <div className='flex items-center gap-3 bg-gray-100  pr-5 mt-5 rounded-full w-fit'>
            <img src={Photos1} alt="" />
            <p className='text-primary'>GIS</p>
        </div>
        <div className='flex items-center gap-3 md:gap-2 bg-gray-100  pr-5  mt-5 rounded-full w-fit'>
            <img src={Photos2} alt="" />    
            <p className='text-primary'>AI/Ml</p>
        </div>
        <div className='flex items-center gap-3 md:gap-2 bg-gray-100  pr-5 mt-5 rounded-full w-fit'>
            <img src={Photos3} alt="" />
            <p className='text-primary'>AR/VR</p>
        </div>
        <div className='flex items-center gap-3 md:gap-2 bg-gray-100  pr-5 mt-5 rounded-full w-fit'>
            <img src={Photos4} alt="" />
            <p className='text-primary'>Metaverse</p>
        </div>
        <div className='flex items-center gap-3 md:gap-2 bg-gray-100  pr-5 mt-5 rounded-full w-fit'>
            <img src={Photos5} alt="" />
            <p className='text-primary'>Web Develop</p>
        </div>
        <div className='flex items-center gap-3 md:gap-2 bg-gray-100  pr-5 mt-5 rounded-full w-fit'>
            <img src={Photos6} alt="" />
            <p className='text-primary'>MobileApp</p>
        </div>
        <div className='flex items-center gap-3 md:gap-2 bg-gray-100  pr-5 mt-5 rounded-full w-fit'>
            <img src={Photos7} alt="" />
            <p className='text-primary'>Edutech</p>
        </div>
        <div className='flex items-center gap-3 md:gap-2 bg-gray-100  pr-5 mt-5 rounded-full w-fit'>
            <img src={Photos8} alt="" />
            <p className='text-primary'>Game</p>
        </div>

    </motion.div>
  )
}

export default ContentSection1
