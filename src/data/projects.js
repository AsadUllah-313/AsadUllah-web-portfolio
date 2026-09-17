// ═══════════════════════════════════════════════════════════════════
// src/data/projects.js
//
// Edit this file to update your projects list.
// Each entry maps directly to a ProjectCard in the Projects section.
// No need to touch any component code — just edit here!
// ═══════════════════════════════════════════════════════════════════

export const projects = [
  {
    id: "ai-commerce",
    name: "AI Commerce & Customer Support Agent",
    description: "An AI-powered shopping and support experience designed for Shopify integration. Voice-to-voice conversations and image-based discovery guide product and size suggestions, in-chat navigation, Add to Cart, and View Details. Custom orders capture and confirm requirements, generate previews for approval, and handle customization pricing and catalog workflows, with automated restock emails.",
    image: "/projects/ecom-bot.png",
    stack: ["Next.js","Supabase"],
    githubUrl: "https://github.com/AsadUllah-313/Assistant-chat-bot",
    liveUrl: "https://assistant-chat-bot-ten.vercel.app/",
    featured: true,
  },
  {
    id: "farm-management",
    name: "Farm Management System",
    description: "A database-driven full-stack business application developed during my LogXpert internship. Connects animal registration and worker management with role-based workflows for owners, administrators, veterinarians, managers, and investors. Operational dashboards track per-animal yield, costs, and status.",
    image: "/projects/farm.png",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/AsadUllah-313/fullstack-farm-project",
    liveUrl: "https://fullstack-farm-project.vercel.app/",
    featured: true,
  },
  {
    id: "ai-voice-assistant",
    name: "AI Voice Assistant",
    description: "Built in 2024, a voice-driven desktop assistant integrating weather, news, and search services, along with application launching, document conversion, and AI-assisted text generation.",
    image: "/projects/assistant-bot.png",
    stack: ["Python", "Speech Recognition", "REST APIs"],
    githubUrl: "https://github.com/AsadUllah-313/SAMI_Ai_chatbot",
    liveUrl: null,
    featured: true,
  },
  {
    id: "zora",
    name: "E-Commerce Web Application",
    description:
      "Built in 2025 with JavaScript, PHP, and MySQL. Product listings and a shopping cart support add, remove, and quantity updates without page reloads. A relational schema stores product and order data through a PHP backend, with semantic HTML and accessible UI patterns.",
    // Image path — put your screenshot in public/projects/ and reference it here
    // e.g., image: "/projects/zora.png"
    image: "/projects/ss1.png",
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
    image: "/projects/pizzashop.png",
    stack: ["React JS", "Tailwind CSS", "Framer Motion"],
    githubUrl: null,
    liveUrl: "https://the-pizzza-demo.vercel.app/",
    featured: false,
  },
  {
    id: "gym-website",
    name: "Gym Cinematic Website",
    description:
      "A cinematic gym website with scroll-driven storytelling, animated sections, and responsive layouts.",
    image: "/projects/gym.png",
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
    image: "/projects/ss2.png",
    stack: ["React JS", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: "https://ecommerce-admin-dashboard-livid.vercel.app/",
    featured: false,
  },
  {
    id: "hospital-landing",
    name: "Hospital Landing Page",
    description:
      "A responsive hospital landing page with service showcases, an appointment-booking interface, and a contact form.",
    image: "/projects/ss3.png",
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: null,
    liveUrl: "https://hospital-home-page-liart.vercel.app/",
    featured: false,
  },
  {
    id: "ecom-frontend",
    name: "E-Commerce Frontend",
    description:
      "A React ecommerce frontend with reusable UI components, responsive product grids, and state management.",
    image: "/projects/ss4.png",
    stack: ["React JS"],
    githubUrl: "https://github.com/AsadUllah-313/Mobile-responsive-ecom-frontend.git",
    liveUrl: null,
    featured: false,
  },
];
