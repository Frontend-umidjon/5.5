import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 text-center">About Us</h2>
        <p className="text-gray-400 text-lg">
          We are a futuristic company dedicated to innovation and excellence. Our mission is to provide top-notch services and products that make a difference in the world.
        </p>
        <p className="text-gray-400 text-lg">
          Our team is composed of passionate professionals who strive to push the boundaries of technology and creativity. We believe in the power of collaboration and continuous improvement.
        </p>
        <p className="text-gray-400 text-lg">
          Join us on our journey to shape the future with cutting-edge solutions and visionary thinking.
        </p>
      </div>
    </div>
  );
};

export default About;
