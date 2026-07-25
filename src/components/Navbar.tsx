import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl glass-panel rounded-2xl px-6 py-3 flex items-center justify-between border border-white/5 backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
    >
      <a href="#home" className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple text-white font-black shadow-[0_0_20px_rgba(59,130,246,0.5)]">
        AP
      </a>
      <div className="hidden md:block h-6 w-px bg-white/10 mx-4" />
      <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-muted">
        {navItems.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      
      <a 
        href="/AvaniPatelResume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-gray-950 px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
      >
        Resume <FaArrowRight size={12} />
      </a>
    </motion.nav>
  );
}