import { LuImport } from "react-icons/lu";
import john from "../assets/john.jpg";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  return (
    <AnimatePresence>
      <section className="h-auto lg:h-[90vh] relative">
        <div className="flex flex-col justify-center items-center relative">
          <h1 className="mt-16 overflow-hidden text-[15vw] md:text-[14vw] font-medium uppercase leading-none text-lime-400">
            <motion.span
              initial={{ opacity: 0, x: "50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="john lg:mr-40"
              viewport={{ once: true }}
            >
              John
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: "50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="lg:ml-80"
              viewport={{ once: true }}
            >
              Fauyer
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: "500%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "backInOut", duration: 1, delay: 2 }}
            className="mt-8 z-10"
            viewport={{ once: true }}
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
            >
              <span>Resume.pdf</span>
              <LuImport className="ml-2" />
            </a>
          </motion.div>
          <div className="w-[100%] h-[55vh] mt-8 flex justify-center lg:absolute lg:top-[10%] lg:left-0 lg:w-full lg:h-full">
            <motion.img
              initial={{ opacity: 0, y: "50%", rotate: 0, scale: 0.8 }} // No initial rotation on small screens
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: window.innerWidth >= 1024 ? 12 : 0, // Apply rotation only for screens >= 1024px (lg)
              }}
              transition={{ ease: "circOut", duration: 1, delay: 1 }}
              viewport={{ once: true }}
              src={john}
              alt="John"
              className="w-[90%] lg:w-[25%] object-cover h-auto z-20 lg:-z-10" // Removed lg:rotate-12 to avoid conflict
            />
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Hero;
