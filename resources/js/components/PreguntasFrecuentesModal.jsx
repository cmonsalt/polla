import React from "react";

function PreguntasFrecuentesModal({ isOpen, onClose }) {
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
                        Preguntas Frecuentes
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
                                ¿Cómo puedo participar en los sorteos?
                            </strong>
                            <p>
                                Para participar, simplemente realiza una compra
                                en nuestra plataforma. Al completar tu pago, se
                                te asignará un marcador al azar, el cual
                                determinará tus posibilidades de ganar basado en
                                el resultado del partido de fútbol seleccionado
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                ¿Cómo se determinan los ganadores?
                            </strong>
                            <p>
                                Los ganadores se determinan al finalizar el
                                partido de fútbol seleccionado. Si tu marcador
                                coincide con el resultado final, ¡podrías ser el
                                ganador del premio campeón! También ofrecemos
                                premios de consolación si tu marcador coincide con
                                resultados específicos designados antes del
                                sorteo.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                ¿Es seguro participar en los sorteos?
                            </strong>
                            <p>
                                Sí, nuestra plataforma utiliza tecnología de
                                cifrado y cumplimiento de estándares de
                                seguridad para garantizar que todas las
                                transacciones y participaciones son seguras y
                                privadas.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                ¿Cuáles son los premios disponibles?
                            </strong>
                            <p>
                                Ofrecemos diversos premios, incluyendo un premio
                                campeón sustancial y varios premios de sonsolación en
                                cada sorteo. Los detalles específicos de los
                                premios se anuncian antes de cada evento en
                                nuestras redes sociales.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                ¿Puedo participar desde cualquier lugar?
                            </strong>
                            <p>
                                Sí, puedes participar desde cualquier ciudad
                                dentro de Colombia.
                            </p>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                ¿Cómo puedo verificar el resultado de los
                                sorteos?
                            </strong>
                            <p>
                                Los resultados de los sorteos se publican en
                                nuestras redes sociales, asi que debes estar muy
                                atento.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                            className="img-rounded-top"
                            src="/images/imagePreguntas.webp"
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

export default PreguntasFrecuentesModal;
