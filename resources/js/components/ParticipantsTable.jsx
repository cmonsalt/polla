import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListOl,
    faUser,
    faGlobe,
    faTicket,
} from "@fortawesome/free-solid-svg-icons";

const ParticipantsTable = () => {
    const [participantes, setParticipantes] = useState([]);

    useEffect(() => {
        fetch("/api/participantes-aprobados")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setParticipantes(data);
            })
            .catch((error) =>
                console.error("Error al obtener los participantes:", error)
            );
    }, []);

    return (
        <div className="table-responsive">
            <table className="table my-table">
                <thead>
                    <tr>
                        <th>
                            <FontAwesomeIcon icon={faListOl} className="icon" />
                            Posición De Entrada
                        </th>
                        <th>
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            Nombre
                        </th>

                        <th>
                            <FontAwesomeIcon icon={faTicket} className="icon" />
                            Entrada
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {participantes.map((participante, index) => (
                        <tr
                            key={index}
                            className={
                                index % 2 === 0
                                    ? "table-row-even"
                                    : "table-row-odd"
                            }
                        >
                            <td>{index + 1}</td>
                            <td>{participante.nombre}</td>
                            <td className="my-table-resultado">{participante.marcador}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ParticipantsTable;
