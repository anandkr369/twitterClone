import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Tofollow from './footbar/Tofollow';
import Topbar from './navbar/Topbar';
import { useAuth } from './context/AuthProvider';
import Signin from './login/Signin';

const Layout = () => {
  const isAuthenticated = true;//useAuth();

  console.log("Using context:", { isAuthenticated });

  if (!isAuthenticated) {
    return <Signin />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <div className="flex flex-1">
        <div className="w-1/4"></div> {/* Left empty space */}
        <div className="flex-1 p-8">
          <Navbar />
          <Outlet />
        </div>
        <div className="w-1/4 p-8"> {/* Right empty space */}
          <Tofollow />
        </div>
      </div>
    </div>
  );
};

export default Layout;
