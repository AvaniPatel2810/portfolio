import { motion } from 'framer-motion';

const achievements = [
  { title: "AI Development ", text: "Built workflow automation experiences for real business operations." },
  { title: "Continuous Learning", text: "Applied engineering fundamentals to model flight paths and analytics." },
  { title: "Problem Solving", text: "Designs software around clarity, usability, and measurable outcomes." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">About</span>
          <h2 className="text-4xl md:text-5xl font-black text-white glow-text mb-6">Building Software for Real-World Problems</h2>
          <p className="text-muted text-lg max-w-3xl">
            A practical builder with a strong foundation in software, AI workflows, and analytical systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-xl flex flex-col gap-6"
          >
            <p className="text-muted text-lg leading-relaxed">
              Computer Engineering undergraduate at <strong className="text-white">Birla Vishvakarma Mahavidyalaya (BVM) Engineering College</strong> with experience in AI-powered automation, enterprise software development, and engineering simulations.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Passionate about building scalable applications and solving real-world business challenges through technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-panel p-6 rounded-xl border-l-2 border-l-purple"
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}