import { FaUserAlt, FaTasks, FaChartPie, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaUserAlt className="text-4xl text-cyan-600" />,
    title: "Sign Up & Connect",
    description:
      "Create your free FinTrack account and securely link your bank accounts in minutes.",
  },
  {
    icon: <FaTasks className="text-4xl text-amber-600" />,
    title: "Track & Categorize",
    description:
      "Automatically track all your transactions and categorize expenses effortlessly.",
  },
  {
    icon: <FaChartPie className="text-4xl text-green-600" />,
    title: "Analyze & Plan",
    description:
      "Visualize your spending with insightful charts and set smart budgets to meet your goals.",
  },
  {
    icon: <FaSmile className="text-4xl text-indigo-600" />,
    title: "Stay On Top",
    description:
      "Get timely alerts and tips to keep your finances healthy and stress-free.",
  },
];

const WorkingSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-12 bg-gradient-to-b from-cyan-50 to-white text-gray-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <p className="text-indigo-700 uppercase tracking-wide font-semibold mb-2">
          Simple & Powerful
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-6">
          How It Works (Step-by-Step Guide)
        </h2>

        {/* Horizontal Timeline for Desktop */}
        <div className="hidden md:flex justify-between items-center relative mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center w-1/3 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-2 border-purple-500">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <div className="w-40 text-center mt-3">
                <h3 className="text-lg font-semibold text-indigo-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="absolute top-8 right-0 w-1/2 h-1 bg-blue-500 rounded"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Step-by-Step Cards */}
        <div className="md:hidden flex flex-col gap-6 mt-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 bg-gray-200 rounded-full">{step.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-indigo-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <p className="mt-8 italic text-indigo-700 max-w-xl mx-auto leading-relaxed">
          "FinTrack changed the way I manage my money — simple, insightful, and
          always reliable."
          <br />— Ashish Mittal, Happy FinTrack User
        </p>
      </div>

      {/* Optional background shapes */}
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400 to-indigo-600 rounded-full opacity-20 -z-10 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-full opacity-20 -z-10 blur-3xl"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default WorkingSection;
