import React from "react";
import { motion } from "framer-motion";

const Circle = ({ icon, delay, type, setIsActive }) => {
  return (
    <div
      className="flex justify-center items-center"
      onMouseEnter={() => setIsActive(true, type)}
      onMouseLeave={() => setIsActive(false)}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ delay, repeat: Infinity, repeatDelay: 4 }}
        whileHover={{ scale: 1.2, opacity: 0.6 }}
        className="bg-white opacity-30 rounded-full h-32 w-32"
      ></motion.div>
      <i className={`absolute fa-regular ${icon} text-3xl text-darkGrey`}></i>
    </div>
  );
};

export default Circle;
