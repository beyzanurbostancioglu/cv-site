import { motion } from 'framer-motion';

const MotionSection = motion.section;

const About = () => (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <p className="text-gray-700 leading-relaxed mt-0">
        Mobil ve web uygulamaları, veri entegrasyonu, API geliştirme ve web scraping alanlarında projeler geliştiriyorum. 
        Front-end ve back-end tecrübemle modern araçlar kullanarak çözümler üretiyor, analitik düşünme ve takım çalışmasıyla 
        projelere katkı sağlıyorum.
      </p>
    </MotionSection>
  );
;

export default About;
