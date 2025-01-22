import React, { useState, useEffect } from "react";
import api from "../../api";

const Products = () => {
  const limit = 10;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Для всплывающего окна

  useEffect(() => {
    api
      .get("/products/category-list")
      .then((res) => {
        setCategories(["all", ...res.data]);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "all") {
      api
        .get("/products")
        .then((res) => {
          setData(res.data.products);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    } else {
      api
        .get(`/products/category/${category}`)
        .then((res) => {
          setData(res.data.products);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    api
      .get("/products", {
        params: {
          limit,
          skip: count * limit,
        },
      })
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data.products]);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [count]);

  const skeletonArray = Array(limit).fill(null);
  const categorySkeletonArray = Array(15).fill(null);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 min-h-screen py-20">
      <div className="max-w-[1296px] mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 mb-8 font-orbitron">
          Products
        </h1>
        <ul className="flex gap-4 overflow-auto py-4 px-2 bg-transparent rounded-lg shadow-lg">
          {loading
            ? categorySkeletonArray.map((_, index) => (
                <li
                  key={index}
                  className="w-24 h-10 bg-gray-800 rounded-lg animate-pulse"
                ></li>
              ))
            : categories.map((category) => (
                <li
                  className="text-base text-gray-400 hover:text-cyan-500 transition duration-700 ease-in-out transform hover:scale-125 capitalize text-nowrap cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-800 border border-transparent hover:border-cyan-500"
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer p-6 bg-gray-900 rounded-lg shadow-lg border border-cyan-500/20"
              onClick={() => setSelectedProduct(item)} // Открыть popup
            >
              <div className="absolute top-4 right-4 bg-gray-800 rounded-lg px-2 py-1 text-sm font-semibold text-cyan-500 mb-2 animate-pulse">
                -{item.discountPercentage}%
              </div>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="text-gray-400">{item.price} $</p>
              </div>
            </div>
          ))}
          {loading &&
            skeletonArray.map((_, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-lg shadow-lg animate-pulse border border-cyan-500/20"
              >
                <div className="w-full h-48 bg-gray-800 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-800 rounded mb-2"></div>
                <div className="h-4 bg-gray-800 rounded"></div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-8">
          {data.length >= limit && (
            <button
              onClick={() => setCount((prevCount) => prevCount + 1)}
              className="bg-cyan-500 hover:bg-indigo-500 transition duration-700 ease-in-out transform hover:scale-125 text-white font-semibold py-2 px-4 rounded-lg shadow-lg"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-animation">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-cyan-500"
              onClick={() => setSelectedProduct(null)} 
            >
              ✖
            </button>
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="w-full h-[280px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-cyan-500 mb-2">
              {selectedProduct.title}
            </h2>
            <p className="text-gray-400 mb-4">{selectedProduct.description}</p>
            <p className="text-gray-400">
              Price: <span className="text-white">{selectedProduct.price} $</span>
            </p>
            <p className="text-gray-400">
              Discount: <span className="text-white">{selectedProduct.discountPercentage}%</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
