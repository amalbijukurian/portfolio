import { motion } from 'framer-motion';

const PROJECTS = [
  { id: "01", title: "NYAYA AI", role: "RAG FRAMEWORK", context: "LEGAL ANALYTICS LAB" },
  { id: "02", title: "ALLOY OPTIMIZER", role: "CNN + GENETIC ALGO", context: "INVERSE ENGINEERING" },
  { id: "03", title: "SATELLITE ANALYSIS", role: "U-NET PIPELINE", context: "IMAGE SEGMENTATION" }
];

export default function ProjectList() {
  return (
    <div className="w-full max-w-5xl mx-auto font-mono text-sm border-t border-white/10 mt-12">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative grid grid-cols-1 md:grid-cols-12 py-6 px-4 border-b border-white/10 items-center cursor-pointer hover:bg-emerald-500/[0.02] transition-colors duration-300"
        >
          {/* Animated Hover Background Slider */}
          <div className="absolute inset-y-0 left-0 w-0 bg-emerald-500/10 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />

          {/* Project Details Columns */}
          <div className="md:col-span-1 text-gray-500 text-xs">{project.id}</div>
          <div className="md:col-span-4 font-sans text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 group-hover:translate-x-2 transition-all duration-300">
            {project.title}
          </div>
          <div className="md:col-span-3 text-xs tracking-widest text-emerald-400/70 mt-2 md:mt-0">
            [{project.role}]
          </div>
          <div className="md:col-span-3 text-gray-400 text-xs hidden md:block">
            {project.context}
          </div>
          <div className="md:col-span-1 text-right text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 hidden md:block">
            →
          </div>
        </motion.div>
      ))}
    </div>
  );
}