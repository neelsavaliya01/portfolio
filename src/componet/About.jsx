import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Header />

      <div className='flex items-center h-full justify-center px-35 gap-60' style={{ height: "calc(100vh - 88px)" }}>
        <div>
          <img src='https://as1.ftcdn.net/v2/jpg/08/48/77/18/1000_F_848771868_uWzqyHY16OlwDxsk6SAeYlm1WzVjjY3V.jpg' className='h-100 w-150 rounded-3xl shadow-red-500 shadow-2xl'></img>
        </div>
        <div>
          <p className='font-bold text-[60px] '>About <span  className='text-red-500'>Me</span></p>
          <p className='font-bold text-[35px]'>Full stack Developer!</p>
          <p className='font-semibold text-[25px] mt-5'>I am a passionate Full Stack Developer skilled in<br></br>
            building dynamic and user-friendly web applications.<br></br>
            Proficient in front-end technologies like HTML, CSS,<br></br>
            and JavaScript, as well as back-end frameworks such<br></br>
            as Node.js and databases like MongoDB. I enjoy<br></br>
            solving complex problems, optimizing performance,<br>
            </br> and delivering seamless user experiences.<br></br>
            Continuously learning and adapting to new<br></br>
            technologies, I strive to create innovative and<br></br>
            impactful solutions.</p>
        </div>
      </div>
    </div>
  )
}

export default About
