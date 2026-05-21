import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="h-screen w-full relative z-30 grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-24">
      <div className="md:col-span-4" /> 
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-xs text-gray-400 leading-relaxed bg-[#0a0a0f]/60 backdrop-blur-sm p-6 md:p-12 border border-white/5 rounded"
      >
        <div className="space-y-3">
          <h3 className="text-white font-bold tracking-widest text-xs text-emerald-400">[ 01 // FRAMEWORKS ]</h3>
          <p>Building highly performant frontend applications coupled with complex pipeline distributions. Well-versed in containerization, system deployments, and managing high-density streaming grids.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-white font-bold tracking-widest text-xs text-emerald-400">[ 02 // DATA SCALING ]</h3>
          <p>Designing optimized retrieval models and convolutional pipelines. Specializing in bridging heavy calculations with clean, user-facing creative engineering interfaces.</p>
        </div>
      </motion.div>
    </section>
  );
}