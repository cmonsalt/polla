import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function PrizeInfo({ children }) {
    return (
        <div>
            <div className="text-center prize-header">
                <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                        icon={faTrophy}
                        className="trophy-icon mr-2"
                    />
                    <h3 className="text-campeon mb-0">PREMIO CAMPEON:</h3>
                </div>
                <div className="prize-amount mb-2">
                    <p className="lead">
                        $1,200,000 + 1 Cupón para el Próximo Evento
                    </p>
                </div>
                <div className="prize-amount mb-4">
                    <div className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                            icon={faTrophy}
                            className="trophy-icon mr-2"
                            style={{ color: "silver" }}
                        />

                        <h3 className="text-subcampeon">PREMIO SUBCAMPEON:</h3>
                    </div>
                    <p className="lead">1 Cupón para el Próximo Evento</p>
                </div>
                <p className="prize-detail">
                    Descubre cómo se determinan los ganadores en nuestra sección
                    de{" "}
                    <a href="/terminos-y-condiciones" className="terms-link">
                        Términos y Condiciones
                    </a>
                    .
                </p>
            </div>

            <div className="d-flex justify-content-center">{children}</div>
        </div>
    );
}
