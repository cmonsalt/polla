// ParticipantsTable.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl, faUser, faGlobe, faTicket } from "@fortawesome/free-solid-svg-icons";

const ParticipantsTable = ({ participantes }) => {
    return (
        <div className="table-responsive">
            <table className="table my-table">
                <thead className="thead-light">
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
                            <FontAwesomeIcon icon={faGlobe} className="icon" />
                            País
                        </th>
                        <th>
                            <FontAwesomeIcon icon={faTicket} className="icon" />
                            Entrada
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {participantes.map((participante, index) => (
                        <tr key={index}>
                            <td>{participante.id}</td>
                            <td>{participante.nombre}</td>
                            <td>{participante.pais}</td>
                            <td>{participante.resultado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ParticipantsTable;
