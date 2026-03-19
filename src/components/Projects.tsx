import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import SiteStephane from "../assets/Site-Stephane.png";
import capable from "../assets/capable.png";
import portfolio from "../assets/Portfolio.png";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const projects = [
  {
    title: "Site Web — Stéphane Godin",
    description: "Site professionnel pour un psychologue. Interface épurée, responsive, construit avec React.",
    image: SiteStephane,
    technologies: ["React", "Tailwind", "TypeScript"],
    githubLink: "https://github.com/MAgodin/Stephane-Godin",
    liveLink: "https://stephane-godin.fr",
    status: "En ligne",
  },
  {
    title: "Cap'able",
    description: "Initiative d'inclusion pour personnes vulnérables, avec assistance virtuelle.",
    image: capable,
    status: "En développement",
  },
  {
    title: "Portfolio Personnel",
    description: "Ce portfolio — design dark tech, animations Framer Motion, entièrement responsive.",
    image: portfolio,
    technologies: ["React", "Tailwind", "TypeScript"],
    githubLink: "https://github.com/MAgodin/Portfolio-Marc-Andre",
    status: "En ligne",
  },
];

const statusStyle: Record<string, { bg: string; color: string }> = {
  "En ligne":         { bg: "rgba(74,222,128,0.1)",  color: "#4ade80" },
  "En développement": { bg: "rgba(249,115,22,0.1)",  color: "var(--orange)" },
};

export function Projects() {
  return (
    <motion.div initial="hidden" animate="visible" variants={container} style={{ maxWidth: "960px", margin: "0 auto", padding: "2.5rem 0 4rem" }}>
      <div className="page-header">
        <div className="section-label">Réalisations</div>
        <h2 className="page-title">Mes Projets</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i} variants={fadeUp}
            className="glass-card"
            style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
            whileHover={{ y: -4 }} transition={{ duration: 0.22 }}
          >
            {/* Image */}
            <div style={{ position: "relative", height: "160px", overflow: "hidden", background: "rgba(0,0,0,0.3)" }}>
              <motion.img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.35 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.6) 0%, transparent 60%)" }} />
              {p.status && (
                <span style={{ position: "absolute", top: "8px", right: "8px", fontFamily: "var(--font-mono)", fontSize: "0.57rem", padding: "2px 8px", borderRadius: "100px", background: statusStyle[p.status]?.bg, color: statusStyle[p.status]?.color, border: `1px solid ${statusStyle[p.status]?.color}33` }}>
                  {p.status}
                </span>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: "1rem", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "white", marginBottom: "0.4rem", lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "0.85rem", flex: 1 }}>{p.description}</p>

              {p.technologies && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.85rem" }}>
                  {p.technologies.map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", padding: "2px 7px", background: "var(--orange-dim)", color: "var(--orange)", borderRadius: "4px", border: "1px solid rgba(249,115,22,0.18)" }}>{t}</span>
                  ))}
                </div>
              )}

              {(p.githubLink || p.liveLink) && (
                <div style={{ display: "flex", gap: "0.65rem", borderTop: "1px solid var(--border)", paddingTop: "0.85rem" }}>
                  {p.githubLink && (
                    <a href={p.githubLink} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-mono)", fontSize: "0.67rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.18s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      <Github size={12} /> Code
                    </a>
                  )}
                  {p.liveLink && (
                    <a href={p.liveLink} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-mono)", fontSize: "0.67rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.18s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      <ArrowUpRight size={12} /> Voir le site
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}