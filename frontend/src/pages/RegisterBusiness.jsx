import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signin from "../assets/Signin.png";
import { toast } from "react-toastify";
import axios from "axios";

export default function RegisterBusiness() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register-business", formData);

      toast.success("Business registered successfully");

      toast.info(`Business ID: ${res.data.businessId}`, { autoClose: 6000 });
      toast.info(`Business Password: ${res.data.businessPassword}`, { autoClose: 6000 });

      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex md:w-4/5 bg-gradient-to-br from-[#f3f9fd] via-[#dbeffc] to-[#bad8f6] flex-col justify-center items-center text-center px-10">
        <img src={Signin} alt="Register Illustration" />
        <p className="text-sm font-semibold text-gray-600">
          Join thousands of businesses already on FinTrack
        </p>
        <h2 className="text-2xl font-bold text-[#1e3a8a] mt-2">
          Register Your Business with Ease
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 bg-white relative">
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="max-w-md w-full mx-auto mt-10">
          <h2 className="text-3xl font-bold text-gray-800">Register Business</h2>
          <p className="text-sm text-gray-500 mb-6">Start managing finances smartly.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter business name"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            {/* Admin Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            {/* Admin Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            {/* Admin Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a secure password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Register Business
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already registered?{" "}
            <Link to="/login" className="text-blue-500 font-medium hover:underline">
              Login Here
            </Link>
          </p>
        </div>

        <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
          FinTrack. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
