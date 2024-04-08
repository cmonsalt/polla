import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export default function TicketsSoldCard() {
    const [entradasVendidas, setEntradasVendidas] = useState(0);

    useEffect(() => {
        fetch('/api/entradas-vendidas')
            .then(response => response.json())
            .then(data => {
                setEntradasVendidas(data.entradasVendidas);
            })
            .catch(error => console.error('Hubo un error al obtener las entradas vendidas:', error));
    }, []);

    return (
        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <div className="card justify-content-center card-info fixed-size-card">
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <FontAwesomeIcon icon={faTicket} className="icon" />
                        Entradas Vendidas
                    </h5>
                    <p className="card-text">{entradasVendidas}</p>
                </div>
            </div>
        </div>
    );
}
