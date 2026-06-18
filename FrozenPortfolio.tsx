import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';
import {
  Moon,
  Sun,
  Mail,
  ExternalLink,
  Download,
  Award,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Brand icons
// ---------------------------------------------------------------------------

function Github({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Snowflake background
// ---------------------------------------------------------------------------

const SNOWFLAKES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 14 + 8,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * -20,
  sway: Math.random() * 8 + 4,
  char: ['❄', '❅', '❆'][Math.floor(Math.random() * 3)],
  opacity: Math.random() * 0.5 + 0.2,
}));

function Snowflakes({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <>
      {SNOWFLAKES.map((s) => (
        <span
          key={s.id}
          className="snowflake"
          style={{
            left: s.left,
            fontSize: s.size,
            opacity: s.opacity,
            animationDuration: `${s.duration}s, ${s.sway}s`,
            animationDelay: `${s.delay}s, ${s.delay * 0.5}s`,
          }}
        >
          {s.char}
        </span>
      ))}
    </>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const LINKS = {
  github: 'https://github.com/Tupakulapavithra02',
  linkedin: 'https://www.linkedin.com/in/tupakula-pavithra-512004244/',
  email: 'mailto:pavithratupakula1@gmail.com',
};

const NAV_SECTIONS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const projects = [
  {
    title: 'PropPilot',
    description:
      'Real-time property listing and automation platform for real estate agents. Properties flow through a live pipeline (New → Scheduled → Marketing → Live) with automated email alerts, Socket.io WebSocket updates, animated FLIP card transitions, and team notification tabs. Includes agent authentication, real-world address validation via OpenStreetMap, and a fully automated scheduling engine.',
    tech: ['Node.js', 'Express', 'Socket.io', 'SQLite', 'Nodemailer', 'Vanilla JS'],
    link: 'https://github.com/Tupakulapavithra02/PropPilot',
    image: '/images/proppilot.png',
  },
  {
    title: 'CorroSight',
    description:
      'AI-powered pipeline integrity intelligence platform automating multi-run ILI analysis using KD-Tree search, Hungarian matching, and ML-based corrosion growth prediction. >95% time reduction with FastAPI backend (20+ REST APIs) and Angular dashboard.',
    tech: ['Python', 'FastAPI', 'Angular', 'Machine Learning', 'REST API'],
    link: 'https://github.com/Tupakulapavithra02/CorroSight',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Plant Leaf Disease Detection',
    description:
      'Supervised learning CNN model for image segmentation and plant disease classification. Achieved 92% accuracy, enabling early intervention and reducing estimated crop losses by 25%.',
    tech: ['Python', 'CNN', 'TensorFlow', 'Image Segmentation', 'ML'],
    link: 'https://github.com/Tupakulapavithra02/DETECTION-OF-PLANT-DISEASE-USING-MACHINE-LEARNING-',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Suicide Analysis & Prevention',
    description:
      'Machine learning application analyzing data using multiple classifiers to identify at-risk patterns and support prevention strategies with improved prediction accuracy.',
    tech: ['Python', 'ML Classifiers', 'Data Analysis', 'Healthcare ML'],
    link: 'https://github.com/Tupakulapavithra02/Suicide-Analysis-and-Prevention-Application-Using-Machine-Learning-Classifiers',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Real-Time NER on Reddit',
    description:
      'Real-time Named Entity Recognition pipeline on live Reddit data, extracting and classifying entities such as people, organizations, and locations from social media text streams.',
    tech: ['Python', 'NLP', 'NER', 'Reddit API', 'Real-Time'],
    link: 'https://github.com/Tupakulapavithra02/Real-Time-Named-Entity-Recognition-on-Reddit',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Stock Price Prediction',
    description:
      'ML model using Random Forest and LSTM networks to forecast financial time-series stock prices. Achieved 85% prediction accuracy for better risk assessment and investment strategies.',
    tech: ['Python', 'LSTM', 'Random Forest', 'Time-Series', 'ML'],
    link: null,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
  },
];

const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'C', 'HTML'] },
  { category: 'Full Stack', items: ['ReactJS', 'FastAPI', 'Spring Boot', 'RESTful APIs', 'PyTorch', 'TensorFlow'] },
  { category: 'Data & AI', items: ['Machine Learning', 'NLP', 'ETL Pipelines', 'Time-Series', 'Anomaly Detection', 'Tableau'] },
  { category: 'Cloud & Infra', items: ['AWS (EC2, S3, Lambda, Redshift, Glue)', 'Spark', 'Databricks', 'Kubernetes', 'Linux'] },
  { category: 'GenAI & LLMs', items: ['LangChain', 'RAG', 'OpenAI API', 'Prompt Engineering', 'LLMs'] },
  { category: 'Design', items: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'] },
  { category: 'Engineering', items: ['Agile SDLC', 'Git', 'Unit/Integration Testing', 'Design Patterns', 'CI/CD'] },
];

