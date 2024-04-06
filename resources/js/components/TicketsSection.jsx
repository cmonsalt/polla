import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

function TicketsSection() {
    const [marcadores, setMarcadores] = useState([]);

    useEffect(() => {
        fetch("/api/marcadores")
            .then((response) => response.json())
            .then((data) => setMarcadores(data))
            .catch((error) =>
                console.error("Error al cargar los marcadores:", error)
            );
    }, []);

    return (
        <div className="col-md-6 bg-light border pe-md-2 d-flex flex-column align-items-center">
            <h4 className="title-style">
                <FontAwesomeIcon icon={faTicket} className="icon" />
                Entradas
            </h4>
            <div className="grid-container">
                {marcadores.map((marcador, index) => (
                    <div
                        key={index}
                        className={`circle ${!marcador.status ? "gray" : ""}`}
                    >
                        {marcador.marcador}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TicketsSection;
