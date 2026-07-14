# AsadUllah — Professional Portfolio 2026

Welcome to the source code of my high-end, recruiter-magnet personal portfolio. Rebuilt in 2026 with a modular structure, clean design systems, smooth scroll animations, and a developer-centric design aesthetic inspired by Linear, Raycast, and Vercel.

## 🛠️ Tech Stack & Features

- **Framework:** React JS (Vite template for ultra-fast load and HMR)
- **Styling:** Tailwind CSS (Custom design token architecture in CSS variables)
- **Animations:** Framer Motion (Scroll reveals, staggered entries, responsive interaction states)
- **Icons:** React Icons + Lucide React
- **Typography:** Space Grotesk (Headings) + Inter (Body text)
- **Aesthetic:** "Midnight Editorial" Theme direction (near-black `#0A0A0B`, off-white text `#F5F5F0`, and Electric Lime `#C6F135` accents)
- **Interactivity:**
  - Theme toggler with animated icons (instant transitions, zero flash)
  - Magnetic CTA buttons
  - Responsive layout (mobile-first design tested across breakpoints)
  - Interactive certificate previews with modal view and direct download

---

## 📁 File Structure

The project has been refactored for a clean separation of concerns:

```
portfolio/
├── public/
│   ├── resume.pdf             # Your resume PDF file
│   └── certificates/          # Place certificate files (.jpg / .pdf) here
├── src/
│   ├── assets/                # Visual assets (images, logos)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # Sticky navbar with mobile navigation
│   │   │   └── Footer.jsx     # Social links & copyright
│   │   ├── sections/
│   │   │   ├── Hero.jsx       # Scrambled name reveal, typewriter roles
│   │   │   ├── About.jsx      # Narrative & stat highlights
│   │   │   ├── Skills.jsx     # Grouped skill badges with brand SVG logos
│   │   │   ├── Experience.jsx # Interactive vertical timeline
│   │   │   ├── Projects.jsx   # Asymmetric grid showing recent work
│   │   │   ├── Certifications.jsx # Horizontal swiper, lightboxes
│   │   │   └── Contact.jsx    # Availability banner & direct CTAs
│   │   └── ui/                # Small reusable components
│   │       ├── Button.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── CertificateCard.jsx
│   │       ├── Modal.jsx
│   │       └── ThemeToggle.jsx
│   ├── data/                  # Simple arrays/objects containing all content
│   │   ├── projects.js        # Add/edit projects
│   │   ├── skills.js          # Add/edit technical skills
│   │   ├── certificates.js    # Add/edit credentials
│   │   └── experience.js      # Add/edit job positions
│   ├── hooks/                 # Reusable React hooks
│   │   ├── useTheme.js        # Dark/light mode manager
│   │   ├── useScrollProgress.js # Scroll indicator driver
│   │   └── useMagneticButton.js # Cursor alignment effect
│   ├── styles/
│   │   └── index.css          # Tailwind configurations + custom CSS variables
│   ├── App.jsx                # Assembles all section components
│   └── main.jsx               # Entry point
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 2. Run Development Server
Start the local server with hot module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
Bundle and optimize all code for hosting platforms (Vercel, Netlify, etc.):
```bash
npm run build
```

---

## ✏️ How to Customize Your Content

All data shown on the portfolio is separated from the React codebase, living inside the `src/data/` folder. You can update your portfolio content simply by editing these files:

### 💼 Updating Projects (`src/data/projects.js`)
Add new objects to the `projects` array:
```javascript
{
  id: "project-id",
  name: "Project Name",
  description: "A short, impact-focused description.",
  image: null, // Add a path under public/ or assets if you want an image
  stack: ["React", "Tailwind CSS"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://..."
}
```

### 🧠 Updating Skills (`src/data/skills.js`)
Categorize skills into `frontend`, `backend`, or `learning`. Update badge levels (`"Experienced"`, `"Comfortable"`, `"Learning"`):
```javascript
{ name: "TypeScript", icon: "SiTypescript", level: "Learning" }
```
*Note: Make sure the icon name is added to the `iconMap` in `src/components/sections/Skills.jsx`.*

### 📜 Updating Certifications (`src/data/certificates.js`)
1. Place certificate images (`.jpg`/`.png`) and document PDFs into the `public/certificates/` directory.
2. Add the corresponding detail object:
```javascript
{
  id: "cert-4",
  title: "New Certification Title",
  issuer: "Coursera / Udemy",
  date: "Month Year",
  imageFile: "new-cert.jpg",
  pdfFile: "new-cert.pdf"
}
```

### 👔 Updating Work Experience (`src/data/experience.js`)
Modify timeline entries and key impact points:
```javascript
{
  role: "Role Title",
  company: "Company Name",
  period: "Date Range",
  bullets: ["Key accomplishment 1", "Key accomplishment 2"]
}
```

---

## 📝 Personalization Checklist

- [ ] Place your resume PDF in `public/resume.pdf`
- [ ] Drop certificate images and PDFs under `public/certificates/`
- [ ] Update your LinkedIn URL in:
  - `src/components/sections/Hero.jsx`
  - `src/components/sections/Contact.jsx`
  - `src/components/layout/Footer.jsx`
- [ ] Update your email address in `src/components/sections/Contact.jsx` (if different)
