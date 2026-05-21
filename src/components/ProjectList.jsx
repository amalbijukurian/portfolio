import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  // --- ALL PROJECT ENTRIES APPORTIONED INTO SOFTWARE MATRIX ---
  { 
    id: "01", 
    category: "software", 
    title: "AR ROOM DECOR", 
    role: "UNITY / AR FOUNDATION", 
    context: "ANDROID SPACE ANCHOR // PLANE DETECT",
    description: "An Augmented Reality (AR) mobile application built for visualizing home decor items in real-world environments. The engine scales and grounds digital assets accurately across real physical dimensions.",
    features: [
      "AR Object Placement: Projects and anchors 3D furniture and spatial assets onto detected planes.",
      "Interactive Manipulation: Select, translate, and rotate digital models using real-time touch gesture trackers.",
      "Wall Analysis: Captures and evaluates camera textures to recommend localized decor suggestion models.",
      "Budget Planning Matrix: Ingests custom budget constraints to filter and deliver tailored design layouts.",
      "Multi-Scene Interface: Seamless state management across Splash, Home, Input, AR Placement, and Result tracks."
    ],
    extraTitle: "CORE DEPENDENCIES & ENVIRONMENT METRICS",
    extraContent: "• Engine Pipeline: Unity 6 (Version: 6000.3.7f1)\n• Target Platform: Android OS (API Level 24 / Android 7.0 or higher with native ARCore integration)\n• Unity Framework Packages: AR Foundation 6.4.1 // ARCore XR Plugin 6.4.1 // Input System 1.18.0\n• UI Render Stack: TextMesh Pro assembly libraries paired with native OS file gallery access connectors for image state persistence.\n• Primary APIs: Real-time plane detection/tracking matrices, mathematical raycasting loops, and multi-touch gesture parsing modules."
  },
  { 
    id: "02", 
    category: "software", 
    title: "BRIKCODE", 
    role: "CLIENT-SIDE OJ ENGINE", 
    context: "SANDBOXED PISTON EXECUTOR // AI ASSIST",
    description: "BRIKCODE is a lightweight, high-performance Online Judge (OJ) platform built to demonstrate secure client-side orchestration and remote code execution. It replicates the core functionality of platforms like LeetCode, featuring multi-language support, real-time compilation, and an integrated AI assistant.",
    features: [
      "Multi-Language Support: Execute code in Python 3.10, Java 15, and C (GCC).",
      "Secure Orchestration: User code is wrapped with a hidden 'Test Driver' on the client side before transmission.",
      "Sandboxed Execution: Utilizes the Piston API to run code in ephemeral, isolated Docker containers.",
      "Real-time Proctoring: Tracks browser tab focus and visibility to detect focus violations.",
      "AI-Powered Assistance: Integrated Gemini AI chat for hints, complexity analysis, and structural diagrams."
    ],
    extraTitle: "SYSTEM ARCHITECTURE (REMOTE EXECUTION PATTERN)",
    extraContent: "Instead of evaluating code in the browser or managing a heavy backend fleet, BRIKCODE acts as an orchestrator. The pipeline flow executes sequentially:\n\n1. INPUT: User writes code in the Monaco-like editor.\n2. INJECTION: The Orchestrator Service injects a language-specific Test Driver containing hidden unit tests, timing logic for TLE detection, memory usage tracking, and JSON verdict formatting.\n3. TRANSPORT: The bundled payload is transmitted via POST to the Piston execution engine.\n4. SANDBOX: Code executes within a strict, network-disabled Docker container.\n5. VERDICT: The frontend parses raw stdout/stderr streams to determine AC (Accepted), WA (Wrong Answer), or RE (Runtime Error)."
  },
  { 
    id: "03", 
    category: "software", 
    title: "RISKCAST", 
    role: "CLIMATE INTELLIGENCE", 
    context: "FASTAPI AGENTS // ANTHROPIC CLAUDE",
    description: "RiskCast is a climate intelligence and urban resilience platform built for real-time safety, route planning, and situational awareness. It combines weather, air quality, flood risk, traffic, power, and conflict data into an interactive dashboard backed by an AI assistant.",
    features: [
      "Real-time climate assessment for any global latitude and longitude coordinates.",
      "Aggregated tracking: Weather, heat index, wind chill, air quality, and flood risk parameters.",
      "Algorithmic risk score calculation outputting an overall hazard level.",
      "AI chat assistant powered by Anthropic Claude with live climate context and safety guidance.",
      "Interactive map-based viewport layout and dynamic evacuation routing.",
      "5-day forecast charts, environmental overlays, and a local monitoring loop writing 'latest_alert.txt'."
    ],
    extraTitle: "SYSTEM DEPLOYMENT ARCHITECTURE",
    extraContent: "• server.py — FastAPI backend routing climate data, AI chat context, and risk grid endpoints.\n• frontend/ — React + Vite UI utilizing a Leaflet map engine, Chart.js modules, and terminal chat interface.\n• agents/ — Modular risk evaluation agents scoring isolated streams for flood, traffic, power, and conflict vectors.\n• coordinator.py — Core aggregator engine compiling independent agent streams into a unified city status code.\n• monitor.py & ingestion/ — Continuous monitoring sub-process driving external alert writes and third-party API data connectors."
  }
];

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState('software');
  const [expandedId, setExpandedId] = useState(null);

  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto font-mono text-sm mt-8">
      
      {/* CATEGORY SWITCH TERMINAL BUTTONS */}
      <div className="flex space-x-6 mb-8 border-b border-white/5 pb-4">
        <button 
          onClick={() => { setActiveCategory('software'); setExpandedId(null); }}
          className={`transition-all duration-300 relative py-1 px-3 text-xs tracking-widest cursor-pointer ${
            activeCategory === 'software' ? 'text-emerald-400 font-bold' : 'text-gray-500 hover:text-white'
          }`}
        >
          [ SOFTWARE_NODES ]
          {activeCategory === 'software' && (
            <motion.div layoutId="activeTabGlow" className="absolute inset-0 border border-emerald-500/30 bg-emerald-500/5 rounded -z-10 shadow-[0_0_10px_rgba(16,185,129,0.1)]" />
          )}
        </button>

        <button 
          onClick={() => { setActiveCategory('hardware'); setExpandedId(null); }}
          className={`transition-all duration-300 relative py-1 px-3 text-xs tracking-widest cursor-pointer ${
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
      <div className="grid grid-cols-1 md:grid-cols-12 px-4 py-2 text-[10px] text-gray-600 uppercase tracking-widest border-b border-white/10 select-none">
        <div className="md:col-span-1">ID</div>
        <div className="md:col-span-4">System Core</div>
        <div className="md:col-span-3">Architecture</div>
        <div className="md:col-span-4">Deployment Context</div>
      </div>

      {/* DYNAMIC LIST INTERFACE */}
      <div className="min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => {
                const isExpanded = expandedId === project.id;
                
                return (
                  <div key={project.id} className="border-b border-white/5">
                    {/* Master Clickable Header Row */}
                    <motion.div
                      initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => toggleExpand(project.id)}
                      className={`group relative grid grid-cols-1 md:grid-cols-12 py-5 px-4 items-center cursor-pointer transition-colors duration-300 select-none ${
                        isExpanded ? 'bg-emerald-500/[0.03]' : 'hover:bg-emerald-500/[0.01]'
                      }`}
                    >
                      {/* Visual Accent Hover/Active Line */}
                      <div className={`absolute inset-y-0 left-0 w-[2px] bg-emerald-500 transition-transform duration-300 origin-center ${
                        isExpanded ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                      }`} />

                      <div className="md:col-span-1 text-gray-600 text-xs">{project.id}</div>
                      <div className={`md:col-span-4 font-sans text-lg md:text-xl font-bold tracking-tight transition-all duration-300 ${
                        isExpanded ? 'text-emerald-400 pl-2' : 'text-white group-hover:text-emerald-400 group-hover:translate-x-2'
                      }`}>
                        {project.title}
                      </div>
                      <div className="md:col-span-3 text-xs tracking-widest text-emerald-400/60 mt-1 md:mt-0">
                        [{project.role}]
                      </div>
                      <div className="md:col-span-3 text-gray-400 text-xs hidden md:block">
                        {project.context}
                      </div>
                      <div className="md:col-span-1 text-right text-gray-500 text-xs hidden md:block font-sans">
                        {isExpanded ? '[ - ]' : '[ + ]'}
                      </div>
                    </motion.div>

                    {/* Expandable Drawer Panel */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                          animate={{ height: 'auto', opacity: 1, filter: 'blur(0px)' }}
                          exit={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden bg-[#07070a]/50 border-x border-white/[0.02]"
                        >
                          <div className="p-6 md:p-8 space-y-6 text-xs text-gray-400 border-t border-white/[0.03]">
                            
                            {/* Project Overview */}
                            <div className="space-y-1.5">
                              <div className="text-[10px] text-gray-600 uppercase tracking-widest">// OVERVIEW</div>
                              <p className="text-gray-300 leading-relaxed font-sans text-sm font-light max-w-4xl">
                                {project.description}
                              </p>
                            </div>

                            {/* Technical Features Grid */}
                            <div className="space-y-2">
                              <div className="text-[10px] text-gray-600 uppercase tracking-widest">// SYSTEM_CAPABILITIES</div>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pl-4 list-disc marker:text-emerald-500">
                                {project.features.map((feature, i) => (
                                  <li key={i} className="leading-relaxed">{feature}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Structural/Architecture Flow */}
                            <div className="space-y-1.5 pt-2 border-t border-white/5">
                              <div className="text-[10px] text-emerald-400/70 uppercase tracking-widest">// {project.extraTitle}</div>
                              <p className="whitespace-pre-line leading-relaxed text-gray-400 font-light max-w-4xl pt-1">
                                {project.extraContent}
                              </p>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              /* Display state when a node category is completely unindexed/empty */
              <div className="text-center py-16 text-xs text-gray-600 uppercase tracking-widest border border-dashed border-white/5 rounded mt-4">
                [ No active hardware indices deployed in current matrix ]
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}

