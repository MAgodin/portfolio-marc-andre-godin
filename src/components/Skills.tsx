import { useState } from "react";
import { Code, Database, Monitor, Package, Cpu, FileText, Github, Laptop, Palette, Save } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Fonction pour gérer l'ouverture des accordéons
  const toggleAccordion = (section: string) => {
    setActiveAccordion((prev) => (prev === section ? null : section));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      {/* Titre principal */}
      <motion.h2
        variants={fadeIn}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Compétences
      </motion.h2>

      {/* Accordéon pour Frontend */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-lg mb-4"
      >
        <div
          className="flex justify-between items-center p-6 cursor-pointer"
          onClick={() => toggleAccordion("frontend")}
        >
          <div className="flex items-center">
            <Palette className="text-orange-500 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-white">Frontend</h3>
          </div>
          <div>
            {activeAccordion === "frontend" ? (
              <span className="text-orange-500">-</span>
            ) : (
              <span className="text-orange-500">+</span>
            )}
          </div>
        </div>
        <AnimatePresence>
          {activeAccordion === "frontend" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="px-6 py-4 bg-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
                    alt="HTML"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">HTML</span>
                    <p className="text-gray-300 text-sm">Langage de base du web</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
                    alt="CSS"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">CSS</span>
                    <p className="text-gray-300 text-sm">Langage de mise en forme du web</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                    alt="JavaScript"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">JavaScript</span>
                    <p className="text-gray-300 text-sm">Langage de programmation pour les sites dynamiques</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
                    alt="TypeScript"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">TypeScript</span>
                    <p className="text-gray-300 text-sm">Superset de JavaScript avec typage statique</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg"
                    alt="Angular"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">Angular</span>
                    <p className="text-gray-300 text-sm">Framework pour créer des applications web</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Accordéon pour Backend */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-lg mb-4"
      >
        <div
          className="flex justify-between items-center p-6 cursor-pointer"
          onClick={() => toggleAccordion("backend")}
        >
          <div className="flex items-center">
            <Code className="text-orange-500 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-white">Backend</h3>
          </div>
          <div>
            {activeAccordion === "backend" ? (
              <span className="text-orange-500">-</span>
            ) : (
              <span className="text-orange-500">+</span>
            )}
          </div>
        </div>
        <AnimatePresence>
          {activeAccordion === "backend" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="px-6 py-4 bg-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Database className="text-orange-500" size={28} />
                  <div>
                    <span className="text-gray-100">SQL</span>
                    <p className="text-gray-300 text-sm">Base de données relationnelle</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    alt="PHP"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">PHP</span>
                    <p className="text-gray-300 text-sm">Langage côté serveur pour le web</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                    alt="C#"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">C#</span>
                    <p className="text-gray-300 text-sm">Langage pour applications .NET</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                    alt=".NET"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">.NET</span>
                    <p className="text-gray-300 text-sm">Framework pour le développement d'applications</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Accordéon pour Système et Réseaux */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-lg mb-4"
      >
        <div
          className="flex justify-between items-center p-6 cursor-pointer"
          onClick={() => toggleAccordion("sysreseaux")}
        >
          <div className="flex items-center">
            <Monitor className="text-orange-500 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-white">Système et Réseaux</h3>
          </div>
          <div>
            {activeAccordion === "sysreseaux" ? (
              <span className="text-orange-500">-</span>
            ) : (
              <span className="text-orange-500">+</span>
            )}
          </div>
        </div>
        <AnimatePresence>
          {activeAccordion === "sysreseaux" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="px-6 py-4 bg-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg"
                    alt="Linux"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">Linux</span>
                    <p className="text-gray-300 text-sm">Système d'exploitation open-source</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg"
                    alt="Windows Server"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">Windows Server</span>
                    <p className="text-gray-300 text-sm">Système d'exploitation serveur de Microsoft</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/vmware.svg"
                    alt="VMware"
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="text-gray-100">VMware</span>
                    <p className="text-gray-300 text-sm">Virtualisation et gestion des machines virtuelles</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Save className="text-orange-500" />
                  <div>
                    <span className="text-gray-100">NAS Synology</span>
                    <p className="text-gray-300 text-sm">Solutions de stockage en réseau</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Accordéon pour Autres */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 rounded-lg shadow-lg mb-4"
      >
        <div
          className="flex justify-between items-center p-6 cursor-pointer"
          onClick={() => toggleAccordion("autres")}
        >
          <div className="flex items-center">
            <Package className="text-orange-500 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-white">Autres</h3>
          </div>
          <div>
            {activeAccordion === "autres" ? (
              <span className="text-orange-500">-</span>
            ) : (
              <span className="text-orange-500">+</span>
            )}
          </div>
        </div>
        <AnimatePresence>
          {activeAccordion === "autres" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="px-6 py-4 bg-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Cpu className="text-orange-500 mr-3" size={28} />
                  <div>
                    <span className="text-gray-100">Hardware (Montage de PC)</span>
                    <p className="text-gray-300 text-sm">Assemblage et configuration de PC</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="text-orange-500 mr-3" size={28} />
                  <div>
                    <span className="text-gray-100">Pack Office</span>
                    <p className="text-gray-300 text-sm">Outils de bureautique (Word, Excel, etc.)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="text-orange-500 mr-3" size={28} />
                  <div>
                    <span className="text-gray-100">GitHub</span>
                    <p className="text-gray-300 text-sm">Plateforme de gestion de code source</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Laptop className="text-orange-500 mr-3" size={28} />
                  <div>
                    <span className="text-gray-100">Visual Studio</span>
                    <p className="text-gray-300 text-sm">Editeur de texte pour le développement d'applications</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
