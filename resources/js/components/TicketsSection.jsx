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
            y: event.clientY + 20,
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
                            top: "20%", 
                            left: "50%", 
                            transform: "translate(-50%, -50%)", 
                            padding: "10px 20px",
                            backgroundColor: "#333333",
                            color: "white",
                            borderRadius: "5px",
                            zIndex: 2,
                            display: "block",
                            minWidth: "40%", 
                            maxWidth: "40%", 
                            height: "auto",
                            whiteSpace: "normal",
                            overflowWrap: "break-word",
                            boxSizing: "border-box", 
                            fontSize: "0.9rem",
                        }}
                        dangerouslySetInnerHTML={{ __html: tooltip.content }}
                    />
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
    const statusText =
        marcador.status === 1 ? "✅ Listo para ser asignado" : "❌ Ya asignado";

        switch (marcador.peso) {
            case "Alto":
                return `📈 <span className="alto">Probabilidad Alta De Ganar</span> - <strong>¡${marcador.marcador} Muy codiciado!</strong> Este marcador, común en partidos de fútbol, te ofrece las mejores chances de ser el CAMPEÓN del evento. </br> ${statusText}`;
        
            case "Medio":
                return `📊 <span className="medio">Probabilidad Media De Ganar</span> - <strong>¡${marcador.marcador} Suficientemente habitual!</strong> Con este marcador, que aparece menos frecuentemente, todavía tienes buenas posibilidades de ser el CAMPEÓN, aunque con menos probabilidad que con un marcador alto. </br> ${statusText}`;
        
            case "Bajo":
                return `📉 <span className="bajo">Probabilidad Baja De Ganar</span> - <strong>¡${marcador.marcador} Poco frecuente!</strong> Este marcador es raro, lo que significa menores chances de ser CAMPEÓN. Sin embargo, si coincide con el resultado de CONSOLACIÓN, recibirás un cupón para que participes en el próximo evento. </br> ${statusText}`;
        
            default:
                return `<span className="default">Categoría no especificada</span> - <strong>${marcador.marcador}</strong> Cualquier marcador puede resultar ganador. Se te asignará uno al azar tras tu compra, y cualquier marcador podría hacerte CAMPEÓN o SUBCAMPEÓN dependiendo de los resultados oficiales. ¡La fortuna juega un papel crucial! </br> ${statusText}`;
        }
        
}

export default TicketsSection;
