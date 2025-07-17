// ...existing code...
import About from './components/About';


// SkillTag fonksiyonu ve skillList objesi importlardan hemen sonra tanımlanmalı
const skillList = {
  development: [
    { label: 'Java', level: 90 },
    { label: 'Python', level: 80 },
    { label: 'JavaScript', level: 85 },
    { label: 'HTML/CSS', level: 90 },
    { label: 'Tailwind', level: 70 },
    { label: 'Spring Boot', level: 75 },
    { label: 'Flask', level: 65 },
    { label: 'React', level: 90 },
  ],
  tools: [
    { label: 'Git & GitHub', level: 85 },
    { label: 'Postman', level: 80 },
    { label: 'Swagger', level: 70 },
  ],
  backend: [
    { label: 'MySQL', level: 80 },
    { label: 'PostgreSQL', level: 75 },
    { label: 'REST API', level: 85 },
  ],
  languages: [
    { label: 'İngilizce A2-B1', level: 60 },
  ],
  data: [
    { label: 'Web Scraping', level: 80 },
    { label: 'BeautifulSoup', level: 75 },
    { label: 'Selenium', level: 70 },
  ],
  personal: [
    { label: 'Zaman yönetimi', level: 90 },
    { label: 'Ekip çalışması', level: 95 },
    { label: 'Analitik düşünme', level: 85 },
    { label: 'İnovatif yaklaşım', level: 80 },
  ],
};



import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import { Typography, Divider, Box, Stack, IconButton, Switch, Button, Modal, Tooltip } from '@mui/material';
import { FaMicrochip, FaRobot, FaLeaf, FaInfoCircle, FaCode, FaTools, FaDatabase, FaLanguage, FaCogs, FaUsers, FaLaptopCode } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticleBackground from './components/ParticleBackground';

import React, { useState, createContext, useContext } from 'react';

// Tema context'i
const ThemeContext = createContext();

