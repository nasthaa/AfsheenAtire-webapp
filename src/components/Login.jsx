import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleSignIn = (e) => {
    e.preventDefault(); // Mencegah refresh halaman default
    navigate("/");
  };

  const handleSignUp = (e) => {
    e.preventDefault(); // Mencegah refresh halaman default
    navigate("/");
  };

  const togglePanel = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className={`container relative w-[768px] max-w-full min-h-[480px] bg-white rounded-lg shadow-xl overflow-hidden transform ${
          isSignUp ? "right-panel-active" : ""
        }`}
      >
        {/* Sign Up form */}
        <div
          className={`form-container absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ${
            isSignUp ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <form className="h-full flex flex-col items-center justify-center p-8" onSubmit={handleSignUp}>
            <h1 className="text-2xl font-bold mb-2">Create Account</h1>
            <div className="social-container mb-2 flex gap-3">
              <a href="#" className="social bg-gray-200 w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <i className="bi bi-facebook place-items-center"></i>
              </a>
              <a href="#" className="social bg-gray-200 w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <i className="bi bi-google place-items-center"></i>
              </a>
              <a href="#" className="social bg-gray-200 w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <i className="bi bi-linkedin place-items-center"></i>
              </a>
            </div>
            <span className="text-sm mt-1 mb-2">or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="my-2 w-full bg-gray-100 p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="my-2 w-full bg-gray-100 p-3 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="my-2 w-full bg-gray-100 p-3 rounded-lg"
            />
            <button className="bg-black text-white font-bold px-10 py-3 rounded-full mt-2">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In form */}
        <div
          className={`form-container absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ${
            isSignUp ? "translate-x-full opacity-0 z-0" : "opacity-100 z-10"
          }`}
        >
          <form className="h-full flex flex-col items-center justify-center p-8" onSubmit={handleSignIn}>
            <h1 className="text-2xl font-bold mb-2">Sign in</h1>
            <div className="social-container mb-2 flex gap-3">
              <a href="#" className="social bg-gray-200 w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <i className="bi bi-facebook place-items-center"></i>
              </a>
              <a href="#" className="social bg-gray-200 w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <i className="bi bi-google place-items-center"></i>
              </a>
              <a href="#" className="social bg-gray-200 w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <i className="bi bi-linkedin place-items-center"></i>
              </a>
            </div>
            <span className="text-sm mt-1 mb-2">or use your account</span>
            <input
              type="email"
              placeholder="Email"
              className="my-2 w-full bg-gray-100 p-3 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="my-2 w-full bg-gray-100 p-3 rounded-lg"
            />
            <a href="#" className="text-gray-400 text-sm mb-1 mt-2">
              Forgot your password?
            </a>
            <button className="bg-black text-white font-bold px-10 py-3 rounded-full mt-2">
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div
          className="overlay-container absolute top-0 right-0 h-full w-1/2 bg-gradient-to-r from-black to-gray-900 text-white flex items-center justify-center transition-transform duration-500"
          style={{ transform: isSignUp ? "translateX(-100%)" : "translateX(0)" }}
        >
          <div className="overlay flex items-center justify-center w-full h-full">
            {/* Panel Sign In */}
            <div
              className={`overlay-panel absolute top-0 center-0 h-full w-full flex flex-col items-center justify-center px-10 text-center transform transition-transform duration-500 ${
                isSignUp ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="text-sm my-4 leading-6">
                To keep connected with us, please login with your personal info.
              </p>
              <button
                className="ghost bg-transparent border border-white px-10 py-3 rounded-full"
                onClick={togglePanel}
              >
                Sign In
              </button>
            </div>
            
            {/* Panel Sign Up */}
            <div
              className={`overlay-panel absolute top-0 center-0 h-full w-full flex flex-col items-center justify-center px-10 text-center transform transition-transform duration-500 ${
                isSignUp ? "translate-x-full" : "translate-x-0"
              }`}
            >
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p className="text-sm my-4 leading-6">
                Enter your personal details and start your journey with us.
              </p>
              <button
                className="ghost bg-transparent border border-white px-10 py-3 rounded-full"
                onClick={togglePanel}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;