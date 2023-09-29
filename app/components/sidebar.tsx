import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-wrap">
                <a href="https://norakrane.com" target="_blank">
                    <img alt="Nora logo" className="logo" src="/nora-logo.png" width="250" />
                </a>
            </div>

            <div className="social-icons">
                <a href="https://github.com/nkrane23" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://www.linkedin.com/in/norakrane/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href="https://instagram.com/moonflowerskyes" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a href="https://norakrane.com/web/wp-content/uploads/2023/09/NoraKrane_Resume.pdf" target="_blank">
                    <FontAwesomeIcon icon={faFilePdf} />
                </a>
            </div>

            <div className="mobile-logo">
                <a href="https://norakrane.com">
                    <div className="logo-top">
                        <img src="/nora-only-logo.png" alt="Nora" />
                    </div>

                    <div className="logo-bottom">
                        <img src="/web-developer-text.png" alt="Web Developer" />
                    </div>
                </a>
            </div>
        </div>
    )
}