import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-200 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-700/30 transform transition-all duration-700 ease-in-out">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              style={{
                width: `${100 + i * 100}px`,
                height: `${100 + i * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${8 + i * 2}s infinite alternate`
              }}
            ></div>
          ))}
        </div>

        {/* Heading */}
        <h1 className={`text-4xl md:text-5xl font-bold text-center text-white mb-10 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Intro */}
          <div className="space-y-6">
            <h2 className={`text-2xl font-semibold text-blue-400 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              👋 Hi, I'm Aman Tiwary
            </h2>
            <p className={`text-lg leading-relaxed text-gray-300 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              I'm a <span className="font-semibold text-white">Frontend Developer</span> 
              specializing in building <span className="text-blue-400">scalable web applications</span>.  
              Currently pursuing <span className="font-medium">B.Tech in Computer Science</span> at RGPV (2022–2026).  
              With hands-on experience as a <span className="font-semibold">Frontend Developer at Aartech Solonics Limited</span>,  
              I love creating impactful user experiences that solve real-world problems.
            </p>

            <p className={`text-lg text-gray-300 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              My vision is to excel in frontend development and build applications 
              that are not only visually appealing but also scalable and high-performing.  
              I am passionate about <span className="font-semibold text-blue-400">problem-solving, coding, and creativity</span>.
            </p>
          </div>

          {/* Right Side - Skills & Info */}
          <div className="space-y-6">
            {/* Skills */}
            <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">⚡</span> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "TailwindCSS", "GSAP", "HTML", "CSS", "JavaScript", "Java", "C/C++", "Git", "GitHub", "VS Code", "Cursor AI"].map((skill, index) => (
                  <span key={index} className="bg-gray-700/50 px-3 py-1 rounded-full text-sm border border-gray-600/30 hover:bg-blue-500/30 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">💼</span> Experience
              </h3>
              <div className="bg-gray-700/30 p-4 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-300">
                  Frontend Developer at <span className="text-blue-400 font-medium">Aartech Solonics Limited</span>, Mandideep, Bhopal  
                  <br />
                  <span className="text-sm text-gray-400">Worked on developing scalable frontend solutions and enhancing UI/UX experiences.</span>
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">🏆</span> Achievements
              </h3>
              <ul className="space-y-2">
                {[
                  "HackMivo Hackathon Participant",
                  "AWS Certification",
                  "LinkedIn Career Skills Certification"
                ].map((achievement, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hobbies */}
            <div className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">🎯</span> Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Traveling", "Blogging", "Open-source", "Photography", "Coding", "Content Creation"].map((hobby, index) => (
                  <span key={index} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className={`mt-16 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center">
            <span className="mr-3">🚀</span> Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Mind Strategy",
                description: "Tour Package Website",
                url: "https://mind-strategys.vercel.app/",
                color: "from-blue-600 to-blue-700"
              },
              {
                name: "Secure Sphere",
                description: "Security Solutions",
                url: "https://secure-sphere-rosy.vercel.app/",
                color: "from-green-600 to-green-700"
              },
              {
                name: "Apple Vision Pro",
                description: "UI Clone",
                url: "#",
                color: "from-purple-600 to-purple-700"
              }
            ].map((project, index) => (
              <a
                key={index}
                href={project.url}
                target={project.url !== "#" ? "_blank" : "_self"}
                rel={project.url !== "#" ? "noopener noreferrer" : ""}
                className={`bg-gradient-to-br ${project.color} p-5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg group`}
              >
                <h4 className="font-semibold text-white text-lg">{project.name}</h4>
                <p className="text-gray-200 text-sm mt-2">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-white/70">View Project</span>
                  <span className="text-white transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Quote */}
        <p className={`text-center mt-14 text-gray-400 italic border-t border-gray-700/50 pt-6 transform transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          "Building the future, one line of code at a time."
        </p>

        {/* Custom animation styles */}
        <style jsx>{`
          @keyframes pulse {
            0% { opacity: 0.05; transform: scale(1); }
            100% { opacity: 0.1; transform: scale(1.1); }
          }
        `}</style>
      </div>
    </section>
  );
}