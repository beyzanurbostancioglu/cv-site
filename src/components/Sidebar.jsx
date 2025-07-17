import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MotionAside = motion.aside;

const Sidebar = () => (
  <MotionAside
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full md:w-1/4 bg-gray-100 h-screen p-6 flex flex-col items-center shadow-md"
  >
    <img
      src="https://via.placeholder.com/120"
      alt="Profil"
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
    <p className="text-sm text-gray-500 text-center">Van, Türkiye</p>
  </MotionAside>
);

export default Sidebar;
