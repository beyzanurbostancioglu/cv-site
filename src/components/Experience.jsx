import { motion } from 'framer-motion';

const MotionSection = motion.section;

const Experience = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-800"></h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Stajyer Mühendis</h3>
        <p className="text-gray-600">Haziran 2025 – Temmuz 2025 | BTK (Bilgi Teknolojileri ve İletişim Kurumu), Ankara</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 leading-relaxed">
          <li>REST API geliştirme (Java, Spring Boot)</li>
          <li>Veritabanı yönetimi ve sorgu optimizasyonu (PostgreSQL)</li>
          <li>API testleri (Postman)</li>
        </ul>
      </div>
    </MotionSection>
  );
};

export default Experience;
