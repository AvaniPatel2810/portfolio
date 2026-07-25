import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTools } from 'react-icons/fa';

const skillGroups = [
  {
    title: "Software Development",
    icon: FaCode,
    skills: ["C++", "Java", "Python", "JavaScript", "React", "FastAPI", "REST APIs"]
  },
  {
    title: "AI & Machine Learning",
    icon: FaBrain,
    skills: ["LLMs", "Machine Learning", "Prompt Engineering", "Embeddings", "Vector Databases"]
  },
  {
    title: "Systems & Tools",
    icon: FaTools,
    skills: ["Operating Systems", "Git", "GitHub", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Skills</span>
          <h2 className="text-4xl md:text-5xl font-black text-white glow-text mb-6">Technical Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center text-primary mb-6 border border-primary/20">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="glass-panel px-3 py-1.5 rounded-md text-sm font-semibold text-muted border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-4">Education</span>
            <h3 className="text-2xl font-black text-white mb-2">Birla Vishvakarma Mahavidyalaya</h3>
            <p className="text-muted text-lg mb-1">Bachelor of Engineering</p>
            <p className="text-muted text-lg mb-6">Computer Engineering</p>
            <div className="flex gap-4">
              <span className="glass-panel px-3 py-1 rounded-md text-sm font-bold text-white">Graduation: 2028</span>
              <span className="glass-panel px-3 py-1 rounded-md text-sm font-bold text-cyan-200">CGPA: 7+</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border-l-4 border-l-purple"
          >
            <span className="text-purple text-xs font-bold uppercase tracking-wider block mb-4">Leadership</span>
            <h3 className="text-2xl font-black text-white mb-2">Computer Society of India (CSI Club)</h3>
            <p className="text-muted text-lg mb-6">Graphics & Design Team Lead</p>
            <div className="flex flex-wrap gap-3">
              <span className="glass-panel px-3 py-1 rounded-md text-sm font-bold text-white">Visual communication</span>
              <span className="glass-panel px-3 py-1 rounded-md text-sm font-bold text-white">Team collaboration</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}