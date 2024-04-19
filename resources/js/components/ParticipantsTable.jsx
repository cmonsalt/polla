import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl, faUser, faTicket,faUsers } from "@fortawesome/free-solid-svg-icons";

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
        <div className="pe-md-2 d-flex flex-column align-items-center">
            <h4 className="title-style">
                <FontAwesomeIcon icon={faUsers} className="icon" />
                Participantes
            </h4>
            <div className="table-responsive">
                <table className="table my-table">
                    <thead>
                        <tr>
                            <th>
                                <FontAwesomeIcon
                                    icon={faListOl}
                                    className="icon"
                                />
                                Posición De Entrada
                            </th>
                            <th>
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="icon"
                                />
                                Nombre
                            </th>

                            <th>
                                <FontAwesomeIcon
                                    icon={faTicket}
                                    className="icon"
                                />
                                Marcador
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
                                <td className="my-table-resultado">
                                    {participante.marcador}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ParticipantsTable;
