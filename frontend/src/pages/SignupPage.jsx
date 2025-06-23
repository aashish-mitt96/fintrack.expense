import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Signin from "../assets/Signin.png";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    )
      errs.email = "Invalid email address";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/registerBusiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Signup failed");
        setLoading(false);
        return;
      }

      const data = await res.json();
      alert("Signup successful! You can now login.");
      setForm({ name: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      {/* Left Section */}
      <div className="hidden md:flex w-3/5 min-h-screen bg-gradient-to-tr from-[#f9fafb] via-[#e0e7ff] to-[#c7d2fe] flex-col justify-center items-center px-12">
        <div className="flex flex-col items-center text-center max-w-md">
          <img
            src={Signin}
            alt="Illustration"
            className="w-130 mb-8 opacity-90"
          />
          <h2 className="text-4xl font-extrabold text-blue-900 leading-tight">
            Join FinTrack
          </h2>
          <p className="text-lg text-blue-700 mt-4">
            Sign up today and take control of your finances effortlessly.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/5 relative bg-white flex flex-col justify-center px-10 md:px-14">
        {/* Decorative Circle */}
        <div className="hidden md:block absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 opacity-20"></div>

        {/* Back Link */}
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

        <div className="max-w-md w-full mx-auto mt-20">
          <h2 className="text-3xl font-semibold text-gray-900 mb-1">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Let's get you set up with a new account.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
              {errors.password && (
                <p className="text-red-600 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold rounded-lg focus:outline-none focus:ring-2 transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600"
              }`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 flex justify-center gap-4 text-gray-500">
            <button className="flex items-center gap-1 border px-3 py-2 rounded hover:bg-gray-100">
              <FcGoogle size={20} />
              Google
            </button>
            <button className="flex items-center gap-1 border px-3 py-2 rounded hover:bg-gray-100">
              <FaLinkedin size={20} color="#0077b5" />
              LinkedIn
            </button>
          </div>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
