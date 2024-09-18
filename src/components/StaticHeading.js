import TypingAnimation from "./TypingAnimation";
import Image from "../assets/Image.jpg";
import React from "react";


const StaticHeading = () => {
  return (
    <div className="h-screen  flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
      {/* Floating Animation Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="w-96 h-96 bg-purple-400 opacity-80 rounded-full absolute floating-animation left-[-10%] top-2/3"></div>
        <div className="w-80 h-80 bg-teal-300 opacity-80 rounded-full absolute floating-animation right-[-10%] top-2/4"></div>
        <div className="w-80 h-80 bg-orange-400 opacity-70 rounded-full absolute floating-animation right-[-10%] transform translate-x-[-85%] translate-y-[-70%] "></div>
        <div className="w-80 h-80 bg-pink-300 opacity-70 rounded-full absolute floating-animation top-1/2 left-1/2 transform translate-x-[-85%] translate-y-[-60%]"></div>
      </div>

      {/* Image Section */}
      <div className="relative z-10 flex-shrink-0 mr-0 md:mr-8 mb-6 md:mb-0 hover:scale-110 transition-transform duration-500">
        <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden shadow-lg">
          <img
            src={Image}
            alt="Pratik Kadam"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left relative z-10">
        <h1 className="text-gray-800 text-7xl font-bold from-neutral-950 hover:scale-110 transition-transform duration-500">
          Pratik Kadam
        </h1>
        <TypingAnimation />
        <div className="flex justify-center md:justify-start space-x-4 mt-4 ">
          {/* Social Media Icons */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 hover:scale-125 transition-transform duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.39 0-.19-.01-.83-.01-1.5-2.23.48-2.7-1.08-2.7-1.08-.36-.91-.87-1.15-.87-1.15-.71-.48.05-.47.05-.47.78.05 1.25.8 1.25.8.69 1.19 1.8.85 2.24.65.07-.5.27-.85.49-1.05-1.73-.2-3.55-.87-3.55-3.87 0-.85.3-1.54.79-2.08-.08-.2-.34-1.02.07-2.14 0 0 .65-.21 2.14.8A7.56 7.56 0 018 2.8a7.56 7.56 0 012.91.5c1.49-1.01 2.14-.8 2.14-.8.41 1.12.15 1.94.07 2.14.49.54.79 1.23.79 2.08 0 3-1.82 3.67-3.55 3.87.27.23.49.69.49 1.39 0 1-.01 1.81-.01 2.06 0 .22.15.46.55.39C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 hover:scale-125 transition-transform duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 0A1.5 1.5 0 000 1.5v13A1.5 1.5 0 001.5 16h13A1.5 1.5 0 0016 14.5v-13A1.5 1.5 0 0014.5 0h-13zM4 14H2V6h2v8zm-1-9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM14 14h-2V9.5c0-1.39-.02-3.18-1.93-3.18C9.02 6.32 9 8.04 9 9.5V14H7V6h2v1.7c.28-.53 1.01-1.7 2.51-1.7C14.58 6 14 8.23 14 9.5V14z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StaticHeading;
