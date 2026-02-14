import { useEffect, useRef, useState, React } from "react";
import { Navbar } from "../components/Navbar";
import { useTheme } from "../hooks/useTheme";
import { Typewriter } from "react-simple-typewriter";
import '@google/model-viewer';




import serviceImg1 from "../assets/OIP-removebg-preview (1).png";
import serviceImg2 from "../assets/react.png";
import serviceImg3 from "../assets/OIP__1_-removebg-preview.png";
import serviceImg4 from "../assets/OIP__2_-removebg-preview.png";
import serviceImg5 from "../assets/OIP (3).jpeg";
import serviceImg6 from "../assets/OIP__5_-removebg-preview.png";

import skillImg1 from "../assets/html-removebg-preview.png";
import skillImg2 from "../assets/css-removebg-preview.png";
import skillImg3 from "../assets/png-transparent-tailwind-css-hd-logo-removebg-preview.png";
import skillImg4 from "../assets/js-removebg-preview.png";
import skillImg5 from "../assets/Responsive_Design-removebg-preview.png";
import skillImg6 from "../assets/UI_Implementation-removebg-preview.png";
import skillImg7 from "../assets/speed.png";
import skillImg8 from "../assets/OIP__5_-removebg-preview1.png";

import reasonImg1 from "../assets/clean-removebg-preview.png";
import reasonImg2 from "../assets/clean-removebg-preview.png";
import reasonImg3 from "../assets/seo-removebg-preview.png";
import reasonImg4 from "../assets/fast-removebg-preview.png";
import reasonImg5 from "../assets/long-removebg-preview.png";

import projectimg1 from "../assets/ss1.png";
import projectimg2 from "../assets/ss2.png";
import projectimg3 from "../assets/ss3.png";
import projectimg4 from "../assets/ss4.png";
import projectimg5 from "../assets/pizzashop.png";

// Custom hook for scroll-triggered animations
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// Magnetic button hook
const useMagneticButton = () => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.15}px, ${
      y * 0.15
    }px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;
    button.style.transform = "translate(0, 0) scale(1)";
  };

  return { buttonRef, handleMouseMove, handleMouseLeave };
};

