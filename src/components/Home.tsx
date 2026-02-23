import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MyPicture from "../assets/MyPicture.jpg";

export function Home() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-8 py-16 gap-16"
    >
      {/* Profile Image */}
      <motion.div variants={imageVariant} className="flex-shrink-0 relative">
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 blur-2xl scale-110" />
        <motion.div
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-orange-500 shadow-2xl shadow-orange-500/20"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={MyPicture}
            alt="Marc-André Godin"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-900 border border-gray-700 px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-300 font-mono">Disponible oct. 2026</span>
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div variants={container} className="text-center md:text-left max-w-xl">

        {/* Label */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 justify-center md:justify-start mb-4">
          <span className="h-px w-8 bg-orange-500" />
          <span className="text-orange-500 font-mono text-xs tracking-widest uppercase">Portfolio 2026</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl font-extrabold text-white mb-2 leading-tight tracking-tight"
        >
          Marc-André<br />
          <span className="text-orange-500">Godin</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          className="text-base text-gray-400 font-mono tracking-widest uppercase mb-6"
        >
          Bachelor 3 Cybersécurité
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-base text-gray-300 mb-8 leading-relaxed"
        >
          Passionné par la cybersécurité, le développement et les nouvelles technologies.
          Actuellement en Bachelor 3 à Ynov Campus Rouen, je recherche une alternance
          à partir d'<span className="text-orange-400 font-medium">octobre 2026</span> pour
          un mastère en cybersécurité — rythme 2 semaines entreprise / 1 semaine école.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
          <motion.a
            href="mailto:marcandregodin.cjn@gmail.com"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono text-sm font-bold px-5 py-2.5 transition-colors duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Me contacter <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-500 font-mono text-sm px-5 py-2.5 transition-colors duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={16} /> Télécharger le CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="flex space-x-5 justify-center md:justify-start"
        >
          {[
            {
              href: "https://github.com/MAgodin",
              icon: <Github size={22} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/marc-andre-godin/",
              icon: <Linkedin size={22} />,
              label: "LinkedIn",
            },
            {
              href: "mailto:marcandregodin.cjn@gmail.com",
              icon: <Mail size={22} />,
              label: "Email",
            },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}