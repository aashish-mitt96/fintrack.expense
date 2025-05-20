import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { useState } from "react";

const styles = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .gradient-text {
    background: linear-gradient(270deg, #06b6d4, #3b82f6, #06b6d4);
    background-size: 600% 600%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 5s ease infinite;
  }

  @keyframes floatSlow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(15px); }
  }

  .animate-float-slow {
    animation: floatSlow 6s ease-in-out infinite;
  }
`;

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Side Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 left-0 bottom-0 w-64 bg-gray-900 text-gray-300 shadow-lg z-50 flex flex-col p-6"
          >
            <button
              onClick={onClose}
              className="self-end mb-6 text-cyan-400 hover:text-cyan-500 font-bold text-lg"
            >
              &times; {/* Close icon */}
            </button>

            <ul className="space-y-6 text-lg font-semibold tracking-wide">
              {[
                "Home",
                "Features",
                "Pricing",
                "How It Works",
                "About Us",
                "Contact Us",
                "FAQs",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-cyan-400 cursor-pointer transition"
                  onClick={onClose} // close sidebar on click
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-4">
              <button
                onClick={() => (window.location.href = "/login")}
                className="w-full h-10 bg-cyan-500 text-black font-semibold rounded-md shadow-lg hover:bg-cyan-400 hover:shadow-cyan-400/80 transition"
              >
                Login
              </button>
              <button
                onClick={() => (window.location.href = "/get-started")}
                className="w-full h-10 border border-cyan-500 text-cyan-500 font-semibold rounded-md hover:bg-cyan-500 hover:text-black transition"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="hidden md:flex bg-blue-500/30 rounded-xl shadow-md border border-cyan-400 px-6 py-2">
          <ul className="flex space-x-10 text-white font-semibold tracking-wide items-center">
            <li className="hover:text-cyan-300 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-cyan-300 cursor-pointer transition">
              Features
            </li>
            <li className="hover:text-cyan-300 cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-cyan-300 cursor-pointer transition">
              How It Works
            </li>
            <li className="hover:text-cyan-300 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-cyan-300 cursor-pointer transition">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Desktop Right buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            className="w-18 h-10 bg-cyan-500 text-black font-semibold rounded-md shadow-lg hover:bg-cyan-400 hover:shadow-cyan-400/80 transition"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
          <button
            className="w-24 h-10 border border-cyan-500 text-cyan-500 font-semibold rounded-md hover:bg-cyan-500 hover:text-black transition"
            onClick={() => (window.location.href = "/get-started")}
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden px-4 py-2 border rounded text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      {/* Sidebar for mobile */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-10 min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
      <Navbar />
      {/* Floating blurred circles */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-cyan-500 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
      <div
        className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-25 animate-float-slow"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-5xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg max-w-4xl"
      >
        Take Control of Your <span className="gradient-text">Finances</span>
      </motion.h1>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="mt-8 max-w-2xl text-lg md:text-2xl font-light drop-shadow-md"
      >
        Manage your budget, track expenses, and reach your financial goals with
        ease and confidence.
      </motion.p>

      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="mt-12 px-12 py-4 bg-cyan-500 text-black font-semibold rounded-full shadow-xl hover:shadow-cyan-400/80 hover:bg-cyan-400 transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-400"
      >
        Get Started
      </motion.button>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        className="mt-6 text-cyan-400 text-sm md:text-base font-semibold drop-shadow-md select-none"
      >
        Join <span className="font-bold">20,000+</span> users managing their
        finances with FinTrack
      </motion.p>
    </section>
  );
};

export default function LandingSection() {
  return (
    <>
      <style>{styles}</style>
      <Hero />
    </>
  );
}
