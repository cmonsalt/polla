import React from "react";

function SorteoExplicacionModal({ isOpen, onClose }) {
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
                        ¿Cómo Funciona?
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
                                Paso 1: Recibe Tu Marcador 🎯
                            </strong>
                            <p>
                                Al comprar tu marcador, el azar determinará tu
                                marcador. No todos los marcadores tienen la
                                misma probabilidad de ganar. Aunque algunos son
                                más codiciados por sus altas probabilidades,
                                también tienes la oportunidad de ser favorecido
                                con uno de los cupones del premio de consolación.
                                ¡La fortuna decide quién se lleva el gran premio
                                y quién podría continuar participando con un
                                bono para el próximo sorteo!
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                Paso 2: Completa Tu Compra 💳
                            </strong>
                            <p>
                                El azar podría jugar a tu favor. Procede con un
                                pago seguro y, una vez confirmada tu
                                transacción, la suerte determinará tu marcador.
                                Este marcador será tu llave hacia la posibilidad
                                de ganar en nuestro sorteo. ¡Que la fortuna te
                                acompañe!
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                Paso 3: Sigue el Evento 📺
                            </strong>
                            <p>
                                Mantén la emoción viva y sigue el partido de
                                fútbol seleccionado por la Organización del
                                evento. El resultado final del partido
                                determinará los marcadores ganadores. Toda la
                                acción en tiempo real, toda la adrenalina del
                                fútbol, ¡en GolazoSorteos!
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                Paso 4: Gana Premios 🏆
                            </strong>
                            <p>
                                Si tu marcador coincide con el resultado final
                                del partido, ¡podrías ser el ganador del premio
                                campeón! Además, otorgamos 9 premios de
                                consolación, que consisten en cupones para
                                participar en el próximo sorteo, ampliando tus
                                oportunidades de ganar.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                Paso 5: Cobrar y Participar de Nuevo 🔄
                            </strong>
                            <p>
                                ¿Has ganado? Felicidades, es hora de reclamar tu
                                premio. Y no te detengas ahí: cada evento trae
                                nuevas emociones y oportunidades. Compra otro
                                marcador y ¡vuelve a la emoción!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                            className="img-rounded-top"
                            src="/images/imageFuncionamiento.webp"
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

export default SorteoExplicacionModal;
