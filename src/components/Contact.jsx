import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";

const Contact = () => {
    const { t } = useLanguage();
    const { heading, body, emailLabel, email } = t.contact;

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">
                {heading}
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="mx-auto my-4 max-w-md text-neutral-400">
                    {body}
                </motion.p>
                <a href={`mailto:${email}`} className="border-b" aria-label={emailLabel}>
                    {email}
                </a>
            </div>
        </div>
    );
};

export default Contact;
