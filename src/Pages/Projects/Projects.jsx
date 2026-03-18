import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mind from "../../Accest/mind.png";
import secure from "../../Accest/secure.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mind Strategy",
      description: "A comprehensive tour package website with interactive features",
      fullDescription: "Mind Strategy is a modern tour package website built with React and GSAP for smooth animations. It features dynamic content loading, responsive design, and engaging user interactions.",
      image: mind,
      tags: ["React", "TailwindCSS", "GSAP", "Responsive"],
      link: "https://mind-strategys.vercel.app/",
      github: "https://github.com/yourusername/mind-strategy",
      category: "web",
      features: [
        "Interactive animations with GSAP",
        "Responsive design for all devices",
        "Dynamic content loading",
        "Optimized performance"
      ],
      challenges: "Implementing smooth scroll animations while maintaining performance",
      solution: "Used GSAP ScrollTrigger with optimized animation frames"
    },
    {
      id: 2,
      title: "Secure Sphere",
      description: "Security solutions platform with real-time monitoring",
      fullDescription: "Secure Sphere is a security solutions platform that provides real-time monitoring and alerts. Built with React and Firebase for seamless data synchronization.",
      image: secure,
      tags: ["React", "Firebase", "TailwindCSS", "Real-time"],
      link: "https://secure-sphere-rosy.vercel.app/",
      github: "https://github.com/yourusername/secure-sphere",
      category: "web",
      features: [
        "Real-time data synchronization",
        "User authentication",
        "Dashboard analytics",
        "Responsive design"
      ],
      challenges: "Handling real-time updates efficiently",
      solution: "Implemented Firebase real-time database with optimized listeners"
    },
    {
      id: 3,
      title: "Apple Vision Pro Clone",
      description: "3D UI clone of Apple Vision Pro website",
      fullDescription: "A stunning 3D clone of Apple's Vision Pro website using Three.js and React. Features immersive 3D models and smooth animations.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3",
      tags: ["React", "Three.js", "Framer Motion", "3D"],
      link: "#",
      github: "https://github.com/yourusername/vision-pro-clone",
      category: "3d",
      features: [
        "3D model rendering with Three.js",
        "Smooth scroll animations",
        "Responsive 3D scenes",
        "Performance optimized"
      ],
      challenges: "Optimizing 3D performance for all devices",
      solution: "Implemented LOD (Level of Detail) and texture optimization"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, featuring web applications, 3D experiences, and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center gap-4 mb-12"
        >
          {["all", "web", "3d", "mobile"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              className="group"
            >
              <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        Click to view details
                      </span>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                          </svg>
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-400">No projects found in this category</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;