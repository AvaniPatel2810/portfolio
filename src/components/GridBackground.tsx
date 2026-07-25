import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-dark overflow-hidden">
      {/* Subtle blue-tinted radial gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple/10 rounded-full blur-[150px]" />
      <div className="absolute top-[40%] left-[60%] w-[40%] h-[40%] bg-cyan/5 rounded-full blur-[120px]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Floating orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[15%] w-[250px] h-[250px] bg-primary/10 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[10%] w-[200px] h-[200px] bg-cyan/10 rounded-full blur-[100px]"
      />
    </div>
  );
}