import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

export default function PrizeCard() {
    return (
        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <div className="card text-white justify-content-center card-awards fixed-size-card">
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <FontAwesomeIcon icon={faDollarSign} className="icon" />
                        Premio
                    </h5>
                    <p className="card-text">600.000 COP</p>
                </div>
            </div>
        </div>
    );
}
