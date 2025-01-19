import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const skeletonArray = Array(10).fill(null); // Создаём массив для 10 "заглушек"

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 min-h-screen py-20">
      <div className="max-w-[1296px] mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 mb-8 font-orbitron">
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {loading
            ? skeletonArray.map((_, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-900 rounded-lg shadow-lg animate-pulse border border-cyan-500/20"
                >
                  <div className="w-full h-48 bg-gray-800 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-800 rounded mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded"></div>
                </div>
              ))
            : data &&
              Array.isArray(data.products) &&
              data.products.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-105 border border-cyan-500/20"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 transition duration-500 ease-in-out transform hover:scale-110"
                  />
                  <h1 className="text-2xl font-semibold text-cyan-500 mb-2 font-orbitron">{item.title}</h1>
                  <p className="text-gray-400 text-sm font-orbitron">{item.price} $</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
