import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';
import {
  Moon,
  Sun,
  Mail,
  ExternalLink,
  Download,
  Briefcase,
  GraduationCap,
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
  },
  {
    title: 'Plant Leaf Disease Detection',
    description:
      'Supervised learning CNN model for image segmentation and plant disease classification. Achieved 92% accuracy, enabling early intervention and reducing estimated crop losses by 25%.',
    tech: ['Python', 'CNN', 'TensorFlow', 'Image Segmentation', 'ML'],
    link: 'https://github.com/Tupakulapavithra02/DETECTION-OF-PLANT-DISEASE-USING-MACHINE-LEARNING-',
  },
  {
    title: 'Suicide Analysis & Prevention',
    description:
      'Machine learning application analyzing data using multiple classifiers to identify at-risk patterns and support prevention strategies with improved prediction accuracy.',
    tech: ['Python', 'ML Classifiers', 'Data Analysis', 'Healthcare ML'],
    link: 'https://github.com/Tupakulapavithra02/Suicide-Analysis-and-Prevention-Application-Using-Machine-Learning-Classifiers',
  },
  {
    title: 'Real-Time NER on Reddit',
    description:
      'Real-time Named Entity Recognition pipeline on live Reddit data, extracting and classifying entities such as people, organizations, and locations from social media text streams.',
    tech: ['Python', 'NLP', 'NER', 'Reddit API', 'Real-Time'],
    link: 'https://github.com/Tupakulapavithra02/Real-Time-Named-Entity-Recognition-on-Reddit',
  },
  {
    title: 'Stock Price Prediction',
    description:
      'ML model using Random Forest and LSTM networks to forecast financial time-series stock prices. Achieved 85% prediction accuracy for better risk assessment and investment strategies.',
    tech: ['Python', 'LSTM', 'Random Forest', 'Time-Series', 'ML'],
    link: null,
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
  const [darkMode, setDarkMode] = useState(true);
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
            className="text-xl font-semibold ice-shimmer-text"
          >
            ❄ Pavithra Tupakula
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
        <section className="max-w-5xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold ice-shimmer-text leading-tight"
            >
              Hi, I'm Pavithra Tupakula
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[#94a3b8] max-w-2xl text-lg leading-relaxed"
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
        <FrozenSection title="Summary">
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
                whileHover={{ scale: 1.03, y: -4 }}
                className="ice-card rounded-2xl p-4"
              >
                <p className="text-xs font-semibold text-[#60a5fa] uppercase tracking-widest mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-lg text-xs text-[#bae6fd]"
                      style={{ background: 'rgba(43,108,238,0.15)', border: '1px solid rgba(96,165,250,0.25)' }}
                    >
                      {skill}
                    </span>
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
                whileHover={{ scale: 1.04, y: -8 }}
                className="ice-card rounded-2xl p-6 flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-[#e0f0ff] leading-snug">{project.title}</h3>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="text-[#60a5fa] hover:text-[#a5f3fc] transition-colors shrink-0 ml-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
                <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-0.5 rounded-full text-xs text-[#a5f3fc]"
                      style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FrozenSection>

        {/* ── Timeline ── */}
        <FrozenSection title="Experience &amp; Education">
          <div className="relative">
            {/* Ice trail line */}
            <div
              className="absolute left-[31px] top-0 bottom-0 w-0.5 ice-timeline-line"
            />
            <div className="space-y-8">
              {timeline.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.4, rotate: 180 }}
                    className="absolute left-[20px] top-3 w-6 h-6 rounded-full flex items-center justify-center ice-glow"
                    style={{
                      background: entry.type === 'work'
                        ? 'linear-gradient(135deg,#2b6cee,#60a5fa)'
                        : 'linear-gradient(135deg,#0e7490,#a5f3fc)',
                    }}
                  >
                    {entry.type === 'work'
                      ? <Briefcase className="w-3 h-3 text-white" />
                      : <GraduationCap className="w-3 h-3 text-white" />}
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 6 }}
                    className="ice-card rounded-2xl p-6"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-semibold text-[#e0f0ff] mb-1">{entry.title}</h3>
                        <p className="text-[#60a5fa] text-sm">{entry.organization}</p>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs text-[#a5f3fc] whitespace-nowrap"
                        style={{ background: 'rgba(43,108,238,0.15)', border: '1px solid rgba(96,165,250,0.25)' }}
                      >
                        {entry.period}
                      </span>
                    </div>
                    <p className="text-[#94a3b8] text-sm mb-3">{entry.description}</p>
                    <ul className="space-y-1">
                      {entry.achievements.map((a, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.08 }}
                          className="text-sm text-[#94a3b8] flex items-start"
                        >
                          <span className="text-[#60a5fa] mr-2 mt-0.5">❄</span>
                          {a}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
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
                    <input
                      key={field}
                      type={field === 'email' ? 'email' : 'text'}
                      required
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      placeholder={field === 'email' ? 'Email address' : 'Your name'}
                      className="w-full px-4 py-2.5 rounded-xl text-sm ice-input"
                    />
                  ))}
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm ice-input resize-none"
                  />

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

function IceSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-xl font-semibold text-[#e0f0ff] mb-6 pb-2 flex items-center gap-2"
      style={{ borderBottom: '1px solid rgba(96,165,250,0.2)' }}
    >
      <span className="text-[#60a5fa] text-sm">❄</span>
      <span dangerouslySetInnerHTML={{ __html: String(children) }} />
    </motion.h2>
  );
}

function FrozenSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <IceSectionTitle>{title}</IceSectionTitle>
      {children}
    </section>
  );
}
