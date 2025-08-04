import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contect from './Contect';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 sm:px-12 md:px-20 lg:px-35 pt-[88px] min-h-screen">
        
        {/* Left Content */}
        <div className="font-bold max-w-[700px] w-full text-center lg:text-left order-2 min-[1024px]:order-1">
          <p className="text-[30px] sm:text-[35px] mb-2">
            <span>Hello</span>, it's me <span>.</span>
          </p>
          <p className="text-[40px] sm:text-[55px] lg:text-[70px] mb-2">
            Neel Savaliya
          </p>
          <p className="text-[22px] sm:text-[28px] lg:text-[40px] mt-3">
            And I'm a <span className="text-red-500">Web Developer</span>
          </p>
          <p className="text-[16px] sm:text-[18px] lg:text-[22px] mt-5 leading-relaxed text-gray-300">
            I am a passionate Full Stack Developer skilled in building dynamic and 
            user-friendly web applications. Proficient in front-end technologies 
            like <span className="text-yellow-400">HTML</span>, <span className="text-blue-400">CSS</span>, and JavaScript, as well as back-end frameworks 
            such as Node.js and databases like MongoDB.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start mt-8 gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <IoLogoGithub className="h-10 w-10 sm:h-12 sm:w-12" />
            </a>
            <a href="mailto:neelsavaliya01@gmail.com" className="hover:text-red-500 transition">
              <MdEmail className="h-10 w-10 sm:h-12 sm:w-12" />
            </a>
          </div>

          {/* Download Button */}
          <div className="flex justify-center lg:justify-start mt-8">
            <button className="border border-gray-600 bg-red-500 px-6 py-3 rounded-full hover:bg-black hover:text-red-500 hover:shadow-md hover:shadow-red-500 transition text-lg sm:text-xl">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center order-1 min-[1024px]:order-2">
          <img
            src="https://as1.ftcdn.net/v2/jpg/06/01/17/18/1000_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
            alt="main image"
            className="rounded-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto shadow-lg shadow-gray-800"
          />
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Skill />
      <Project />
      <Contect />
    </div>
  );
};

export default Home;
