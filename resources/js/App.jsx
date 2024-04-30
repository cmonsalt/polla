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
import SorteoExplicacionModal from "./components/SorteoExplicacionModal";
import TerminosYCondicionesModal from "./components/TerminosYCondicionesModal";
import PremiosModal from "./components/PremiosModal";
import PreguntasFrecuentesModal from "./components/PreguntasFrecuentesModal";
import ContactoModal from "./components/ContactoModal";
import PoliticaModal from "./components/PoliticaModal";
import SocialIcons from "./components/SocialIcons";


window.Navbar = Navbar;
export default function App() {
    const [eventStatus, setEventStatus] = useState("null");
    const [isLoading, setIsLoading] = useState(true);

    const [isSorteoModalOpen, setIsSorteoModalOpen] = useState(false);
    const [isTyCModalOpen, setIsTyCModalOpen] = useState(false);
    const [IsPremiosModalOpen, setIsPremiosModalOpen] = useState(false);
    const [IsPreguntasFrecuentesModalOpen, setIsPreguntasFrecuentesModalOpen] =
        useState(false);
    const [IsContactoModalOpen, setIsContactoModalOpen] = useState(false);
    const [IsPoliticaModalOpen, setIsPoliticaModalOpen] = useState(false);

    const openSorteoModal = () => setIsSorteoModalOpen(true);
    const closeSorteoModal = () => setIsSorteoModalOpen(false);

    const openTyCModal = () => setIsTyCModalOpen(true);
    const closeTyCModal = () => setIsTyCModalOpen(false);

    const openPremiosModal = () => setIsPremiosModalOpen(true);
    const closePremiosModal = () => setIsPremiosModalOpen(false);

    const openPreguntasFrecuentesModal = () =>
        setIsPreguntasFrecuentesModalOpen(true);
    const closePreguntasFrecuentesModal = () =>
        setIsPreguntasFrecuentesModalOpen(false);

    const openContactoModal = () => setIsContactoModalOpen(true);
    const closeContactoModal = () => setIsContactoModalOpen(false);

    const openPoliticaModal = () => setIsPoliticaModalOpen(true);
    const closePoliticaModal = () => setIsPoliticaModalOpen(false);

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
            <Navbar
                onOpenSorteoModal={openSorteoModal}
                onOpenTyCModal={openTyCModal}
                onOpenPremiosModal={openPremiosModal}
                onOpenPreguntasFrecuentesModal={openPreguntasFrecuentesModal}
                onOpenContactoModal={openContactoModal}
            />
            <SorteoExplicacionModal
                isOpen={isSorteoModalOpen}
                onClose={closeSorteoModal}
            />
            <TerminosYCondicionesModal
                isOpen={isTyCModalOpen}
                onClose={closeTyCModal}
            />

            <PremiosModal
                isOpen={IsPremiosModalOpen}
                onClose={closePremiosModal}
            />
            <PreguntasFrecuentesModal
                isOpen={IsPreguntasFrecuentesModalOpen}
                onClose={closePreguntasFrecuentesModal}
            />

            <ContactoModal
                isOpen={IsContactoModalOpen}
                onClose={closeContactoModal}
            />

    

            <PoliticaModal
                isOpen={IsPoliticaModalOpen}
                onClose={closePoliticaModal}
            />

            <div className="container">
                <div className="row bg-row">
                    <div className="col-md-4 d-flex flex-column align-items-center pt-3">
                        <div className="containers h-100 w-100">
                            <div
                                className={`event-status ${eventStatus.toLowerCase()} flex-container`}
                            >
                                <span>Evento #1 {eventStatus}</span>
                                {eventStatus === "Activo" && (
                                    <span className="blinking-dot"></span>
                                )}
                            </div>

                            <PrizeCard onOpenTyCModal={openTyCModal} />
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center pt-3">
                        <div className="containers h-100 w-100">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <TicketsSection />
                                <div className="d-flex justify-content-center pt-3">
                                    <TicketsAvailabilityCard />
                                    <TicketsSoldCard />
                                </div>
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
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center pt-3">
                        <div className="containers h-100 w-100">
                            <ParticipantsTable />
                            {/* <p className="prize-detail">
                            📋 Lista Actual de Participantes y Marcadores
                                Asignados
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                onOpenPoliticaModal={openPoliticaModal}
             />
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
