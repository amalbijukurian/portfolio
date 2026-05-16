import {motion} from "framer-motion";

const projects = [
  {
    title: "AI Notes Summarizer",
    description:
      "Upload PDFs, images, or text and generate concise study notes, flashcards, and quizzes.",
    image: "/projects/notes-summarizer.png",
    tech: ["React", "Node.js", "Hugging Face"],
    link: "#",
  },
  {
    title: "Mental Health Tracker Chatbot",
    description:
      "Tracks moods, journals entries, and provides self-care suggestions with crisis detection.",
    image: "/projects/mental-health.png",
    tech: ["React", "Firebase", "NLP"],
    link: "#",
  },
  {
    title: "Air Quality Forecast App",
    description:
      "Provides hyperlocal AQI forecasting with satellite and meteorological data integration.",
    image: "/projects/aqi.png",
    tech: ["Flutter", "TensorFlow Lite", "Supabase"],
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 text-lg">
            Selected work and experiments.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
  key={project.title}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    delay: index * 0.2,
    ease: "easeOut",
  }}
  className={`grid md:grid-cols-2 gap-12 items-center ${
    index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
  }`}
>
              {/* Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-3xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-3">
                  Featured Project
                </p>

                <h3 className="text-3xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
                  >
                    View Project
                  </a>

                  <a
                    href={project.link}
                    className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects