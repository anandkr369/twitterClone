import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="bg-black-600 border-b border-none fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* <h1 className="text-2xl text-white font-bold">Logo</h1> */}
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex gap-96 space-x-4">
                <Link to="/for-you" className="text-black ml-56 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">For You</Link>
                <Link to="/following" className="text-black hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Following</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
