import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "MarketPulse AI",
    description: "AI-powered market intelligence platform for financial analysis, sentiment tracking, and data-driven insights.",
    tech: ["React", "Python", "FastAPI", "AI"],
    featured: true,
    github: "https://github.com/AvaniPatel2810/marketpulse-ai",
    live: "https://marketpulse-ai.com",
  },
  {
    title: "Rocket Trajectory Simulator",
    description: "Physics-based flight simulation platform developed using Python for trajectory prediction, altitude analysis, and visualization.",
    tech: ["Python", "NumPy", "Matplotlib", "Physics Modeling"],
    github: "https://github.com/AvaniPatel2810/rocket-trajectory-simulator",
    live: "https://rocket-trajectory-simulator.com",
  },
  {
    title: "Enterprise Report Generator",
    description: "Automated reporting platform leveraging LLMs to generate and distribute business reports through email workflows.",
    tech: ["React", "FastAPI", "Python", "Ollama"],
    github: "https://github.com/AvaniPatel2810/enterprise-report-generator",
    live: "https://enterprise-report-generator.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Projects</span>
          <h2 className="text-4xl md:text-5xl font-black text-white glow-text mb-6">Featured Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: 'preserve-3d' }}
              className={`glass-panel p-8 rounded-3xl flex flex-col justify-between ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  {project.featured ? (
                    <span className="bg-gradient-to-r from-primary to-purple text-white text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                      Featured
                    </span>
                  ) : <div />}
                  <div className="flex gap-3 ml-auto">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4">{project.title}</h3>
                <p className="text-muted text-lg mb-8 leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="glass-panel px-3 py-1 rounded-full text-xs font-bold text-cyan-200 border-cyan/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}