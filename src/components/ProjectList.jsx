import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  // --- SOFTWARE CATEGORY ---
  { id: "01", category: "software", title: "NYAYA AI", role: "RAG FRAMEWORK", context: "LEGAL ANALYTICS LAB" },
  { id: "02", category: "software", title: "SATELLITE ANALYSIS", role: "U-NET PIPELINE", context: "IMAGE SEGMENTATION" },
  { id: "03", category: "software", title: "DISTRIBUTED FRAMEWORK", role: "HADOOP + DOCKER", context: "DATA ENGINEERING" },

  // --- HARDWARE CATEGORY ---
  { id: "04", category: "hardware", title: "SMART CARRIER ROBOT", role: "AUTONOMOUS SYSTEM", context: "HARDWARE INTEGRATION" },
  { id: "05", category: "hardware", title: "2-LINK MANIPULATOR", role: "MATLAB MODELING", context: "ROBOTICS KINEMATICS" },
  { id: "06", category: "hardware", title: "ALLOY OPTIMIZER", role: "CNN + GENETIC ALGO", context: "INVERSE ENGINEERING" }
];

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState('software');

  // Filter the list based on selection
  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full max-w-5xl mx-auto font-mono text-sm mt-8">
      
      {/* CATEGORY SWITCH TERMINAL BUTTONS */}
      <div className="flex space-x-6 mb-8 border-b border-white/5 pb-4">
        <button 
          onClick={() => setActiveCategory('software')}
          className={`transition-all duration-300 relative py-1 px-3 text-xs tracking-widest ${
            activeCategory === 'software' ? 'text-emerald-400 font-bold' : 'text-gray-500 hover:text-white'
          }`}
        >
          [ SOFTWARE_NODES ]
          {activeCategory === 'software' && (
            <motion.div layoutId="activeTabGlow" className="absolute inset-0 border border-emerald-500/30 bg-emerald-500/5 rounded -z-10 shadow-[0_0_10px_rgba(16,185,129,0.1)]" />
          )}
        </button>

        <button 
          onClick={() => setActiveCategory('hardware')}
          className={`transition-all duration-300 relative py-1 px-3 text-xs tracking-widest ${
            activeCategory === 'hardware' ? 'text-emerald-400 font-bold' : 'text-gray-500 hover:text-white'
          }`}
        >
          [ HARDWARE_NODES ]
          {activeCategory === 'hardware' && (
            <motion.div layoutId="activeTabGlow" className="absolute inset-0 border border-emerald-500/30 bg-emerald-500/5 rounded -z-10 shadow-[0_0_10px_rgba(16,185,129,0.1)]" />
          )}
        </button>
      </div>

      {/* PROJECT TABLE HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-12 px-4 py-2 text-[10px] text-gray-600 uppercase tracking-widest border-b border-white/10">
        <div className="md:col-span-1">ID</div>
        <div className="md:col-span-4">System Core</div>
        <div className="md:col-span-3">Architecture</div>
        <div className="md:col-span-4">Deployment Context</div>
      </div>

      {/* DYNAMIC LIST INTERFACE */}
      <div className="min-h-[300px]"> {/* Prevents the footer from layout-shifting drastically during filter changes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-1 md:grid-cols-12 py-5 px-4 border-b border-white/5 items-center cursor-pointer hover:bg-emerald-500/[0.01] transition-colors duration-300"
              >
                {/* Visual Accent Hover Laser Line */}
                <div className="absolute inset-y-0 left-0 w-[2px] bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                <div className="md:col-span-1 text-gray-600 text-xs">{project.id}</div>
                <div className="md:col-span-4 font-sans text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 group-hover:translate-x-2 transition-all duration-300">
                  {project.title}
                </div>
                <div className="md:col-span-3 text-xs tracking-widest text-emerald-400/60 mt-1 md:mt-0">
                  [{project.role}]
                </div>
                <div className="md:col-span-3 text-gray-400 text-xs hidden md:block">
                  {project.context}
                </div>
                <div className="md:col-span-1 text-right text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 hidden md:block">
                  // →
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}