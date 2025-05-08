import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUpload,
  FaMoneyCheckAlt,
  FaUniversity,
  FaBolt,
  FaLock,
  FaChartBar,
  FaHandshake,
  FaSun,
  FaMoon,
  FaRobot,
  FaTimes,
  FaPaperPlane
} from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", message: "Hi! How can I help you today?" },
    { sender: "user", message: "How do I sell my license?" },
    { sender: "bot", message: "Just upload your license and we’ll handle the rest!" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { sender: "user", message: newMessage },
        { sender: "bot", message: "Thanks for your message! We'll get back to you soon." },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={!darkMode ? "min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300":""}>
        <header className="py-6 px-8 flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <h1 className="text-2xl font-bold">SoftSell</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm flex items-center gap-2"
          >
            {darkMode ? <FaMoon /> : <FaSun />} {darkMode ? "Dark Mode" : "Light Mode"}
          </button>
        </header>

        <section className="text-center px-8 py-20">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Resell Unused Software Licenses Effortlessly
          </motion.h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Maximize your ROI by turning idle licenses into capital. Quick, secure, and compliant.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Sell My Licenses
          </motion.button>
        </section>
        <section className={`py-16 px-8 text-center ${darkMode ? 'bg-gray-100' : 'dark:bg-gray-800'}`}>

          <h3 className="text-3xl font-semibold mb-10">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Upload License", icon: <FaUpload size={40} /> },
              { title: "Get Valuation", icon: <FaMoneyCheckAlt size={40} /> },
              { title: "Get Paid", icon: <FaUniversity size={40} /> },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className={`bg-white ${!darkMode && 'dark:bg-gray-700'} p-6 rounded-xl shadow-md`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h4 className="text-xl font-semibold">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 px-8">
          <h3 className="text-3xl font-semibold text-center mb-10">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <FaBolt size={30} />, title: "Fast Processing", desc: "Quick evaluations and transactions." },
              { icon: <FaLock size={30} />, title: "Secure Deals", desc: "Your data and licenses are protected." },
              { icon: <FaChartBar size={30} />, title: "Transparent Pricing", desc: "No hidden fees or surprises." },
              { icon: <FaHandshake size={30} />, title: "Trusted Partners", desc: "Work with certified resellers." },
            ].map((item, idx) => (
              <div key={idx} className={`p-6 bg-gray-100 rounded-lg ${!darkMode && "dark:bg-gray-800"} text-center shadow-md`}>
                <div className="mb-2 flex justify-center">{item.icon}</div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`bg-gray-50 ${!darkMode && "dark:bg-gray-900"} py-16 px-8`}>
          <h3 className="text-3xl font-semibold text-center mb-10">Customer Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Jane Smith", role: "IT Manager", company: "Acme Corp", quote: "SoftSell helped us recover value from idle licenses with zero hassle." },
              { name: "John Doe", role: "CFO", company: "TechNova", quote: "Quick payouts and excellent support! Highly recommended." },
            ].map((review, idx) => (
              <div key={idx} className={`p-6 bg-white ${!darkMode && "dark:bg-gray-800"} rounded-xl shadow-lg`}>
                <p className="italic mb-4">“{review.quote}”</p>
                <div className="font-semibold">{review.name}</div>
                <div className="text-sm opacity-70">{review.role}, {review.company}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={`py-16 px-8 bg-white ${!darkMode && "dark:bg-gray-950"}`}>
          <h3 className="text-3xl font-semibold text-center mb-10">Contact Us</h3>
          <form className="max-w-3xl mx-auto grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" required className={`p-3 rounded border bg-white ${!darkMode && "dark:bg-gray-800 dark:text-white"} text-black`} />
              <input type="email" placeholder="Email" required className={`p-3 rounded border bg-white text-black ${!darkMode && "dark:bg-gray-800 dark:text-white"}`} />
            </div>
            <input type="text" placeholder="Company" className={`p-3 rounded border bg-white text-black ${!darkMode && "dark:bg-gray-800 dark:text-white"}`} />
            <select required className={`p-3 rounded border bg-white text-black ${!darkMode && "dark:bg-gray-800 dark:text-white"}`}>
              <option value="">Select License Type</option>
              <option value="MS Office">MS Office</option>
              <option value="Adobe Creative Cloud">Adobe Creative Cloud</option>
              <option value="Other">Other</option>
            </select>
            <textarea rows="4" placeholder="Your Message" className={`p-3 rounded border bg-white text-black ${!darkMode && "dark:bg-gray-800 dark:text-white"}`}></textarea>
            <button type="submit" className="bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700">
              Submit
            </button>
          </form>
        </section>

        <footer className={`py-6 text-center text-sm text-gray-500 ${!darkMode && "dark:text-gray-400"}`}>
          © 2025 SoftSell. All rights reserved.
        </footer>

        {/* AI Chatbot */}
        <div className="fixed bottom-6 right-6 z-50">
          {!chatOpen ? (
            <button
              onClick={() => setChatOpen(true)}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700"
            >
              <FaRobot size={24} />
            </button>
          ) : (
            <div className={`bg-white ${!darkMode && "dark:bg-gray-800 dark:text-white"} text-black p-4 rounded-xl shadow-lg w-80 max-h-[80vh] flex flex-col`}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <FaRobot /> <strong>SoftBot</strong>
                </div>
                <button onClick={() => setChatOpen(false)} className="text-red-500 hover:text-red-700">
                  <FaTimes />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 text-sm scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded ${
                      msg.sender === "bot" ? `bg-indigo-100 ${!darkMode && "dark:bg-indigo-900"}` : `bg-gray-200 ${!darkMode && "dark:bg-gray-700"}`
                    }`}
                  >
                    {msg.message}
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className={`p-2 rounded border bg-white ${!darkMode && "dark:bg-gray-700 dark:text-white"} text-black  flex-1`}
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 p-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
