import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Modal = ({ title, text, isActive }) => {
  const [isFirefoxBrowser, setIsFirefoxBrowser] = useState(false);

  useEffect(() => {
    // Get the user-agent string
    let userAgentString = navigator.userAgent;
    // Detect Firefox
    let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

    if (firefoxAgent) {
      setIsFirefoxBrowser(true);
    }
  }, []);

  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classNames(
          isFirefoxBrowser
            ? (isActive ? "pointer-events-auto" : "pointer-events-none",
              "overflow-auto z-30 pt-24 px-8 pb-8 sm:py-12 sm:px-48 h-full w-full bg-white bg-opacity-90 bg-clip-padding rounded-small sm:rounded-large")
            : (isActive ? "pointer-events-auto" : "pointer-events-none",
              "overflow-auto backdrop-filter backdrop-blur-lg z-30 pt-24 px-8 pb-8 sm:py-12 sm:px-48 h-full w-full bg-white bg-opacity-40 bg-clip-padding rounded-small sm:rounded-large")
        )}
      >
        <h2 className="text-xl sm:text-3xl text-darkGreen font-bold mb-4 sm:mb-8">
          {title}
        </h2>
        <div>{text}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
