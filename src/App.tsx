/*import CustomCursor from './components/CustomCursor';*/
import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <div className="relative">
          <GridBackground />
          <Hero />
        </div>

        <div className="relative bg-[#030712]">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;