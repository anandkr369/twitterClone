import React from 'react';
import UserCard from './UserCard';

const Tofollow = () => {
  const usersToFollow = [
    {
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://via.placeholder.com/50'
    },
    {
      name: 'Jane Smith',
      username: 'janesmith',
      avatar: 'https://via.placeholder.com/50'
    },
    {
      name: 'Sam Johnson',
      username: 'samjohnson',
      avatar: 'https://via.placeholder.com/50'
    }
  ];

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Who to Follow</h2>
      {usersToFollow.map(user => (
        <UserCard key={user.username} user={user} />
      ))}
    </div>
  );
};

export default Tofollow;
