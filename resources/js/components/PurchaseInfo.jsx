import React, { useState } from "react";
import EntryFormModal from "./EntryFormModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

const PurchaseInfo = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    window.addEventListener('popstate', () => {
        setShowModal(false);
    });

    return (
        <div>
            <button className="btn btn-primary mt-4 cta-button" onClick={handleOpenModal}>
            <FontAwesomeIcon icon={faTicket} className="icon" />Comprar Entrada
            </button>
            {showModal && (
                <EntryFormModal onClose={handleCloseModal} />
            )}
            <div className="price-info mt-2">
                Precio Por Entrada: <strong>17.000 COP</strong>
            </div>
        </div>
    );
}

export default PurchaseInfo;
