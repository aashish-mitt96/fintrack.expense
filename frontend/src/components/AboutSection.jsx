import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";
import { MdInsights } from "react-icons/md";

const highlights = [
  {
    icon: <FaChartLine className="text-cyan-500 text-3xl" />,
    title: "Track Every Penny",
    description: "Gain full visibility into your finances with smart insights and real-time updates.",
  },
  {
    icon: <FaShieldAlt className="text-cyan-500 text-3xl" />,
    title: "Bank-Level Security",
    description: "We use robust encryption and security protocols to protect your financial data.",
  },
  {
    icon: <FaUsers className="text-cyan-500 text-3xl" />,
    title: "Built for Everyone",
    description: "FinTrack is designed to be simple, powerful, and accessible for all users.",
  },
  {
    icon: <MdInsights className="text-cyan-500 text-3xl" />,
    title: "Smarter Insights",
    description: "Get AI-powered insights and budgeting suggestions based on your habits.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 animate-gradientShift text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-8"
        >
          About <span className="text-cyan-400">FinTrack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cyan-100 text-lg max-w-3xl mx-auto text-center mb-16"
        >
          FinTrack was born out of the idea that everyone deserves a clear view of their money. Whether you're a student,
          working professional, or entrepreneur — FinTrack helps you stay in control, make smarter decisions, and build a better
          financial future.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
              className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:bg-white/20 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-cyan-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
