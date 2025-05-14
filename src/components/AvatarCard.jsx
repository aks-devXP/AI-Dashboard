import React from 'react'
import FloatingButton from './FloatingButton'
import { Pencil } from 'lucide-react'

const AvatarCard = ({ avatar, onEdit }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-2xl shadow-lg p-6 flex md:flex-col justify-evenly items-center transition-transform hover:-translate-y-1 hover:shadow-2xl group">  
      <div className="">
        <img
          src={avatar.image}
          alt={avatar.firstName}
          className="max-w-24 max-h-24 rounded-full border-4 border-blue-500 mb-4 shadow-md"
        />
      </div>


      <div className="flex flex-col p-5 items-center justify-between gap-4 text-white font-semibold text-lg mb-1">
        <span className="text-center">{avatar.firstName} {avatar.lastName}</span>
        <div>
          <FloatingButton size="sm" onClick={() => onEdit(true)}>
            <span>Edit Avatar</span>
            <Pencil className="group-hover:w-4 group-hover:h-4 w-0 h-0 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
          </FloatingButton>
        </div>
      </div>
      
    </div>
  );
}

export default AvatarCard