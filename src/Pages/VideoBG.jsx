import React from "react";
import { motion } from "framer-motion";
import myvideo from "../Accest/short-video.mp4";

const VideoBackground = ({ children, videoSrc = myvideo }) => {
  return (
    <div className="relative">
      {/* Fixed Video Background */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
        <video
          src={videoSrc}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
