import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MyPicture from "../assets/MyPicture.jpg";

type Page = "home" | "experience" | "skills" | "projects" | "contact";
interface HomeProps { onNavigate?: (page: Page) => void; }

export function Home({ onNavigate }: HomeProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const socialLinks = [
    { href: "https://github.com/MAgodin",                         icon: <Github size={17} />,   label: "GitHub" },
    { href: "https://www.linkedin.com/in/marc-andr%C3%A9-godin/", icon: <Linkedin size={17} />, label: "LinkedIn" },
    { href: "mailto:marcandregodin.cjn@gmail.com",                icon: <Mail size={17} />,     label: "Email" },
  ];

  const stats = [
    { value: "2+",   label: "ans exp." },
    { value: "B3",   label: "Cybersec." },
    { value: "Oct.", label: "Dispo 2026" },
  ];

  return (
    <motion.div className="hero-section" initial="hidden" animate="visible" variants={container}>
      <div className="hero-grid">

        {/* ── Texte ── */}
        <motion.div variants={container} className="hero-text" style={{ order: 2 }}>

          <motion.div variants={fadeUp} className="section-label">Portfolio 2026</motion.div>

          <motion.div variants={fadeUp} style={{ marginBottom: "0.65rem" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.2rem, 9vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "white" }}>
              Marc-André
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.2rem, 9vw, 4.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--orange)" }}>
              Godin
            </div>
          </motion.div>

          <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
            Bachelor 3 · Cybersécurité · Ynov Campus
          </motion.p>

          <motion.p variants={fadeUp} style={{ fontSize: "0.88rem", color: "var(--text-dim)", lineHeight: 1.75, marginBottom: "1.75rem", maxWidth: "460px" }}>
            Actuellement en Bachelor 3 à Ynov Campus Rouen, je me spécialise en
            cybersécurité — pentesting, GRC, EBIOS RM. Je recherche une alternance
            à partir d'<span style={{ color: "var(--orange)", fontWeight: 500 }}>octobre 2026</span> pour
            un mastère. Rythme : 2 sem. entreprise / 1 sem. école.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.75rem" }}>
            <button className="btn-primary" onClick={() => onNavigate?.("contact")}>
              Me contacter <ArrowRight size={13} />
            </button>
            <a href="./CV_Marc-Andre_Godin.pdf" download="CV_Marc-André_Godin.pdf" className="btn-outline">
              <Download size={13} /> CV
            </a>
          </motion.div>

          <motion.div variants={fadeUp} style={{ display: "flex", gap: "0.5rem" }}>
            {socialLinks.map(({ href, icon, label }) => (
              <motion.a
                key={label} href={href} aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -2 }}
                style={{ width: "34px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)", borderRadius: "7px", color: "var(--text-muted)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--orange)"; el.style.color = "var(--orange)"; el.style.background = "var(--orange-dim)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-muted)"; el.style.background = "transparent"; }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Photo + stats ── */}
        <motion.div variants={fadeUp} className="hero-visual" style={{ order: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>

          {/* Photo */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: "-16px", background: "radial-gradient(ellipse at center, rgba(249,115,22,0.1) 0%, transparent 70%)", borderRadius: "20px", pointerEvents: "none" }} />
            <motion.div
              whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}
              style={{ position: "relative", width: "clamp(150px, 38vw, 230px)", height: "clamp(190px, 47vw, 285px)", borderRadius: "14px", overflow: "hidden", border: "1px solid var(--border-orange)", boxShadow: "0 8px 36px rgba(249,115,22,0.13)" }}
            >
              <img src={MyPicture} alt="Marc-André Godin" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 8%", display: "block" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50px", background: "linear-gradient(to top, rgba(10,10,15,0.45), transparent)", pointerEvents: "none" }} />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "5px", background: "rgba(10,10,15,0.92)", border: "1px solid var(--border)", padding: "4px 11px", borderRadius: "100px", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.5)" }}
            >
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ade80", animation: "blink 2s ease infinite", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#9ca3af" }}>Disponible oct. 2026</span>
            </motion.div>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "1px", background: "var(--border)", borderRadius: "9px", overflow: "hidden", border: "1px solid var(--border)", width: "clamp(150px, 38vw, 230px)" }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ flex: 1, padding: "0.65rem 0.3rem", textAlign: "center", background: "var(--bg-card)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "var(--orange)", lineHeight: 1 }}>{value}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(0.5rem, 1.2vw, 0.58rem)", color: "var(--text-muted)", marginTop: "3px", whiteSpace: "nowrap" }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}