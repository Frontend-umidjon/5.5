import React from 'react';
import { LINKS } from '../../static';
import HeaderActions from '../headerActions/HeaderActions';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black via-gray-800 to-gray-700 text-white shadow-lg border-b-2 border-gray-600">
      <div className="max-w-[1296px] mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <a
            href=""
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 hover:from-pink-600 hover:to-blue-400 transition duration-300 ease-in-out transform hover:scale-115"
          >
            DUMMYJSON
          </a>
          <ul className="flex gap-10">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="hover:text-pink-600 transition duration-300 ease-in-out transform hover:scale-115">
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
