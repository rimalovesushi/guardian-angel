import React from "react";

const Navbar_general: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Non-clickable logo and name */}
            <div className="flex items-center cursor-default">
              <img
                src="/Meow.jpg" // Your logo file path
                alt="Daycare Logo"
                className="h-25 w-25 mr-2" // Adjust size as needed
              />
              <span className="text-4xl font-bold text-blue-300 select-none">
                Guardian Angel
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_general; // Ensure it's a default export
