import React, { useEffect, useState } from 'react';
import AvatarCard from './AvatarCard';

const AvatarSection = ({ onEdit }) => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=3')
      .then(res => res.json())
      .then(data => {
        setAvatars(data.users);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="w-[70%] md:w-[90%] mx-auto grid gap-12 md:grid-cols-3 sm:grid-cols-1">
      {avatars.map(avatar => (
        <AvatarCard key={avatar.id} avatar={avatar} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default AvatarSection