const timeline = [
  {
    type: 'work' as const,
    title: 'Student Assistant — UNIX Programming',
    organization: 'University of Texas at Dallas',
    period: 'Aug 2025 – May 2026',
    description: 'Analyzed and debugged multi-process C and Bash programs using gdb and perf.',
    achievements: ['Improved fault tolerance of distributed systems', 'Designed automated testing strategies', 'Structured feedback on student submissions'],
  },
  {
    type: 'education' as const,
    title: "Master's in Computer and Information Sciences",
    organization: 'University of Texas at Dallas, USA',
    period: 'Aug 2024 – May 2026',
    description: 'Specialization in Intelligent Systems. Dean Scholarship recipient. Graduated May 2026.',
    achievements: ['CGPA: 3.66 / 4.0', 'Eric Jonson Dean Scholarship (2024–2025)', 'Specialization: Intelligent Systems'],
  },
  {
    type: 'work' as const,
    title: 'Salesforce Developer Intern',
    organization: 'Smart Internz, India',
    period: 'Apr 2023 – May 2023',
    description: 'Automated CRM workflows using Salesforce Flow and Process Builder.',
    achievements: ['Cut processing time by 30%', 'Built Apex classes, triggers & SOQL queries', 'Earned Apex Specialist Superbadge'],
  },
  {
    type: 'education' as const,
    title: "Bachelor's in Computer Science",
    organization: 'SVCE, India',
    period: 'Aug 2020 – May 2024',
    description: 'Strong foundation in algorithms, data structures, and machine learning.',
    achievements: ['CGPA: 3.88 / 4.0', 'Published research on chatbot technologies', 'Completed ML & cloud certifications'],
  },
];

