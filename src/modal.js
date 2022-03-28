import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Modal = ({ title, text, isActive }) => {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <div
        className={classNames(
          isActive ? "pointer-events-auto" : "pointer-events-none",
          "z-30 py-8 px-48 h-full w-full bg-white bg-opacity-60 bg-clip-padding border border-white rounded-4xl"
        )}
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="text-3xl text-darkGreen font-bold">{title}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Modal;
