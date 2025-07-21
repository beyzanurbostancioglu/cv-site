import { motion } from 'framer-motion';

const MotionSection = motion.section;

const Education = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-800"></h2>
      <div className="text-gray-700 leading-relaxed flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h3 className="font-semibold">Burdur Mehmet Akif Ersoy Üniversitesi</h3>
          <p>Yazılım Mühendisliği | 2023 - 2027</p>
        </div>
        <div className="md:text-right md:min-w-[160px]">
          <span className="font-semibold">AGNO:</span> 2.92 / 4.00
        </div>
      </div>
    </MotionSection>
  );
};

export default Education;
