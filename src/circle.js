import React from "react";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Circle = ({ icon, delay, type, setIsActive, isActive, isAllActive }) => {
  console.log(isAllActive);
  return (
    <div
      onClick={() => setIsActive(!isActive, type)}
      className={classNames(
        isActive ? "z-50" : "z-10",
        "flex justify-center items-center"
      )}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        key={`${type}_${isAllActive}`}
        initial={!isAllActive}
        transition={{
          delay: 2 + delay,
          repeat: Infinity,
          repeatDelay: 4,
        }}
        className="bg-white rounded-full h-24 w-24 sm:h-32 sm:w-32"
      ></motion.div>
      {isActive ? (
        <i
          className={`absolute fa-regular fa-xmark text-3xl text-darkGrey`}
        ></i>
      ) : (
        <i className={`absolute fa-regular ${icon} text-3xl text-darkGrey`}></i>
      )}
    </div>
  );
};

export default Circle;
