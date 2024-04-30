import React from "react";

function PremiosModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="modal d-flex align-items-center justify-content-center"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
            }}
        >
            <div
                className="modal-content p-4 bg-white"
                style={{
                    borderRadius: "8px",
                    width: "80%",
                    maxHeight: "90%",
                    overflowY: "auto",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    border: "1px solid #ccc",
                }}
            >
                <div className="modal-header w-100">
                    <h2 className="modal-title info-section-title">
                        Sección de Premios
                    </h2>
                    <button type="button" className="close" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div
                    className="modal-body d-flex flex-column flex-md-row"
                    style={{ width: "100%" }}
                >
                    <div className="col-md-8">
                        <div style={{ marginBottom: "20px", color: "#333" }}>
                            <strong className="step-header">
                                🏆 Premio Campeón: El Triunfador del Evento
                            </strong>
                            <p>
                                Cada sorteo ofrece la posibilidad de ganar un
                                premio mayor sustancial. El poseedor del
                                marcador que coincida con el resultado final del
                                partido de fútbol seleccionado ganará 20 veces
                                lo apostado, es decir, $400,000. Este premio se
                                entrega como reconocimiento al marcador campeón
                                y la emoción no termina hasta el pitido final,
                                donde solo unos pocos marcadores tienen la clave
                                para el triunfo!
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                🥈 Premio Subcampeón: El Segundo en el Podio
                            </strong>
                            <p>
                                Además del premio campeón, nuestro sorteo ofrece
                                9 premios de consolación, especialmente
                                diseñados para aquellos marcadores con menor
                                probabilidad de coincidir con el resultado final
                                del partido. Cada uno de estos premios consiste
                                en un cupón para participar en el próximo
                                sorteo. Esta es una excelente oportunidad para
                                mantener viva la emoción y dar una segunda
                                oportunidad de ganar a los marcadores menos
                                favorecidos por el azar.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                🌟 Innovación en Cada Sorteo: Renovación
                                Constante
                            </strong>
                            <p>
                                Nos esforzamos por mantener las cosas frescas e
                                interesantes, introduciendo nuevos premios y
                                oportunidades en cada evento. Mantente al tanto
                                de los anuncios de la plataforma para estar
                                informado sobre los premios más recientes y
                                emocionantes.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                📜 Reclamación de Premios: Simplicidad y
                                Claridad
                            </strong>
                            <p>
                                Ganar es solo la mitad del viaje. La reclamación
                                de premios es fácil y transparente. Los
                                ganadores serán contactados directamente y
                                guiados a través de un proceso simple para
                                reclamar lo que han ganado. Y no te preocupes,
                                nuestro equipo de soporte estará contigo en cada
                                paso del camino, asegurando una comunicación
                                clara y directa.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                ⚖️ Fair Play: Transparencia Garantizada
                            </strong>
                            <p>
                                La integridad de nuestros sorteos es primordial.
                                Todos los premios se otorgan de acuerdo con
                                reglas claras y un proceso transparente. Puedes
                                confiar en que GolazoSorteos opera con la mayor
                                equidad y respeto hacia todos los participantes.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                            className="img-rounded-top"
                            src="/images/imagePremios.webp"
                            alt="Descripción de la Imagen"
                        />
                    </div>
                </div>

                <div className="modal-footer">
                    <button onClick={onClose} className="btn btn-secondary">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PremiosModal;
