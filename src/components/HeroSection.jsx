import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="h-screen w-full relative z-30 grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-24 pt-16">
      {/* Left Side: Name Anchor */}
      <div className="md:col-span-6 space-y-4 z-10 pointer-events-none">
        <div className="space-y-0">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-emerald-400 text-xs tracking-[0.4em] font-bold mb-2 block"
          >
            // SYSTEM OPERATOR
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-sans font-black text-6xl sm:text-8xl md:text-[100px] tracking-tight leading-[0.85] text-white uppercase"
          >
            AMAL<br />BIJU<span className="text-emerald-400">.</span>
          </motion.h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="font-mono text-[9px] text-gray-400 tracking-[0.3em] uppercase pt-4"
        >
          [ SCROLL DISPLACEMENT TO COMMENCE SYSTEM TRANSITION ]
        </motion.p>
      </div>

      {/* Right Side: Professional Bio Box */}
      <div className="md:col-span-6 md:pl-16 font-mono text-xs text-gray-400 space-y-6 md:mt-0 mt-12 bg-black/50 p-6 md:p-8 rounded border border-white/5 backdrop-blur-sm md:backdrop-blur-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="space-y-4"
        >
          <div className="text-emerald-400 text-[10px] tracking-[0.2em] font-bold uppercase">
            // PROFILE_MANIFEST
          </div>
          
          <p className="leading-relaxed text-gray-300 font-light text-sm font-sans">
            Hi, I'm <span className="text-white font-semibold">Amal Biju</span>, an AI & Data Science student passionate about building intelligent full-stack systems and cloud-native solutions.
          </p>
          
          <p className="leading-relaxed text-gray-400 font-light">
            From engineering scalable machine learning pipelines to designing highly performant distributed infrastructures, I specialize in combining data intelligence with modern web architectures.
          </p>

          <p className="leading-relaxed text-gray-400 font-light pt-1">
            Currently focusing on optimizing <span className="text-white">Retrieval-Augmented Generation (RAG) models</span>, orchestrating containerized backend systems, and deploying <span className="text-emerald-400 font-medium">distributed microservices architectures</span> on cloud infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-[10px] text-gray-500 leading-normal pt-4 border-t border-white/5 grid grid-cols-2 gap-4"
        >
          <div>
            <span className="text-gray-400">[AI_ENGINEERING]</span><br />
            LLM PIPELINES & RAG<br />
            NEURAL ARCHITECTURES
          </div>
          <div>
            <span className="text-gray-400">[CLOUD_INFRA]</span><br />
            CONTAINERIZED NETWORKS<br />
            DISTRIBUTED COMPUTING
          </div>
        </motion.div>
      </div>
    </section>
  );
}