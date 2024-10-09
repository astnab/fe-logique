import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-2 justify-between items-center p-8 bg-zinc-100">
      <div className="flex flex-col md:flex-row gap-2 items-center space-x-4">
        <img src={logo} alt="Company Logo" className="h-8" />
        <span className=" font-light text-sm">Hello Fresh 2018 ©</span>
      </div>

      <div className="flex-grow"></div>

      <div className="flex space-x-4 ml-4">
        <a href="#" className="text-primary hover:text-gray-900">
          <FaFacebookF />
        </a>
        <a href="#" className="text-primary hover:text-gray-900">
          <FaTwitter />
        </a>
        <a href="#" className="text-primary hover:text-gray-900">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
