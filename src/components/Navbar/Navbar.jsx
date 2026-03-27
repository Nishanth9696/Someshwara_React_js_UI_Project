import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import Logo from '../../assets/website/Logo.svg';
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="cursor-pointer text-2xl flex items-center gap-2 font-bold">
            <img src={Logo} alt="/#" />
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 bg-gray-100 py-2 px-4 rounded-full">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-primary transition-all duration-300 font-normal"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <button className="text-white bg-gradient-to-r from-secondary to-primary rounded-full px-6 py-2 font-semibold hover:shadow-md">Get  Quate</button>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" /> 
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
