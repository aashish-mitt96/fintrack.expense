import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate();
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full z-50 "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:-mt-45 -mt-70">
        {/* Logo + FinTrack text */}
        <div className="flex items-center space-x-1 cursor-pointer select-none">
          <img src={logo} alt="FinTrack Logo" className="w-11" />
          <div className="text-3xl font-extrabold text-cyan-400 tracking-wide">
            FinTrack
          </div>
        </div>
        {/* Desktop Nav links */}
        <div className="hidden md:flex bg-blue-500/30 rounded-xl shadow-md border border-cyan-500 px-6 py-2">
          <ul className="flex space-x-10 text-white font-semibold tracking-wide items-center">
            <li
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-cyan-300 cursor-pointer transition"
            >
              Home
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-cyan-300 cursor-pointer transition"
            >
              Features
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-cyan-300 cursor-pointer transition"
            >
              Pricing
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-cyan-300 cursor-pointer transition"
            >
              How It Works
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-cyan-300 cursor-pointer transition"
            >
              About Us
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-cyan-300 cursor-pointer transition"
            >
              Contact Us
            </li>
          </ul>
        </div>
        {/* Desktop Right buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            className="w-18 h-10 bg-cyan-500 text-black font-semibold rounded-md shadow-lg hover:bg-cyan-400 hover:shadow-cyan-400/80 transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="w-24 h-10 border border-cyan-500 text-cyan-500 font-semibold rounded-md hover:bg-cyan-500 hover:text-black transition"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
        {/* Mobile Right buttons () */}
        <div className="flex space-x-1 md:hidden">
          <button
            className="w-18 h-10 bg-cyan-500 text-black font-semibold rounded-md shadow-lg hover:bg-cyan-400 hover:shadow-cyan-400/80 transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default HeaderSection;
