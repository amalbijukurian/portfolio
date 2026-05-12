import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scene from "./components/Scene";

function App() {
  return(
    <>
    <div className="scroll-smooth">
    <Navbar />

    <section id="hero">
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="contact">
      <Contact />
    </section>
    
    <Footer />
    </div>
    </>
  )
}
export default App;