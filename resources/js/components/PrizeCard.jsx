import React from "react";


export default function PrizeInfo({ onOpenTyCModal }) {
    return (
        <div>
            <div className="text-center prize-header">
                <div className="d-flex align-items-center justify-content-center">
                    <h3 className="text-campeon mb-0">🏆 PREMIO CAMPEON:</h3>
                </div>
                <div className="prize-amount mb-2">
                    <p className="lead">
                        $1,200,000 + 1 Cupón para el Próximo Evento
                    </p>
                </div>
                <div className="prize-amount mb-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <h3 className="text-subcampeon">
                            🥈 PREMIO SUBCAMPEON:
                        </h3>
                    </div>
                    <p className="lead">1 Cupón para el Próximo Evento</p>
                </div>
                <p className="prize-detail">
                    Descubre cómo se determinan los ganadores en nuestra sección
                    de{" "}
                    <a href="#" className="terms-link" onClick={onOpenTyCModal}>
                        Términos y Condiciones
                    </a>
                    .
                </p>
                <p className="prize-detail">
                    Los marcadores se asignan de forma aleatoria una vez
                    completado el pago.{" "}
                    <a href="#" className="terms-link" onClick={onOpenTyCModal}>
                        Términos y Condiciones
                    </a>
                    .
                </p>
            </div>

            {/* <div className="d-flex justify-content-center">{children}</div> */}
        </div>
    );
}
