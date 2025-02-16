import React from "react";
import NavbarLogin from "./Navbar_login"; // Ensure NavbarLogin is included
import backgroundImage from "../assets/daycare1.jpg"; // Keep background image import

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Include NavbarLogin */}
      <div className="w-full fixed top-0 z-10">
        <NavbarLogin />
      </div>

      {/* Main content */}
      <section
        id="about-us"
        className="relative flex items-center justify-center min-h-screen p-6"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        {/* Background image with blur */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(6px) brightness(0.7)", // Slightly dim for better readability
            width: "100%",
            height: "100%",
          }}
        ></div>

        {/* Content box */}
        <div className="relative z-10 w-full max-w-4xl bg-white bg-opacity-90 p-8 md:p-10 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-bold text-blue-500 mb-6">About Us</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold text-blue-400">Guardian Angel</span>, we redefine daycare experiences by integrating advanced technology. Our secure live-streaming service keeps parents connected with their children in **real-time**, ensuring peace of mind wherever they are.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our **paperless management system** simplifies daycare tracking, enabling caregivers to log activities such as sleep, meals, and diaper changes seamlessly. Parents receive instant updates, improving communication and transparency.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With a **user-friendly interface**, we make daycare management efficient and eco-friendly. By reducing paperwork, we save valuable time and resources while prioritizing safety, convenience, and seamless collaboration between parents and caregivers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
