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
import Footer from "./components/Footer.jsx";
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
