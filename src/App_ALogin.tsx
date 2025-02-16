import React, { useEffect, useState } from "react";
import Navbar_general from "./components/Navbar_general"; // Keep Navbar
import Dashboard from "./components/Dashboard"; // Import Dashboard component

const App_ALogin: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false); // State to toggle Dashboard rendering

  useEffect(() => {
    // Show Dashboard after 1.5 seconds
    const timer = setTimeout(() => {
      setShowDashboard(true);
    }, 1500);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  // If showDashboard is true, render the Dashboard component
  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Always Visible */}
      <div className="w-full fixed top-0 z-10">
        <Navbar_general /> {/* Navbar remains on the screen */}
      </div>
        
      {/* Content - Displays for 1.5 seconds before switching to Dashboard */}
      <div className="flex flex-col items-center justify-center flex-grow mt-20">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">Welcome to the App</h2>
        <p className="text-lg text-gray-700 mb-6">
          You are now logged in. You will be redirected to the dashboard shortly.
        </p>
      </div>
    </div>
  );
};

export default App_ALogin;
