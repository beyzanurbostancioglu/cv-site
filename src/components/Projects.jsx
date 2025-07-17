import { motion } from 'framer-motion';

const MotionSection = motion.section;

const Projects = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Projeler</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 w-full items-stretch">
        <div className="bg-white/80 rounded-xl shadow-lg p-5 w-full md:w-[340px] max-w-full mx-auto">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">TUBİTAK-2209A</h3>
          <p className="text-gray-800">Çift Yön Doğrulamalı Raspberry Pi Tabanlı Mobil Quiz Sistemi</p>
        </div>
        <div className="bg-white/80 rounded-xl shadow-lg p-5 w-full md:w-[340px] max-w-full mx-auto">
          <h3 className="font-semibold text-lg mb-2 text-green-700">BeProPlant</h3>
          <p className="text-gray-800 mb-1">Yapay Zeka ile Zararlı Böcek Tespiti – Tarım Teknolojisi Projesi</p>
          <p className="text-gray-700 text-sm">PİBEX 2024'te 3.lük ödülü kazanan bu ekip projesinde, görüntü işleme destekli yapay zeka modeliyle tarımsal zararlının erken tespiti hedeflenmiştir.</p>
        </div>
      </div>
    </MotionSection>
  );
};

export default Projects;
