import { MotionConfig } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import Preloader from "./components/ui/Preloader";
import ScrollProgress from "./components/ui/ScrollProgress";
import ExperienceLayer from "./components/ui/ExperienceLayer";
import JourneyRail from "./components/ui/JourneyRail";
import { useActiveSection } from "./hooks/useActiveSection";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Preloader />
          <ExperienceLayer />
          {/* Scroll progress bar — fixed 2px accent bar at top */}
          <ScrollProgress />

          {/* Sticky navbar */}
          <Navbar isDark={isDark} toggleTheme={toggleTheme} activeSection={activeSection} />
          <JourneyRail active={activeSection} />

          {/* Page content — each section scrolls into view */}
          <main id="main-content" tabIndex={-1} className="font-sans antialiased">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
    </MotionConfig>
  );
}
