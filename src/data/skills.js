// ═══════════════════════════════════════════════════════════════════
// src/data/skills.js
//
// Edit this file to update your skills display.
// Skills are grouped into three categories:
//   - frontend: things you build UIs with
//   - backend: server-side / databases / other languages
//   - learning: things you're currently picking up
//
// 'level' options: "Experienced" | "Comfortable" | "Learning"
// 'icon' values are react-icons component names —
//   see https://react-icons.github.io/react-icons/ for full list.
// ═══════════════════════════════════════════════════════════════════

export const skills = {
  frontend: [
    { name: "HTML5",        icon: "FaHtml5",        level: "Experienced"  },
    { name: "CSS3",         icon: "FaCss3Alt",       level: "Experienced"  },
    { name: "JavaScript",   icon: "SiJavascript",    level: "Experienced"  },
    { name: "React",        icon: "FaReact",         level: "Experienced"  },
    { name: "Tailwind CSS", icon: "SiTailwindcss",   level: "Experienced"  },
    { name: "Figma",        icon: "FaFigma",         level: "Comfortable"  },
    { name: "Responsive Design", icon: "MdDevices",  level: "Experienced"  },
  ],
  backend: [
    { name: "PHP",          icon: "SiPhp",           level: "Comfortable"  },
    { name: "MySQL",        icon: "SiMysql",         level: "Comfortable"  },
    { name: "Java",         icon: "FaJava",          level: "Comfortable"  },
    { name: "Python",       icon: "FaPython",        level: "Comfortable"  },
    { name: "Git",          icon: "FaGit",           level: "Comfortable"  },
  ],
  learning: [
    { name: "Next.js",      icon: "SiNextdotjs",     level: "Learning"     },
    { name: "Django",       icon: "SiDjango",        level: "Learning"     },
    { name: "TypeScript",   icon: "SiTypescript",    level: "Learning"     },
    { name: "AI / ML",      icon: "SiBrain",         level: "Learning"     },
  ],
};

// Label colors for each proficiency level.
// You can adjust these to match your accent palette.
export const levelColors = {
  Experienced: { bg: "bg-accent/15", text: "text-accent-700 dark:text-accent", border: "border-accent/30" },
  Comfortable: { bg: "bg-blue-500/10 dark:bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
  Learning:    { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
};
