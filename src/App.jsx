import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import ParticleScene from './components/ParticleScene';
import GlobalHUD from './components/GlobalHUD';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectList from './components/ProjectList';
import TerminalContact from './components/TerminalContact';

const SECTION_DATA = [
  { tag: "SYS // INIT", title: "SYSTEM ARCHITECT.", subtitle: "SYSTEM INIT // INTERACTIVE DEVELOPMENT NODE" },
  { tag: "01 // COMPETENCIES", title: "ENGINEERING FOCUS.", subtitle: "DATA CORE // ARCHITECTURE & AI OPTIMIZATION" },
  { tag: "02 // REPOSITORIES", title: "SELECTED WORKS.", subtitle: "STABLE DEPLOYMENTS // PROJECT PRODUCTION LOGS" },
  { tag: "03 // TERMINAL", title: "CONNECT PORT.", subtitle: "COMMS ROUTER // ESTABLISH SECURE LINK" }
];

export default function App() {
  const [activeState, setActiveState] = useState(0);
  const lenisRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Initialize Smooth Scrolling Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Map scroll coordinates directly to your WebGL activeState indices
    lenis.on('scroll', (e) => {
      const height = window.innerHeight;
      const scrollPos = e.scroll;

      if (scrollPos < height * 0.5) {
        setActiveState(0);
      } else if (scrollPos >= height * 0.5 && scrollPos < height * 1.5) {
        setActiveState(1);
      } else if (scrollPos >= height * 1.5 && scrollPos < height * 2.5) {
        setActiveState(2);
      } else {
        setActiveState(3);
      }
    });

    return () => lenis.destroy();
  }, []);

  const handleScrollToContact = () => {
    if (!contactSectionRef.current) {
      console.warn('Contact section ref not found');
      return;
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(contactSectionRef.current, { duration: 1.4 });
    } else {
      // Fallback if Lenis is not available
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full bg-black text-white select-none overflow-x-hidden">
      
      {/* 3D WEBGL PARTICLE SYSTEM RELECTIONS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ParticleScene activeState={activeState} />
        </Canvas>
      </div>

      {/* FIXED FRAME HUD CONTROLS */}
      <GlobalHUD activeState={activeState} onConnectClick={handleScrollToContact} />

      {/* DYNAMIC SECTION TEXT OVERLAYS */}
      <div className="fixed inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 md:px-24 font-mono">
        <AnimatePresence mode="wait">
          {activeState === 1 && (
            <motion.div
              key={activeState}
              initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 max-w-3xl"
            >
              <p className="text-[11px] text-emerald-400 font-bold tracking-[0.3em] uppercase">
                {SECTION_DATA[activeState].subtitle}
              </p>
              <h1 className="text-4xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.9] text-white">
                {SECTION_DATA[activeState].title}
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MODULAR VIEWPORT CONTENT LAYERS */}
      <HeroSection />
      
      <AboutSection />

      {/* Section 2: Repositories Archives */}
      <section className="min-h-screen w-full relative z-30 flex flex-col justify-center py-20 px-6 md:px-24 bg-black/20">
        <div className="w-full max-w-5xl mx-auto font-mono mb-6">
          <p className="text-[11px] text-emerald-400 font-bold tracking-[0.3em] uppercase mb-1">02 // ARCHIVES</p>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white uppercase">SELECTED REPOSITORIES.</h2>
        </div>
        <ProjectList />
      </section>

      {/* Section 3: Comms Gateway Terminal */}
      <section 
        ref={contactSectionRef}
        className="min-h-screen w-full relative z-30 flex flex-col justify-center py-20 px-6 md:px-24"
      >
        <div className="w-full max-w-2xl mx-auto font-mono mb-6 text-center md:text-left">
          <p className="text-[11px] text-emerald-400 font-bold tracking-[0.3em] uppercase mb-1">03 // GATEWAY</p>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white uppercase">CONTACT TERMINAL.</h2>
        </div>
        <TerminalContact />
      </section>

    </div>
  );
}