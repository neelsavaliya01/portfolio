import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contect = () => {
  return (
    <section className="bg-black min-h-screen py-12">
      {/* ✅ Container with equal spacing on both sides */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">

        {/* ✅ Card Wrapper */}
        <div className="bg-gray-800 rounded-3xl text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 shadow-xl shadow-gray-700 hover:shadow-red-500 transition-all duration-300">

          {/* ✅ Left Section */}
          <div className="flex-1 w-66 flex-auto">
            {/* Availability Badge */}
            <div className="flex items-center justify-center lg:justify-start bg-gray-900 h-14 sm:h-16 rounded-3xl px-6 mb-8 shadow-md">
              <p className="text-lg sm:text-xl font-bold text-cyan-300">
                ✅ Available for work
              </p>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-snug">
                Drop me a line or say 👋 on social networks
              </h2>
              <p className="text-[16px] sm:text-[18px] text-gray-300 py-6 leading-relaxed">
                Whether you're a web developer in need of support or an early-stage
                company looking to level up your development, I'd love to talk about
                your project. If you want to develop your website, let's collaborate
                and bring your vision to life.
              </p>
            </div>
          </div>

          {/* ✅ Right Section */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Profile Image */}
            <img
              src="https://sahilbhai.vercel.app/images/dev1.jpg"
              alt="Developer"
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />

            {/* Email */}
            <p className="text-[18px] sm:text-[22px] md:text-[26px] font-bold mt-6 break-words">
              neelsavaliya01@gmail.com
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 sm:gap-8 mt-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-full bg-gray-900 hover:bg-red-500 transition-all duration-300"
              >
                <IoLogoGithub className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
              <a
                href="mailto:neelsavaliya01@gmail.com"
                className="p-3 sm:p-4 rounded-full bg-gray-900 hover:bg-red-500 transition-all duration-300"
              >
                <MdEmail className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;
