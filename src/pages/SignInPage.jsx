// File: src/pages/SignInPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Di sini kamu bisa tambahkan validasi, API call dsb.
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/dashboard");
  };

  const handleGuestSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img
            src="https://aacatering.co.id/wp-content/uploads/elementor/thumbs/logo-catering-pernikahan-q42q9bs6pk8wdhb6sazsn7owclwc0mbsv1q9hd9ngg.png"
            alt="Logo"
            className="w-32 h-auto"
          />
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">
          Sign in to A.A CATERING
        </h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Username or Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your password"
          />
          <div className="text-right text-sm mt-1">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          onClick={handleSignIn}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold"
        >
          Sign In
        </button>

        <div className="my-4 text-center text-gray-500">or</div>

        <div className="mb-4 text-center text-sm text-gray-600">
          Not a Member of A.A Catering?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Create Account
          </a>
        </div>

        <div className="text-center">
          <button
            onClick={handleGuestSignIn}
            className="text-sm text-blue-500 hover:underline"
          >
            Sign in as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
