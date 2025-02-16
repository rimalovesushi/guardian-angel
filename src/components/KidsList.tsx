import React, { useState } from "react";
import Navbar_general from "./Navbar_general";
import backgroundImage from "../assets/child_doodles.jpg"; 

const KidsList: React.FC = () => {
  // Dummy Data for Kids List
  const [kids] = useState([
    { id: 1, first_name: "Liam", last_name: "Doe" },
    { id: 2, first_name: "Emma", last_name: "Smith" },
    { id: 3, first_name: "Noah", last_name: "Johnson" },
    { id: 4, first_name: "Olivia", last_name: "Brown" },
    { id: 5, first_name: "Mason", last_name: "White" },
  ]);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1, // Ensure background stays behind content
          filter: "blur(1px)", // 50% blur effect
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
      </div>

      {/* Navbar - Always Visible */}
      <div className="w-full fixed top-0 z-10 bg-white shadow-md">
        <Navbar_general />
      </div>

      {/* Main Content (Pushed Down with `mt-60`) */}
      <div className="relative flex flex-col md:flex-row items-start justify-center flex-grow mt-60 px-8 gap-10 w-full max-w-6xl mx-auto">
        {/* Left: Kids List (Blue Background) */}
        <div className="bg-blue-200 p-8 rounded-lg shadow-md w-full md:w-1/2 border border-gray-200 relative">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">👶 Kids List</h2>
          <ul className="space-y-4">
            {kids.map((kid) => (
              <li key={kid.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-yellow-200 hover:bg-gray-100 transition">
                <span className="text-gray-800 text-lg">{kid.first_name} {kid.last_name}</span>
                <div className="flex space-x-2">
                  {/* Update Button */}
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                    Update
                  </button>
                  {/* Temporary Button */}
                  <button className="bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600 transition">
                    View
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Live Camera Feed (Blue Background) */}
        <div className="bg-blue-200 p-8 rounded-lg shadow-md w-full md:w-1/2 border border-gray-200 relative">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">📹 Live Broadcast</h2>
          <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://rtsp.me/embed/HKQ7b9bG/"
              width="100%"
              height="100%"
              allowFullScreen
              frameBorder="0"
              className="rounded-lg"
            ></iframe>
          </div>
          <p className="text-gray-900 text-sm text-center mt-2">🔄 If the video does not load, please refresh.</p>
        </div>
      </div>
    </div>
  );
};

export default KidsList;
