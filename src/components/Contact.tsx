import { Mail, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Marc-André_Godin.pdf";
    link.download = "CV_Marc-André_Godin.pdf";
    link.click();
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
        Contact
      </motion.h2>

      {/* Informations de contact */}
      <motion.div
        variants={fadeIn}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-white mb-6">
          Informations de contact
        </h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="text-orange-500 mr-3 mt-1" size={20} />
            <div>
              <h4 className="font-medium text-white">Email</h4>
              <p className="text-gray-300">marcandregodin.cjn@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="text-orange-500 mr-3 mt-1" size={20} />
            <div>
              <h4 className="font-medium text-white">Téléphone</h4>
              <p className="text-gray-300">+33 7 80 47 55 52</p>
            </div>
          </div>
        </div>

        {/* Bouton pour télécharger le CV */}
        <div className="mt-8">
          <button
            onClick={handleDownloadCV}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center"
          >
            <Download className="mr-2" size={20} />
            Télécharger mon CV
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
