import React from 'react';
import { X } from 'lucide-react';

const AvatarModal = ({ 
  open, 
  onClose, 
  mode = "create",
}) => {

  // If modal is not open, return null
  if (!open) return null;

  //  Modular Title and Button Text
  const title = mode === "create" ? "Create New Avatar" : "Edit Avatar";
  const buttonText = mode === "create" ? "Create Avatar" : "Save Changes";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 w-full max-w-md relative shadow-2xl border border-blue-500/20 animate-slideUp">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-300"
          onClick={onClose}
        >
          <X className="w-6 h-6 cursor-pointer" />
        </button>
        <h2 className="text-white text-2xl font-bold mb-6 font-electrolize">{title}</h2>
        <form className="flex flex-col gap-4 font-electrolize">
          <div className="space-y-2">
            <input 
              name="firstName"
              className="w-full rounded-lg px-4 py-3 bg-gray-800/50 text-white placeholder-gray-400 border border-blue-500/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none" 
              placeholder="First Name" 
            />
          </div>
          <div className="space-y-2">
            <input 
              name="lastName"
              className="w-full rounded-lg px-4 py-3 bg-gray-800/50 text-white placeholder-gray-400 border border-blue-500/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none" 
              placeholder="Last Name" 
            />
          </div>
          <div className="space-y-2">
            <input 
              name="image"
              className="w-full rounded-lg px-4 py-3 bg-gray-800/50 text-white placeholder-gray-400 border border-blue-500/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none" 
              placeholder="Avatar Image URL" 
            />
          </div>
          <button 
            type="submit" 
            onClick={onClose}
            className="mt-4 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AvatarModal