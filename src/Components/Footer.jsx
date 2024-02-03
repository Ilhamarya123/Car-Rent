import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  ] max-h-[750px]">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19]">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 ">
          Free Until You Ready to Learn
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Code "
            className="text-white sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[open-sans,sans-serif] rounded-md text-white">
            Request Code
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-6 sm:px-8 px-5 py-16">
        <ul>
          <h1 className="logo text-[40px] text-blueColor cursor-pointer mt-1">
            <strong>Car</strong>Hub
          </h1>
          <li>Drag</li>
          <li>Visual Studiox</li>
          <li>Easy Content</li>
        </ul>
        <ul className="sm:my-6 my-6  ">
          <h1 className="font-bold mb-4">Resources</h1>
          <li>Industries</li>
          <li>Use Cases</li>
          <li>Blog</li>
          <li>Online Event</li>
          <li>Nota Exerctation</li>
        </ul>
        <ul className="sm:my-6 my-6">
          <h1 className="font-bold mb-4">Company</h1>
          <li>Diversity</li>
          <li>About Us</li>
          <li>Press</li>
          <li>Customer Stories</li>
          <li>Online Communities</li>
        </ul>
        <ul className="sm:my-6 my-6 text-1xl">
          <h1 className="font-bold mb-4">Support</h1>
          <li>Documentation</li>
          <li>Tutorials</li>
          <li>Webinars</li>
          <li>Open Source</li>
        </ul>
      </div>
      <div className="flex justify-between items-center ">
        <div className="flex mx-[60px] my-10">
          <span>@ 2024 Appy. All rights reserved.</span>
          <span>Terms . Privacy Policy</span>
        </div>
        <div className="flex justify-between items-center gap-5 mx-[60px] my-10">
          <FaFacebook />
          <faGithub />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
