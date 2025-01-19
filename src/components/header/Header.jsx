import React from 'react';
import { LINKS } from '../../static';
import HeaderActions from '../headerActions/HeaderActions';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white shadow-2xl">
      <div className="max-w-[1296px] mx-auto p-4">
        <nav className="flex justify-between items-center">
          <a
            href=""
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 transition duration-700 ease-in-out transform hover:scale-125"
          >
            DUMMYJSON
          </a>
          <ul className="flex gap-8">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="hover:text-cyan-500 transition duration-700 ease-in-out transform hover:scale-125">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <HeaderActions />
        </nav>
      </div>
    </header>
  );
};

export default Header;