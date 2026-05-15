import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import SmoothScroll from "./components/SmoothScroll";
import ShaderBackground from "./components/ShaderBackground";
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

    </div>
    </>
  )
}
export default App;