import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MyPicture from "../assets/MyPicture.jpg";

export function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-8 py-12"
    >
      {/* Profile Image (Left) */}
      <motion.div
        variants={scaleUp}
        className="w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-12 mt-[-100px]"
      >
        <motion.img
          src={MyPicture}
          alt="Profile"
          className="w-full h-100 object-cover shadow-lg border-4 border-orange-500 ml-[-50px]"
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>

      {/* Text Content (Right) */}
      <motion.div
        variants={fadeIn}
        className="text-center md:text-left max-w-2xl"
      >
        {/* Name */}
        <motion.h1
          variants={fadeIn}
          className="text-5xl font-bold text-white mb-4"
        >
          Marc-André Godin
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeIn}
          className="text-xl text-orange-500 mb-6 font-medium"
        >
          Apprenti Développeur
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-300 mb-8 leading-relaxed"
        >
          Passionné par le développement, la cybersécurité et les nouvelles
          technologies. Je cherche constamment à apprendre et à m'améliorer.
          Je suis actuellement en recherche d'une alternance pour ma formation ASR
          (Administrateur Système et réseau) au CESI.
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={fadeIn}
          className="flex space-x-6 justify-center md:justify-start"
        >
          <motion.a
            href="https://github.com/MAgodin"
            className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/marc-andré-godin/"
            className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="mailto:marcandregodin.cjn@gmail.com"
            className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
