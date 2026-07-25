import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Experience</span>
          <h2 className="text-4xl md:text-5xl font-black text-white glow-text mb-6">Professional Experience</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group transition-all duration-500"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Reliance Industries Limited</h3>
                <div className="text-xl font-bold glow-text">AI Engineering Intern</div>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <span className="glass-panel px-4 py-1.5 rounded-full text-sm font-bold text-white border-primary/30">May – June 2026</span>
                <span className="glass-panel px-4 py-1.5 rounded-full text-sm font-bold text-muted border-purple/30">Vadodara, Gujarat</span>
              </div>
            </div>

            <p className="text-muted text-lg leading-relaxed mb-8 max-w-4xl">
              Designed and developed enterprise AI agents for automated KPI monitoring, configurable workflows, and intelligent report generation. Built scalable software using React, FastAPI, Python and LLMs to streamline industrial reporting processes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Enterprise AI Agents", desc: "Configurable AI agent modules for workflow automation." },
                { title: "LLM Report Generation", desc: "Automated KPI reports using Llama 3, Ollama and Prompt Engineering." },
                { title: "Dashboard Development", desc: "React + FastAPI dashboards for configuration and monitoring." },
                { title: "Workflow Automation", desc: "Reduced manual reporting through scheduled AI-powered workflows." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)]">✓</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "FastAPI", "Python", "Ollama", "Llama 3", "Git", "Prompt Engineering"].map((tech) => (
                <span key={tech} className="glass-panel px-4 py-1.5 rounded-full text-sm font-bold text-cyan-100 border-cyan/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 bg-gradient-to-r from-primary to-purple px-6 py-3 rounded-full font-bold text-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <FaAward /> View Certificate
              </button>
              <a href="#projects" className="flex items-center gap-2 glass-panel px-6 py-3 rounded-full font-bold text-white hover:bg-white/10 transition-colors border-white/20">
                <FaExternalLinkAlt size={14} /> View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-8 rounded-2xl w-full max-w-lg relative"
            >
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">Certificate</h3>
              <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                <p className="text-muted">Certificate image placeholder</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}