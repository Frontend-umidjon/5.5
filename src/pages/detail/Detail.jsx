import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import request from "../../api";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request
      .get(`/products/${id}`)
      .then((res) => {
        console.log("Product data:", res.data); 
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading...
      </div>
    );
  }

  

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { value: ["#0ff", "#09f", "#ff0077"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1.5 },
          },
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Products
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-6 rounded-3xl shadow-lg border border-cyan-500"
        >
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
            <motion.img
              src={product.thumbnail}
              alt={product.title}
              className="w-64 h-64 object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <div className="text-center lg:text-left space-y-4">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
                {product.title}
              </h1>
              <p className="text-gray-400">{product.description}</p>
              <p className="text-2xl font-semibold text-cyan-400">
                ${product.price.toFixed(2)}
              </p>
              <div className="text-sm text-gray-500">
                <span className="mr-2">Rating:</span>
                <span className="text-yellow-400">{product.rating} ⭐</span>
              </div>

              <button className="mt-4 inline-flex items-center justify-center py-2 px-6 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-cyan-600/50">
                <FaCartPlus className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailPage;
