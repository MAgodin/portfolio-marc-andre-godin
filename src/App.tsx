import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

type Page = "home" | "experience" | "skills" | "projects" | "contact";

const navItems: { id: Page; label: string; short: string }[] = [
  { id: "home",       label: "Accueil",     short: "Home" },
  { id: "experience", label: "Expérience",  short: "Exp." },
  { id: "skills",     label: "Compétences", short: "Skills" },
  { id: "projects",   label: "Projets",     short: "Projets" },
  { id: "contact",    label: "Contact",     short: "Contact" },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [scrolled, setScrolled] = useState(false);
  const [narrow, setNarrow] = useState(window.innerWidth < 500);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onResize = () => setNarrow(window.innerWidth < 500);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":       return <Home onNavigate={navigate} />;
      case "experience": return <Experience />;
      case "skills":     return <Skills />;
      case "projects":   return <Projects />;
      case "contact":    return <Contact />;
      default:           return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* ── Nav ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: "var(--nav-h)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        background: scrolled ? "rgba(10,10,15,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1rem", height: "100%", display: "flex", alignItems: "center", gap: "0.5rem" }}>

          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", flexShrink: 0, padding: 0 }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--orange)", opacity: 0.6 }}>./</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              <span style={{ color: "white" }}>Marc-André </span>
              <span style={{ color: "var(--orange)" }}>Godin</span>
            </span>
          </button>

          <div style={{ flex: 1 }} />

          {/* Nav links */}
          <div className="nav-links">
            {navItems.map(({ id, label, short }) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.03em",
                  background: "none", border: "none", cursor: "pointer",
                  padding: "0.35rem 0.55rem",
                  color: currentPage === id ? "var(--orange)" : "var(--text-muted)",
                  position: "relative",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { if (currentPage !== id) (e.target as HTMLElement).style.color = "white"; }}
                onMouseLeave={(e) => { if (currentPage !== id) (e.target as HTMLElement).style.color = "var(--text-muted)"; }}
              >
                {currentPage === id && (
                  <motion.span
                    layoutId="nav-pill"
                    style={{ position: "absolute", inset: 0, background: "var(--orange-dim)", borderRadius: "4px", border: "1px solid var(--border-orange)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span style={{ position: "relative" }}>{narrow ? short : label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "1.25rem 1rem", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", marginTop: "3rem" }}>
        <span style={{ color: "var(--orange)" }}>©</span> 2026 Marc-André Godin
      </footer>
    </div>
  );
}

export default App;