function App() {
  // Sadece koyu tema
  const theme = {
    background: 'radial-gradient(circle at 50% 0%, rgba(0,234,255,0.08) 0%, rgba(35,37,38,0.0) 70%), linear-gradient(135deg, #181c1f 0%, #232526 100%)',
    cardBg: 'rgba(26,28,31,0.85)',
    cardShadow: '0 0 32px 0 #00eaff44',
    cardBorder: '#00eaff33',
    neon: '#00eaff',
    accent: '#ff9800',
    accent2: '#232526',
    accent3: '#00eaff',
    text: '#e0e0e0',
    subText: '#b0b0b0',
  };
  const [openModal, setOpenModal] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <>
        <Box sx={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden', background: theme.background, fontFamily: 'Inter, Arial, Helvetica, sans-serif', m: 0, p: 0, boxSizing: 'border-box' }}>
          <ParticleBackground />
          {/* Tema anahtarı kaldırıldı */}
          {/* Hero Section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0, pb: 0, mt: 0, zIndex: 1, marginTop: 0, minHeight: 0, paddingTop: 0, m: 0, p: 0, gap: 0 }}>
            <Box sx={{
              background: theme.cardBg,
              boxShadow: theme.cardShadow,
              borderRadius: 6,
              backdropFilter: 'blur(8px)',
              border: `1px solid ${theme.cardBorder}`,
              px: { xs: 3, md: 6 },
              py: { xs: 2, md: 3 },
              mt: 0,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 3, md: 6 },
              maxWidth: 900,
              width: '100%',
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                {/* Profil fotoğrafı için buraya kendi görsel URL'ni ekleyebilirsin */}
                <Box sx={{
                  position: 'relative',
                  mb: 3,
                  width: 150,
                  height: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '0.4s',
                  '&:hover img': {
                    transform: 'scale(1.08)',
                    boxShadow: '0 0 48px #00eaff, 0 0 24px #232526',
                  },
                  '&:hover .glow': {
                    opacity: 1,
                    filter: 'blur(12px)',
                  }
                }}>
                  <Box className="glow" sx={{
                    position: 'absolute',
                    width: 170,
                    height: 170,
                    borderRadius: '50%',
                    background: 'conic-gradient(from 90deg at 50% 50%, #00eaff 0%, #232526 100%)',
                    filter: 'blur(16px)',
                    zIndex: 0,
                    opacity: 0.7,
                    transition: '0.4s',
                  }} />
                  <img src="/profile.jpg" alt="Profile photo" style={{ borderRadius: '50%', boxShadow: '0 8px 32px #00eaff', width: 150, height: 150, objectFit: 'cover', position: 'relative', zIndex: 1, transition: '0.4s' }} />
                </Box>
                <Typography
                  variant="h2"
                  fontWeight={800}
                  align="center"
                  sx={{
                    mb: 1,
                    color: theme.neon,
                    textShadow: '0 0 2px ' + theme.neon,
                    fontSize: { xs: 32, md: 48 },
                    letterSpacing: 1,
                  }}
                >
                  Beyza Nur Bostancıoğlu
                </Typography>
                <Typography variant="h5" align="center" sx={{ mb: 2, color: theme.text, textShadow: `0 0 8px ${theme.neon}`, fontWeight: 500, fontSize: { xs: 18, md: 28 }, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  Full Stack Developer
                  <FaLaptopCode style={{ color: '#ff9800', fontSize: 28, marginLeft: 8 }} />
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                  <IconButton href="https://github.com/beyzanurbostancioglu" target="_blank" sx={{
                    color: theme.neon,
                    background: '#232526',
                    boxShadow: '0 0 2px ' + theme.neon,
                    transition: '0.4s',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #00eaff 60%, #232526 100%)',
                      color: '#232526',
                      boxShadow: '0 0 4px ' + theme.neon,
                      transform: 'scale(1.08) rotate(-4deg)',
                      filter: 'drop-shadow(0 0 2px ' + theme.neon + ')',
                    }
                  }} size="large">
                    <FaGithub />
                  </IconButton>
                  <IconButton href="https://linkedin.com/in/beyza-nurb" target="_blank" sx={{
                    color: theme.neon,
                    background: '#232526',
                    boxShadow: '0 0 2px ' + theme.neon,
                    transition: '0.4s',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #00eaff 60%, #232526 100%)',
                      color: '#232526',
                      boxShadow: '0 0 4px ' + theme.neon,
                      transform: 'scale(1.08) rotate(4deg)',
                      filter: 'drop-shadow(0 0 2px ' + theme.neon + ')',
                    }
                  }} size="large">
                    <FaLinkedin />
                  </IconButton>
                  <IconButton href="mailto:beyzanurbostancioglu@gmail.com" sx={{
                    color: theme.neon,
                    background: '#232526',
                    boxShadow: '0 0 2px ' + theme.neon,
                    transition: '0.4s',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #00eaff 60%, #232526 100%)',
                      color: '#232526',
                      boxShadow: '0 0 4px ' + theme.neon,
                      transform: 'scale(1.08)',
                      filter: 'drop-shadow(0 0 2px ' + theme.neon + ')',
                    }
                  }} size="large">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                  </IconButton>
                </Stack>
                <Typography variant="body1" align="center" sx={{ color: theme.subText, fontWeight: 400, fontSize: { xs: 14, md: 18 }, letterSpacing: 0.5 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <svg width="20" height="20" fill="#00eaff" style={{ marginRight: 4 }} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    Van, Türkiye
                  </span>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ my: 2, mx: 'auto', width: '60%', background: theme.neon, height: 2, borderRadius: 2 }} />
          {/* Content Sections */}
          <Box sx={{ display: 'flex', justifyContent: 'center', px: { xs: 1, md: 0 }, pb: 8 }}>
            <Box sx={{
              background: theme.cardBg,
              boxShadow: theme.cardShadow,
              borderRadius: 6,
              backdropFilter: 'blur(6px)',
              border: `1px solid ${theme.cardBorder}`,
              px: { xs: 2, md: 6 },
              py: { xs: 3, md: 6 },
              maxWidth: 900,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}>
              <Section title="Hakkımda">
                <About hideTitle />
              </Section>
              <Section title="Deneyim">
                <Experience hideTitle />
                <ul style={{ marginTop: 12, color: theme.text, fontSize: 16, lineHeight: 1.7 }}>
                </ul>
              </Section>
              <Section title="Projeler">
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 3,
                  justifyContent: 'center',
                }}>
                  {/* TUBİTAK-2209A kutusu */}
                  <Box sx={{
                    background: theme.cardBg,
                    boxShadow: theme.cardShadow,
                    borderRadius: 6,
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${theme.cardBorder}`,
                    p: 3,
                    minWidth: 260,
                    maxWidth: 340,
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: `0 0 48px ${theme.neon}`,
                      transform: 'scale(1.04)',
                      border: `1.5px solid ${theme.neon}`,
                    }
                  }}>
                    <Box>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <span style={{ color: theme.neon, fontWeight: 700, fontSize: 18 }}>TUBİTAK-2209A:</span>
                        <Tooltip title="Donanım & Eğitim"><span><FaMicrochip color="#ff9800" size={18} style={{ verticalAlign: 'middle' }} /></span></Tooltip>
                      </Stack>
                      <div style={{ color: theme.text, fontSize: 16, marginTop: 8 }}>
                        Çift Yön Doğrulamalı Raspberry Pi Tabanlı Mobil Quiz Sistemi
                      </div>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<FaInfoCircle />}
                        sx={{ mt: 2, borderColor: theme.neon, color: theme.neon, '&:hover': { borderColor: theme.neon, background: theme.cardBg } }}
                        onClick={() => setOpenModal('tubitak')}
                      >
                        Daha fazla bilgi
                      </Button>
                    </Box>
                  </Box>
                  {/* BeProPlant kutusu */}
                  <Box sx={{
                    background: theme.cardBg,
                    boxShadow: theme.cardShadow,
                    borderRadius: 6,
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${theme.cardBorder}`,
                    p: 3,
                    minWidth: 260,
                    maxWidth: 340,
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: `0 0 48px ${theme.neon}`,
                      transform: 'scale(1.04)',
                      border: `1.5px solid ${theme.neon}`,
                    }
                  }}>
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <span style={{ color: theme.neon, fontWeight: 700, fontSize: 18 }}>BeProPlant:</span>
                      <Tooltip title="Yapay Zeka & Tarım"><span><FaRobot color="#e91e63" size={18} style={{ verticalAlign: 'middle' }} /></span></Tooltip>
                      <Tooltip title="Tarım"><span><FaLeaf color="#4caf50" size={18} style={{ verticalAlign: 'middle' }} /></span></Tooltip>
                    </Stack>
                    <div style={{ color: theme.text, fontSize: 16, marginTop: 8 }}>
                      Yapay Zeka ile Zararlı Böcek Tespiti – Tarım Teknolojisi Projesi
                    </div>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<FaInfoCircle />}
                      sx={{ mt: 2, borderColor: theme.neon, color: theme.neon, '&:hover': { borderColor: theme.neon, background: theme.cardBg } }}
                      onClick={() => setOpenModal('beproplant')}
                    >
                      Daha fazla bilgi
                    </Button>
                  </Box>
                  </Box>
                </Box>
              </Section>
              <Section title="Beceriler">
                <Box sx={{
                  background: theme.cardBg,
                  boxShadow: theme.cardShadow,
                  borderRadius: 6,
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${theme.cardBorder}`,
                  p: 3,
                  minWidth: 260,
                  maxWidth: 900,
                  transition: '0.3s',
                  mx: 'auto',
                  '&:hover': {
                    boxShadow: `0 0 48px ${theme.neon}`,
                    transform: 'scale(1.04)',
                    border: `1.5px solid ${theme.neon}`,
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}>
                  {/* Alt başlıklar ana başlık rengiyle, yanlarında simgeler, simge renkleri farklı */}
                  <Typography variant="h6" sx={{ color: theme.neon, mb: 1, fontWeight: 600, fontSize: 19, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaCode style={{ color: '#ff9800', marginRight: 6 }} /> Yazılım Geliştirme
                  </Typography>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px 14px', mb: 2 }}>
                    {skillList.development.map((s) => (
                      <li key={s.label} style={{ color: theme.text, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ color: theme.neon, fontSize: 16, opacity: 0.85 }}>•</span> {s.label}
                      </li>
                    ))}
                  </ul>
                  <Typography variant="h6" sx={{ color: theme.neon, mb: 1, fontWeight: 600, fontSize: 19, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaTools style={{ color: '#4caf50', marginRight: 6 }} /> Araçlar ve Teknolojiler
                  </Typography>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px 14px', mb: 2 }}>
                    {skillList.tools.map((s) => (
                      <li key={s.label} style={{ color: theme.text, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ color: theme.neon, fontSize: 16, opacity: 0.85 }}>•</span> {s.label}
                      </li>
                    ))}
                  </ul>
                  <Typography variant="h6" sx={{ color: theme.neon, mb: 1, fontWeight: 600, fontSize: 19, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaDatabase style={{ color: '#2196f3', marginRight: 6 }} /> Veritabanı & Backend
                  </Typography>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px 14px', mb: 2 }}>
                    {skillList.backend.map((s) => (
                      <li key={s.label} style={{ color: theme.text, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ color: theme.neon, fontSize: 16, opacity: 0.85 }}>•</span> {s.label}
                      </li>
                    ))}
                  </ul>
                  <Typography variant="h6" sx={{ color: theme.neon, mb: 1, fontWeight: 600, fontSize: 19, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaLanguage style={{ color: '#e91e63', marginRight: 6 }} /> Diller
                  </Typography>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px 14px', mb: 2 }}>
                    {skillList.languages.map((s) => (
                      <li key={s.label} style={{ color: theme.text, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ color: theme.neon, fontSize: 16, opacity: 0.85 }}>•</span> {s.label}
                      </li>
                    ))}
                  </ul>
                  <Typography variant="h6" sx={{ color: theme.neon, mb: 1, fontWeight: 600, fontSize: 19, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaCogs style={{ color: '#9c27b0', marginRight: 6 }} /> Veri İşleme & Otomasyon
                  </Typography>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px 14px', mb: 2 }}>
                    {skillList.data.map((s) => (
                      <li key={s.label} style={{ color: theme.text, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ color: theme.neon, fontSize: 16, opacity: 0.85 }}>•</span> {s.label}
                      </li>
                    ))}
                  </ul>
                  <Typography variant="h6" sx={{ color: theme.neon, mb: 1, fontWeight: 600, fontSize: 19, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaUsers style={{ color: '#00bcd4', marginRight: 6 }} /> Kişisel & Takım Becerileri
                  </Typography>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px 14px', mb: 2 }}>
                    {skillList.personal.map((s) => (
                      <li key={s.label} style={{ color: theme.text, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ color: theme.neon, fontSize: 16, opacity: 0.85 }}>•</span> {s.label}
                      </li>
                    ))}
                  </ul>
                </Box>
              </Section>
              <Section title="Eğitim">
                <Education hideTitle />
              </Section>
            </Box>
          </Box>
        </Box>
        {/* Modal: TUBITAK */}
        <Modal open={openModal === 'tubitak'} onClose={() => setOpenModal(null)}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: theme.cardBg,
            color: theme.text,
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            minWidth: 300,
            maxWidth: 400,
            border: `1.5px solid ${theme.neon}`,
          }}>
            <Typography variant="h6" sx={{ color: theme.neon, mb: 2 }}>TUBİTAK-2209A</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Çift Yön Doğrulamalı Raspberry Pi Tabanlı Mobil Quiz Sistemi.<br />
              Donanım ve yazılım entegrasyonu ile eğitimde güvenli sınav ortamı sağlanmıştır.
            </Typography>
            <Button onClick={() => setOpenModal(null)} variant="contained" sx={{ bgcolor: theme.neon, color: '#fff', '&:hover': { bgcolor: theme.neon } }}>Kapat</Button>
          </Box>
        </Modal>
        {/* Modal: BeProPlant */}
        <Modal open={openModal === 'beproplant'} onClose={() => setOpenModal(null)}>
          <Box 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: theme.cardBg,
              color: theme.text,
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              minWidth: 300,
              maxWidth: 400,
              border: `1.5px solid ${theme.neon}`
            }}
          >
            <Typography variant="h6" sx={{ color: theme.neon, mb: 2 }}>BeProPlant</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              PİBEX 2024'te 3.lük ödülü kazanan bu ekip projesinde,<br />
              görüntü işleme destekli yapay zeka modeliyle tarımsal zararlının erken tespiti ve etkilerinin azaltılması hedeflenmiştir.<br />
              Tarım teknolojisinde inovatif bir çözüm sunulmuştur.
            </Typography>
            <Button onClick={() => setOpenModal(null)} variant="contained" sx={{ bgcolor: theme.neon, color: '#fff', '&:hover': { bgcolor: theme.neon } }}>Kapat</Button>
          </Box>
        </Modal>
      </>
    </ThemeContext.Provider>
  );
}

export default App;

// Modern section wrapper
function Section({ title, children }) {
  const theme = useContext(ThemeContext);
  return (
    <Box sx={{ mb: 0, mt: 0, pt: 0, pb: 0 }}>
      <Typography
        variant="h4"
        align="left"
        sx={{
          color: theme.neon,
          textShadow: '0 0 2px ' + theme.neon,
          mb: 2,
          fontWeight: 800,
          fontSize: { xs: 24, md: 32 },
          letterSpacing: 1,
          fontFamily: 'Inter, Arial, Helvetica, sans-serif',
          textTransform: 'none',
          background: 'none',
          WebkitBackgroundClip: 'initial',
          WebkitTextFillColor: 'initial',
          opacity: 1,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ color: theme.text, fontSize: { xs: 15, md: 18 }, lineHeight: 1.7, fontWeight: 400 }}>
        {children}
      </Box>
    </Box>
  );
}
