import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export default function TicketsSoldCard() {
    const [entradasVendidas, setEntradasVendidas] = useState("Cargando...");

    useEffect(() => {
        fetch("/api/entradas-vendidas")
            .then((response) => response.json())
            .then((data) => {
                setEntradasVendidas(data.entradasVendidas);
            })
            .catch((error) =>
                console.error(
                    "Hubo un error al obtener las entradas vendidas:",
                    error
                )
            );
    }, []);

    return (
        <div className="text-center info-sold">
            <p className="info-text highlight">{entradasVendidas}</p>
            <h6 className="info-title">
                <FontAwesomeIcon icon={faTicket} className="icon" />
                Asignados
            </h6>
        </div>
    );
}
