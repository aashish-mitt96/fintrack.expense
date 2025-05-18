import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import image1 from "../assets/image1.png";

const CombinedPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [users, setUsers] = useState(0);
  const [money, setMoney] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const duration = 2500;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const progressRatio = Math.min(progress / duration, 1);

      setUsers(Math.floor(10000 * easeOut(progressRatio)));
      setMoney(Math.floor(5_000_000 * easeOut(progressRatio)));
      setUptime((99.9 * easeOut(progressRatio)).toFixed(1));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  return (
    <section
      className="min-h-[93vh] text-white"
      style={{
        background: "linear-gradient(to bottom right, #1e3a8a, #0f172a, #0e7490)",
      }}
    >
      {/* Navbar */}
      <nav className="z-50 ">
        <div className="mx-15 py-3 flex justify-between items-center">
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
            Fin<span className="text-4xl text-white">Track</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {["Home", "Features", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white hover:text-cyan-300 font-medium transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-cyan-300 hover:underline font-medium transition">
              Login
            </button>
            <button className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg transition">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-300 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden px-6 py-4 space-y-3 bg-white/20 backdrop-blur-md text-white font-medium transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="#" className="block hover:text-cyan-300">Home</a>
          <a href="#features" className="block hover:text-cyan-300">Features</a>
          <a href="#pricing" className="block hover:text-cyan-300">Pricing</a>
          <hr className="border-gray-300" />
          <a href="#" className="block hover:text-cyan-300">Login</a>
          <a
            href="#"
            className="block bg-gradient-to-r from-cyan-400 to-sky-500 text-white text-center px-4 py-2 rounded-lg shadow hover:shadow-lg"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Floating background bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white opacity-10 animate-float"
            style={{
              width: `${20 + i * 16}px`,
              height: `${20 + i * 16}px`,
              top: `${i * 10 + 5}%`,
              left: `${i * 10 + 5}%`,
              animationDelay: `${i * 600}ms`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center px-6 md:px-26 py-16">
        {/* Left */}
        <div className="flex-1 flex flex-col justify-center max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-snug">
            Simplify Your{" "}
            <span className="text-cyan-300">Financial Journey</span>
          </h1>

          <p className="text-base md:text-lg text-cyan-100 max-w-md drop-shadow-md">
            Manage budgets, track spending, and grow your savings — all in one
            secure, beautiful app.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white font-semibold px-10 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-sm">
              Start Free Trial
            </button>

            <a
              href="#features"
              className="text-rose-300 text-sm font-medium underline hover:text-rose-400 self-start sm:self-center"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-8">
            <StatCard label="Users" number={users} suffix="+" icon="👥" />
            <StatCard
              label="Tracked"
              number={money.toLocaleString()}
              prefix="$"
              icon="💰"
            />
            <StatCard label="Uptime" number={uptime} suffix="%" icon="⏱️" />
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <img
            src={image1}
            alt="Finance Illustration"
            className="max-w-[100%] md:w-[800px] max-h-[400px] md:h-[800px] drop-shadow-2xl rounded-2xl"
            style={{
              filter: "drop-shadow(0 12px 8px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const StatCard = ({ icon, label, number, prefix = "", suffix = "" }) => (
  <div className="flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl px-4 py-3 shadow-md max-w-[140px]">
    <div className="text-2xl">{icon}</div>
    <div className="flex flex-col">
      <span className="text-xl font-bold leading-none">
        {prefix}
        {number}
        {suffix}
      </span>
      <span className="uppercase text-xs font-semibold tracking-wide text-cyan-200">
        {label}
      </span>
    </div>
  </div>
);

export default CombinedPage;
