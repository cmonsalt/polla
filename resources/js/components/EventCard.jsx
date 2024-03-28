import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function EventCard() {
    return (
        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <div className="card text-white justify-content-center card-state fixed-size-card">
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="icon"
                        />
                        Evento #00000001
                    </h5>
                    <p className="card-text">Activo</p>
                </div>
            </div>
        </div>
    );
}
