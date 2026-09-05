import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSolidity, SiPython, SiDjango, SiSqlite } from "react-icons/si";
import { useLanguage } from "../i18n/useLanguage";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const TECHS = [
    { Icon: RiReactjsLine, className: "text-cyan-400", duration: 2.5, label: "React" },
    { Icon: SiTypescript, className: "text-blue-500", duration: 3, label: "TypeScript" },
    { Icon: RiTailwindCssFill, className: "text-cyan-300", duration: 4, label: "Tailwind CSS" },
    { Icon: SiSolidity, className: "text-neutral-300", duration: 5, label: "Solidity" },
    { Icon: SiPython, className: "text-yellow-400", duration: 3.5, label: "Python" },
    { Icon: SiDjango, className: "text-green-500", duration: 6, label: "Django" },
    { Icon: SiSqlite, className: "text-blue-400", duration: 2.5, label: "SQLite" },
];

const Technologies = () => {
    const { t } = useLanguage();

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                {t.technologies.heading}
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                {TECHS.map(({ Icon, className, duration, label }) => (
                    <motion.div
                        key={label}
                        variants={iconVariants(duration)}
                        initial="initial"
                        animate="animate"
                        title={label}
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <Icon className={`text-7xl ${className}`} aria-label={label} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
