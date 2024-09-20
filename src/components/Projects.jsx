import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Réalisations
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-col items-center"> {/* Changement ici */}

                        {/* Section texte au-dessus */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -50 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 text-center lg:text-left mb-6"
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-6 text-neutral-400">{project.description}</p>
                            <div className="mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index}
                                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                👉 En savoir plus sur le projet
                            </a>
                        </motion.div>

                        {/* Section image en dessous */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full max-w-lg rounded"
                            />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
