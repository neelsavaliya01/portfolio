import React from 'react';

const Skill = () => {
  return (
    <div className="bg-black min-h-screen px-5 sm:px-10 md:px-20 lg:px-35 py-10">
      {/* Heading */}
      <div className="text-center lg:text-left">
        <p className="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold py-5">
          Ski<span className="text-red-500">ll</span>
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 md:gap-16 lg:gap-20 py-10">
        <img
          src="https://sahilbhai.vercel.app/images/html.png"
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 border-amber-50 p-3 rounded-2xl shadow-md shadow-yellow-500"
          alt="HTML"
        />
        <img
          src="https://sahilbhai.vercel.app/images/css.png"
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 border-amber-50 p-3 rounded-2xl shadow-md shadow-yellow-500"
          alt="CSS"
        />
        <img
          src="https://sahilbhai.vercel.app/images/js.png"
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 border-amber-50 p-3 rounded-2xl shadow-md shadow-yellow-500"
          alt="JavaScript"
        />
        <img
          src="https://sahilbhai.vercel.app/images/react.png"
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 border-amber-50 p-3 rounded-2xl shadow-md shadow-yellow-500"
          alt="React"
        />
        <img
          src="https://sahilbhai.vercel.app/images/tailwind.png"
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 border-amber-50 p-3 rounded-2xl shadow-md shadow-yellow-500"
          alt="Tailwind"
        />
        <img
          src="https://sahilbhai.vercel.app/images/bootstrap.png"
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 border-amber-50 p-3 rounded-2xl shadow-md shadow-yellow-500"
          alt="Bootstrap"
        />
      </div>
    </div>
  );
};

export default Skill;
