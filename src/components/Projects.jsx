import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import { PROJECTS_META } from "../i18n/content";
import { useLanguage } from "../i18n/useLanguage";

const linkClass =
    "inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 hover:underline";

const Projects = () => {
    const { t } = useLanguage();
    const { heading, githubLabel, liveLabel, videoLabel, videoSoon, items } = t.projects;

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                {heading}
            </motion.h2>

            <div>
                {PROJECTS_META.map((meta) => {
                    const text = items[meta.id];

                    return (
                        <div key={meta.id} className="mb-16 flex flex-col items-center">
                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -50 }}
                                transition={{ duration: 1 }}
                                className="mb-6 w-full max-w-xl text-center lg:w-3/4 lg:text-left"
                            >
                                <h3 className="mb-2 text-xl font-semibold">{text.title}</h3>
                                <p className="mb-4 text-neutral-400">{text.description}</p>

                                <div className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                                    {meta.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                                    <a
                                        href={meta.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={linkClass}
                                    >
                                        <FaGithub /> {githubLabel}
                                    </a>

                                    {meta.liveLink && (
                                        <a
                                            href={meta.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={linkClass}
                                        >
                                            <FaExternalLinkAlt /> {liveLabel}
                                        </a>
                                    )}

                                    {meta.videoDemo ? (
                                        <a
                                            href={meta.videoDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={linkClass}
                                        >
                                            <FaVideo /> {videoLabel}
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 text-sm text-neutral-600">
                                            <FaVideo /> {videoSoon}
                                        </span>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 50 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4"
                            >
                                <img
                                    src={meta.image}
                                    alt={text.title}
                                    className="w-full max-w-lg rounded"
                                />
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
