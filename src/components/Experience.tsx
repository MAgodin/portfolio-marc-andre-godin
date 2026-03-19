import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import vertMarine from "../assets/vert-marine.jpg";
import Lacoste from "../assets/logo-lacoste.jpg";
import Formation from "../assets/formation.jpg";
import CESI from "../assets/CESI.png";
import YNOV from "../assets/ynov campus.png";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

interface ItemProps {
  date: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  logo: string;
  logoAlt: string;
  accent?: boolean;
  tag?: string;
  last?: boolean;
}

function TimelineItem({ date, title, subtitle, bullets, logo, logoAlt, accent, tag, last }: ItemProps) {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* Dot + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: accent ? "var(--orange)" : "#374151", border: `2px solid ${accent ? "var(--orange)" : "#374151"}`, boxShadow: accent ? "0 0 8px var(--orange-glow)" : "none", marginTop: "5px", flexShrink: 0 }} />
        {!last && <div style={{ width: "1px", flex: 1, background: "var(--border)", marginTop: "4px" }} />}
      </div>

      {/* Card */}
      <motion.div
        variants={fadeUp}
        whileHover={{ x: 3 }} transition={{ duration: 0.18 }}
        className="glass-card"
        style={{ flex: 1, padding: "1rem", marginBottom: "1rem", borderLeft: accent ? "2px solid var(--orange)" : "2px solid transparent" }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.4rem" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Date + tag */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.4rem", marginBottom: "0.35rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--orange)", display: "flex", alignItems: "center", gap: "4px" }}>
                <Calendar size={9} />{date}
              </span>
              {tag && (
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", padding: "1px 6px", borderRadius: "100px", background: accent ? "var(--orange-dim)" : "rgba(255,255,255,0.04)", color: accent ? "var(--orange)" : "var(--text-muted)", border: `1px solid ${accent ? "rgba(249,115,22,0.2)" : "var(--border)"}` }}>
                  {tag}
                </span>
              )}
            </div>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(0.82rem, 2.5vw, 0.95rem)", color: "white", lineHeight: 1.3, marginBottom: subtitle ? "0.25rem" : 0 }}>
              {title}
            </h4>
            {subtitle && (
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                <MapPin size={9} />{subtitle}
              </div>
            )}
          </div>
          {/* Logo */}
          <img src={logo} alt={logoAlt} style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "7px", border: "1px solid var(--border)", flexShrink: 0 }} />
        </div>

        {/* Bullets */}
        {bullets && (
          <ul style={{ margin: "0.6rem 0 0", padding: 0, listStyle: "none" }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", fontSize: "0.78rem", color: "var(--text-dim)", lineHeight: 1.55, marginBottom: "0.2rem" }}>
                <span style={{ color: "var(--orange)", marginTop: "4px", flexShrink: 0, fontSize: "6px" }}>▸</span>{b}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

function SectionTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.1rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border)" }}>
      <span style={{ color: "var(--orange)" }}>{icon}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
    </div>
  );
}

export function Experience() {
  return (
    <motion.div initial="hidden" animate="visible" variants={container} className="page-wrapper">
      <div className="page-header">
        <div className="section-label">Parcours</div>
        <h2 className="page-title">Formation & Expérience</h2>
      </div>

      {/* Formation */}
      <motion.div variants={fadeUp} style={{ marginBottom: "2rem" }}>
        <SectionTitle icon={<GraduationCap size={15} />} label="Formation" />
        <TimelineItem date="Oct. 2025 → Oct. 2026" title="Bachelor 3 Expert en Cybersécurité" subtitle="Ynov Campus Rouen, Mont-Saint-Aignan" bullets={["GRC et EBIOS RM — gouvernance, risques et conformité", "Pentesting via Hack The Box et challenges inter-écoles", "Poursuite en mastère cybersécurité 2026"]} logo={YNOV} logoAlt="Ynov" accent tag="En cours" />
        <TimelineItem date="Sept. 2023 → 2025" title="BTS Développeur Informatique" subtitle="CESI, Saint-Étienne-du-Rouvray" bullets={["Langages : HTML, CSS, JS, C, C#, .NET, PHP, Flutter, Java", "Projet CESI Flutter & PHP — app de gestion de films", "Création d'un site web pour un psychologue en React", "Montage d'un MDT Windows 24H2"]} logo={CESI} logoAlt="CESI" tag="Diplômé" last />
      </motion.div>

      {/* Expérience */}
      <motion.div variants={fadeUp}>
        <SectionTitle icon={<Briefcase size={15} />} label="Expérience professionnelle" />
        <TimelineItem date="Déc. 2025 → Sept. 2026" title="Administrateur Système & Réseau" subtitle="Control Union, Harfleur" bullets={["Analyse de structure pour création d'un relais informatique sur site", "Administration réseau & BDD, déploiement de nouvelles technologies", "Support opérationnel et amélioration des services internes"]} logo={Formation} logoAlt="Control Union" accent tag="Alternance" />
        <TimelineItem date="Oct. 2023 → Oct. 2025" title="Alternance Développeur Informatique" subtitle="Averis, Rouen" bullets={["Application web Angular avec interfaces dynamiques", "BDD relationnelles jusqu'à 50 tables", "Cahiers des charges pour 2 projets clients", "Résolution de bugs et améliorations fonctionnelles"]} logo={vertMarine} logoAlt="Averis" tag="Alternance" />
        <TimelineItem date="Juin → Déc. 2023" title="CDI Vendeur (Samedi uniquement)" subtitle="Lacoste, McArthurGlen, Douains" bullets={["Accompagnement et conseil client", "Gestion de rayon de plus de 200 produits", "Taux de fidélisation client > 60%"]} logo={Lacoste} logoAlt="Lacoste" last />
      </motion.div>
    </motion.div>
  );
}