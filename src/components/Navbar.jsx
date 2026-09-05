import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../i18n/useLanguage";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
    const { t } = useLanguage();

    return (
        <nav className="mb-20 flex flex-wrap items-center justify-between gap-4 py-6">
            <div className="flex flex-shrink-0 items-center">
                <span className="text-xl tracking-tight">
                    Mialy Ratsimbazafy
                    <span className="text-neutral-500"> · {t.nav.portfolio}</span>
                </span>
            </div>
            <div className="flex items-center gap-6 text-2xl">
                <LanguageToggle />
                <a
                    href="https://www.linkedin.com/in/mialyratsimbazafy75"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Mialy333"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
