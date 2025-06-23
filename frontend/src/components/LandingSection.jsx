import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeaderSection from "./HeaderSection";

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

const LandingSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <style>{styles}</style>
      <section id="home" className="relative pt-10 min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
        <HeaderSection/>
        {/* Floating blurred circles */}
        <div className="absolute top-20 left-10 w-60 h-60 bg-cyan-500 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-25 animate-float-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>
        {/* Main Heading and Sub-heading */}
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
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="mt-8 max-w-2xl text-lg md:text-2xl font-light drop-shadow-md"
        >
          Manage your budget, track expenses, and reach your financial goals
          with ease and confidence.
        </motion.p>
        {/* CTA - Button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          onClick={() => navigate("/register-business")}
          className="mt-12 px-8 py-3 text-xl bg-cyan-500 text-black font-semibold rounded-full shadow-xl hover:shadow-cyan-400/80 hover:bg-cyan-400 transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-400"
        >
          Register Business
        </motion.button>
        {/* Final Quote */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="mt-8 text-cyan-400 text-sm md:text-base font-semibold drop-shadow-md select-none"
        >
          Join over{" "}
          <span className="font-bold text-yellow-400">⭐️ 20,000+ ⭐️</span>{" "}
          people mastering their finances with FinTrack.
        </motion.p>
      </section>
    </>
  )
}

export default LandingSection;
