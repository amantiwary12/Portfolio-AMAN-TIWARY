import React, { useState, useRef } from 'react';
import { 
  FaBuilding, 
  FaCalendarAlt, 
  FaCode, 
  FaExternalLinkAlt, 
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaRocket,
  FaPalette,
  FaServer
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const InternshipSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  
  const internshipDetails = {
    company: "Arrtech Solonic Limited",
    position: "Frontend Developer Intern",
    duration: "3 months",
    location: "Bhopal Mandideep, India",
    technologies: ["React.js", "Tailwind CSS", "REST API", "HTML5", "CSS3"],
    description: "Working as a Frontend Developer Intern, building responsive web applications and interfaces using modern technologies and best practices.",
    achievements: [
      "Developed responsive user interfaces using React.js and Tailwind CSS",
      "Integrated REST APIs to fetch and display dynamic data",
      "Collaborated with team members using version control systems",
      "Implemented modern UI/UX principles to enhance user experience",
      "Participated in code reviews and agile development processes"
    ],
    companyWebsite: "https://arrtechsolonic.com"
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="internship" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="relative z-10">Internship Experience</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100/70 -z-0 transform -rotate-1"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Gaining practical experience and enhancing my skills in a professional environment
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleUp}
          transition={{ duration: 0.7 }}
        >
          <div className="p-8 md:p-10">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
              variants={fadeIn}
            >
              <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-2">
                  <motion.div 
                    className={`p-3 rounded-lg mr-4 transition-colors duration-300 ${isHovered ? 'bg-blue-100' : 'bg-blue-50'}`}
                    whileHover={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaBuilding className="text-blue-600 text-xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800">{internshipDetails.company}</h3>
                </div>
                <p className="text-lg text-blue-600 font-medium mt-2 ml-16">{internshipDetails.position}</p>
              </div>
              
              {internshipDetails.companyWebsite && (
                <motion.a 
                  href={internshipDetails.companyWebsite} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Company Website <FaExternalLinkAlt className="ml-2 text-sm" />
                </motion.a>
              )}
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={staggerChildren}
            >
              <motion.div 
                className="flex items-center text-gray-600 bg-gray-50 p-4 rounded-xl"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <FaCalendarAlt className="text-blue-600" />
                </div>
                <div>
                  <span className="font-medium block text-sm text-gray-500">Duration</span>
                  <span>{internshipDetails.duration}</span>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-600 bg-gray-50 p-4 rounded-xl"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <span className="font-medium block text-sm text-gray-500">Location</span>
                  <span>{internshipDetails.location}</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mb-8"
              variants={fadeIn}
            >
              <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-blue-500 pl-4 py-1">
                {internshipDetails.description}
              </p>
            </motion.div>

            <motion.div 
              className="mb-8"
              variants={fadeIn}
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <FaCode className="text-blue-600" />
                </div>
                Technologies & Skills
              </h4>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={staggerChildren}
              >
                {internshipDetails.technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 hover:scale-105"
                    variants={fadeIn}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Key Responsibilities & Achievements</h4>
              <motion.ul 
                className="space-y-4"
                variants={staggerChildren}
              >
                {internshipDetails.achievements.slice(0, showMore ? internshipDetails.achievements.length : 3).map((achievement, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    variants={fadeIn}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              {internshipDetails.achievements.length > 3 && (
                <motion.button 
                  onClick={() => setShowMore(!showMore)}
                  className="mt-6 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-300 mx-auto px-4 py-2 rounded-lg hover:bg-blue-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showMore ? 'Show Less' : 'Show More'}
                  {showMore ? (
                    <FaChevronUp className="ml-2" />
                  ) : (
                    <FaChevronDown className="ml-2" />
                  )}
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Additional learning section */}
        <motion.div 
          ref={skillsRef}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white overflow-hidden relative"
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={slideInFromRight}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-white/10"></div>
          
          <h3 className="text-2xl font-bold mb-8 text-center relative z-10">Skills Gained During Internship</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
            variants={staggerChildren}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="text-3xl mb-4 p-3 bg-white/20 rounded-xl w-fit">
                <FaRocket />
              </div>
              <h4 className="font-semibold text-lg mb-3">Frontend Development</h4>
              <p className="text-white/80 text-sm">Advanced React.js patterns, state management, and component architecture</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="text-3xl mb-4 p-3 bg-white/20 rounded-xl w-fit">
                <FaPalette />
              </div>
              <h4 className="font-semibold text-lg mb-3">UI/UX Design</h4>
              <p className="text-white/80 text-sm">Creating responsive and accessible interfaces with Tailwind CSS</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="text-3xl mb-4 p-3 bg-white/20 rounded-xl w-fit">
                <FaServer />
              </div>
              <h4 className="font-semibold text-lg mb-3">API Integration</h4>
              <p className="text-white/80 text-sm">Working with REST APIs, handling data fetching and error states</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipSection;