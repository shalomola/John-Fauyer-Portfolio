import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="text-white antialiased">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Work />
      <Contact />
    </main>
  );
}

export default App;