// Typewriter effect
const useTypewriter = (text, speed = 50, delay = 500) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    let charIndex = 0;

    const startTyping = () => {
      timeout = setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayText(text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(timeout);
          setIsComplete(true);
        }
      }, speed);
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(timeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// Hero Section with enhanced animations
export const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { displayText, isComplete } = useTypewriter(
    "Building modern, responsive & scalable front-end experiences with ",
    30,
    800
  );
  const primaryBtn = useMagneticButton();
  const secondaryBtn = useMagneticButton();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
     <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/20 transition-colors duration-500" />

      {/* Animated dot grid pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-200/40 dark:from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-blue-200/30 dark:from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p
          className={`text-sm md:text-base tracking-widest uppercase text-slate-500 dark:text-slate-400 font-medium mb-6 transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Front-End Developer | React JS & Tailwind CSS Specialist
        </p>

        <h1
          className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-8 transition-all duration-700 delay-100 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {displayText}
          <span
            className={`inline-block w-0.5 h-10 md:h-12 lg:h-14 bg-cyan-500 ml-1 ${
              isComplete ? "animate-pulse" : "animate-[blink_0.7s_infinite]"
            }`}
          />
          {isComplete && (
            <span className="text-cyan-600 dark:text-cyan-400">
              <Typewriter
                words={[
                  "React & Tailwind CSS",
                  "Software development methods",
                  "Modern frontend tools",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1100}
              />
            </span>
          )}
        </h1>

        <p
          className={`text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Transforming designs into pixel-perfect, performant interfaces that
          users love.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            ref={primaryBtn.buttonRef}
            href="https://www.fiverr.com/s/2KBV028"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={primaryBtn.handleMouseMove}
            onMouseLeave={primaryBtn.handleMouseLeave}
            className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-cyan-500/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Hire Me on Fiverr
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-[gradient_2s_linear_infinite]" />
            </div>
          </a>

          <a
            ref={secondaryBtn.buttonRef}
            href="#portfolio"
            onMouseMove={secondaryBtn.handleMouseMove}
            onMouseLeave={secondaryBtn.handleMouseLeave}
            className="group relative px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:border-cyan-400 dark:hover:border-cyan-500"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 flex justify-center pt-1">
              <div className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>




  );
};

// About Section
const About = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 dark:from-slate-950/50 to-transparent h-32" />

      <div className="max-w-4xl mx-auto relative">
        <div
          className={`transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <p className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Crafting Digital Experiences That Matter
          </h2>
        </div>

        <div
          className={`space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-all duration-700 delay-150 ease-out ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <p>
            I'm{"  "}
            <strong className="text-slate-900 dark:text-white">
              AsadUllah
            </strong>
            , a Front-End Developer specializing in React JS and Tailwind CSS,
            focused on building modern, responsive, and scalable web interfaces.
            I believe great user experience comes from clean design, clear
            structure, and code that performs smoothly on every device.
          </p>
          <p>
            My focus is on helping startups and businesses grow by creating web
            experiences that convert visitors into customers. From landing pages
            that capture attention to complex dashboards that simplify
            workflows, I bring ideas to life with precision and care.
          </p>
          <p>
            When you work with me, you're not just getting a developer — you're
            getting a partner who understands your business goals and translates
            them into code that works beautifully across every device.
          </p>
        </div>
      </div>
    </section>


    
  );
};

// Skills Section with enhanced animations
const skills = [
  { name: "HTML5", image: skillImg1, level: 95 },
  { name: "CSS3", image: skillImg2, level: 95 },
  { name: "Tailwind CSS", image: skillImg3, level: 92 },
  { name: "JavaScript (ES6)", image: skillImg4, level: 90 },
  { name: "React JS", image: serviceImg2, level: 88 },
  { name: "Responsive Design", image: skillImg5, level: 95 },
  { name: "UI/UX Implementation", image: skillImg6, level: 88 },
  { name: "Figma to Front-End", image: skillImg8, level: 90 },
  { name: "Performance Optimization", image: skillImg7, level: 85 },
];

const SkillCard = ({ skill, index, isInView }) => {
  const [hovered, setHovered] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && count < skill.level) {
      const timer = setTimeout(() => {
        setCount((prev) => Math.min(prev + 2, skill.level));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isInView, count, skill.level]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-100/50 dark:hover:shadow-cyan-900/20 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isInView ? `${index * 50}ms` : "0ms",
        boxShadow: hovered ? "0 0 30px rgba(6, 182, 212, 0.15)" : undefined,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span
            className={`text-2xl transition-transform duration-300 ${
              hovered ? "scale-125 rotate-12" : ""
            }`}
          >
            <img
              src={skill.image}
              className={`mx-auto mb-4 object-contain ${
                [6, 7, 8].includes(index) ? "w-20 h-20" : "w-14 h-14"
              }`}
            />
          </span>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {skill.name}
          </h3>
        </div>
        <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
          {count}%
        </span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${skill.level}%` : "0%",
            transitionDelay: isInView ? `${index * 50 + 300}ms` : "0ms",
          }}
        />
      </div>
    </div>
  );
};

// Skills Section
const Skills = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-500"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-cyan-600 dark:text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4 transition-all duration-500 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            Technical Expertise
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-all duration-500 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section with 3D tilt effect
const services = [
  {
    title: "Front-End Website Development",
    description:
      "Need a website that loads fast and looks great? I build responsive, SEO-friendly websites using modern technologies that help your business stand out.",
    image: serviceImg1,
    details: "React, Next.js, Vue, responsive design, performance optimization",
  },
  {
    title: "React Components & UI Development",
    description:
      "Building reusable, maintainable React components that scale with your application. Clean code architecture that your future developers will thank you for.",
    image: serviceImg2,
    details: "Component libraries, design systems, state management",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive action. Optimized for performance and built to make strong first impressions.",
    image: serviceImg3,
    details: "A/B testing ready, CRO optimized, fast loading",
  },
  {
    title: "Business Websites",
    description:
      "Professional websites that establish credibility and trust. From company sites to portfolios, I create digital presences that reflect your brand.",
    image: serviceImg4,
    details: "Corporate sites, portfolios, multi-page applications",
  },
  {
    title: "Dashboards & Web Apps",
    description:
      "Complex interfaces made simple. I build intuitive dashboards and web applications that handle data elegantly and make workflows effortless.",
    image: serviceImg5,
    details: "Data visualization, real-time updates, admin panels",
  },
  {
    title: "Figma to React Conversion",
    description:
      "Pixel-perfect translations from design to code. Your Figma designs become responsive, interactive React components with exact fidelity.",
    image: serviceImg6,
    details: "Design handoff, pixel-perfect, responsive adaptation",
  },
];

const ServiceCard = ({ service, index, isInView }) => {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${
      -y * 10
    }deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setExpanded(!expanded)}
      className={`group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 cursor-pointer transition-all duration-300 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isInView ? `${index * 75}ms` : "0ms",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className={`mb-6 block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 object-contain ${
            [2, 5].includes(index) ? "w-20.1 h-14" : "w-16 h-16"
          }`}
        />

        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {service.description}
        </p>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-24 mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
            {service.details}
          </p>
        </div>

        <div className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl" />
      </div>
    </div>
  );
};

// Services Section
const Services = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="services"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-cyan-600 dark:text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4 transition-all duration-500 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            What I Offer
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-all duration-500 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section with enhanced interactivity
const projects = [
  {
    name: "Zora",
    image: projectimg1,
    purpose: "An E-commerce website with add to cart and contact me features.",
    stack: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
    highlight: "CRUD operations with database integration",
    link: "https://github.com/AsadUllah-313/Zora.git",
  },
  {
    name: "Pizza-Shop",
    image: projectimg5,
    purpose:
      "A modern animated one paged website for a Pizza Shop.",
    stack: ["React JS", "Tailwind CSS","Framer motion"],
    highlight: "Responsive animated single paged website with clean UI",
    link: "https://the-pizzza-demo.vercel.app/",
  },
  {
    name: "Ecommerce Dashboard",
    image: projectimg2,
    purpose:
      "A modern dashboard interface for managing products, orders, and with charts.",
    stack: ["React JS", "Tailwind CSS"],
    highlight: "Responsive admin panel with clean UI",
    link: "https://ecommerce-admin-dashboard-livid.vercel.app/",
  },
  {
    name: "Hospital Landing Page",
    image: projectimg3,
    purpose:
      "A professional landing page designed for hospitals and clinics to showcase services and capture patient inquiries.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlight:
      "Fast-loading, SEO-friendly, fully reponsive design with book appointment and send message functionality",
    link: "https://hospital-home-page-liart.vercel.app/",
  },
  {
    name: "Frontends",
    image: projectimg4,
    purpose:
      "A sleek and scalable e-commerce frontend built with React and fully responsive design.",
    stack: ["React JS"],
    highlight:
      "Reusable components, responsive layouts, and fully responsive design",
    link: "https://github.com/AsadUllah-313/Mobile-responsive-ecom-frontend.git",
  },
];

// =========================================================

const ProjectCard = ({ project, index, isInView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 transition-all duration-500 hover:shadow-2xl ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
    >
      {/* Cover Image */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image} //  project image from object
          alt={project.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Overlay with project name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transition-transform duration-500 ${
              hovered ? "scale-95 shadow-lg" : "scale-100"
            }`}
          >
            <span className="text-white text-3xl md:text-4xl font-display font-bold drop-shadow-lg">
              {project.name.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* Hover overlay with button */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <a
              href={project.link} //  GitHub link from object
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-cyan-50 transition-colors text-center"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
          {project.name}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {project.purpose}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, techIndex) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full transition-all duration-300"
              style={{
                transitionDelay: isInView
                  ? `${index * 100 + techIndex * 50}ms`
                  : "0ms",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
          {project.highlight}
        </p>
      </div>
    </div>
  );
};

// ======================================================
const Portfolio = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-500"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-cyan-600 dark:text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4 transition-all duration-500 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            Recent Work
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-all duration-500 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
// Why Choose Me Section
const reasons = [
  {
    image: reasonImg1,
    title: "Clean, Maintainable Code",
    description:
      "Code that's easy to read, extend, and maintain for future developers.",
  },
  {
    image: skillImg5,
    title: "Fully Responsive Design",
    description:
      "Pixel-perfect on every device, from mobile phones to large desktops.",
  },
  {
    image: reasonImg3,
    title: "SEO-Friendly Development",
    description: "Built with search engines in mind to help you rank higher.",
  },
  {
    image: reasonImg4,
    title: "Fast Communication",
    description: "Quick responses and regular updates throughout the project.",
  },
  {
    image: reasonImg5,
    title: "Long-Term Support Mindset",
    description:
      "I build relationships, not just websites. Support continues after launch.",
  },
];

const WhyChooseMe = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-500"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-cyan-600 dark:text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4 transition-all duration-500 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            The Difference
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-all duration-500 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why Choose Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`text-center p-6 group transition-all duration-500 ease-out ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
            >
              {/* <span className="text-4xl mb-4 block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"> */}
              <img
                src={reason.image}
                alt={reason.title}
                className="aspect-square w-16 h-16 mb-6 block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 object-contain"
              />
              {/* </span> */}
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  const { ref, isInView } = useInView(0.2);
  const primaryBtn = useMagneticButton();
  const secondaryBtn = useMagneticButton();

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-900 dark:bg-slate-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-3xl" />

      <div
        className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ease-out ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Looking for a reliable front-end developer?
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Let's build something great together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            ref={primaryBtn.buttonRef}
            href="https://www.fiverr.com/s/YRq3ejq"
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={primaryBtn.handleMouseMove}
            onMouseLeave={primaryBtn.handleMouseLeave}
            className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-cyan-500/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Hire on Fiverr
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            ref={secondaryBtn.buttonRef}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=engrasadqurashi@gmail.com&su=Project%20Inquiry&body=Hello%20Asad,%20I%20would%20like%20to%20discuss..."
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={secondaryBtn.handleMouseMove}
            onMouseLeave={secondaryBtn.handleMouseLeave}
            className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-full hover:border-slate-500 hover:bg-slate-800 transition-all duration-300"
          >
            Professional inquiries
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <footer
      className="py-12 px-6 bg-slate-950 dark:bg-black transition-colors duration-500"
      ref={ref}
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-500 ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-white mb-2">
              <span className="text-cyan-400">&lt;</span>
              Asad.dev
              <span className="text-cyan-400"> /&gt;</span>
            </p>
            <p className="text-slate-400">
              Front-End Developer • React & Tailwind Specialist
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors relative group"
            >
              Fiverr
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors relative group"
            >
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AsadUllah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
function Index() {
  const { isDark, toggleTheme } = useTheme();
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <main
      className={`font-sans antialiased transition-opacity duration-500 ${
        pageLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <WhyChooseMe />
      <CTA />
      <Footer />
    </main>
  );
}

export default Index;
