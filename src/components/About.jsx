import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};




function About(){
    return(
        <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16 py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Animated Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.3em] text-white/50"
          >
            About Me
          </motion.p>

          <motion.h2
            custom={0.2}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Crafting intelligent
            <br />
            digital experiences.
          </motion.h2>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="w-24 h-1 bg-white/70 rounded-full"
          />
        </motion.div>

        {/* Right Side - Animated Text Card */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
        >
          <p className="text-lg md:text-xl leading-relaxed text-white/80">
            Hi, I'm <span className="text-white font-semibold">Amal Biju</span>,
            an AI & Data Science student passionate about building innovative
            software solutions.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            From machine learning applications to interactive web experiences,
            I enjoy combining creativity with technology to solve real-world
            problems.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Currently exploring AI, full-stack development, and immersive UI/UX
            design with Three.js, shaders, and modern web technologies.
          </p>
        </motion.div>
      </div>
    </section>
    )
}
export default About;