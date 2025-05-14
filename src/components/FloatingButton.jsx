import React from 'react'

const FloatingButton = ({ onClick, children, size="xl" }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl cursor-pointer bg-blue-600 hover:bg-blue-700 text-white shadow-lg w-fit h-fit p-3 flex items-center justify-center transition-all duration-300 hover:scale-105 font-electrolize group ${
        size === "xl" ? "text-xl" : "text-sm"
      }`}
    >
      <span className="flex items-center">
        {children}
      </span>
    </button>
  );
}

export default FloatingButton
