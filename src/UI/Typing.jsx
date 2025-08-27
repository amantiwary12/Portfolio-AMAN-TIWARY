// import React, { useState } from "react";
import ReactTypingEffect from "react-typing-effect";

const Typing = () => {
// const [text, setText] = useState( ' ')

  return (
    <>
    <div className="flex justify-center items-center mt-4 text-3xl lg:text-4xl text-muted-foreground">
      <ReactTypingEffect  text={[ "Web Developer", "Frontend Developer", "React Enthusiast", "Java Developer" , "GSAP " , "Tailwind"] } />

    </div>

      
{/* 
      <ReactTypingEffect
        text={["Hello.", "World!!!"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i % 2 === 0 ? { color: "magenta" } : {}}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      /> */}
    </>
  );
};

export default Typing;
