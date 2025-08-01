import React, { useEffect } from 'react'
import Header from './Header'
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
// import Typed from "typed.js";
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contect from './Contect';

const Home = () => {
  // useEffect(() => {
  //     const options = {
  //     strings: ["Frontend Developer", "Web Developer", "Full Stack Developer"],
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 1000,
  //     loop: true,
  //   };
  //     const typed = new Typed(".textanimation", options);
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <div className='bg-black text-white'>
      <div className='flex items-center h-full justify-between px-35 gap-25' style={{ height: "calc(100vh - 88px)" }}>
        <div className='font-bold'>
          <p className='text-[35px]'><span>Hello</span>, it's me <span>.</span></p>
          <p className='text-[70px]'>Neel Savaliya</p>
          <p className='text-[40px] mt-3'>And i'm a <span className='textanimation'>Web Developer</span></p>
          <p className='text-[30px] mt-5'>I am a passionate Full Stack Developer skilled in building dynamic and user-<br>
          </br>friendly web applications. Proficient in front-end technologies like HTML, CSS,<br>
            </br> and JavaScript, as well as back-end frameworks such as Node.js and databases<br>
            </br> like MongoDB.</p>
          <div className='flex mt-10 gap-10'>
            <p><IoLogoGithub className='h-12 w-12' /></p>
            <p><MdEmail className='h-12 w-12' /></p>
          </div>
          <button className="border border-gray-600 bg-red-500 px-4 py-2 rounded-3xl hover:bg-black hover:text-red-500 hover:shadow-md hover:shadow-red-500 transition mt-10 h-15 w-50">
            Download CV
          </button>

        </div>
        <div className='relative'>
          <img src="https://as1.ftcdn.net/v2/jpg/06/01/17/18/1000_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg" alt="main image" className='rounded-full max-[400px]:w-[230px] max-[400px]:h-[230px] max-[550px]:w-[300px] max-[550px]:h-[300px] w-[400px] h-[400px]' />
          <div className='anime max-[400px]:w-[230px] max-[400px]:h-[230px] max-[550px]:w-[300px] max-[550px]:h-[300px] w-[400px] h-[400px] absolute  top-0 rounded-full' />
        </div>
      </div>
      <About />
      <Skill />
      <Project />
      <Contect />
    </div>
  )
}

export default Home
