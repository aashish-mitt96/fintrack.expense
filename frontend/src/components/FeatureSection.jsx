import { motion } from "framer-motion";
import { FaChartLine, FaWallet, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine className="text-cyan-600 w-12 h-12" />,
    title: "Real-Time Insights",
    description: "Visualize your spending and income trends with intuitive charts and dashboards.",
  },
  {
    icon: <FaWallet className="text-amber-600 w-12 h-12" />,
    title: "Smart Budgeting",
    description: "Set monthly budgets and receive alerts to stay on top of your financial goals.",
  },
  {
    icon: <FaShieldAlt className="text-green-600 w-12 h-12" />,
    title: "Secure & Private",
    description: "Bank-grade encryption ensures your data is safe and never shared.",
  },
  {
    icon: <FaMobileAlt className="text-indigo-600 w-12 h-12" />,
    title: "Mobile Ready",
    description: "Access FinTrack on any device, anytime. No downloads needed.",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-gradient-to-b from-cyan-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          Powerful Features to Help You Stay Ahead
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 max-w-3xl mx-auto text-lg mb-16"
        >
          FinTrack simplifies financial planning with tools that keep you informed, secure, and in control.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl hover:scale-[1.05] transition-transform duration-300 cursor-pointer"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
