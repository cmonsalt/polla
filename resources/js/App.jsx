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
import { faUsers } from "@fortawesome/free-solid-svg-icons";

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
            <Navbar eventStatus={eventStatus} />
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <PrizeCard />
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 d-flex flex-column align-items-center bg-col pt-3">
                        <TicketsSection />
                        <div className="d-flex justify-content-center pt-3">
                            <TicketsAvailabilityCard />
                            <TicketsSoldCard />
                        </div>
                        <p className="prize-detail">
                            El sistema asigna aleatoriamente la Entrada despues
                            de realizar el pago
                        </p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 d-flex flex-column align-items-center bg-col pt-3">
                        <h4 className="title-style">
                            <FontAwesomeIcon icon={faUsers} className="icon" />
                            Participantes
                        </h4>
                        <ParticipantsTable />
                        {eventStatus && eventStatus === "Finalizado" && (
                        <div className="event-finished-message">
                            <h3 className="event-finished-message">¡Gracias por participar!</h3>
                            <p>El evento ha finalizado. Estén atentos para futuros eventos.</p>
                        </div>
                    )}
                    {/* Renderiza el componente PurchaseInfo solo si el estado del evento es 'Activo' */}
                    {eventStatus === "Activo" && <PurchaseInfo />}
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
