import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-4">
            {/* <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="w-12 h-12 rounded-full mr-4"
      /> */}
            <img
                src="https://tse3.mm.bing.net/th?id=OIP.Jg35DTU8xEFi-BbUaql9CQHaEI&pid=Api&P=0&h=180"
                alt={`Anand's avatar`}
                className="w-12 h-12 rounded-full mr-4"
            />
            {/* <div>
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-gray-600">@{user.username}</p>
      </div> */}

            <div className='flex'>
                <div>
                    <h3 className="text-lg font-semibold">Anand Kumar</h3>
                </div>
                <div>
                    <p className="text-gray-600">@anandkr369</p>
                    <button className='bg-blue-500 rounded-full h-5 w-16 pb-5'>follow</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
