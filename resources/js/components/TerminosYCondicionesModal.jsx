import React from "react";

function TerminosCondicionesModal({ isOpen, onClose }) {
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
                        Términos y Condiciones
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
                                1. Generalidades
                            </strong>
                            <p>
                                Estos Términos y Condiciones rigen la
                                participación en nuestros eventos de sorteos. Al
                                participar, aceptas estas condiciones que
                                aseguran un juego justo y transparente para
                                todos los participantes.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                2. Participación
                            </strong>
                            <p>
                                Para participar, debes comprar una entrada antes
                                del inicio del evento. Cada entrada comprada te
                                da derecho a un marcador, que se asignará
                                automáticamente mediante un sistema de sorteo al
                                azar. Ten en cuenta que solo estarán disponibles
                                50 marcadores por evento, aumentando así tus
                                posibilidades de ganar
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                3. Asignación de Marcadores
                            </strong>
                            <p>
                                Los marcadores son resultados potenciales de un
                                partido de fútbol y cada uno tiene una
                                probabilidad diferente de ocurrir, basada en
                                estadísticas históricas. Al finalizar tu compra,
                                nuestro sistema asignará aleatoriamente un
                                marcador a tu entrada. Este proceso garantiza
                                que cada participante tenga la misma oportunidad
                                de recibir cualquier marcador disponible, desde
                                el más común hasta el más codiciado.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                4. Marcador Codiciado
                            </strong>
                            <p>
                                Para mantener la emoción y la continuidad del
                                evento, el último marcador asignado será uno de
                                los más codiciados. Esta política asegura que la
                                imparcialidad y el entusiasmo se mantengan a lo
                                largo del evento, proporcionando un incentivo
                                adicional para los participantes que compran
                                hacia el final del período de venta.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                5. Sorteo de Marcadores
                            </strong>
                            <p>
                                El sistema de sorteo está diseñado para ser
                                completamente aleatorio, utilizando algoritmos
                                que garantizan una distribución equitativa de
                                los marcadores entre todos los participantes.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                6. Selección y Anuncio de Ganadores
                            </strong>
                            <p>
                                Los ganadores serán determinados por el
                                resultado del partido de fútbol asociado al
                                evento. Si el resultado del partido coincide con
                                tu marcador, serás declarado ganador. Los
                                ganadores serán anunciados en nuestro sitio web
                                y notificados por correo electrónico dentro de
                                las 24 horas posteriores a la finalización del
                                partido.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                7. Reclamo de Premios
                            </strong>
                            <p>
                                Los premios deben ser reclamados dentro de los
                                30 días siguientes al anuncio de los ganadores.
                                Las instrucciones detalladas para el reclamo de
                                premios estarán disponibles en nuestro sitio web
                                y serán enviadas a los ganadores a través de los
                                medios de contacto proporcionados durante la
                                compra de la entrada.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                8. Modificaciones
                            </strong>
                            <p>
                                Nos reservamos el derecho de modificar estos
                                términos y condiciones en cualquier momento.
                                Cualquier cambio será efectivo inmediatamente
                                después de su publicación en nuestro sitio web.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">9. Contacto</strong>
                            <p>
                                Para preguntas o inquietudes relacionadas con
                                los términos y condiciones, por favor
                                contáctanos a través de nuestra linea de
                                soporte.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                            className="img-rounded-top"
                            src="/images/imageTerminosCondiciones.webp"
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

export default TerminosCondicionesModal;
