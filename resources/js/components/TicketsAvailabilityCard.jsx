import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export default function TicketsAvailabilityCard() {
    const [entradasDisponibles, setEntradasDisponibles] = useState(0);

    useEffect(() => {
        // Realiza la petición al servidor para obtener las entradas disponibles
        fetch('/api/entradas-disponibles')
            .then(response => response.json())
            .then(data => {
                setEntradasDisponibles(data.entradasDisponibles);
            })
            .catch(error => console.error('Hubo un error al obtener las entradas disponibles:', error));
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

    return (
        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <div className="card justify-content-center available-slots-card fixed-size-card">
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <FontAwesomeIcon icon={faTicket} className="icon" />
                        Entradas Disponibles
                    </h5>
                    {/* Añade una clase adicional para estilizar el número de entradas disponibles */}
                    <p className="card-text number-of-tickets">{entradasDisponibles}</p>
                </div>
            </div>
        </div>
    );
}
