import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-white  text-gray-600 py-10 m-6 rounded-3xl justify-center">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li className="hover:text-primary hover:border-primary" >Home</li>
              <li className="hover:text-primary">Products</li>
              <li className="hover:text-primary">Services</li>
              <li className="hover:text-primary">Portfolio</li>
              <li className="hover:text-primary">Careers</li>
              <li className="hover:text-primary">Contact Us</li>
              <div className="items-center space-x-6">
               <button className="text-white bg-gradient-to-r from-secondary to-primary rounded-full px-6 py-2 font-semibold hover:shadow-md">Get  Quate</button>
             </div>
            </ul>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
