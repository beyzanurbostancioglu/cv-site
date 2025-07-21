import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react'; // iletişim butonu için useState

const MotionAside = motion.aside;

const Sidebar = () => {
  const [showContact, setShowContact] = useState(false); // buton için state

  return (
    <MotionAside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/4 bg-gray-100 h-screen p-6 flex flex-col items-center shadow-md"
    >
      <img
        src="/profile.jpg"
        alt="Profile photo"
        className="w-28 h-28 rounded-full mb-4 border-2 border-blue-500"
      />
      <h2 className="text-2xl font-bold mb-1 text-center">Beyza Nur Bostancıoğlu</h2>
      <p className="text-sm text-gray-600 mb-4 text-center">Full Stack Developer</p>

      <div className="flex gap-4 mb-4">
        <a href="https://github.com/beyzanurbostancioglu" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-black transition" />
        </a>
        <a href="https://linkedin.com/in/beyza-nurb" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
        </a>
      </div>

      {/* 🆕 İletişim Butonu */}
      <button
        onClick={() => setShowContact(!showContact)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4 w-full"
      >
        İletişim Bilgileri
      </button>

      {/* 🆕 Açılır Bilgiler */}
      {showContact && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-gray-700 space-y-2 text-center"
        >
          <p>📧 beyzanurbostancioglu@gmail.com</p>
          
          <p>
            💻 <a href="https://github.com/beyzanurbostancioglu" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          </p>
          <p>
            🔗 <a href="https://linkedin.com/in/beyza-nurb" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          </p>
        </motion.div>
      )}
    </MotionAside>
  );
};

export default Sidebar;
