import React, { useState, useEffect } from "react";
import Photo from "../../Accest/myphoto.jpg"; // ✅ Double-check this path
import Typing from "../../UI/Typing"; // ✅ Ensure this component exists
import "@hellouxpavel/cssanimation"; // ✅ Make sure this is installed
import MultiC from "../../Pages/MultiCard/MultiC";
import Mystories from "../../Pages/mystory/Mystories";

const Firstpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simple fallback if Typing component is missing
  const TypingFallback = () => (
    <div className="text-2xl lg:text-4xl text-muted-foreground h-14 flex items-center">
      Frontend Developer & UI/UX Enthusiast
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${8 + i * 2}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        {/* Profile photo with enhanced animation */}
        <div
          className={`cssanimation ca__fx-blurIn transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-90"
          }`}
        >
          <div className="relative">
            <img
              className="rounded-full object-cover w-60 h-60 lg:w-72 lg:h-72 border-4 border-white/20 shadow-2xl"
              src={Photo}
              alt="Aman Tiwary"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/288x288/374151/FFFFFF?text=A+T";
              }}
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow -z-10"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
              Available for work
            </div>
          </div>
        </div>

        {/* Heading with enhanced typography */}
        <div className="text-center mt-10">
          <h1
            className={`text-4xl font-extrabold tracking-tight lg:text-6xl font-headline transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 via-teal-400 animate-gradient-x">
              Aman Tiwary
            </span>
          </h1>
          <div className="flex justify-center items-center mt-6 text-2xl lg:text-4xl text-muted-foreground h-14">
            {Typing ? <Typing /> : <TypingFallback />}
          </div>
        </div>

        {/* Description with enhanced styling */}
        <div
          className={`mt-10 text-center max-w-2xl transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            I specialize in creating{" "}
            <span className="font-medium text-blue-300">beautiful</span>,{" "}
            <span className="font-medium text-purple-300">responsive</span>, and{" "}
            <span className="font-medium text-teal-300">high-performance</span>{" "}
            web applications. Let's collaborate to bring your vision to life.
          </p>

          {/* Stats and CTA section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center group"
            >
              View My Projects
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="https://drive.google.com/file/d/1J67mlGL7mS59eIX50SAaKfbZYAjYjoRZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center group border border-green-500/30"
            >
              Download Resume
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg">
              <div className="flex items-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  03
                </h1>
                <h2 className="flex flex-col text-xl ml-4 font-semibold">
                  <span>Awesome</span>
                  <span>Projects</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* MultiCard component with enhanced container */}
        <div
          className={`mt-16 w-full transform transition-all duration-700 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl">
            {MultiC ? <MultiC /> : <div>MultiCard component not found</div>}
          </div>
        </div>

        {/* Social links or additional info */}
        <div
          className={`mt-12 flex gap-6 transform transition-all duration-700 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            { name: "GitHub", icon: "💻", url: "#" },
            { name: "LinkedIn", icon: "🔗", url: "#" },
            { name: "Twitter", icon: "🐦", url: "#" },
            { name: "Email", icon: "✉️", url: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 shadow-md"
              aria-label={social.name}
            >
              <span className="text-xl">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.05;
            transform: scale(1);
          }
          100% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      
      {/* Mystories section */}
      <div className="w-full h-auto flex flex-col items-center pt-10 mt-20">
        {Mystories ? <Mystories /> : <div>Mystories component not found</div>}
      </div> 
    </div>
  );
};

export default Firstpage;