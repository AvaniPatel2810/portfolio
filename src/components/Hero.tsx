import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const WORDS = ['AI Engineer.', 'Backend Builder.', 'ML Enthusiast.', 'Problem Solver.'];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), speed / 2);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

const stats = [
  { value: '04', label: 'Projects Completed' },
  { value: '01', label: 'Internship Experience' },
  { value: '15+', label: 'Technologies Learned' },
];

const SHOOTING_STARS = [
  { top: '18%', left: '72%', delay: '0s', dur: '7s' },
  { top: '42%', left: '60%', delay: '2.5s', dur: '9s' },
  { top: '28%', left: '88%', delay: '5s', dur: '10s' },
  { top: '8%',  left: '80%', delay: '1s',  dur: '8s' },
  { top: '60%', left: '92%', delay: '3.2s', dur: '11s' },
];

export default function Hero() {
  const typed = useTypewriter(WORDS);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Shooting stars */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {SHOOTING_STARS.map((s, i) => (
          <span
            key={i}
            className="shooting-star"
            style={{ top: s.top, left: s.left, animationDelay: s.delay, animationDuration: s.dur }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center z-10">
        {/* Left — text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 flex-1 min-w-0"
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-panel px-4 py-2 rounded-full w-fit"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Role + Name */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 mb-3"
            >
              Software Engineer&nbsp;•&nbsp;AI &amp; Machine Learning&nbsp;•&nbsp;Backend Systems
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4 glow-text"
            >
              Avani Patel
            </motion.h1>

            {/* Typing line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-3xl font-bold text-white h-10 flex items-center"
            >
              <span className="text-blue-400">{typed}</span>
              <span className="ml-0.5 inline-block w-0.5 h-7 bg-blue-400 animate-[blink_1s_step-end_infinite]" />
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Building scalable software and AI-powered applications focused on automation,
            productivity, and real-world impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3.5 rounded-full font-bold text-white text-sm hover:scale-105 transition-transform shadow-[0_0_24px_rgba(59,130,246,0.4)]"
            >
              View Projects <FaArrowRight size={13} />
            </a>
            <a
              href="/AvaniPatel.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 glass-panel px-7 py-3.5 rounded-full font-bold text-white text-sm hover:bg-white/10 transition-colors"
            >
              Download Resume <FaExternalLinkAlt size={12} />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3"
          >
            {[
              { href: 'https://github.com/AvaniPatel2810', icon: <FaGithub size={18} />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/AvaniPatel2810', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
              { href: 'mailto:avanijp2810@gmail.com', icon: <FaEnvelope size={18} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4 w-full lg:w-72 shrink-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i, delay: i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500 glow-shadow"
            >
              <div className="text-4xl font-black text-white mb-1 tabular-nums">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
