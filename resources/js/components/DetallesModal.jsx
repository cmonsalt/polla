import React from "react";

function DetallesModal({ isOpen, onClose }) {
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
                        Detalles del Evento:
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
                                Marcadores y Sorteo:
                            </strong>
                            <p>
                                Tras tu compra, recibirás uno de los{" "}
                                <strong>50 marcadores</strong> aleatorios,
                                categorizados en alta 📈, media 📊, y baja 📉
                                probabilidad. Todos ofrecen la chance de ganar,
                                con premios especiales para las probabilidades
                                más bajas.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px", color: "#333" }}>
                            <strong className="step-header">Precio:</strong>
                            <p>
                                Cada marcador tiene un costo de{" "}
                                <strong>$20.000 COP</strong>. Realiza tu pago
                                fácilmente a través de  <strong>Mercado Pago usando PSE</strong>,
                                donde encontrarás los principales Bancos, Nequi y DaviPlata.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                Partido de Fútbol:
                            </strong>
                            <p>
                                Una vez distribuidos todos los marcadores,
                                anunciaremos en redes sociales o en nuestro
                                sitio web el partido decisivo. Será un encuentro
                                destacado de las{" "}
                                <strong>
                                    ligas top de Europa, la Champions League o
                                    la Liga Colombiana.
                                </strong>
                                ¡Estén atentos a este emocionante evento en
                                GolasoSorteos!
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                Finalización del Evento
                            </strong>
                            <p>
                                El evento finaliza una vez se venda la totalidad
                                de los marcadores.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                            className="img-rounded-top"
                            src="/images/imageDetalles.webp"
                            alt="Descripción de la Imagen"
                        />
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetallesModal;
