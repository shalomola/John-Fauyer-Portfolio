import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS } from "../constants/index.tsx"
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  // console.log(toggleMenu);
  console.log(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: "50%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <nav className="fixed right-0 top-0 z-30 p-4">
        <button onClick={toggleMenu} className="rounded-md p-2 hover:text-lime-300">
                {isOpen ? (
                    <FaTimes className="h-6 w-6" />
                ) : (
                    <FaBars className="h-6 w-6" />
                )}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-20 flex flex-col justify-center items-center bg-black text-white"
          >
            <ul
              className="space-y-6 text-3xl"
            >
              {LINKS.map((link) => (
                <motion.li 
                key={link.id}
                variants={linkVariants}
                >
                  <a 
                  href={`#${link.id}`} 
                  onClick={toggleMenu}
                  rel="noopener noreferrer"
                  className="text-5xl font-light uppercase tracking-wide hover:text-lime-400 lg:text-9xl">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
