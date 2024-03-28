import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export default function TicketsAvailabilityCard() {
    return (
        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <div className="card text-white justify-content-center available-slots-card fixed-size-card">
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <FontAwesomeIcon icon={faTicket} className="icon" />
                        Entradas Disponibles
                    </h5>
                    <p className="card-text">4</p>
                </div>
            </div>
        </div>
    );
}
