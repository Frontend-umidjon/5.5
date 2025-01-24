import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRobot, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { value: ['#0ff', '#09f', '#ff0077'] },
            shape: { type: 'circle' },
            opacity: {
              value: 0.8,
              random: true,
            },
            size: {
              value: 4,
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'bounce',
            },
          },
        }}
      />
      <div className="relative z-10 bg-gray-900 bg-opacity-80 p-8 rounded-3xl shadow-lg w-full max-w-md text-center border border-cyan-500 space-y-6 transform hover:scale-105 transition-transform duration-500">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <FaRobot className="mx-auto text-7xl text-cyan-500 animate-bounce" />
          <h1 className="mt-4 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
            404
          </h1>
        </motion.div>
        <p className="text-gray-400 text-lg">
          Oops! The page you're looking for has vanished into the void.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center justify-center py-2 px-6 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-cyan-600/50"
        >
          <FaHome className="mr-2" />
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
