import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import EventCard from "./components/EventCard.jsx";
import PrizeCard from "./components/PrizeCard.jsx";
import TicketsAvailabilityCard from "./components/TicketsAvailabilityCard.jsx";
import TicketsSoldCard from "./components/TicketsSoldCard.jsx";
import TicketsSection from "./components/TicketsSection.jsx";
import ParticipantsTable from "./components/ParticipantsTable.jsx";
import PurchaseInfo from "./components/PurchaseInfo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

window.Navbar = Navbar;
export default function App() {
    // Datos de prueba para los participantes
    const participantes = [
        { id: 1, nombre: "Juan Pérez", pais: "España", resultado: "2-1" },
        { id: 2, nombre: "Ana Gómez", pais: "México", resultado: "1-0" },
        { id: 3, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 4, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 5, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 6, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 7, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 8, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 9, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 10, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 1, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 1, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 1, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 1, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 1, nombre: "Juan Pérez", pais: "España", resultado: "2-1" },
        { id: 1, nombre: "Ana Gómez", pais: "México", resultado: "1-0" },
        { id: 1, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 1, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
        { id: 1, nombre: "Marco Rossi", pais: "Italia", resultado: "3-2" },
    ];

    return (
        <div className="App">
            <Navbar />
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <EventCard />
                    <PrizeCard />
                    <TicketsAvailabilityCard />
                    <TicketsSoldCard />
                </div>
                <hr />
                <div className="row mt-4">
                    <TicketsSection />
                    <div className="col-md-1"></div>
                    <div className="col-md-6 border ps-md- d-flex flex-column align-items-center">
                        <h4 className="title-style">
                            <FontAwesomeIcon icon={faUsers} className="icon" />
                            Participantes
                        </h4>
                        <ParticipantsTable participantes={participantes} />
                        <PurchaseInfo />
                    </div>
                </div>
            </div>
            <footer className="text-white mt-5">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                            <h5>Mi Sitio Web</h5>
                            <p>
                                &copy; 2024 Mi Empresa, Inc. Todos los derechos
                                reservados.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <a href="#" className="text-white mr-2">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white mr-2">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white mr-2">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <a href="#" className="text-light">
                                Política de Privacidad
                            </a>{" "}
                            |
                            <a href="#" className="text-light">
                                Términos y Condiciones
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("root")) {
        createRoot(document.getElementById("root")).render(<App />);
    }
});

