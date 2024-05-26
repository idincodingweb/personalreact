import './App.css';
import Navigasibar from "./components/Navigasibar"
import Hero from "./components/Hero";
import About from './components/About';
import Skill from './components/Skill'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div className="body">
      <Navigasibar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Education />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
