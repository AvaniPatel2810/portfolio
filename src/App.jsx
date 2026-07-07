import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaExternalLinkAlt,
  FaArrowRight,
  FaAward,
  FaDownload,
  FaTimes,
  FaReact,
  FaServer,
  FaRobot,
  FaGitAlt,
  FaBolt,
  FaMicrochip,
  FaBrain,
  FaCogs,
  FaChartLine,
  FaProjectDiagram,
} from "react-icons/fa";

import { SiOllama } from "react-icons/si";
import "./App.css";


const navigation = ["About", "Experience", "Projects", "Skills", "Contact"];

const stats = [
  { value: "04", label: "Projects Completed" },
  { value: "01", label: "Internship Experience" },
  { value: "15+", label: "Technologies Learned" },
];

const achievements = [
  {
    title: "Enterprise AI",
    text: "Built workflow automation experiences for real business operations.",
  },
  {
    title: "Simulation Mindset",
    text: "Applied engineering fundamentals to model flight paths and analytics.",
  },
  {
    title: "Product Focus",
    text: "Designs software around clarity, usability, and measurable outcomes.",
  },
];

const experienceHighlights = [
  "Developed configurable AI agent modules for enterprise workflow automation",
  "Integrated LLM-based workflow automation",
  "Automated report generation systems",
  "Worked with enterprise-scale software solutions",
];

const projects = [
  {
    title: "MarketPulse AI",
    description:
      "AI-powered market intelligence platform for financial analysis, sentiment tracking, and data-driven insights.",
    tech: ["React", "Python", "FastAPI", "AI"],
    featured: true,
    github: "https://github.com/AvaniPatel2810/marketpulse-ai",
    live: "https://marketpulse-ai.com",
  },
  {
    title: "Rocket Trajectory Simulator",
    description:
      "Physics-based flight simulation platform developed using Python for trajectory prediction, altitude analysis, and visualization.",
    tech: ["Python", "NumPy", "Matplotlib", "Physics Modeling"],
    github: "https://github.com/AvaniPatel2810/rocket-trajectory-simulator",
    live: "https://rocket-trajectory-simulator.com",
  },
  {
    title: "Enterprise Report Generator",
    description:
      "Automated reporting platform leveraging LLMs to generate and distribute business reports through email workflows.",
    tech: ["React", "FastAPI", "Python", "Ollama"],
    github: "https://github.com/AvaniPatel2810/enterprise-report-generator",
    live: "https://enterprise-report-generator.com",
  },
];

const skillGroups = [
  {
    title: "Software Development",
    skills: [
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "React",
      "FastAPI",
      "REST APIs"
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "LLMs",
      "Machine Learning",
      "Prompt Engineering",
      "Embeddings",
      "Vector Databases"
    ]
  },
  {
    title: "Systems & Tools",
    skills: [
      "Operating Systems",
      "Git",
      "GitHub",
      "Postman",
      "VS Code"
    ]
  }
];

const experienceAchievements = [
  {
    title: "Configurable AI agent modules",
    text: "Built modular workflow automation components for enterprise operations and internal reporting pipelines.",
    icon: FaCogs,
  },
  {
    title: "Plant performance monitoring",
    text: "Developed AI agents for plant performance monitoring to surface meaningful KPIs and operational insights.",
    icon: FaBrain,
  },
  {
    title: "LLM-powered reporting",
    text: "Integrated LLM workflows for automated report generation and structured business communication.",
    icon: FaProjectDiagram,
  },
  {
    title: "Automated KPI workflows",
    text: "Streamlined recurring reporting tasks and dashboard-driven monitoring using reliable automation logic.",
    icon: FaChartLine,
  },
  {
    title: "Modern stack delivery",
    text: "Delivered solutions using React, FastAPI, Python, Ollama, and collaborative engineering tooling.",
    icon: FaMicrochip,
  },
];

