import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {

    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <h2 className="my-20 text-center text-4xl">
                Fullstack
                <span className="text-neutral-500"> Portfolio</span>
            </h2>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a
                href="https://www.linkedin.com/in/mialyratsimbazafy75"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/mialy333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>
        </div>

    </nav>

}

export default Navbar