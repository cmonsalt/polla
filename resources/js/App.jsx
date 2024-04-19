import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import PrizeCard from "./components/PrizeCard.jsx";
import TicketsAvailabilityCard from "./components/TicketsAvailabilityCard.jsx";
import TicketsSoldCard from "./components/TicketsSoldCard.jsx";
import TicketsSection from "./components/TicketsSection.jsx";
import ParticipantsTable from "./components/ParticipantsTable.jsx";
import PurchaseInfo from "./components/PurchaseInfo.jsx";
import Footer from "./components/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


window.Navbar = Navbar;
export default function App() {
    const [eventStatus, setEventStatus] = useState("null");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/api/estado-evento")
            .then((response) => response.json())
            .then((data) => {
                setEventStatus(
                    Number(data.estado.estado) === 1 ? "Activo" : "Finalizado"
                );
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener el estado del evento:", error);
                setEventStatus("Error");
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="spinner-container d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <Navbar />
            <div className={`event-status ${eventStatus.toLowerCase()}`}>
                {eventStatus}
                {eventStatus === "Activo" && (
                    <span className="blinking-dot"></span>
                )}
            </div>
            <div className="container">
                <div className="row bg-row">
                    <div className="col-md-4 d-flex flex-column align-items-center pt-3">
                        <div className="containers h-100">
                            <PrizeCard>
                                {eventStatus === "Activo" && <PurchaseInfo />}
                                {eventStatus &&
                                    eventStatus === "Finalizado" && (
                                        <div className="event-finished-message">
                                            <h3 className="event-finished-message">
                                                ¡Gracias por participar!
                                            </h3>
                                            <p>
                                                El evento ha finalizado. Estén
                                                atentos para futuros eventos.
                                            </p>
                                        </div>
                                    )}
                            </PrizeCard>
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
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center pt-3">
                        <div className="containers h-100">
                            <TicketsSection />
                            <div className="d-flex justify-content-center pt-3">
                                <TicketsAvailabilityCard />
                                <TicketsSoldCard />
                            </div>
                            <p className="prize-detail">
                                *El sistema asigna aleatoriamente los marcadores
                                despues de realizar el pago
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center pt-3">
                        <div className="containers h-100">
                            <ParticipantsTable />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("root")) {
        createRoot(document.getElementById("root")).render(<App />);
    }
});

if (document.getElementById("react-navbar-container")) {
    createRoot(document.getElementById("react-navbar-container")).render(
        <Navbar />
    );
}
if (document.getElementById("react-footer-container")) {
    createRoot(document.getElementById("react-footer-container")).render(
        <Footer />
    );
}
