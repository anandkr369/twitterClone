import React from 'react';

const Profile = () => {
    const user = {
        coverImage: 'https://via.placeholder.com/1500x500', // Replace with actual image URL
        profileImage: 'https://via.placeholder.com/150', // Replace with actual image URL
        name: 'John Doe',
        username: 'johndoe',
        dob: '1990-01-01',
        following: 123,
        followers: 456
    };

    const handleEditProfile = () => {
        // Logic to handle profile edit (e.g., open a modal with form to edit profile)
        alert('Edit Profile clicked!');
    };

    return (
        <div className="min-h-screen mt-10 bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
                {/* Cover Image */}
                <div className="relative">
                    <img src={user.coverImage} alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                        <img src={user.profileImage} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white" />
                    </div>
                </div>
                {/* Profile Info */}
                <div className="p-4 mt-16">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-gray-600">@{user.username}</p>
                            <p className="text-gray-600">Date of Birth: {new Date(user.dob).toLocaleDateString()}</p>
                        </div>
                        <button 
                            onClick={handleEditProfile}
                            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            Edit Profile
                        </button>
                    </div>
                    {/* Following and Followers */}
                    <div className="flex space-x-4 mt-4">
                        <div>
                            <span className="font-bold">{user.following}</span> Following
                        </div>
                        <div>
                            <span className="font-bold">{user.followers}</span> Followers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
