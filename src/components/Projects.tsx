import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="p-8" id="projects">
      <h2 className="my-10 text-center text-3xl lg:text-8xl text-lime-300 uppercase">My Work</h2>
      <div className="columns-1 gap-4 mx-auto max-w-7xl md:columns-2 lg:columns-3">
        {PROJECTS.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-4 overflow-hidden">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="h-auto w-full object-cover rounded-xl"
              />
              <div className="relative mt-5 text-white">
                <h3 className="text-1xl tracking-wider">{project.title}</h3>
                <p className="max-w-xs text-sm">{project.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
