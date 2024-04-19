import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function PrizeInfo({ children }) {
    return (
        <div>
            <div className="text-center">
                <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
                <h2 className="prize-title">Premio del Evento</h2>
                <p className="prize-amount">$1,200,000 + 1 Cupón para el Próximo Evento</p>
                <p className="prize-detail">
                El ganador se anunciará al término del evento, basado en el marcador de un partido de fútbol seleccionado por la organización.
                </p>
            </div>
            <div className="d-flex justify-content-center">
                {children}
            </div>
        </div>
    );
}
