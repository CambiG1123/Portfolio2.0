import React, { useState } from "react";

import { FiAlignCenter, FiMail } from "react-icons/fi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  const handleClose = () => {
    setShowNav(false);
  }
  return (
    <div>
      <FiAlignCenter
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden "
      />
      {showNav ? (
        <div on onClick={handleClose} className="fixed w-full h-screen bg-gray-500/90 flex flex-col justify-center items-center z-20">
          <a
            href="#home"
            className="w-{75%} flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={25} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#about"
            className="w-{75%} flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FiUser size={25} />
            <span className="pl-4">About</span>
          </a>
          <a
            href="#projects"
            className="w-{75%} flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FiBriefcase size={25} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#contact"
            className="w-{75%} flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={25} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10 ">
          <div className="flex flex-col">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome size={25} />
            </a>
            <a
              href="#about"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <FiUser size={25} />
            </a>
            <a
              href="#projects"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <FiBriefcase size={25} />
            </a>
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineMail size={25} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
