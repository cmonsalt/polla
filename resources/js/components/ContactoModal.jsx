import React from "react";
import SocialIcons from "../components/SocialIcons";

function ContactoModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="modal d-flex align-items-center justify-content-center"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
            }}
        >
            <div
                className="modal-content p-4 bg-white"
                style={{
                    borderRadius: "8px",
                    width: "80%",
                    maxHeight: "90%",
                    overflowY: "auto",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    border: "1px solid #ccc",
                }}
            >
                <div className="modal-header w-100">
                    <h2 className="modal-title info-section-title">Contacto</h2>
                    <button type="button" className="close" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div
                    className="modal-body d-flex justify-content-center align-items-center flex-column flex-md-row"
                    style={{ width: "100%" }}
                >
                    <div className="col-md-8">
                        <SocialIcons />
                        <p className="mt-3 text-center">
                            Para soporte directo, por favor envíanos un correo
                            a:
                            <a
                                href="mailto:soporte@golazosorteos.com"
                                className="ml-2"
                            >
                                soporte@golazosorteos.co
                            </a>
                        </p>
                    </div>
                </div>

                <div className="modal-footer">
                    <button onClick={onClose} className="btn btn-secondary">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactoModal;
