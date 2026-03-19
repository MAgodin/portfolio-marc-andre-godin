import { Mail, Phone, Download, Github, Linkedin, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("marcandregodin.cjn@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const items = [
    { icon: <Mail size={15} />,    label: "Email",    value: "marcandregodin.cjn@gmail.com", href: "mailto:marcandregodin.cjn@gmail.com", copyable: true },
    { icon: <Phone size={15} />,   label: "Téléphone", value: "+33 7 80 47 55 52",           href: "tel:+33780475552" },
    { icon: <Github size={15} />,  label: "GitHub",   value: "github.com/MAgodin",            href: "https://github.com/MAgodin",                              external: true },
    { icon: <Linkedin size={15} />,label: "LinkedIn", value: "marc-andré-godin",              href: "https://www.linkedin.com/in/marc-andr%C3%A9-godin/",      external: true },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={container} style={{ maxWidth: "640px", margin: "0 auto", padding: "2.5rem 0 4rem" }}>
      <div className="page-header">
        <div className="section-label">Prise de contact</div>
        <h2 className="page-title" style={{ marginBottom: "0.65rem" }}>Me Contacter</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
          Disponible pour une alternance à partir d'<span style={{ color: "var(--orange)" }}>octobre 2026</span>. N'hésitez pas à me contacter.
        </p>
      </div>

      {/* Contact cards */}
      <motion.div variants={fadeUp} className="contact-grid" style={{ marginBottom: "1.5rem" }}>
        {items.map((item) => (
          <div key={item.label} className="glass-card" style={{ padding: "0.9rem 1rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", flex: 1, minWidth: 0 }}>
                <span style={{ color: "var(--orange)", marginTop: "1px", flexShrink: 0 }}>{item.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>{item.label}</div>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.73rem", color: "white", textDecoration: "none", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", transition: "color 0.18s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    {item.value}
                  </a>
                </div>
              </div>
              {item.copyable && (
                <button onClick={handleCopy} style={{ background: "none", border: "1px solid var(copied ? 'rgba(74,222,128,0.3)' : var(--border))", borderColor: copied ? "rgba(74,222,128,0.3)" : "var(--border)", borderRadius: "5px", padding: "3px 7px", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px", fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: copied ? "#4ade80" : "var(--text-muted)", transition: "all 0.18s", flexShrink: 0 }}>
                  {copied ? <Check size={10} /> : <Copy size={10} />}
                  {copied ? "Copié" : "Copier"}
                </button>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* CV card */}
      <motion.div variants={fadeUp} className="glass-card" style={{ padding: "1.25rem", borderColor: "var(--border-orange)", background: "var(--orange-dim)", marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "white", marginBottom: "3px" }}>Mon Curriculum Vitae</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>CV_Marc-Andre_Godin.pdf</div>
          </div>
          <a href="./CV_Marc-Andre_Godin.pdf" download="CV_Marc-André_Godin.pdf" className="btn-primary" style={{ textDecoration: "none" }}>
            <Download size={13} /> Télécharger
          </a>
        </div>
      </motion.div>

      {/* Dispo */}
      <motion.div variants={fadeUp} style={{ padding: "0.9rem 1.1rem", borderRadius: "8px", background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.15)", display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", flexShrink: 0, marginTop: "4px", boxShadow: "0 0 6px rgba(74,222,128,0.6)" }} />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#9ca3af", lineHeight: 1.55 }}>
          Disponible pour une alternance <span style={{ color: "#4ade80" }}>Ingénieur Cybersécurité</span> à partir d'<span style={{ color: "#4ade80" }}>octobre 2026</span> — 2 sem. entreprise / 1 sem. école.
        </p>
      </motion.div>
    </motion.div>
  );
}