import { useState, useEffect } from 'react';
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
// Data
// ---------------------------------------------------------------------------

const LINKS = {
  github: 'https://github.com/Tupakulapavithra02',
  linkedin: 'https://www.linkedin.com/in/tupakula-pavithra-512004244/',
  email: 'mailto:pavithratupakula1@gmail.com',
};

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const heroStats = [
  { value: '3.66', label: 'GPA / 4.0' },
  { value: '6+', label: 'Projects Built' },
  { value: '20+', label: 'Technologies' },
  { value: "Dean's", label: 'Scholarship' },
];

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
      'AI-powered pipeline integrity intelligence platform automating multi-run ILI analysis using KD-Tree search, Hungarian matching, and ML-based corrosion growth prediction. Reduced manual alignment effort by >95% with a FastAPI backend (20+ REST APIs) and Angular analytics dashboard.',
    tech: ['Python', 'FastAPI', 'Angular', 'Machine Learning', 'REST API'],
    link: 'https://github.com/Tupakulapavithra02/CorroSight',
  },
  {
    title: 'Plant Leaf Disease Detection',
    description:
      'Supervised learning CNN model for image segmentation and plant disease classification. Achieved 92% accuracy in identifying diseases, enabling early intervention and reducing estimated crop losses by 25%.',
    tech: ['Python', 'CNN', 'TensorFlow', 'Image Segmentation', 'ML'],
    link: 'https://github.com/Tupakulapavithra02/DETECTION-OF-PLANT-DISEASE-USING-MACHINE-LEARNING-',
  },
  {
    title: 'Suicide Analysis & Prevention',
    description:
      'Machine learning application analyzing suicide-related data using classification models to identify at-risk patterns and support prevention strategies. Applies multiple ML classifiers for improved prediction accuracy.',
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
      'Machine learning model using Random Forest and LSTM networks to forecast financial time-series stock prices. Achieved 85% prediction accuracy, enabling better risk assessment and investment strategies.',
    tech: ['Python', 'LSTM', 'Random Forest', 'Time-Series', 'ML'],
    link: null,
  },
];

const timeline = [
  {
    type: 'work' as const,
    title: 'Student Assistant — UNIX Programming',
    organization: 'University of Texas at Dallas',
    period: 'Aug 2025 – May 2026',
    description:
      'Analyzed and debugged multi-process C and Bash programs by reviewing runtime logs, system events, and resource metrics using gdb and perf.',
    achievements: [
      'Improved fault tolerance and observability of distributed systems',
      'Designed automated testing strategies for scalability and robustness',
      'Provided structured feedback on student submissions and lab exercises',
    ],
  },
  {
    type: 'education' as const,
    title: "Master's in CS & Information Technology",
    organization: 'University of Texas at Dallas, USA',
    period: 'Aug 2024 – May 2026',
    description:
      'Specialization in Intelligent Systems. Recipient of the Eric Jonson Dean Scholarship (2024–2025). Graduated May 2026.',
    achievements: [
      'CGPA: 3.66 / 4.0',
      'Eric Jonson Dean Scholarship (2024–2025)',
      'Specialization: Intelligent Systems',
    ],
  },
  {
    type: 'work' as const,
    title: 'Salesforce Developer Intern',
    organization: 'Smart Internz, India',
    period: 'Apr 2023 – May 2023',
    description:
      'Automated manual CRM data entry workflows using Salesforce Flow and Process Builder, cutting processing time by 30%.',
    achievements: [
      'Cut CRM processing time by 30% with Salesforce Flow & Process Builder',
      'Built Apex classes, triggers, and SOQL queries for end-to-end business logic',
      'Earned Apex Specialist & Process Automation Specialist Superbadges',
    ],
  },
  {
    type: 'education' as const,
    title: "Bachelor's in Computer Science",
    organization: 'SVCE, India',
    period: 'Aug 2020 – May 2024',
    description:
      'Strong foundation in algorithms, data structures, software engineering, and machine learning.',
    achievements: [
      'CGPA: 3.88 / 4.0',
      'Published research on chatbot technologies',
      'Completed ML & cloud certifications during study',
    ],
  },
];

