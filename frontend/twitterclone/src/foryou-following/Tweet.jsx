import React from 'react';
import { FaHeart, FaRetweet, FaShare } from 'react-icons/fa';

const Tweet = () => {
  return (
    <div className="bg-white border mt-10 border-gray-200 rounded-lg shadow-sm p-4">
      <div className="flex">
        <img src="https://via.placeholder.com/50" alt="Narendra Modi" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <div className="flex items-center mb-2">
            <h2 className="font-bold mr-1">Narendra Modi</h2>
            <span className="text-gray-500">@narendramodi</span>
          </div>
          <p className="text-gray-600">Appreciate your greetings <a href="https://twitter.com/elonmusk">@elonmusk</a>.
            The talented Indian youth, our demography, predictable policies and stable democratic polity will continue to provide the business environment for all our partners.</p>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex items-center text-gray-500">
          
          
        
        </div>
        <div className="flex items-center mt-2">
          <button className="flex items-center text-gray-500 mr-4">
            <FaHeart className="mr-1" /> Like
          </button>
          <button className="flex items-center text-gray-500 mr-4">
            <FaRetweet className="mr-1" /> Repost
          </button>
          <button className="flex items-center text-gray-500">
            <FaShare className="mr-1" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
