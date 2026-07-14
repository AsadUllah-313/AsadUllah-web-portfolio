// ═══════════════════════════════════════════════════════════════════
// src/data/certificates.js
//
// Edit this file to add/update your certificates.
// After editing, the Certifications section updates automatically.
//
// HOW TO ADD A CERTIFICATE:
// 1. Copy one of the entries below.
// 2. Fill in the title, issuer, date, and description.
// 3. Add your certificate image to: public/certificates/<filename>.jpg
// 4. Add your certificate PDF to:   public/certificates/<filename>.pdf
// 5. Set imageFile and pdfFile to match those filenames.
// ═══════════════════════════════════════════════════════════════════

export const certificates = [
  {
    id: "cert-1",
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "June 2026",
    description: "Learned JavaScript fundamentals, ES6+, DOM manipulation, asynchronous programming, and problem-solving for modern web development.",
    // Place your files in: public/certificates/
    imageFile: "cr1.png",   // image shown in the card preview
    pdfFile:   "js_certificate.pdf",   // downloaded when 'Download' is clicked
  },
  {
    id: "cert-2",
    title: "Version Control",
    issuer: "Meta",
    date: "june 2026",
    description: "Learned Git and GitHub for version control, collaborative development, branching, merging, and efficient code management.",
    imageFile: "cr2.png",
    pdfFile:   "versionControl_certificate.pdf",
  },
  // {
  //   id: "cert-3",
  //   title: "YOUR CERTIFICATE TITLE HERE",
  //   issuer: "Platform Name",
  //   date: "Month Year",
  //   description: "Brief description of what this certificate covers.",
  //   imageFile: "cert-3.jpg",
  //   pdfFile:   "cert-3.pdf",
  // },
];
