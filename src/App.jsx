import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import ScrollProgress from "./components/ui/ScrollProgress";
import Preloader from "./components/ui/Preloader";
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
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          {/* Scroll progress bar — fixed 2px accent bar at top */}
          <ScrollProgress />

          {/* Sticky navbar */}
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          {/* Page content — each section scrolls into view */}
          <main className="font-sans antialiased animate-fade-in">
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
        </>
      )}
    </>
  );
}
