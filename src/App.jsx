import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import ParticleScene from './components/ParticleScene';
import ProjectList from './components/ProjectList';
import TerminalContact from './components/TerminalContact';

const SECTION_DATA = [
  { tag: "SYS // INIT", title: "CREATIVE TECHNOLOGIST.", subtitle: "SYSTEM INIT // INTERACTIVE DEVELOPMENT NODE", layout: "hero" },
  { tag: "01 // COMPETENCIES", title: "ENGINEERING FOCUS.", subtitle: "DATA CORE // ARCHITECTURE & AI OPTIMIZATION", layout: "about" },
  { tag: "02 // REPOSITORIES", title: "SELECTED WORKS.", subtitle: "STABLE DEPLOYMENTS // OPEN SOURCE PROJECTS", layout: "projects" },
  { tag: "03 // TERMINAL", title: "CONNECT PORT.", subtitle: "COMMS ROUTER // ESTABLISH SECURE LINK", layout: "contact" }
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

    // Track scroll matrices to map accurately to sections 0, 1, 2, 3
    lenis.on('scroll', (e) => {
      const height = window.innerHeight;
      const scrollPos = e.scroll;

      if (scrollPos < height * 0.5) {
        setActiveState(0); // Section 1: Ring
      } else if (scrollPos >= height * 0.5 && scrollPos < height * 1.5) {
        setActiveState(1); // Section 2: Turbulent unravelling Ring
      } else if (scrollPos >= height * 1.5 && scrollPos < height * 2.5) {
        setActiveState(2); // Section 3: Vortex Galaxy
      } else {
        setActiveState(3); // Section 4: Flat Data Matrix
      }
    });

    return () => lenis.destroy();
  }, []);

  // Handler to smoothly trigger scrolling to terminal contact section
  const handleScrollToContact = () => {
    if (lenisRef.current && contactSectionRef.current) {
      lenisRef.current.scrollTo(contactSectionRef.current, {
        offset: 0,
        duration: 1.4,
      });
    }
  };

  return (
    <div className="relative w-full bg-black text-white select-none overflow-x-hidden">
      
      {/* 1. FIXED BACKGROUND CANVAS LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ParticleScene activeState={activeState} />
        </Canvas>
      </div>

      {/* 2. PERSISTENT GLOBAL HUD LAYER */}
      <div className="fixed inset-0 z-10 pointer-events-none font-mono">
        {/* Subtle grid accent overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Telemetry Corner Indicators - Updated with Name */}
        <div className="absolute top-6 left-8 text-[10px] text-gray-400 tracking-[0.2em] uppercase flex items-center space-x-2">
          <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <span className="font-sans font-bold text-white tracking-normal text-xs mr-1">AMAL BIJU</span>
          <span className="text-gray-500">// SOFTWARE DEVELOPER</span>
        </div>

        {/* Right Top Context Anchor - Contact redirect route added */}
        <div className="absolute top-5 right-8 pointer-events-auto">
          <button 
            onClick={handleScrollToContact}
            className="text-[10px] text-emerald-400 hover:text-white tracking-[0.2em] uppercase bg-emerald-950/10 hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/50 px-3 py-1.5 rounded transition-all duration-300 cursor-pointer"
          >
            [ CONNECT_PORT ]
          </button>
        </div>

        <div className="absolute bottom-6 left-8 text-[10px] text-gray-500 tracking-[0.2em] uppercase">
          STATE_INDEX // 0{activeState}
        </div>
        <div className="absolute bottom-6 right-8 text-[10px] text-gray-500 tracking-[0.2em] uppercase">
          GL_RENDERER // 60_FPS
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT TEXT ELEMENT OVERLAY */}
      {/* This component watches activeState updates and swaps headings using standard Framer Motion curves */}
      <div className="fixed inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 md:px-24 font-mono">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeState}
            initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 max-w-3xl"
          >
            {/* If we are on sections 0 or 1, keep the headlines prominent in the center center-left */}
            {(activeState === 0 || activeState === 1) && (
              <>
                <p className="text-[11px] text-emerald-400 font-bold tracking-[0.3em] uppercase">
                  {SECTION_DATA[activeState].subtitle}
                </p>
                <h1 className="text-4xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.9] text-white">
                  {SECTION_DATA[activeState].title}
                </h1>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. SCROLLABLE INTERACTIVE VIEWPORT BLOCKS */}
      {/* Section 0: Hero Standby */}
      <section className="h-screen w-full relative z-30 flex flex-col justify-end p-8 md:p-24 pointer-events-none">
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }}
          className="font-mono text-gray-500 text-xs tracking-widest"
        >
          [ ↓ SCROLL MOUSE WHEEL TO OPEN ENGINES ]
        </motion.p>
      </section>

      {/* Section 1: About Split Grid */}
      <section className="h-screen w-full relative z-30 grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-24">
        <div className="md:col-span-4" /> {/* Empty column to let center canvas breath */}
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-xs text-gray-400 leading-relaxed bg-black/40 backdrop-blur-sm p-6 md:p-12 border border-white/5 rounded"
        >
          <div className="space-y-3">
            <h3 className="text-white font-bold tracking-widest text-sm">[ 01 // FRAMEWORKS ]</h3>
            <p>Building highly performant frontend applications coupled with complex pipeline distributions. Well-versed in containerization, system deployments, and managing high-density streaming grids.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-white font-bold tracking-widest text-sm">[ 02 // DATA SCALING ]</h3>
            <p>Designing optimized retrieval models and convolutional pipelines. Specializing in bridging heavy calculations with clean, user-facing creative engineering interfaces.</p>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Interactive Project List Table */}
      <section className="min-h-screen w-full relative z-30 flex flex-col justify-center py-20 px-6 md:px-24 bg-black/20">
        <div className="w-full max-w-5xl mx-auto font-mono mb-6">
          <p className="text-[11px] text-emerald-400 font-bold tracking-[0.3em] uppercase mb-1">02 // ARCHIVES</p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">SELECTED REPOSITORIES.</h2>
        </div>
        
        {/* Render our custom hoverable row list here */}
        <ProjectList />
      </section>

      {/* Section 3: Secure Input Terminal */}
      <section 
        ref={contactSectionRef}
        className="min-h-screen w-full relative z-30 flex flex-col justify-center py-20 px-6 md:px-24"
      >
        <div className="w-full max-w-2xl mx-auto font-mono mb-6 text-center md:text-left">
          <p className="text-[11px] text-emerald-400 font-bold tracking-[0.3em] uppercase mb-1">03 // GATEWAY</p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white">CONTACT TERMINAL.</h2>
        </div>

        {/* Render our secure text input shell mock terminal here */}
        <TerminalContact />
      </section>

    </div>
  );
}