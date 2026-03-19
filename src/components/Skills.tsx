import { useState } from "react";
import { Code, Database, Monitor, Package, Cpu, FileText, Github, Laptop, Palette, Save, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

function Ico({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} style={{ width: "18px", height: "18px", objectFit: "contain", flexShrink: 0 }} />;
}

const sections = [
  {
    id: "cyber", label: "Cybersécurité", icon: <Shield size={14} />,
    skills: [
      { icon: <Shield size={16} style={{ color: "var(--orange)" }} />, name: "Pentesting", desc: "Hack The Box, challenges inter-écoles" },
      { icon: <FileText size={16} style={{ color: "var(--orange)" }} />, name: "GRC", desc: "Gouvernance, risques et conformité" },
      { icon: <FileText size={16} style={{ color: "var(--orange)" }} />, name: "EBIOS RM", desc: "Analyse de risques" },
      { icon: <Monitor size={16} style={{ color: "var(--orange)" }} />, name: "Admin. réseau", desc: "Infra, déploiement, support" },
    ],
  },
  {
    id: "frontend", label: "Frontend", icon: <Palette size={14} />,
    skills: [
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" alt="HTML" />, name: "HTML", desc: "Langage de base du web" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" alt="CSS" />, name: "CSS", desc: "Mise en forme" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="JS" />, name: "JavaScript", desc: "Logique front" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" alt="TS" />, name: "TypeScript", desc: "JS typé" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg" alt="Angular" />, name: "Angular", desc: "Framework SPA" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" />, name: "Flutter", desc: "Applications mobiles" },
    ],
  },
  {
    id: "backend", label: "Backend", icon: <Code size={14} />,
    skills: [
      { icon: <Database size={16} style={{ color: "var(--orange)" }} />, name: "SQL / MariaDB", desc: "Bases relationnelles" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" />, name: "PHP", desc: "Scripting serveur" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />, name: "C#", desc: "Applications .NET" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" />, name: ".NET", desc: "Framework Microsoft" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />, name: "Java", desc: "Orienté objet" },
    ],
  },
  {
    id: "sys", label: "Système & Réseaux", icon: <Monitor size={14} />,
    skills: [
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg" alt="Linux" />, name: "Linux", desc: "Maîtrise admin. système" },
      { icon: <Ico src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" alt="Windows" />, name: "Windows Server", desc: "Serveurs, MDT" },
      { icon: <Ico src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/vmware.svg" alt="VMware" />, name: "VMware", desc: "Virtualisation" },
      { icon: <Save size={16} style={{ color: "var(--orange)" }} />, name: "NAS Synology", desc: "Stockage réseau" },
    ],
  },
  {
    id: "tools", label: "Outils", icon: <Package size={14} />,
    skills: [
      { icon: <Github size={16} style={{ color: "var(--orange)" }} />, name: "GitHub", desc: "Gestion de code" },
      { icon: <Laptop size={16} style={{ color: "var(--orange)" }} />, name: "VS Code / VS", desc: "IDEs principaux" },
      { icon: <Cpu size={16} style={{ color: "var(--orange)" }} />, name: "Hardware", desc: "Montage PC" },
      { icon: <FileText size={16} style={{ color: "var(--orange)" }} />, name: "Pack Office", desc: "Word, Excel, PPT" },
    ],
  },
];

export function Skills() {
  const [open, setOpen] = useState<string | null>("cyber");

  return (
    <motion.div initial="hidden" animate="visible" variants={container} className="page-wrapper">
      <div className="page-header">
        <div className="section-label">Stack technique</div>
        <h2 className="page-title">Compétences</h2>
      </div>

      {/* Langues */}
      <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {[{ l: "Français", n: "Natif" }, { l: "Anglais", n: "B2" }].map(({ l, n }) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.4rem 0.9rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "100px" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.78rem", color: "white" }}>{l}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted)" }}>{n}</span>
          </div>
        ))}
      </motion.div>

      {/* Accordions */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {sections.map((s) => (
          <motion.div key={s.id} variants={fadeUp} className="glass-card" style={{ overflow: "hidden" }}>
            <button
              onClick={() => setOpen(open === s.id ? null : s.id)}
              style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.9rem 1.1rem", color: "white" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ color: "var(--orange)" }}>{s.icon}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.88rem" }}>{s.label}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--text-muted)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", padding: "1px 6px", borderRadius: "100px" }}>
                  {s.skills.length}
                </span>
              </div>
              <motion.span animate={{ rotate: open === s.id ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ color: "var(--text-muted)", display: "flex" }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open === s.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0.25rem 1.1rem 1rem", borderTop: "1px solid var(--border)" }}>
                    <div className="skills-grid">
                      {s.skills.map((sk, j) => (
                        <motion.div
                          key={sk.name}
                          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: j * 0.04 }}
                          style={{ display: "flex", alignItems: "center", gap: "0.55rem", padding: "0.55rem 0.8rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "7px", transition: "all 0.18s", cursor: "default" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-orange)"; (e.currentTarget as HTMLElement).style.background = "var(--orange-dim)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
                        >
                          {sk.icon}
                          <div>
                            <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "0.75rem", color: "white" }}>{sk.name}</div>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--text-muted)" }}>{sk.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Soft skills */}
      <motion.div variants={fadeUp} style={{ marginTop: "1.75rem" }}>
        <div className="section-label" style={{ marginBottom: "0.65rem" }}>Soft skills</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
          {["Capacité d'adaptation", "Calme sous pression", "Communication claire", "Autonomie"].map((s) => (
            <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", padding: "0.3rem 0.8rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "100px", color: "var(--text-dim)" }}>{s}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}