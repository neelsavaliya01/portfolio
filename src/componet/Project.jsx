import React from 'react';

const Project = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-12 md:px-20 lg:px-35 py-12 min-h-screen">
      {/* Title */}
      <div className="text-center lg:text-left">
        <p className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-extrabold mb-8">
          Proj<span className="text-red-500">ect</span>
        </p>
      </div>

      {/* Project Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* Image */}
        <a
          href="https://to-do-list-beta-three-71.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center w-full lg:w-[50%]"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88GdFo6AHfDsLsQf8iBajmecM6EsHTkdIjw&s"
            alt="Todo App"
            className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[480px] rounded-2xl hover:scale-105 hover:rounded-[50px] transition-all duration-300 shadow-xl shadow-gray-700"
          />
        </a>

        {/* Project Info */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg shadow-gray-700 w-full max-w-[500px] hover:shadow-red-500 hover:scale-[1.02] transition-all duration-300">
          <p className="text-[26px] sm:text-[30px] font-bold text-red-400 mb-3">
            Todo App
          </p>
          <p className="text-[16px] sm:text-[18px] text-gray-300 leading-relaxed">
            A simple and powerful Todo App built using <span className="text-yellow-400">React</span> and <span className="text-blue-400">CSS</span>, featuring a responsive design and enhanced functionality for task management.
          </p>

          <button
            onClick={() => window.open('https://to-do-list-beta-three-71.vercel.app/', '_blank')}
            className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-red-500 hover:shadow-md hover:shadow-red-500 transition-all duration-300"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