const experienceStack = [
  { name: "React", icon: FaReact },
  { name: "FastAPI", icon: FaServer },
  { name: "Python", icon: FaRobot },
  { name: "Ollama", icon: FaMicrochip },
  { name: "LLMs", icon: FaBolt },
  { name: "Automation", icon: FaCogs },
  { name: "Git", icon: FaGitAlt },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

function AchievementCard({ item, index, reducedMotion }) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  const handleSpotlightMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  return (
    <motion.article
      className={`experience-achievement-card ${hovered ? "is-hovered" : ""}`}
      initial={reducedMotion ? false : { opacity: 0, x: -24 }}
      whileInView={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] } }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={reducedMotion ? { scale: 1.01 } : { y: -8, scale: 1.02 }}
      onMouseMove={handleSpotlightMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setSpotlight({ x: 50, y: 50 });
      }}
      style={{ "--pointer-x": `${spotlight.x}%`, "--pointer-y": `${spotlight.y}%` }}
    >
      <div className="achievement-card-shimmer" />
      <div className="achievement-card-icon-wrap" aria-hidden="true">
        <Icon />
      </div>
      <div className="achievement-card-content">
        <strong>{item.title}</strong>
        <p>{item.text}</p>
      </div>
    </motion.article>
  );
}

function TechBadge({ tech, reducedMotion }) {
  const Icon = tech.icon;

  return (
    <motion.a
      href="#projects"
      className="tech-pill"
      whileHover={reducedMotion ? { scale: 1.01 } : { y: -5, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="tech-pill-icon" aria-hidden="true">
        <Icon />
      </span>
      <span>{tech.name}</span>
    </motion.a>
  );
}

function SectionHeader({ eyebrow, title, text, className = "" }) {
  return (
    <motion.div
      className={`portfolio-section-header ${className}`.trim()}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </motion.div>
  );
}

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  const handleSpotlightMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  return (
    <main className="portfolio-shell">

      <motion.nav
        className="portfolio-navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <a className="portfolio-logo" href="#home" aria-label="Avani Patel home">
          AP
        </a>

        <div className="portfolio-nav-links" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>

        <a
          className="portfolio-resume"
          href="/AvaniPatel.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <FaArrowRight />
        </a>
      </motion.nav>

      <section id="home" className="portfolio-hero">
        <div className="stars"></div>
        <div className="starfield" aria-hidden="true">
          <span className="shooting-star shooting-star-one" />
          <span className="shooting-star shooting-star-two" />
          <span className="shooting-star shooting-star-three" />
          <span className="shooting-star shooting-star-four" />
          <span className="shooting-star shooting-star-five" />
          <span className="shooting-star shooting-star-six" />
          <span className="shooting-star shooting-star-seven" />
          <span className="shooting-star shooting-star-eight" />
        </div>

        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          <motion.p className="hero-role" variants={fadeUp}>
            Software Engineer  •  AI & Machine Learning  •  Backend Systems
          </motion.p>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Avani Patel
          </motion.h1>

          <motion.div className="hero-social-actions" variants={fadeUp}>
            <a
              className="icon-action"
              href="https://github.com/AvaniPatel2810"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="icon-action"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="icon-action"
              href="mailto:avanijp2810@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="primary-action" href="#projects">
              View Projects
              <FaArrowRight />
            </a>
            <a
              className="secondary-action"
              href="/AvaniPatel.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <FaExternalLinkAlt />
            </a>
          </motion.div>

          <motion.p className="hero-tagline" variants={fadeUp}>
            Building scalable software and AI-powered
            applications focused on automation, productivity, and real-world impact.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-stats"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="about" className="portfolio-section about-section">
        <SectionHeader
          eyebrow="About"
          title="Building Software for Real-World Problems"
          text="A practical builder with a strong foundation in software, AI workflows, and analytical systems."
        />

        <div className="about-grid">
          <motion.div
            className="glass-panel about-copy"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              Computer Engineering undergraduate at Birla Vishvakarma Mahavidyalaya
              (BVM) Engineering College with
              experience in AI-powered automation, enterprise software
              development, and engineering simulations.
            </p>
            <p>
              Passionate about building scalable applications and solving
              real-world business challenges through technology.
            </p>
          </motion.div>

          <motion.div
            className="achievement-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {achievements.map((item) => (
              <motion.article
                className="achievement-card"
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="experience-section">

        <SectionHeader
          eyebrow="Experience"
          title="Professional Experience"
          text="Building enterprise AI solutions with modern technologies."
        />

        <motion.div
          className="experience-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* LEFT TIMELINE */}

          <div className="timeline">

            <div className="timeline-line"></div>

            <div className="timeline-dot"></div>

          </div>

          {/* RIGHT CARD */}

          <div className="experience-card">

            {/* Header */}

            <div className="experience-header">

              <div>

                <h2>Reliance Industries Limited</h2>

                <h4>AI Engineering Intern</h4>

              </div>

              <div className="experience-date">

                <p>May – June 2026</p>

                <span>Vadodara, Gujarat</span>

              </div>

            </div>

            {/* Description */}

            <p className="experience-description">

              Designed and developed enterprise AI agents for automated KPI
              monitoring, configurable workflows, and intelligent report generation.
              Built scalable software using React, FastAPI, Python and LLMs to
              streamline industrial reporting processes.

            </p>

            {/* Achievements */}

            <div className="experience-achievements">

              <div className="achievement">

                <div className="check">✓</div>

                <div>

                  <h4>Enterprise AI Agents</h4>

                  <p>
                    Developed configurable AI agent modules for workflow automation.
                  </p>

                </div>

              </div>

              <div className="achievement">

                <div className="check">✓</div>

                <div>

                  <h4>LLM Report Generation</h4>

                  <p>
                    Automated KPI reports using Llama 3, Ollama and Prompt Engineering.
                  </p>

                </div>

              </div>

              <div className="achievement">

                <div className="check">✓</div>

                <div>

                  <h4>Dashboard Development</h4>

                  <p>
                    Built React + FastAPI dashboards for configuration and monitoring.
                  </p>

                </div>

              </div>

              <div className="achievement">

                <div className="check">✓</div>

                <div>

                  <h4>Workflow Automation</h4>

                  <p>
                    Reduced manual reporting through scheduled AI-powered workflows.
                  </p>

                </div>

              </div>

            </div>

            {/* Tech */}

            <div className="experience-tech">

              <span>React</span>

              <span>FastAPI</span>

              <span>Python</span>

              <span>Ollama</span>

              <span>Llama 3</span>

              <span>Git</span>

              <span>Prompt Engineering</span>

            </div>

            {/* Buttons */}

            <div className="experience-buttons">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                className="experience-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <FaAward />
                View Certificate
              </motion.button>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                className="experience-btn secondary"
              >
                <FaExternalLinkAlt />
                View Project
              </motion.a>

            </div>

          </div>

        </motion.div>

      </section>

      <section id="projects" className="portfolio-section">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Projects"
          text="A collection of software projects focused on AI, automation, simulation, and data-driven applications."
        />
        <motion.div
          className="projects-bento"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}

        >
          {projects.map((project) => (
            <motion.article
              className={`project-card ${project.featured ? "featured" : ""}`}
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.015 }}
            >
              <div className="project-topline">
                <span>{project.featured ? "Featured" : "Project"}</span>
                <FaExternalLinkAlt />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                  GitHub
                </a>

                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}

        </motion.div>

      </section>

      <section id="skills" className="portfolio-section">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Skills"
          text="Technologies and tools used for building modern web applications, APIs, automation systems, and AI solutions."
        />

        <motion.div className="skills-grid">
          {skillGroups.map((group) => (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{ opacity: 1, y: 0 }}
            >
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="portfolio-section education-leadership-grid">
        <motion.article
          className="glass-panel credential-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span>Education</span>
          <h2>Birla Vishvakarma Mahavidyalaya</h2>
          <p>Bachelor of Engineering</p>
          <p>Computer Engineering</p>
          <div className="credential-meta">
            <strong>Graduation: 2028</strong>
            <strong>CGPA: 7+</strong>
          </div>
        </motion.article>

        <motion.article
          className="glass-panel credential-card leadership-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span>Leadership</span>
          <h2>Computer Society of India (CSI Club)</h2>
          <p>Graphics & Design Team Lead</p>
          <div className="credential-meta">
            <strong>Visual communication</strong>
            <strong>Team collaboration</strong>
          </div>
        </motion.article>
      </section>

      <section id="contact" className="portfolio-section contact-section">
        <motion.div
          className="contact-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span>Contact</span>
          <h2>Let's Connect</h2>
          <p>
            Open to New Opportunities
          </p>

          <div className="contact-actions">
            <a href="mailto:avanijp2810@gmail.com">
              <FaEnvelope />
              avanijp2810@gmail.com
            </a>
            <a href="tel:+917990419162">
              <FaPhoneAlt />
              +91 7990419162
            </a>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/AvaniPatel2810" target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub
            </a>
            <a href="https://linkedin.com/in/AvaniPatel2810" target="_blank" rel="noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
export default Portfolio;
