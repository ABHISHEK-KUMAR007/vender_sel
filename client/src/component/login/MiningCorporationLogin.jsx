import React, { useState } from "react";

const MiningCorporationLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Mining Corporation Login Submitted" : "Mining Corporation Register Submitted");
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96 max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Mining Corporation Login" : "Mining Corporation Register"}
        </h2>
        
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Register-specific field */}
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        {/* Toggle between login and register */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={toggleForm}
              className="text-blue-600 cursor-pointer ml-1"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default MiningCorporationLogin;
