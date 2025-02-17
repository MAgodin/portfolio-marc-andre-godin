import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import vertMarine from "../assets/vert-marine.jpg";
import Lacoste from "../assets/logo-lacoste.jpg";
import Formation from "../assets/formation.jpg";
import CESI from "../assets/CESI.png";

export function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        Formation & Expérience
      </motion.h2>

      {/* Formation */}
      <motion.div variants={fadeIn} className="mb-12">
        <div className="flex items-center mb-8">
          <GraduationCap className="text-orange-500 mr-3" size={28} />
          <h3 className="text-3xl font-semibold text-white">Formation</h3>
        </div>

        <div className="space-y-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-start border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex-1">
              <div className="text-sm text-orange-500 mb-2">à partir de 2025</div>
              <h4 className="text-2xl font-semibold text-white mb-2">
                En recherche d'une formation pour ASR ou Cybersécurité
              </h4>
              {/*<p className="text-gray-300">description</p>*/}
            </div>
            {/* Image */}
            <img
              src={Formation}
              alt="Formation"
              className="mt-4 md:mt-0 ml-0 md:ml-8 w-32 h-32 object-cover rounded-lg"
            />
          </motion.div>

          {/* Formation CESI - Développement Informatique */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-start border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex-1">
              <div className="text-sm text-orange-500 mb-2">2023 - 2025</div>
              <h4 className="text-2xl font-semibold text-white mb-2">
                Formation CESI - Développement Informatique
              </h4>
              <p className="text-gray-300">CESI Saint-Étienne-du-Rouvray</p>
            </div>
            {/* Image */}
            <img
              src={CESI}
              alt="Formation CESI"
              className="mt-4 md:mt-0 ml-0 md:ml-8 w-32 h-32 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Expérience */}
      <motion.div variants={fadeIn}>
        <div className="flex items-center mb-8">
          <Briefcase className="text-orange-500 mr-3" size={28} />
          <h3 className="text-3xl font-semibold text-white">Expérience</h3>
        </div>

        <div className="space-y-8">
          {/* Alternance Développeur Informatique */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-start border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex-1">
              <div className="text-sm text-orange-500 mb-2">
                Oct. 2023 - Oct. 2025
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">
                Alternance Développeur Informatique
              </h4>
              <p className="text-gray-300 mb-4">Vert-Marine, Rouen</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Développement d’applications web en Angular</li>
                <li>Création et gestion de bases de données relationnelles</li>
                <li>
                  Réalisation de cahiers des charges et collecte des besoins
                  clients
                </li>
                <li>
                  Résolution de bugs et amélioration des applications existantes
                </li>
              </ul>
            </div>
            {/* Image */}
            <img
              src={vertMarine}
              alt="Expérience"
              className="mt-4 md:mt-0 ml-0 md:ml-8 w-32 h-32 object-cover rounded-lg"
            />
          </motion.div>

          {/* CDI Vendeur Lacoste */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-start border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex-1">
              <div className="text-sm text-orange-500 mb-2">
                Juin - Décembre 2023
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2">
                CDI Vendeur (Samedi uniquement)
              </h4>
              <p className="text-gray-300 mb-4">
                Lacoste, McArthurGlen, Douains
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Accompagnement et conseil client</li>
                <li>Gestion de rayon de plus de 200 produits</li>
                <li>
                  Contribution à un taux de fidélisation client estimé à plus de
                  60%
                </li>
              </ul>
            </div>
            {/* Image */}
            <img
              src={Lacoste}
              alt="Vendeur Lacoste"
              className="mt-4 md:mt-0 ml-0 md:ml-8 w-48 h-32 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
