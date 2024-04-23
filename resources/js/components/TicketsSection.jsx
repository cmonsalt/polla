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
            .catch((error) => console.error("Error al cargar los marcadores:", error));
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
            y: event.clientY + 20, // Offset para posicionar debajo del cursor
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
                            padding: "10px 20px",
                            backgroundColor: "#333333",
                            color: "white",
                            borderRadius: "5px",
                            zIndex: 9999,
                            display: "block",
                            minWidth: "500px",
                            maxWidth: "500px",
                            height: "auto",
                            whiteSpace: "normal",
                            overflowWrap: "break-word",
                        }}
                        dangerouslySetInnerHTML={{ __html: tooltip.content }}
                    />
                )}
                {marcadores.map((marcador, index) => (
                    <div
                        key={index}
                        className={`circle ${!marcador.status ? "gray" : ""} ${getMarcadorWeightClass(marcador)}`}
                        onMouseEnter={(e) => showTooltip(e, getTooltipContent(marcador))}
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
            return `<span class="alto"></span> <strong>¡Gran oportunidad!</strong> Este es uno de los marcadores más comunes en el fútbol.<br/>Si se te asigna, estarás a un paso de ganar el premio mayor. ¡Suerte! <br>${marcador.status === 1 ? "✅ Disponible Para Entregar" : "❌ Entregado"}`;
        case "Medio":
            return `🌟 <strong>Este resultado no es muy común,</strong> pero si coincide con el segundo lugar determinado por la organización, ganarás un cupón para participar gratis en el próximo evento.Estado: ${marcador.status === 1 ? "✅ Disponible Para Entregar" : "❌ Entregado"}`;
        case "Bajo":
            return `🌟 <strong>Poco probable, pero no imposible.</strong> Si este resultado coincide con el segundo lugar determinado por la organización, también ganarás un cupón para el próximo evento.Estado: ${marcador.status === 1 ? "✅ Disponible Para Entregar" : "❌ Entregado"}`;
        default:
            return `Marcador disponible. Si tu compra es exitosa, se te asignará uno al azar. ¡Que la suerte esté de tu lado!</div><div>Estado: ${marcador.status === 1 ? "✅ Disponible Para Entregar" : "❌ Entregado"}</div>`;
    }
}

export default TicketsSection;
