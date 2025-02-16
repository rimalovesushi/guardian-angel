import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import NavbarLogin from "./components/Navbar_login";
import Login from "./components/Login";
import Footer from "./components/Footer";
import App_ALogin from "./App_ALogin"; // Import App_ALogin
import AboutUs from "./components/AboutUs"; // Import AboutUs page

function App() {
  // @ts-ignore
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <main className="flex flex-col min-h-screen">
        <Routes>
          {/* Before Login */}
          <Route
            path="/"
            element={
              <>
                <div className="w-full fixed top-0 z-10">
                  <NavbarLogin />
                </div>
                <div className="flex flex-col items-center justify-center flex-grow mt-20">
                  <Login setIsLoggedIn={setIsLoggedIn} />
                </div>
                <Footer />
              </>
            }
          />

          {/* After Login */}
          <Route path="/app-a-login" element={<App_ALogin />} />

          {/* About Us Page (Includes NavbarLogin) */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
