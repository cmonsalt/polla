import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export default function TicketsAvailabilityCard() {
    const [entradasDisponibles, setEntradasDisponibles] = useState(0);

    useEffect(() => {
        // Realiza la petición al servidor para obtener las entradas disponibles
        fetch("/api/entradas-disponibles")
            .then((response) => response.json())
            .then((data) => {
                setEntradasDisponibles(data.entradasDisponibles);
            })
            .catch((error) =>
                console.error(
                    "Hubo un error al obtener las entradas disponibles:",
                    error
                )
            );
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

    return (
        <div className="text-center info-available mr-5">
            <p className="info-text highlight">{entradasDisponibles}</p>
            <h6 className="info-title">
                <FontAwesomeIcon icon={faTicket} className="icon" />
                 Disponibles
            </h6>
        </div>
    );
}
