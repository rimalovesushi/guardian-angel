import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import backgroundImage from "../assets/children_playing_artwork.jpg"; // Keep background image import

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const dummyUser = {
    username: "admin",
    password: "password",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (username === dummyUser.username && password === dummyUser.password) {
      setMessage("Logged in successfully!");
      setIsLoggedIn(true); // ✅ Set login state
      navigate("/app-a-login"); // ✅ Navigate to App_ALogin.tsx
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm grayscale-[30%] rounded-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      ></div>

      {/* Login Form */}
      <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-sm w-full mb-6">
        <h2 className="text-2xl font-bold text-center text-blue-300 mb-4">Log in</h2>
        {message && <p className="text-center text-red-500 mb-2">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full px-3 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-3 py-2 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-300 hover:bg-white-300 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
