import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-cyan-50 to-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Contact <span className="text-cyan-600">Us</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            We'd love to hear from you! Whether you have a question about
            features, working, or anything else, our team is ready to answer all
            your questions.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-cyan-600 text-white p-4 rounded-lg shadow-lg">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold text-lg">Email</h4>
                <a
                  href="mailto:aashishrbmittal@gmail.com"
                  className="text-cyan-600 hover:underline"
                >
                  aashishrbmittal@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-cyan-600 text-white p-4 rounded-lg shadow-lg">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold text-lg">Phone</h4>
                <a
                  href="tel:+918176034547"
                  className="text-cyan-600 hover:underline"
                >
                  +91 8176034547
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-cyan-600 text-white p-4 rounded-lg shadow-lg">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold text-lg">Address</h4>
                <address className="not-italic text-gray-700">
                  Mittal Firm,
                  <br />
                  Gorakhpur City, India
                </address>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for reaching out! We'll get back to you soon.");
            e.target.reset();
          }}
          className="bg-gray-50 p-10 rounded-3xl shadow-xl"
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              required
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email Address
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 peer"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
