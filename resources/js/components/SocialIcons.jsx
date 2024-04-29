import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
    return (
        <div className="social-icons">
            <a
                href="https://www.instagram.com/tucuenta"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-icon"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
                href="https://www.facebook.com/tucuenta"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-icon"
            >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a
                href="https://wa.me/tunumero"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon"
            >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
    );
}
