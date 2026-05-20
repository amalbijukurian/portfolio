import { motion } from "framer-motion";
export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-white/70">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
}