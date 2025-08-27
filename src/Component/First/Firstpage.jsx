import React from "react";
import Photo from "../../Accest/myphoto.jpg"; // ✅ check path
import Typing from "../../UI/Typing"; // ✅ make sure file exists
import "@hellouxpavel/cssanimation"; // ✅ must be installed
import MultiC from "../../Pages/MultiCard/MultiC";
// import { img } from "motion/react-client";

const Firstpage = () => {
  return (
    <div className="flex flex-col items-center mt-10 h-screen text-white">
      {/* Profile photo */}
      <div className="cssanimation ca__fx-blurIn">
        <img
          className="rounded-full object-cover w-60 h-60 lg:w-64 lg:h-64"
          src={Photo}
          alt="Aman Tiwary"
        />
      </div>

      {/* Heading */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl font-headline">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
            Aman Tiwary
          </span>
        </h1>
        <div className="flex justify-center items-center mt-4 text-2xl lg:text-5xl text-muted-foreground">
          <Typing />
        </div>
      </div>

      {/* Description + Projects */}
      <div className="mt-8 text-center">
        <p className="text-lg text-foreground/80">
          I build beautiful, responsive, and performant web applications. Let's
          create something amazing together.
        </p>
        <div className="flex flex-col gap-10 justify-center items-center mt-6">
          <a
            href="#projects"
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Projects
          </a>
          <div className="flex justify-center items-center px-6 py-3 text-white">
            <h1 className="text-7xl">03</h1>
            <h2 className="flex flex-col text-2xl ml-4">
              Awesome <span>Projects</span>
            </h2>
          </div>
        </div>
        <div>
          <MultiC/>
        </div>
        <div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Firstpage;
