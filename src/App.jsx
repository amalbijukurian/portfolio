import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import SmoothScroll from "./components/SmoothScroll";
import ShaderBackground from "./components/ShaderBackground";
import Contact from "./components/Contact";
function App() {
  return(
      <>
    <div>
    <SmoothScroll />
      <ShaderBackground />

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

    </div>
    </>
  )
}
export default App;