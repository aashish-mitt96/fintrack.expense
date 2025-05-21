import Login from "../assets/Login.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex md:w-4/5 bg-gradient-to-br from-[#e6f0fa] via-[#d0e2f5] to-[#a9c9eb] flex-col justify-center items-center text-center px-10">
        <img src={Login} alt="Illustration" className="w-135 mb-6" />
        <p className="text-sm font-semibold text-gray-600">
          Get started for free & integrate in minutes
        </p>
        <h2 className="text-2xl font-bold text-[#1e3a8a] mt-2">
          Get Structured Financial Data
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 bg-white relative">
        {/* Back Arrow */}
        <Link
          to="/"
          className="absolute top-6 left-6 text-blue-600 hover:underline text-sm flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <div className="max-w-md w-full mx-auto mt-10">
          <h2 className="text-3xl font-bold text-gray-800">Welcome</h2>
          <p className="text-sm text-gray-500 mb-6">Login to your account.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="text-sm text-gray-500 whitespace-nowrap">
              Or Log in with
            </span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Auth Buttons with React Icons + Text */}
          <div className="mt-4 flex gap-3">
            <button className="flex items-center justify-center gap-3 border border-gray-300 p-2 rounded-md hover:bg-gray-100 w-full">
              <FcGoogle className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 border border-gray-300 p-2 rounded-md hover:bg-gray-100 w-full">
              <FaLinkedin className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">LinkedIn</span>
            </button>
          </div>

          <p className="mt-6 text-sm text-center text-gray-600">
            Not registered yet?{" "}
            <a href="/signup" className="text-blue-500 font-medium hover:underline">
              Sign Up Now
            </a>
          </p>
        </div>

        <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
          FinTrack. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
