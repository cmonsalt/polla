import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export default function TicketsSoldCard() {
    return (
        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <div className="card text-white justify-content-center card-info fixed-size-card">
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <FontAwesomeIcon icon={faTicket} className="icon" />
                        Entradas Vendidas
                    </h5>
                    <p className="card-text">31</p>
                </div>
            </div>
        </div>
    );
}
