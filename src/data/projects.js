// ═══════════════════════════════════════════════════════════════════
// src/data/projects.js
//
// Edit this file to update your projects list.
// Each entry maps directly to a ProjectCard in the Projects section.
// No need to touch any component code — just edit here!
// ═══════════════════════════════════════════════════════════════════

export const projects = [
  {
    id: "zora",
    name: "Zora E-Commerce",
    description:
      "A full-stack e-commerce platform with product listings, shopping cart, and MySQL database integration. Features CRUD operations, contact functionality, and a clean responsive UI.",
    // Image path — put your screenshot in src/assets/ and reference it here
    // e.g., image: "/src/assets/zora.png"  OR import it at the top of Projects.jsx
    image: "/src/assets/ss1.png",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/AsadUllah-313/Zora.git",
    liveUrl: null, // Add live demo URL if available
    featured: false,
  },
  {
    id: "pizza-shop",
    name: "Pizza Shop",
    description:
      "A modern, animated single-page website for a pizza restaurant. Built with React and Framer Motion, featuring smooth animations, responsive design, and a clean ordering experience.",
    image: "/src/assets/pizzashop.png",
    stack: ["React JS", "Tailwind CSS", "Framer Motion"],
    githubUrl: null,
    liveUrl: "https://the-pizzza-demo.vercel.app/",
    featured: false,
  },
  {
    id: "gym-website",
    name: "Gym Cinematic Website",
    description:
      "A psychological, cinematic gym branding website focused on emotional storytelling and conversion. Features dramatic scroll animations and bold typography that drives action.",
    image: "/src/assets/gym.png",
    stack: ["React JS", "Tailwind CSS", "Framer Motion"],
    githubUrl: "",
    liveUrl: "https://gym-website-six-zeta.vercel.app/",
    featured: false,
  },
  {
    id: "ecommerce-dashboard",
    name: "Ecommerce Dashboard",
    description:
      "A modern admin dashboard for managing products, orders, and analytics. Features interactive charts, responsive layout, and a clean admin panel UI.",
    image: "/src/assets/ss2.png",
    stack: ["React JS", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: "https://ecommerce-admin-dashboard-livid.vercel.app/",
    featured: false,
  },
  {
    id: "hospital-landing",
    name: "Hospital Landing Page",
    description:
      "A professional, SEO-friendly landing page for a hospital/clinic. Includes appointment booking, service showcases, and a contact form — fast-loading and fully responsive.",
    image: "/src/assets/ss3.png",
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://hospital-home-page-liart.vercel.app/",
    featured: false,
  },
  {
    id: "ecom-frontend",
    name: "E-Commerce Frontend",
    description:
      "A scalable, component-driven e-commerce frontend built with React. Features reusable UI components, responsive product grids, and clean state management.",
    image: "/src/assets/ss4.png",
    stack: ["React JS"],
    githubUrl: "https://github.com/AsadUllah-313/Mobile-responsive-ecom-frontend.git",
    liveUrl: null,
    featured: false,
  },
];
