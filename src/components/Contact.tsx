import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative z-10 mb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black text-white glow-text mb-6">Let's Connect</h2>
          <p className="text-muted text-lg">
            Open to New Opportunities
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-muted">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-muted">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-muted">Message</label>
              <textarea 
                id="message" 
                required 
                rows={5}
                className="bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="How can we work together?"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple py-4 rounded-xl font-bold text-white hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : success ? (
                "Message Sent ✓"
              ) : (
                <>Send Message <FaPaperPlane /></>
              )}
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="mailto:avanijp2810@gmail.com" className="flex items-center gap-3 text-muted hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary"><FaEnvelope /></div>
                avanijp2810@gmail.com
              </a>
              <a href="tel:+917990419162" className="flex items-center gap-3 text-muted hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary"><FaPhoneAlt /></div>
                +91 7990419162
              </a>
            </div>
            <div className="flex items-center md:justify-end gap-4">
              <a href="https://github.com/AvaniPatel2810" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-muted hover:text-white hover:scale-110 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/AvaniPatel2810" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-muted hover:text-white hover:scale-110 transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}