const certifications = [
  { title: 'Prompt Design in Vertex AI Skill Badge', issuer: 'Google Cloud' },
  { title: 'MTA: Introduction to Programming Using Python', issuer: 'Microsoft' },
  { title: "Eric Jonson's Dean Scholarship", issuer: 'UT Dallas (2024–2025)' },
];

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'C', 'HTML'],
  },
  {
    category: 'Full Stack',
    items: ['ReactJS', 'FastAPI', 'Spring Boot', 'RESTful APIs', 'PyTorch', 'TensorFlow'],
  },
  {
    category: 'Data & AI',
    items: ['Machine Learning', 'NLP', 'ETL Pipelines', 'Time-Series', 'Anomaly Detection', 'Tableau'],
  },
  {
    category: 'Cloud & Infra',
    items: ['AWS (EC2, S3, Lambda, Redshift, Glue)', 'Spark', 'Databricks', 'Kubernetes', 'Linux'],
  },
  {
    category: 'GenAI & LLMs',
    items: ['LangChain', 'RAG', 'OpenAI API', 'Prompt Engineering', 'LLMs'],
  },
  {
    category: 'Design',
    items: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    category: 'Engineering',
    items: ['Agile SDLC', 'Git', 'Unit/Integration Testing', 'Design Patterns', 'CI/CD'],
  },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const easeOut: Easing = 'easeOut';
