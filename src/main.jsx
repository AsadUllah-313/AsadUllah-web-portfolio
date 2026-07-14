// ═══════════════════════════════════════════════════════════════════
// src/main.jsx
//
// Application entry point.
// Renders <App /> into the #root element.
// Imports global styles from index.css.
// ═══════════════════════════════════════════════════════════════════

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
