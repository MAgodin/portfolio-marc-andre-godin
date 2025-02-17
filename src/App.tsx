import { useState } from "react";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to render navigation buttons
  const renderNavButtons = () => {
    return ["home", "experience", "skills", "projects", "contact"].map(
      (page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${
            currentPage === page
              ? "text-orange-500 font-semibold border-b-2 border-orange-500"
              : "text-white hover:text-orange-500"
          } transition-colors duration-200 px-3 py-2`}
          aria-label={`Aller à la page ${
            page.charAt(0).toUpperCase() + page.slice(1)
          }`}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
      )
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-white">
      {/* Navigation */}
      <nav className="bg-black shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo cliquable */}
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center"
              aria-label="Revenir à la page d'accueil"
            >
              <span className="text-xl font-bold text-orange-500 hover:text-orange-600 transition-colors duration-200">
                Marc-André Godin
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {renderNavButtons()}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-500 transition-colors duration-200"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden bg-black shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["home", "experience", "skills", "projects", "contact"].map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        setIsMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        currentPage === page
                          ? "bg-orange-500 text-black"
                          : "text-white hover:bg-orange-500 hover:text-black"
                      } transition-colors duration-200 font-medium`}
                      aria-label={`Aller à la page ${
                        page.charAt(0).toUpperCase() + page.slice(1)
                      }`}
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
