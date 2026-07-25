import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl glass-panel rounded-full px-4 py-3 flex items-center justify-between"
    >
      <a href="#home" className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple text-white font-black shadow-[0_0_20px_rgba(59,130,246,0.5)]">
        AP
      </a>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted">
        {navItems.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      
      <a 
        href="/AvaniPatel.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-gray-950 px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
      >
        Resume <FaArrowRight size={12} />
      </a>
    </motion.nav>
  );
}