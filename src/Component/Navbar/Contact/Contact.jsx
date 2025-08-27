import React, { useState, useEffect } from 'react';
import Navqbar from '../Navqbar'; // make sure filename matches

function Contact() {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [darkMode]);

  return (
    <>
      <Navqbar />
      <div className="min-h-screen transition-all duration-500 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Theme Toggle Example</h1>
        
        <button
          
          className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-white dark:text-black shadow-md"
        >
          click on me
        </button>
      </div>
    </>
  );
}

export default Contact;
