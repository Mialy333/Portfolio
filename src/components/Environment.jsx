import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import { FaGit, FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Environment = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">

            <div className="flex flex-col md:flex-row justify-between gap-8">
                {/* Colonne Environnement */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex-1"
                >
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className="my-20 text-center text-4xl">Environnement
                    </motion.h3>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.div
                            variants={iconVariants(2.5)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4"
                        >
                            <VscVscode className="text-7xl text-cyan-600" />
                        </motion.div>
                        <motion.div
                            variants={iconVariants(3)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4"
                        >
                            <FaGit className="text-7xl " />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Colonne Conteneur */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="flex-1"
                >
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className="my-20 text-center text-4xl">Conteneur
                    </motion.h3>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.div
                            variants={iconVariants(3.5)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4"
                        >
                            <FaDocker className="text-7xl text-blue-400" />
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </div >
    );
};

export default Environment;