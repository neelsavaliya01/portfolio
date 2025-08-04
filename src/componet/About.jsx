import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-[88px] px-6 sm:px-12 md:px-20 lg:px-35 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 justify-around">

        {/* Image Section */}
        <div className="flex justify-center max-w-[400px] w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/08/48/77/18/1000_F_848771868_uWzqyHY16OlwDxsk6SAeYlm1WzVjjY3V.jpg"
            className="w-full h-auto rounded-3xl shadow-red-500 shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="about"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-[700px] w-full text-center lg:text-left">
          <p className="font-bold text-[40px] sm:text-[50px] md:text-[60px] mb-4">
            About <span className="text-red-500">Me</span>
          </p>
          <p className="font-bold text-[22px] sm:text-[28px] md:text-[35px] mb-6 text-gray-300">
            Full Stack Developer!
          </p>
          <p className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-gray-400">
            I am a passionate Full Stack Developer skilled in building dynamic and user-friendly web applications.
            Proficient in front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks such
            as Node.js and databases like MongoDB. I enjoy solving complex problems, optimizing performance, and
            delivering seamless user experiences. Continuously learning and adapting to new technologies, I strive
            to create innovative and impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
