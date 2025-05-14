import React, { useState, useEffect } from 'react';
import AvatarModal from './components/AvatarModal';
import { CirclePlus } from 'lucide-react';
import AvatarSection from './components/AvatarSection';
import FloatingButton from './components/FloatingButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAvatar, setEditingAvatar] = useState(null);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-950 to-blue-900 text-white flex flex-col items-center px-2 pb-20">
      {/* Header for Welcome and Greeting */}
      <header className="w-full flex flex-col md:flex-row justify-between items-center p-10">
        <div className="flex sm:flex-row flex-col items-center gap-5">
          <div>
            <img src="./src/assets/logo.jpg" alt="Logo" className="w-24 h-24 rounded-full" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl mb-2 font-bruno">AI Dashboard</h1>
            <p className="text-blue-300 text-lg text-center font-bruno">Welcome back, AksDevXP</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="User" className="w-12 h-12 rounded-full border-2 hover:scale-110 transition-all duration-300 ease-in-out border-blue-500 shadow" />
        </div>
      </header>

      {/* Avatar Cards Section for displaying 3 avatars */}
      <section className="w-full font-electrolize">
        <h2 className="text-2xl font-semibold mb-6 text-center">Your Avatars</h2>
        <AvatarSection onEdit={setEditingAvatar} />
      </section>

      {/* Floating Button for creating new avatar */}
      <div className="fixed bottom-8 right-8 z-40">
        <FloatingButton onClick={() => setIsModalOpen(true)}>
          <span>Create New Avatar</span>
          <CirclePlus className="group-hover:w-6 group-hover:h-6 w-0 h-0 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
        </FloatingButton>
      </div>

      {/* Create Modal Window*/}
      <AvatarModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        mode="create"
      />

      {/* Edit Modal Window */}
      <AvatarModal 
        open={!!editingAvatar} 
        onClose={() => setEditingAvatar(null)} 
        mode="edit"
      />

    </div>
  );
}

export default App;
