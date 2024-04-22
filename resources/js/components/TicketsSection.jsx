import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

function TicketsSection() {
    const [marcadores, setMarcadores] = useState([]);
    const [tooltip, setTooltip] = useState({
        show: false,
        content: "",
        x: 0,
        y: 0,
    });

    useEffect(() => {
        fetch("/api/marcadores")
            .then((response) => response.json())
            .then((data) => setMarcadores(data))
            .catch((error) =>
                console.error("Error al cargar los marcadores:", error)
            );
    }, []);

    const getMarcadorWeightClass = (marcador) => {
        switch (marcador.peso) {
            case "Alto":
                return "alto";
            case "Medio":
                return "medio";
            case "Bajo":
                return "bajo";
            default:
                return "";
        }
    };

    const showTooltip = (event, content) => {
        setTooltip({
            show: true,
            content: content,
            x: event.clientX,
            y: event.clientY + 20, // Offset to position below cursor
        });
    };

    const hideTooltip = () => {
        setTooltip({ show: false, content: "", x: 0, y: 0 });
    };

    return (
        <div className="pe-md-2 d-flex flex-column align-items-center">
            <h4 className="title-style">
                <FontAwesomeIcon icon={faTicket} className="icon" />
                Marcadores
            </h4>
            <div className="grid-container">
                {tooltip.show && (
                    <div
                        className="tooltipg"
                        style={{
                            position: "fixed",
                            top: `${tooltip.y}px`,
                            left: `${tooltip.x}px`,
                            padding: "10px 20px", // Valores de padding reducidos para dar más espacio al texto
                            backgroundColor: "#333333",
                            color: "white",
                            borderRadius: "5px",
                            zIndex: 9999,
                            display: "block", // Asegura que siempre se muestre cuando deba estar visible
                            minWidth: "500px", // Un ancho mínimo para acomodar el contenido
                            maxWidth: "500px", // Un ancho máximo para prevenir que el tooltip sea demasiado grande
                            height: "auto",
                            whiteSpace: "normal", // Permite que el texto se ajuste al cambiar de línea
                            overflowWrap: "break-word", // Asegura que las palabras se rompan si son demasiado largas para la línea
                        }}
                    >
                        {tooltip.content}
                    </div>
                )}
                {marcadores.map((marcador, index) => (
                    <div
                        key={index}
                        className={`circle ${
                            !marcador.status ? "gray" : ""
                        } ${getMarcadorWeightClass(marcador)}`}
                        onMouseEnter={(e) =>
                            showTooltip(e, getTooltipContent(marcador))
                        }
                        onMouseLeave={hideTooltip}
                    >
                        {marcador.marcador}
                    </div>
                ))}
            </div>
        </div>
    );
}
function getTooltipContent(marcador) {
    switch (marcador.peso) {
        case "Alto":
            return "🌟 ¡Gran oportunidad! Este es uno de los marcadores más comunes en el fútbol. Si se te asigna, estarás a un paso de ganar el premio mayor. ¡Suerte!";
        case "Medio":
            return "🎯 Este resultado no es muy común, pero si coincide con el segundo lugar determinado por la organización, ganarás un cupón para participar gratis en el próximo evento.";
        case "Bajo":
            return "🍀 Poco probable, pero no imposible. Si este resultado coincide con el segundo lugar determinado por la organización, también ganarás un cupón para el próximo evento. ¡Intenta tu suerte!";
        default:
            return "🍀 Marcador disponible. Si tu compra es exitosa, se te asignará uno al azar. ¡Que la suerte esté de tu lado!";
    }
}



export default TicketsSection;
