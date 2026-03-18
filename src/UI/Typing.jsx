import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Typing = () => {
  const texts = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Creative Coder",
    "Problem Solver"
  ];

  return (
    <div className="text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
      <ReactTypingEffect
        text={texts}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
        cursor="|"
        cursorClassName="text-blue-400 animate-pulse"
      />
    </div>
  );
};

export default Typing;