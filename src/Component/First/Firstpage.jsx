import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Photo from "../../Accest/myphoto.jpg";
import Typing from "../../UI/Typing";
import MultiC from "../../Pages/MultiCard/MultiC";
import MyVideo from "../../Pages/VideoBG";

const Firstpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "03", label: "Projects", suffix: "+" },
    { number: "01", label: "Years Experience", suffix: "+" },
    { number: "10", label: "Technologies", suffix: "+" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "💻", url: "https://github.com/amantiwary12", color: "hover:bg-gray-800" },
    { name: "LinkedIn", icon: "🔗", url: "https://linkedin.com/in/amantiwary12", color: "hover:bg-blue-700" },
    { name: "YouTube", icon: "📺", url: "https://youtube.com/@amantiwary12", color: "hover:bg-red-600" },
    { name: "Instagram", icon: "📸", url: "https://instagram.com/amantiwary12", color: "hover:bg-pink-600" },
  ];

  return (
    <MyVideo>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white overflow-hidden relative">
        <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
          {/* Profile Section */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="relative mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse blur-xl opacity-50"></div>
              <img
                className="relative rounded-full object-cover w-60 h-60 lg:w-72 lg:h-72 border-4 border-white/20 shadow-2xl"
                src={Photo}
                alt="Aman Tiwary"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/288x288/374151/FFFFFF?text=A+T";
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap"
              >
                🟢 Available for work
              </motion.div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-6"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Aman Tiwary
              </span>
            </h1>
            <div className="h-16">
              <Typing />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-center max-w-3xl"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              I specialize in crafting{" "}
              <span className="text-blue-400 font-semibold">exceptional digital experiences</span> that are
              visually stunning and highly performant. Let's turn your ideas into reality.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <a
              href="https://drive.google.com/file/d/1J67mlGL7mS59eIX50SAaKfbZYAjYjoRZ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center">
                Download Resume
                <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="w-full mt-20"
          >
            <MultiC />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex gap-4 mt-12"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 ${social.color} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </MyVideo>
  );
};

export default Firstpage;