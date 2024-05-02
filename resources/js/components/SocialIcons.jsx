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
                href="https://www.instagram.com/golazosorteos/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-icon"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=61558771306988"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-icon"
            >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a
                href="https://wa.me/3506749623"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon"
            >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
    );
}
