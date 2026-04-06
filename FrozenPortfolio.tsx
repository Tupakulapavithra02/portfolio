import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';
import {
  // Moon,
  // Sun,
  Mail,
  ExternalLink,
  Download,
  Award,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Brand icons (not in lucide-react 1.x)
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

function Snowflakes() {
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
// Data (same as Portfolio.tsx)
// ---------------------------------------------------------------------------

const LINKS = {
  github: 'https://github.com/Tupakulapavithra02',
  linkedin: 'https://www.linkedin.com/in/tupakula-pavithra-512004244/',
  email: 'mailto:pavithratupakula1@gmail.com',
};

const projects = [
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
  { category: 'Languages',    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'C', 'HTML'] },
  { category: 'Full Stack',   items: ['ReactJS', 'FastAPI', 'Spring Boot', 'RESTful APIs', 'PyTorch', 'TensorFlow'] },
  { category: 'Data & AI',    items: ['Machine Learning', 'NLP', 'ETL Pipelines', 'Time-Series', 'Anomaly Detection', 'Tableau'] },
  { category: 'Cloud & Infra',items: ['AWS (EC2, S3, Lambda, Redshift, Glue)', 'Spark', 'Databricks', 'Kubernetes', 'Linux'] },
  { category: 'GenAI & LLMs', items: ['LangChain', 'RAG', 'OpenAI API', 'Prompt Engineering', 'LLMs'] },
  { category: 'Engineering',  items: ['Agile SDLC', 'Git', 'Unit/Integration Testing', 'Design Patterns', 'CI/CD'] },
];

const timeline = [
  {
    type: 'work' as const,
    title: 'Grader — UNIX Programming',
    organization: 'University of Texas at Dallas',
    period: 'Aug 2025 – Present',
    description: 'Analyzed and debugged multi-process C and Bash programs using gdb and perf.',
    achievements: ['Improved fault tolerance of distributed systems', 'Designed automated testing strategies', 'Structured feedback on student submissions'],
  },
  {
    type: 'education' as const,
    title: "Master's in CS & Information Technology",
    organization: 'University of Texas at Dallas, USA',
    period: 'Aug 2024 – May 2026',
    description: 'Specialization in Intelligent Systems. Dean Scholarship recipient.',
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
  { title: 'Prompt Design in Vertex AI Skill Badge', issuer: 'Google Cloud' },
  { title: 'MTA: Introduction to Programming Using Python', issuer: 'Microsoft' },
  { title: "Eric Jonson's Dean Scholarship", issuer: 'UT Dallas (2024–2025)' },
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
  // const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // always dark for the frozen theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
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

  return (
    <div className="frozen-bg min-h-screen text-[#e0f0ff] relative overflow-hidden" style={{ fontFamily: "'Epilogue', sans-serif" }}>
      <Snowflakes />

      {/* ── Ambient glow blobs ── */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-[-10%] left-[-5%]  w-[500px] h-[500px] rounded-full bg-[#2b6cee]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#60a5fa]/8 blur-[140px]" />
        <div className="absolute top-[40%] left-[50%]   w-[400px] h-[400px] rounded-full bg-[#a5f3fc]/5 blur-[100px]" />
      </div>

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50"
        style={{ background: 'rgba(6,13,31,0.7)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(96,165,250,0.15)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ letterSpacing: '0.05em' }}
            className="text-xl font-semibold ice-shimmer-text cursor-default"
          >
            Pavithra Tupakula
          </motion.span>
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg transition-colors"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(96,165,250,0.2)' }}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-[#a5f3fc]" /> : <Moon className="w-5 h-5 text-[#a5f3fc]" />}
          </button> */}
        </div>
      </motion.header>

      <main className="pt-20 pb-16 relative z-10">

        {/* ── Hero ── */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-4">
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
                className="text-5xl md:text-6xl font-bold ice-shimmer-text leading-tight cursor-default"
              >
                Hi, I'm Pavithra Tupakula
              </motion.h1>
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                className="text-5xl md:text-6xl cursor-pointer"
                title="Hi, I'm Olaf!"
              >
                ☃️
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ color: '#e0f0ff', scale: 1.01 }}
              className="text-[#94a3b8] max-w-2xl text-lg leading-relaxed cursor-default transition-colors duration-300"
            >
              MS Computer Science student at UT Dallas, specializing in Intelligent Systems.
              Passionate about AI/ML, full-stack development, and data-driven solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              {([
                { Icon: Github,   href: LINKS.github,   label: 'GitHub' },
                { Icon: Linkedin, href: LINKS.linkedin, label: 'LinkedIn' },
                { Icon: Mail,     href: LINKS.email,    label: 'Email' },
              ] as const).map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl transition-all ice-card"
                  style={{ color: '#a5f3fc' }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Summary ── */}
        <FrozenSection title="Summary" className="pt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="ice-card rounded-2xl p-6"
          >
            <p className="text-[#cbd5e1] leading-relaxed">
              Results-driven software developer and MS CS candidate at UT Dallas with hands-on
              experience in AI/ML, full-stack development, and cloud technologies. Proficient in
              Python, ReactJS, FastAPI, and AWS, with a strong track record of building end-to-end
              intelligent systems. Passionate about clean code, continuous learning, and leveraging
              generative AI and LLMs to solve complex engineering problems.
            </p>
          </motion.div>
        </FrozenSection>

        {/* ── Skills ── */}
        <FrozenSection title="Skills">
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
                  boxShadow: '0 0 35px rgba(43,108,238,0.2), 0 8px 30px rgba(0,0,0,0.4)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="ice-card rounded-2xl p-4 group cursor-pointer"
              >
                <motion.p
                  className="text-xs font-semibold text-[#60a5fa] uppercase tracking-widest mb-3 cursor-default"
                  whileHover={{ color: '#a5f3fc', letterSpacing: '0.15em' }}
                  transition={{ duration: 0.2 }}
                >
                  {group.category}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <motion.span
                      key={j}
                      whileHover={{
                        scale: 1.12,
                        backgroundColor: 'rgba(43,108,238,0.35)',
                        color: '#e0f0ff',
                        boxShadow: '0 0 12px rgba(43,108,238,0.4)'
                      }}
                      transition={{ duration: 0.2 }}
                      className="px-2.5 py-1 rounded-lg text-xs text-[#bae6fd] cursor-default"
                      style={{ background: 'rgba(43,108,238,0.15)', border: '1px solid rgba(96,165,250,0.25)' }}
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
        <FrozenSection title="Projects">
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
                  boxShadow: '0 0 50px rgba(43,108,238,0.25), 0 12px 40px rgba(0,0,0,0.5)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="ice-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Project image */}
                {project.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Frozen tint overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0e2a5c]/30 via-[#060d1f]/10 to-[#060d1f]/75" />
                    <div className="absolute inset-0 bg-[#1e40af]/15 mix-blend-multiply" />
                    {/* ice shimmer on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>
                )}

                {/* Card content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <motion.h3
                      className="text-base font-semibold text-[#e0f0ff] leading-snug"
                      whileHover={{ color: '#a5f3fc', letterSpacing: '0.02em' }}
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
                        className="text-[#60a5fa] hover:text-[#a5f3fc] transition-colors shrink-0 ml-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                  <motion.p
                    className="text-[#94a3b8] text-sm mb-4 leading-relaxed flex-1 cursor-default"
                    whileHover={{ color: '#cbd5e1' }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <motion.span
                        key={j}
                        whileHover={{
                          scale: 1.15,
                          backgroundColor: 'rgba(43,108,238,0.25)',
                          borderColor: 'rgba(96,165,250,0.5)',
                          boxShadow: '0 0 15px rgba(43,108,238,0.3)'
                        }}
                        transition={{ duration: 0.2 }}
                        className="px-2.5 py-0.5 rounded-full text-xs text-[#a5f3fc] cursor-default"
                        style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}
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
        <FrozenSection title="Experience &amp; Education">
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
                    <stop offset="0%"   stopColor="#60a5fa" />
                    <stop offset="30%"  stopColor="#2b6cee" />
                    <stop offset="60%"  stopColor="#a5f3fc" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>

                  <pattern id="icePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.4)" />
                    <circle cx="5"  cy="5"  r="1"   fill="rgba(165,243,252,0.3)" />
                    <circle cx="15" cy="15" r="1"   fill="rgba(165,243,252,0.3)" />
                    <circle cx="2"  cy="12" r="0.8" fill="rgba(255,255,255,0.2)" />
                    <circle cx="18" cy="8"  r="0.8" fill="rgba(255,255,255,0.2)" />
                  </pattern>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="iceGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feSpecularLighting result="spec" in="blur" specularExponent="20" lighting-color="#a5f3fc">
                      <fePointLight x="50" y="-100" z="200" />
                    </feSpecularLighting>
                    <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
                    <feMerge>
                      <feMergeNode in="SourceGraphic" />
                      <feMergeNode in="specOut" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background glow path */}
                <path
                  d="M50,0 Q20,80 50,160 Q80,240 50,320 Q20,400 50,480 Q80,560 50,640 Q20,720 50,800"
                  className="ice-trail-glow"
                />

                {/* Ice texture overlay */}
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

                {/* Main animated path */}
                <motion.path
                  d="M50,0 Q20,80 50,160 Q80,240 50,320 Q20,400 50,480 Q80,560 50,640 Q20,720 50,800"
                  className="ice-trail-path"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  filter="url(#iceGlow)"
                  style={{ strokeDasharray: 1000, strokeDashoffset: 0 }}
                />

                {/* Animated shimmer along path */}
                <motion.circle
                  r="6"
                  fill="#a5f3fc"
                  filter="url(#glow)"
                  initial={{ offsetDistance: '0%' }}
                  whileInView={{ offsetDistance: '100%' }}
                  viewport={{ once: false }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                  style={{
                    offsetPath: "path('M50,0 Q20,80 50,160 Q80,240 50,320 Q20,400 50,480 Q80,560 50,640 Q20,720 50,800')",
                  }}
                />
              </svg>

              {/* Sparkle dots along trail */}
              {[
                { top: '8%', left: '50%' },
                { top: '22%', left: '42%' },
                { top: '35%', left: '58%' },
                { top: '48%', left: '42%' },
                { top: '60%', left: '58%' },
                { top: '72%', left: '42%' },
                { top: '85%', left: '58%' },
              ].map((pos, i) => (
                <motion.span
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    background: 'radial-gradient(circle, rgba(165,243,252,1) 0%, transparent 70%)',
                    boxShadow: '0 0 10px rgba(165,243,252,0.8)',
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <div className="space-y-8 py-8">
                {timeline.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                    className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Card */}
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        boxShadow: '0 0 50px rgba(43,108,238,0.35), 0 12px 40px rgba(0,0,0,0.5), inset 0 0 30px rgba(255,255,255,0.05)'
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`ice-card rounded-2xl p-6 flex-1 relative overflow-hidden group cursor-pointer ${i % 2 === 0 ? 'mr-auto ml-0' : 'ml-auto mr-0'}`}
                      style={{ maxWidth: '420px' }}
                    >
                      {/* Frost shimmer overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      />

                      <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                        <div className="flex-1">
                          <motion.h3
                            className="text-base font-semibold text-[#e0f0ff] mb-1 cursor-default"
                            whileHover={{ color: '#a5f3fc', letterSpacing: '0.02em' }}
                            transition={{ duration: 0.2 }}
                          >
                            {entry.title}
                          </motion.h3>
                          <motion.p
                            className="text-[#60a5fa] text-sm flex items-center gap-2"
                            whileHover={{ x: 4, color: '#93c5fd' }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="opacity-60">❄</span>
                            {entry.organization}
                          </motion.p>
                        </div>
                        <motion.span
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(43,108,238,0.25)' }}
                          className="px-3 py-1 rounded-full text-xs text-[#a5f3fc] whitespace-nowrap"
                          style={{ background: 'rgba(43,108,238,0.15)', border: '1px solid rgba(96,165,250,0.3)' }}
                        >
                          {entry.period}
                        </motion.span>
                      </div>

                      <motion.p
                        className="text-[#94a3b8] text-sm mb-3 leading-relaxed cursor-default"
                        whileHover={{ color: '#cbd5e1' }}
                        transition={{ duration: 0.3 }}
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
                            whileHover={{ x: 6, color: '#e0f0ff' }}
                            className="text-xs text-[#94a3b8] flex items-start gap-2 cursor-default group/item"
                          >
                            <motion.span
                              className="text-[#60a5fa] mt-0.5"
                              whileHover={{ scale: 1.4, rotate: 20 }}
                              transition={{ duration: 0.2 }}
                            >
                              ❄
                            </motion.span>
                            <span className="group-hover/item:text-[#cbd5e1] transition-colors">{a}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Node connector point */}
                      <motion.div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-20 ${i % 2 === 0 ? '-right-10' : '-left-10'}`}
                        style={{
                          background: entry.type === 'work'
                            ? 'linear-gradient(135deg,#2b6cee,#60a5fa,#a5f3fc)'
                            : 'linear-gradient(135deg,#0891b2,#0e7490,#a5f3fc)',
                          boxShadow: '0 0 20px rgba(96,165,250,0.8), inset 0 0 8px rgba(255,255,255,0.5)',
                          border: '2px solid rgba(165,243,252,0.6)',
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

                    {/* Spacer for alternating layout */}
                    <div className="w-24 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FrozenSection>

        {/* ── Certifications ── */}
        <FrozenSection title="Certifications &amp; Awards">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-3"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.04, y: -4 }}
                className="ice-card rounded-2xl p-4 flex items-start gap-3"
              >
                <Award className="w-5 h-5 text-[#60a5fa] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#e0f0ff] leading-snug">{cert.title}</p>
                  <p className="text-xs text-[#60a5fa] mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FrozenSection>

        {/* ── Resume + Contact side-by-side ── */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Resume */}
            <div>
              <IceSectionTitle>Resume</IceSectionTitle>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="ice-card rounded-2xl p-6"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <h3 className="text-base font-semibold text-[#e0f0ff] mb-2">Download My Resume</h3>
                  <p className="text-[#94a3b8] text-sm mb-5">
                    Full details of my skills, projects, and experience.
                  </p>
                </motion.div>
                <motion.a
                  href="/Pavithra_Tupakula_Job.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #2b6cee, #0e7490)',
                    boxShadow: '0 0 20px rgba(43,108,238,0.4)',
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
              </motion.div>
            </div>

            {/* Contact */}
            <div>
              <IceSectionTitle>Get In Touch</IceSectionTitle>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="ice-card rounded-2xl p-6"
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                  {(['name', 'email'] as const).map((field) => (
                    <SparkleInput key={field}>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        placeholder={field === 'email' ? 'Email address' : 'Your name'}
                        className="w-full px-4 py-2.5 rounded-xl text-sm ice-input"
                      />
                    </SparkleInput>
                  ))}
                  <SparkleInput>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm ice-input resize-none"
                    />
                  </SparkleInput>

                  {formState === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#a5f3fc] text-center">
                      ❄ Message sent! I'll get back to you soon.
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
                    style={{
                      background: 'linear-gradient(135deg, #2b6cee, #0e7490)',
                      boxShadow: formState !== 'sending' ? '0 0 20px rgba(43,108,238,0.4)' : 'none',
                    }}
                  >
                    {formState === 'sending' ? 'Sending…' : 'Send Message ❄'}
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
        className="relative z-10 text-center py-8 text-sm text-[#475569]"
        style={{ borderTop: '1px solid rgba(96,165,250,0.1)' }}
      >
        <p>© 2026 Pavithra Tupakula ❄ Built with React &amp; Tailwind CSS</p>
      </motion.footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// SparkleInput — spawns ice-crystal sparkles on hover
// ---------------------------------------------------------------------------

type Sparkle = { id: number; x: number; y: number; size: number; char: string };

function SparkleInput({ children }: { children: React.ReactNode }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const chars = ['✦', '✧', '❄', '❅', '·'];

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setSparkles(prev => [
          ...prev.slice(-10),
          {
            id: Date.now() + Math.random(),
            x: Math.random() * 96 + 2,   // 2–98 % width
            y: Math.random() * 80 + 10,  // 10–90 % height
            size: Math.random() * 9 + 7,
            char: chars[Math.floor(Math.random() * chars.length)],
          },
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
      <div className="ice-input-shimmer rounded-xl">{children}</div>

      {sparkles.map(s => (
        <motion.span
          key={s.id}
          className="absolute pointer-events-none select-none font-bold"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: s.size,
            color: '#a5f3fc',
            textShadow: '0 0 8px rgba(165,243,252,0.9), 0 0 20px rgba(96,165,250,0.6)',
            zIndex: 10,
          }}
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

function IceSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{
        x: 10,
        letterSpacing: '0.05em',
        textShadow: '0 0 20px rgba(165,243,252,0.5)'
      }}
      transition={{ duration: 0.3 }}
      className="text-xl font-semibold text-[#e0f0ff] mb-6 pb-2 flex items-center gap-2 cursor-default group"
      style={{ borderBottom: '1px solid rgba(96,165,250,0.2)' }}
    >
      <motion.span
        className="text-[#60a5fa] text-sm"
        whileHover={{ scale: 1.5, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        ❄
      </motion.span>
      <span dangerouslySetInnerHTML={{ __html: String(children) }} />
    </motion.h2>
  );
}

function FrozenSection({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`max-w-5xl mx-auto px-6 py-12 ${className ?? ''}`}>
      <IceSectionTitle>{title}</IceSectionTitle>
      {children}
    </section>
  );
}
