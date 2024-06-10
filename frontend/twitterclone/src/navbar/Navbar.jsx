import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaStar, FaBookmark, FaUsers, FaCrown, FaUser } from 'react-icons/fa';
import Post from '../foryou-following/Post';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 h-full bg-black w-64 flex flex-col items-start py-4">
            <div className="text-white text-2xl font-bold px-6 mb-4">Twitter</div>
            <ul className="space-y-2 w-full">
                <li className="w-full">
                    <NavLink to="/home" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaHome className="mr-4" />
                        Home
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="/explore" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaHashtag className="mr-4" />
                        Explore
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="/notifications" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaBell className="mr-4" />
                        Notifications
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="/messages" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaEnvelope className="mr-4" />
                        Messages
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="/grok" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaStar className="mr-4" />
                        Grok
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="/bookmarks" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaBookmark className="mr-4" />
                        Bookmarks
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="/communities" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaUsers className="mr-4" />
                        Communities
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="/upgrade" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaCrown className="mr-4" />
                        Premium
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink to="/profile" activeClassName="bg-gray-800" className="flex items-center px-6 py-3 text-white hover:bg-gray-700 transition-colors duration-200 w-full">
                        <FaUser className="mr-4" />
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to= "/"
                        className="bg-blue-500 text-white font-bold px-24 py-3 rounded-full ml-4   hover:bg-blue-600 transition-colors duration-300"
                    >
                        Post
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