const certifications = [
  {
    title: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google Cloud',
    link: 'https://www.credly.com/badges/46966254-0004-4ee7-a4bf-f8c2cbe4b75f/public_url',
  },
  {
    title: 'MTA: Introduction to Programming Using Python',
    issuer: 'Microsoft',
    link: 'https://www.credly.com/badges/741be0fe-917c-4d53-ae0f-09a6b9d791ec/public_url',
  },
  {
    title: "Eric Jonson's Dean Scholarship",
    issuer: 'UT Dallas (2024–2025)',
    link: '',
  },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const easeOut: Easing = 'easeOut';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function FrozenPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [activeSection, setActiveSection] = useState('about');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.25 }
    );
    NAV_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  // ── Theme tokens ──────────────────────────────────────────────────────────
  const dk = darkMode;
  const accent  = dk ? '#60a5fa' : '#7c3aed';
  const accent2 = dk ? '#a5f3fc' : '#a78bfa';
  const textPrimary   = dk ? '#e0f0ff' : '#0f0f1a';
  const textMuted     = dk ? '#94a3b8' : '#6b7280';
  const textBody      = dk ? '#cbd5e1' : '#374151';
  const pillBg        = dk ? 'rgba(43,108,238,0.15)'  : 'rgba(124,58,237,0.08)';
  const pillBorder    = dk ? 'rgba(96,165,250,0.25)'  : 'rgba(124,58,237,0.2)';
  const pillColor     = dk ? '#bae6fd' : '#5b21b6';
  const techBg        = dk ? 'rgba(96,165,250,0.1)'   : 'rgba(124,58,237,0.06)';
  const techBorder    = dk ? 'rgba(96,165,250,0.2)'   : 'rgba(124,58,237,0.15)';
  const techColor     = dk ? '#a5f3fc' : '#7c3aed';
  const periodBg      = dk ? 'rgba(43,108,238,0.15)'  : 'rgba(124,58,237,0.08)';
  const periodBorder  = dk ? 'rgba(96,165,250,0.3)'   : 'rgba(124,58,237,0.25)';
  const periodColor   = dk ? '#a5f3fc' : '#7c3aed';
  const hdrBg         = dk ? 'rgba(6,13,31,0.75)'     : 'rgba(255,255,255,0.88)';
  const hdrBorder     = dk ? 'rgba(96,165,250,0.15)'  : 'rgba(124,58,237,0.12)';
  const btnGrad       = dk ? 'linear-gradient(135deg,#2b6cee,#0e7490)' : 'linear-gradient(135deg,#7c3aed,#6d28d9)';
  const btnShadow     = dk ? '0 0 20px rgba(43,108,238,0.4)' : '0 0 20px rgba(124,58,237,0.35)';
  const navActiveBg   = dk ? 'rgba(43,108,238,0.35)'  : 'rgba(124,58,237,0.15)';
  const navBg         = dk ? 'rgba(43,108,238,0.1)'   : 'rgba(124,58,237,0.06)';
  const navBorderC    = dk ? 'rgba(96,165,250,0.25)'  : 'rgba(124,58,237,0.2)';
  const navActiveColor= dk ? '#e0f0ff' : '#5b21b6';
  const nodeGrad = (type: string) => dk
    ? (type === 'work' ? 'linear-gradient(135deg,#2b6cee,#60a5fa,#a5f3fc)' : 'linear-gradient(135deg,#0891b2,#0e7490,#a5f3fc)')
    : (type === 'work' ? 'linear-gradient(135deg,#7c3aed,#a78bfa)' : 'linear-gradient(135deg,#6d28d9,#c4b5fd)');

  return (
    <div
      className={`${dk ? 'frozen-bg' : 'bg-gradient-to-br from-violet-50/60 via-white to-purple-50/40'} min-h-screen relative overflow-hidden`}
      style={{ fontFamily: "'Epilogue', sans-serif", color: textPrimary, transition: 'background 0.4s, color 0.4s' }}
    >
      <Snowflakes visible={dk} />

      {/* ── Ambient glow blobs ── */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {dk ? (
          <>
            <div className="absolute top-[-10%] left-[-5%]  w-[500px] h-[500px] rounded-full bg-[#2b6cee]/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#60a5fa]/8 blur-[140px]" />
            <div className="absolute top-[40%] left-[50%]   w-[400px] h-[400px] rounded-full bg-[#a5f3fc]/5 blur-[100px]" />
          </>
        ) : (
          <>
            <div className="absolute top-[-10%] left-[-5%]  w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-200/25 blur-[140px]" />
            <div className="absolute top-[40%] left-[50%]   w-[400px] h-[400px] rounded-full bg-violet-100/30 blur-[100px]" />
          </>
        )}
      </div>

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50"
        style={{ background: hdrBg, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${hdrBorder}`, transition: 'background 0.4s, border-color 0.4s' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-4">
          {/* Name */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ letterSpacing: '0.05em' }}
            className={`text-lg font-semibold cursor-default shrink-0 ${dk ? 'ice-shimmer-text' : 'bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent'}`}
          >
            Pavithra Tupakula
          </motion.span>

          {/* Nav badges */}
          <nav className="hidden md:flex gap-1.5 flex-1 justify-center">
            {NAV_SECTIONS.map((section, i) => {
              const isActive = activeSection === section.toLowerCase();
              return (
                <motion.a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                  style={{
                    background: isActive ? navActiveBg : navBg,
                    border: `1px solid ${navBorderC}`,
                    color: isActive ? navActiveColor : accent2,
                    boxShadow: isActive ? (dk ? '0 0 12px rgba(43,108,238,0.3)' : '0 0 12px rgba(124,58,237,0.2)') : 'none',
                    textDecoration: 'none',
                  }}
                >
                  {section}
                </motion.a>
              );
            })}
          </nav>

          {/* Dark/light toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode((prev) => !prev)}
            className="shrink-0 p-2 rounded-xl transition-all"
            style={{ background: navBg, border: `1px solid ${navBorderC}`, color: accent2 }}
            aria-label="Toggle light/dark mode"
          >
            {dk ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
        </div>
      </motion.header>

      <main className="pt-20 pb-16 relative z-10">

        {/* ── Hero ── */}
        <section id="about" className="max-w-5xl mx-auto px-6 pt-12 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <motion.h1
                whileHover={{ scale: 1.02, x: 8 }}
                className={`text-5xl md:text-6xl font-bold leading-tight cursor-default ${dk ? 'ice-shimmer-text' : 'bg-gradient-to-r from-violet-600 via-purple-600 to-violet-400 bg-clip-text text-transparent'}`}
              >
                Hi, I'm Pavithra Tupakula
              </motion.h1>
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                className="text-5xl md:text-6xl cursor-pointer"
                title="Hi!"
              >
                {dk ? '☃️' : '✨'}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-2xl text-lg leading-relaxed cursor-default transition-colors duration-300"
              style={{ color: textMuted }}
            >
              MS Computer Science graduate at UT Dallas, specializing in Intelligent Systems.
              Passionate about AI/ML, full-stack development, and data-driven solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              {([
                { Icon: Github, href: LINKS.github, label: 'GitHub' },
                { Icon: Linkedin, href: LINKS.linkedin, label: 'LinkedIn' },
                { Icon: Mail, href: LINKS.email, label: 'Email' },
              ] as const).map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2.5 rounded-xl transition-all ${dk ? 'ice-card' : 'bg-white border border-violet-200 shadow-sm hover:border-violet-400 hover:shadow-md'}`}
                  style={{ color: accent2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Summary ── */}
        <FrozenSection title="Summary" id="summary" dk={dk} accent={accent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className={`rounded-2xl p-6 ${dk ? 'ice-card' : 'bg-white border border-violet-100 shadow-sm'}`}
          >
            <p className="leading-relaxed" style={{ color: textBody }}>
              Results-driven software developer and MS CS graduate from UT Dallas with hands-on
              experience in AI/ML, full-stack development, and cloud technologies. Proficient in
              Python, ReactJS, FastAPI, and AWS, with a strong track record of building end-to-end
              intelligent systems. Skilled in UI/UX design using Figma and passionate about clean
              code, continuous learning, and leveraging generative AI and LLMs to solve complex
              engineering problems.
            </p>
          </motion.div>
        </FrozenSection>

        {/* ── Skills ── */}
        <FrozenSection title="Skills" id="skills" dk={dk} accent={accent}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((group, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: dk
                    ? '0 0 35px rgba(43,108,238,0.2), 0 8px 30px rgba(0,0,0,0.4)'
                    : '0 0 30px rgba(124,58,237,0.15), 0 8px 24px rgba(0,0,0,0.08)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`rounded-2xl p-4 group cursor-pointer ${dk ? 'ice-card' : 'bg-white border border-violet-100 shadow-sm hover:border-violet-300'}`}
              >
                <motion.p
                  className="text-xs font-semibold uppercase tracking-widest mb-3 cursor-default"
                  style={{ color: accent }}
                  whileHover={{ letterSpacing: '0.15em' }}
                  transition={{ duration: 0.2 }}
                >
                  {group.category}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <motion.span
                      key={j}
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.2 }}
                      className="px-2.5 py-1 rounded-lg text-xs cursor-default"
                      style={{ background: pillBg, border: `1px solid ${pillBorder}`, color: pillColor }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FrozenSection>

        {/* ── Projects ── */}
        <FrozenSection title="Projects" id="projects" dk={dk} accent={accent}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: dk
                    ? '0 0 50px rgba(43,108,238,0.25), 0 12px 40px rgba(0,0,0,0.5)'
                    : '0 0 40px rgba(124,58,237,0.15), 0 12px 32px rgba(0,0,0,0.1)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`rounded-2xl overflow-hidden flex flex-col group cursor-pointer ${dk ? 'ice-card' : 'bg-white border border-violet-100 shadow-sm hover:border-violet-300'}`}
              >
                {project.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 ${dk ? 'bg-gradient-to-b from-[#0e2a5c]/30 via-[#060d1f]/10 to-[#060d1f]/75' : 'bg-gradient-to-b from-violet-900/20 via-transparent to-white/80'}`} />
                    {dk && <div className="absolute inset-0 bg-[#1e40af]/15 mix-blend-multiply" />}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <motion.h3
                      className="text-base font-semibold leading-snug"
                      style={{ color: textPrimary }}
                      whileHover={{ color: accent2, letterSpacing: '0.02em' }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                        className="shrink-0 ml-2 transition-colors"
                        style={{ color: accent }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                  <motion.p
                    className="text-sm mb-4 leading-relaxed flex-1 cursor-default"
                    style={{ color: textMuted }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <motion.span
                        key={j}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.2 }}
                        className="px-2.5 py-0.5 rounded-full text-xs cursor-default"
                        style={{ background: techBg, border: `1px solid ${techBorder}`, color: techColor }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FrozenSection>

        {/* ── Timeline ── */}
        <FrozenSection title="Experience &amp; Education" id="experience" dk={dk} accent={accent}>
          <div className="relative">
            <div className="relative max-w-4xl mx-auto">
              {/* Animated Ice Trail SVG */}
              <svg
                className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-24 pointer-events-none z-0"
                viewBox="0 0 100 800"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="iceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    {dk ? (
                      <>
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="30%" stopColor="#2b6cee" />
                        <stop offset="60%" stopColor="#a5f3fc" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </>
                    ) : (
                      <>
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="30%" stopColor="#a78bfa" />
                        <stop offset="60%" stopColor="#c4b5fd" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </>
                    )}
                  </linearGradient>
                  <pattern id="icePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.4)" />
                    <circle cx="5" cy="5" r="1" fill="rgba(165,243,252,0.3)" />
                    <circle cx="15" cy="15" r="1" fill="rgba(165,243,252,0.3)" />
                  </pattern>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <path
                  d="M50,0 Q20,80 50,160 Q80,240 50,320 Q20,400 50,480 Q80,560 50,640 Q20,720 50,800"
                  className="ice-trail-glow"
                />
                <motion.path
                  d="M50,0 Q20,80 50,160 Q80,240 50,320 Q20,400 50,480 Q80,560 50,640 Q20,720 50,800"
                  fill="none"
                  stroke="url(#icePattern)"
                  strokeWidth="12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.path
                  d="M50,0 Q20,80 50,160 Q80,240 50,320 Q20,400 50,480 Q80,560 50,640 Q20,720 50,800"
                  className="ice-trail-path"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  style={{ strokeDasharray: 1000, strokeDashoffset: 0 }}
                />
                <motion.circle
                  r="6"
                  fill={accent2}
                  filter="url(#glow)"
                  initial={{ offsetDistance: '0%' }}
                  whileInView={{ offsetDistance: '100%' }}
                  viewport={{ once: false }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }}
                  style={{
                    offsetPath: "path('M50,0 Q20,80 50,160 Q80,240 50,320 Q20,400 50,480 Q80,560 50,640 Q20,720 50,800')",
                  }}
                />
              </svg>

              {/* Sparkle dots */}
              {[
                { top: '8%', left: '50%' }, { top: '22%', left: '42%' },
                { top: '35%', left: '58%' }, { top: '48%', left: '42%' },
                { top: '60%', left: '58%' }, { top: '72%', left: '42%' },
                { top: '85%', left: '58%' },
              ].map((pos, i) => (
                <motion.span
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    top: pos.top, left: pos.left,
                    background: `radial-gradient(circle, ${accent2} 0%, transparent 70%)`,
                    boxShadow: `0 0 10px ${accent2}`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                />
              ))}

              <div className="space-y-8 py-8">
                {timeline.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: i * 0.2, type: 'spring', stiffness: 100 }}
                    className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        boxShadow: dk
                          ? '0 0 50px rgba(43,108,238,0.35), 0 12px 40px rgba(0,0,0,0.5)'
                          : '0 0 40px rgba(124,58,237,0.2), 0 12px 32px rgba(0,0,0,0.08)',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`rounded-2xl p-6 flex-1 relative overflow-hidden group cursor-pointer ${i % 2 === 0 ? 'mr-auto ml-0' : 'ml-auto mr-0'} ${dk ? 'ice-card' : 'bg-white border border-violet-100 shadow-sm hover:border-violet-300'}`}
                      style={{ maxWidth: '420px' }}
                    >
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                        <div className="flex-1">
                          <motion.h3
                            className="text-base font-semibold mb-1 cursor-default"
                            style={{ color: textPrimary }}
                            whileHover={{ color: accent2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {entry.title}
                          </motion.h3>
                          <motion.p
                            className="text-sm flex items-center gap-2"
                            style={{ color: accent }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="opacity-60">{dk ? '❄' : '◈'}</span>
                            {entry.organization}
                          </motion.p>
                        </div>
                        <motion.span
                          whileHover={{ scale: 1.08 }}
                          className="px-3 py-1 rounded-full text-xs whitespace-nowrap"
                          style={{ background: periodBg, border: `1px solid ${periodBorder}`, color: periodColor }}
                        >
                          {entry.period}
                        </motion.span>
                      </div>

                      <motion.p
                        className="text-sm mb-3 leading-relaxed cursor-default"
                        style={{ color: textMuted }}
                      >
                        {entry.description}
                      </motion.p>

                      <ul className="space-y-1.5">
                        {entry.achievements.map((a, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + j * 0.08 }}
                            whileHover={{ x: 6 }}
                            className="text-xs flex items-start gap-2 cursor-default"
                            style={{ color: textMuted }}
                          >
                            <motion.span style={{ color: accent, marginTop: 2 }} whileHover={{ scale: 1.4 }}>
                              {dk ? '❄' : '▸'}
                            </motion.span>
                            {a}
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-20 ${i % 2 === 0 ? '-right-10' : '-left-10'}`}
                        style={{
                          background: nodeGrad(entry.type),
                          boxShadow: `0 0 20px ${accent}cc, inset 0 0 8px rgba(255,255,255,0.5)`,
                          border: `2px solid ${accent2}99`,
                        }}
                        whileHover={{ scale: 1.5, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.span
                          className="absolute -top-1 -right-1 text-[10px]"
                          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          ✨
                        </motion.span>
                      </motion.div>
                    </motion.div>

                    <div className="w-24 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FrozenSection>

        {/* ── Certifications ── */}
        <FrozenSection title="Certifications &amp; Awards" id="certifications" dk={dk} accent={accent}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-3"
          >
            {certifications.map((cert, i) => (
              <motion.a
                key={i}
                variants={item}
                href={cert.link || undefined}
                target={cert.link ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{
                  scale: 1.04, y: -4,
                  boxShadow: cert.link
                    ? (dk ? '0 0 30px rgba(43,108,238,0.3)' : '0 0 24px rgba(124,58,237,0.2)')
                    : undefined,
                }}
                className={`rounded-2xl p-4 flex items-start gap-3 group ${cert.link ? 'cursor-pointer' : 'cursor-default'} ${dk ? 'ice-card' : 'bg-white border border-violet-100 shadow-sm hover:border-violet-300'}`}
                style={{ textDecoration: 'none' }}
              >
                <Award className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-snug transition-colors duration-200" style={{ color: textPrimary }}>
                    {cert.title}
                  </p>
                  <p className="text-xs mt-1" style={{ color: accent }}>{cert.issuer}</p>
                  {cert.link && (
                    <p className="text-[10px] mt-1.5 flex items-center gap-1 transition-colors duration-200" style={{ color: accent2, opacity: 0.6 }}>
                      <ExternalLink className="w-2.5 h-2.5" /> View Certificate
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </FrozenSection>

        {/* ── Resume + Contact side-by-side ── */}
        <section className="max-w-5xl mx-auto px-6 py-12" id="contact">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Resume */}
            <div>
              <IceSectionTitle dk={dk} accent={accent}>Resume</IceSectionTitle>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl p-6 ${dk ? 'ice-card' : 'bg-white border border-violet-100 shadow-sm'}`}
              >
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: textPrimary }}>Download My Resume</h3>
                  <p className="text-sm mb-5" style={{ color: textMuted }}>
                    Full details of my skills, projects, and experience.
                  </p>
                </motion.div>
                <motion.a
                  href="/Pavithra_Tupakula_Job.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
                  style={{ background: btnGrad, boxShadow: btnShadow }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
              </motion.div>
            </div>

            {/* Contact */}
            <div>
              <IceSectionTitle dk={dk} accent={accent}>Get In Touch</IceSectionTitle>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 ${dk ? 'ice-card' : 'bg-white border border-violet-100 shadow-sm'}`}
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                  {(['name', 'email'] as const).map((field) => (
                    <SparkleInput key={field} dk={dk} accent2={accent2}>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        placeholder={field === 'email' ? 'Email address' : 'Your name'}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm ${dk ? 'ice-input' : 'border border-violet-200 bg-violet-50/40 text-[#0f0f1a] placeholder:text-[#9ca3af] focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition-all'}`}
                      />
                    </SparkleInput>
                  ))}
                  <SparkleInput dk={dk} accent2={accent2}>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className={`w-full px-4 py-2.5 rounded-xl text-sm resize-none ${dk ? 'ice-input' : 'border border-violet-200 bg-violet-50/40 text-[#0f0f1a] placeholder:text-[#9ca3af] focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition-all'}`}
                    />
                  </SparkleInput>

                  {formState === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-center" style={{ color: accent2 }}>
                      {dk ? '❄' : '✓'} Message sent! I'll get back to you soon.
                    </motion.p>
                  )}
                  {formState === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-400 text-center">
                      Something went wrong. Please try again.
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={formState === 'sending'}
                    whileHover={formState !== 'sending' ? { scale: 1.02, y: -2 } : {}}
                    whileTap={formState !== 'sending' ? { scale: 0.97 } : {}}
                    className="w-full py-2.5 rounded-xl text-sm font-medium text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: btnGrad, boxShadow: formState !== 'sending' ? btnShadow : 'none' }}
                  >
                    {formState === 'sending' ? 'Sending…' : `Send Message ${dk ? '❄' : '→'}`}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center py-8 text-sm"
        style={{ borderTop: `1px solid ${hdrBorder}`, color: textMuted, transition: 'border-color 0.4s' }}
      >
        <p>© 2026 Pavithra Tupakula {dk ? '❄' : '·'} Built with React &amp; Tailwind CSS</p>
      </motion.footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type SparkleItem = { id: number; x: number; y: number; size: number; char: string };

function SparkleInput({ children, dk, accent2 }: { children: React.ReactNode; dk: boolean; accent2: string }) {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const chars = dk ? ['✦', '✧', '❄', '❅', '·'] : ['✦', '✧', '◈', '·', '✦'];

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setSparkles(prev => [
          ...prev.slice(-10),
          { id: Date.now() + Math.random(), x: Math.random() * 96 + 2, y: Math.random() * 80 + 10, size: Math.random() * 9 + 7, char: chars[Math.floor(Math.random() * chars.length)] },
        ]);
      }, 120);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimeout(() => setSparkles([]), 700);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  return (
    <div
      className="relative rounded-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={dk ? 'ice-input-shimmer rounded-xl' : 'rounded-xl'}>{children}</div>
      {sparkles.map(s => (
        <motion.span
          key={s.id}
          className="absolute pointer-events-none select-none font-bold"
          style={{ left: `${s.x}%`, top: `${s.y}%`, fontSize: s.size, color: accent2, textShadow: `0 0 8px ${accent2}`, zIndex: 10 }}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.2, 0.9, 0], rotate: [0, 45, 90] }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {s.char}
        </motion.span>
      ))}
    </div>
  );
}

function IceSectionTitle({ children, dk, accent }: { children: React.ReactNode; dk: boolean; accent: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 10, letterSpacing: '0.05em' }}
      transition={{ duration: 0.3 }}
      className="text-xl font-semibold mb-6 pb-2 flex items-center gap-2 cursor-default"
      style={{ borderBottom: `1px solid ${dk ? 'rgba(96,165,250,0.2)' : 'rgba(124,58,237,0.15)'}`, color: dk ? '#e0f0ff' : '#0f0f1a' }}
    >
      <motion.span className="text-sm" style={{ color: accent }} whileHover={{ scale: 1.5, rotate: 360 }} transition={{ duration: 0.6 }}>
        {dk ? '❄' : '◈'}
      </motion.span>
      <span dangerouslySetInnerHTML={{ __html: String(children) }} />
    </motion.h2>
  );
}

function FrozenSection({ title, id, children, dk, accent, className }: {
  title: string; id?: string; children: React.ReactNode; dk: boolean; accent: string; className?: string;
}) {
  return (
    <section id={id} className={`max-w-5xl mx-auto px-6 py-12 ${className ?? ''}`}>
      <IceSectionTitle dk={dk} accent={accent}>{title}</IceSectionTitle>
      {children}
    </section>
  );
}
