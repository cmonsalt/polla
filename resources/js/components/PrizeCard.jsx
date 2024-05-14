import React from "react";

export default function PrizeInfo({ onOpenTyCModal, onOpenDetallesModal }) {
    return (
        <div>
            <div className="text-center prize-header">
                <div className="d-flex align-items-center justify-content-center">
                    <h3 className="text-campeon">🏆 PREMIO CAMPEON:</h3>
                </div>
                <div className="prize-amount mb-2">
                    <p className="lead">
                        Gana hasta 20 veces el valor de tu marcador{" "}
                        <strong>($400.000)</strong> + <strong>1 Cupón</strong>{" "}
                        para el Próximo Evento
                    </p>
                </div>
                <div className="prize-amount mb-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <h3 className="text-subcampeon">
                            🥉 PREMIO CONSOLACIÓN:
                        </h3>
                    </div>
                    <p className="lead">
                        <strong>9 cupones</strong> próximo sorteo para los
                        marcadores: <strong>[1-4]</strong>, <strong>[5-1]</strong>,{" "}
                        <strong>[6-0]</strong>, <strong>[1-5]</strong>,{" "}
                        <strong>[7-2]</strong>, <strong>[7-1]</strong>,{" "}
                        <strong>[2-6]</strong>, <strong>[8-1]</strong>, y{" "}
                        <strong>[4-5]</strong>.
                    </p>
                </div>
                <p className="prize-detail">
                    Descubre cómo se determinan los ganadores y se asignan los
                    marcadores en nuestra sección de{" "}
                    <a href="#" className="terms-link" onClick={onOpenTyCModal}>
                        Términos y Condiciones
                    </a>
                    .
                </p>
                <button
                    className="btn btn-secondary bt-detalles"
                    onClick={onOpenDetallesModal}
                >
                    Detalles Evento
                </button>
            </div>

            {/* <div className="d-flex justify-content-center">{children}</div> */}
        </div>
    );
}
