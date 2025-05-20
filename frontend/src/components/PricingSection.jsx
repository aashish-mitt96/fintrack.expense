import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const benefits = [
  "Unlimited access to all features",
  "Real-time spending insights",
  "Bank-grade encryption for your data",
  "Sync across all your devices",
  "No ads, no hidden charges",
];

const PricingSection = () => {
  const navigate = useNavigate()
  return (
    <section id="pricing" className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 animate-gradientShift text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center items-center gap-3"
        >
          <BsStars className="text-cyan-400 text-3xl" />
          <h2 className="text-5xl font-extrabold tracking-tight">Simple. Transparent. Free.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cyan-200 text-lg max-w-2xl mx-auto mb-14"
        >
          FinTrack empowers you with pro-level finance tools — without charging a dime. No subscriptions. No surprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white text-gray-900 rounded-3xl shadow-2xl max-w-4xl mx-auto p-10 relative"
        >
          <span className="absolute top-0 right-0 -mt-5 -mr-5 bg-cyan-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            <MdVerified className="inline mr-1" />
            Free Forever
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Price Info */}
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold text-cyan-700"> ₹0</div>
              <div className="mt-2 text-lg font-medium text-gray-600">No credit card required</div>
              <div className="mt-6 hidden md:block">
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-lg py-3 px-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Get Started For Free
                </button>
              </div>
            </div>

            {/* Right Column - Benefits List */}
            <div>
              <ul className="space-y-4 text-left">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-cyan-600 mt-1" size={20} />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Show button below the list for smaller screens */}
              <div className="mt-8 md:hidden">
                <button
                  onClick={() => (window.location.href = "/get-started")}
                  className="w-full bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-lg py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Get Started For Free
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
