import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons"; 

export default function PrizeInfo() {
    
    return (
        <div className="prize-info-container text-center">
            <FontAwesomeIcon icon={faTrophy} className="trophy-icon" />
            <h2 className="prize-title">Premio del Evento</h2>
            <p className="prize-amount">$1,100,000 + 1 Entrada para el Próximo Evento</p>
            <p className="prize-detail">
            El ganador se anunciará al término del evento, basado en un partido de fútbol seleccionado por la organización.
            </p>
        </div>
    );
}
