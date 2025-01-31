import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";

const SignUp = () => {
  const [showPopup, setShowPopup] = useState(false); // Popup state
  const [isLogin, setIsLogin] = useState(true); // Toggle Login/Signup form

  const handleLoginPopup = () => {
    setShowPopup(true); // Show popup
    setIsLogin(true); // Show Login form
  };

  const handleSignupPopup = () => {
    setShowPopup(true); // Show popup
    setIsLogin(false); // Show Signup form
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close popup
  };

  return (
    <div>
      {/* Login/Signup Button */}
      <div className="text-center">
        <button
          onClick={handleLoginPopup}
          className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
        >
          <span className="group-hover:block hidden transition-all duration-200">
            Login/Signup
          </span>
          <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 dark:bg-gray-900 dark:bg-opacity-75">
          <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg w-96 p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              ✖
            </button>

            {/* Modal Content */}
            {isLogin ? (
              <div>
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-500"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white w-full py-2 rounded-md hover:bg-secondary transition-all dark:bg-gray-600 dark:hover:bg-gray-700"
                  >
                    Login
                  </button>
                </form>
                <p className="text-sm text-center mt-4">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={() => setIsLogin(false)}
                    className="text-primary underline dark:text-gray-400"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-500"
                      placeholder="Create a password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary text-white w-full py-2 rounded-md hover:bg-primary transition-all dark:bg-gray-600 dark:hover:bg-gray-700"
                  >
                    Signup
                  </button>
                </form>
                <p className="text-sm text-center mt-4">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={() => setIsLogin(true)}
                    className="text-primary underline dark:text-gray-400"
                  >
                    Login
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
