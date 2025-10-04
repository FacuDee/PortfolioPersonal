import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';

function App() {
  const sectionIds = ['hero', 'projects', 'about', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