const easeInOut: Easing = 'easeInOut';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: easeInOut },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover'>('default');
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

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

  const cursorVariants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16, scale: 1 },
    hover: { x: mousePosition.x - 32, y: mousePosition.y - 32, scale: 1.5 },
  };

  const enter = () => setCursorVariant('hover');
  const leave = () => setCursorVariant('default');

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden">

      {/* ── Custom cursor ── */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28, mass: 0.3 }}
      />

      {/* ── Animated background blobs ── */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/6 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/4 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: easeInOut }}
        />
      </div>

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            Pavithra Tupakula
          </motion.span>

          <nav className="hidden md:flex gap-1 items-center">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * NAV_LINKS.indexOf(link) }}
                onMouseEnter={enter}
                onMouseLeave={leave}
                className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                  activeSection === link.toLowerCase()
                    ? 'text-primary bg-primary/8 font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            onMouseEnter={enter}
            onMouseLeave={leave}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.header>

      <main className="pt-20 pb-12 relative z-10">

        {/* ── Hero ── */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-24 dot-grid">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to Full-Time Opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent leading-tight"
            >
              Hi, I'm Pavithra Tupakula
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
            >
              MS Computer Science graduate at UT Dallas, specializing in Intelligent Systems.
              Passionate about AI/ML, full-stack development, and building data-driven solutions
              that solve real-world problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3"
            >
              {(
                [
                  { Icon: Github, href: LINKS.github, label: 'GitHub' },
                  { Icon: Linkedin, href: LINKS.linkedin, label: 'LinkedIn' },
                  { Icon: Mail, href: LINKS.email, label: 'Email' },
                ] as const
              ).map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={enter}
                  onMouseLeave={leave}
                  className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-sm"
          >
            {heroStats.map(({ value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="bg-card px-6 py-5 text-center group hover:bg-primary/5 transition-colors"
              >
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wide">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Summary ── */}
        <section id="summary" className="max-w-5xl mx-auto px-6 py-12">
          <SectionHeading>Summary</SectionHeading>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            onMouseEnter={enter}
            onMouseLeave={leave}
            className="bg-card border border-border rounded-xl p-7 hover:shadow-lg hover:border-primary/30 hover:shadow-primary/5 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <p className="text-card-foreground leading-relaxed text-base">
              Results-driven software developer and MS CS graduate from UT Dallas with hands-on
              experience in AI/ML, full-stack development, and cloud technologies. Proficient in
              Python, ReactJS, FastAPI, and AWS, with a strong track record of building end-to-end
              intelligent systems — from ML-based corrosion detection platforms to NLP sentiment
              analyzers. Skilled in UI/UX design using Figma and passionate about creating
              polished, user-centric products. Committed to clean code, continuous learning, and
              leveraging generative AI and LLMs to solve complex engineering problems.
            </p>
          </motion.div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
          <SectionHeading>Skills</SectionHeading>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {skills.map((group, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
                onMouseEnter={enter}
                onMouseLeave={leave}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.04 }}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
          <SectionHeading>Projects</SectionHeading>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.2 } }}
                onMouseEnter={enter}
                onMouseLeave={leave}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all group relative"
              >
                {/* Top gradient bar */}
                <div className="h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                {'image' in project && project.image && (
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2.5 py-0.5 bg-primary/8 text-primary rounded-full text-xs font-medium cursor-default border border-primary/15"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Timeline ── */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-12">
          <SectionHeading>Experience &amp; Education</SectionHeading>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    onMouseEnter={enter}
                    onMouseLeave={leave}
                    className={`absolute left-5 top-2 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-background ${
                      item.type === 'work' ? 'bg-primary' : 'bg-primary/60'
                    }`}
                  >
                    {item.type === 'work' ? (
                      <Briefcase className="w-3 h-3 text-primary-foreground" />
                    ) : (
                      <GraduationCap className="w-3 h-3 text-primary-foreground" />
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 8 }}
                    onMouseEnter={enter}
                    onMouseLeave={leave}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all relative overflow-hidden group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-semibold mb-0.5 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.organization}</p>
                      </div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-primary/8 text-primary border border-primary/15 rounded-full text-xs font-medium whitespace-nowrap"
                      >
                        {item.period}
                      </motion.span>
                    </div>
                    <p className="text-card-foreground text-sm mb-3 leading-relaxed">{item.description}</p>
                    <ul className="space-y-1.5">
                      {item.achievements.map((achievement, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.08 }}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5 shrink-0">▸</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <SectionHeading>Certifications &amp; Awards</SectionHeading>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-3"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.2 } }}
                onMouseEnter={enter}
                onMouseLeave={leave}
                className="bg-card border border-border rounded-xl p-5 flex items-start gap-3 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug">{cert.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Resume ── */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <SectionHeading>Resume</SectionHeading>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            onMouseEnter={enter}
            onMouseLeave={leave}
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="flex items-center justify-between flex-wrap gap-6">
              <motion.div animate={floatingAnimation}>
                <h3 className="text-xl font-bold mb-2">Download My Resume</h3>
                <p className="text-muted-foreground text-sm">
                  Full details of my skills, projects, experience, and accomplishments.
                </p>
              </motion.div>
              <motion.a
                href="/Pavithra_Tupakula_Job.pdf"
                download
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={enter}
                onMouseLeave={leave}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 font-medium"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-12">
          <SectionHeading>Get In Touch</SectionHeading>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <form onSubmit={handleSubmit} className="space-y-5">
              {(
                [
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', delay: 0.1 },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com', delay: 0.2 },
                ] as const
              ).map(({ id, label, type, placeholder, delay }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay }}
                >
                  <label htmlFor={id} className="block mb-2 text-sm font-medium">
                    {label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    onMouseEnter={enter}
                    onMouseLeave={leave}
                    id={id}
                    type={type}
                    required
                    value={formData[id as 'name' | 'email']}
                    onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[var(--input-background)] border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    placeholder={placeholder}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  onMouseEnter={enter}
                  onMouseLeave={leave}
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2.5 bg-[var(--input-background)] border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 resize-none transition-all"
                  placeholder="Your message..."
                />
              </motion.div>

              {formState === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-green-600 dark:text-green-400 font-medium"
                >
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {formState === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-red-500 font-medium"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={formState !== 'sending' ? { scale: 1.02, y: -2 } : {}}
                whileTap={formState !== 'sending' ? { scale: 0.98 } : {}}
                onMouseEnter={enter}
                onMouseLeave={leave}
                type="submit"
                disabled={formState === 'sending'}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed font-medium"
              >
                {formState === 'sending' ? 'Sending…' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-border relative z-10"
      >
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-muted-foreground text-sm">
          <p>© 2026 Pavithra Tupakula — MS CS Graduate, UT Dallas. Built with React &amp; Tailwind CSS.</p>
        </div>
      </motion.footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-2">{children}</h2>
      <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
    </motion.div>
  );
}
