import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoSearch } from 'react-icons/io5';

const HeaderActions = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (search) {
      axios.get(`https://dummyjson.com/products/search?q=${search}&limit=5`).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
  }, [search]);

  return (
    <div className="relative">
      <form action="" className="bg-transparent p-4 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <IoSearch size={24} />
          </button>
        </div>
        {data && data.products && (
          <div className=" absolute top-12 left-0 right-0  z-10 mt-6 bg-gray-800 p-4 rounded-lg shadow-xl animate-fadeIn space-y-4">
            {data.products.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-6 p-3 bg-gray-900 rounded-lg hover:bg-gray-700 hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-105"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-110"
                />
                <p className="text-white text-base font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default HeaderActions;
