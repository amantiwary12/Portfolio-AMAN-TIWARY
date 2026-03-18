import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
    { name: "TailwindCSS", level: 95, color: "from-teal-500 to-green-500" },
    { name: "GSAP", level: 80, color: "from-purple-500 to-pink-500" },
    { name: "HTML/CSS", level: 95, color: "from-red-500 to-pink-500" },
    { name: "Java", level: 75, color: "from-blue-500 to-indigo-500" },
    { name: "Git/GitHub", level: 85, color: "from-gray-500 to-slate-500" },
    { name: "Firebase", level: 70, color: "from-yellow-500 to-amber-500" }
  ];

  const achievements = [
    {
      title: "HackMivo Hackathon",
      description: "Participated and built innovative solutions",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "AWS Certification",
      description: "Cloud practitioner essentials",
      icon: "☁️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "LinkedIn Certification",
      description: "Career skills in software development",
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Intro & Experience */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">👋</span> 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Hi, I'm Aman Tiwary
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Frontend Developer with a keen eye for creating beautiful, 
                responsive, and high-performance web applications. Currently pursuing my 
                B.Tech in Computer Science at RGPV (2022–2026), I combine theoretical knowledge 
                with practical experience to build impactful digital solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development started with curiosity and has evolved into a 
                profession where I get to bring ideas to life through code. I believe in 
                continuous learning and staying updated with the latest technologies.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">💼</span> Experience
              </h3>
              <div className="relative pl-8 border-l-2 border-blue-500/30">
                <div className="mb-8 relative">
                  <div className="absolute -left-10 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white">Frontend Developer</h4>
                  <p className="text-blue-400 mb-2">Aartech Solonics Limited · Internship</p>
                  <p className="text-gray-400 text-sm mb-3">Mandideep, Bhopal · 2024</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Developed scalable frontend solutions using React.js
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Enhanced UI/UX experiences with modern design patterns
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Collaborated with cross-functional teams on project delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Achievements */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">⚡</span> Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: "100%" } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🏆</span> Achievements
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`bg-gradient-to-r ${achievement.color} bg-opacity-10 p-4 rounded-xl border border-white/10`}
                  >
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">{achievement.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white">{achievement.title}</h4>
                        <p className="text-sm text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span> Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Traveling", "Blogging", "Open Source", "Photography", "Coding", "Content Creation", "Gaming", "Reading"].map((hobby, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-sm border border-purple-500/30 text-gray-300"
                  >
                    {hobby}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl italic text-gray-300">
            "Building the future, one line of code at a time."
          </p>
          <div className="mt-4 text-blue-400">— Aman Tiwary</div>
        </motion.div>
      </div>
    </section>
  );
}