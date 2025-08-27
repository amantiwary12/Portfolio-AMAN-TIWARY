import React from 'react';
// import Navbar from './Navbar';

const Aboute = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">
      {/* <Navbar /> */}
      
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="mb-4">
        This is the about page of our application. Here you can find information about our team, mission, and values.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p className="mb-4">To provide the best service to our customers and continuously improve our offerings.</p>

      <h2 className="text-2xl font-semibold mt-6">Our Team</h2>
      <p className="mb-4">We have a dedicated team of professionals who are passionate about what they do.</p>

      <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
      <p className="mb-4">If you have any questions or feedback, feel free to reach out to us through our contact page.</p>

      <h2 className="text-2xl font-semibold mt-6">Follow Us</h2>
      <p>Stay connected with us on our social media channels for the latest updates and news.</p>
    </div>
  );
};

export default Aboute;
