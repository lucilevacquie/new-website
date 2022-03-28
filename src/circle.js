import { motion } from "framer-motion";

const Circle = ({ icon, delay }) => {
  return (
    <div className="relative flex justify-center items-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ delay, repeat: Infinity, repeatDelay: 4 }}
        className="bg-white opacity-30 rounded-full h-32 w-32"
      ></motion.div>
      <i className={`absolute fa-regular ${icon} text-3xl text-darkGrey`}></i>
    </div>
  );
};

export default Circle;
