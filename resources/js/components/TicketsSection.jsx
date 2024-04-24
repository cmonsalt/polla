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
                            top: "20%", // Centrar verticalmente
                            left: "50%", // Centrar horizontalmente
                            transform: "translate(-50%, -50%)", // Ajustar el desplazamiento para centrar el elemento
                            padding: "10px 20px",
                            backgroundColor: "#333333",
                            color: "white",
                            borderRadius: "5px",
                            zIndex: 2,
                            display: "block",
                            minWidth: "40%", // Usar un porcentaje para que sea responsivo
                            maxWidth: "40%", 
                            height: "auto",
                            whiteSpace: "normal",
                            overflowWrap: "break-word",
                            boxSizing: "border-box", // Asegura que el padding esté incluido en el ancho
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
            return `📈 <span className="alto">Probabilidad Alta De Ganar</span> - <strong>¡${marcador.marcador} Muy codiciado!</strong> Este marcador es común en partidos de fútbol. <br/>Si el sistema te lo asigna, posees una gran oportunidad de ganar el PREMIO CAMPEON. ${statusText}`;

        case "Medio":
            return `📊 <span className="medio">Probabilidad Media De Ganar</span> - <strong>¡${marcador.marcador} Suficientemente habitual!</strong> Aunque este marcador ocurre con menos frecuencia, tus posibilidades de ganar el PREMIO CAMPEON son todavía significativas. </br> ${statusText}`;

        case "Bajo":
            return `📉 <span className="bajo">Probabilidad Baja De Ganar</span> - <strong>¡${marcador.marcador} Infrecuente!</strong> Aunque este marcador se da raramente, si coincide con el resultado establecido por la organizacion para el SUBCAMPEÓN, serás premiado con un cupón para participar en el próximo evento sin costo. </br> ${statusText}`;

        default:
            return `<span className="default">Categoría no especificada</span> - Cualquier marcador puede ser el ganador. <br/>Tras tu compra, se te asignará uno de manera aleatoria. ¡La fortuna juega un papel crucial! ${statusText}`;
    }
}

export default TicketsSection;
