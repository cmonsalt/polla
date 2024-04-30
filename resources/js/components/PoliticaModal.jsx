import React from "react";

function PoliticaModal({ isOpen, onClose }) {
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
                    <h2 className="modal-title info-section-title">
                        Políticas de Privacidad de GolazoSorteos
                    </h2>
                    <button type="button" className="close" onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div
                    className="modal-body d-flex flex-column flex-md-row"
                    style={{ width: "100%" }}
                >
                    <div className="col-md-8">
                        <div style={{ marginBottom: "20px", color: "#333" }}>
                            <strong className="step-header">
                                1. Introducción
                            </strong>
                            <p>
                                En GolazoSorteos, nos comprometemos a proteger y
                                respetar su privacidad. Esta Política explica
                                cuándo y por qué recopilamos información
                                personal sobre las personas que visitan nuestro
                                sitio web, cómo la usamos, las condiciones bajo
                                las cuales podemos divulgarla a otros y cómo la
                                mantenemos segura.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                2. Información que Recopilamos
                            </strong>
                            <p>
                                Recopilamos información como nombre, apellidos,
                                dirección de correo electrónico, teléfono . Esta
                                información es necesaria para procesar las
                                participaciones en los sorteos y para informar a
                                los ganadores.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                3. Cómo y Por Qué Usamos Su Información
                            </strong>
                            <p>
                                Utilizamos su información para proporcionarle
                                los servicios que ha solicitado (como participar
                                en un sorteo), y mejorar nuestros servicios.
                                También usamos su información para comunicarnos
                                con usted sobre promociones y sorteos.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                4. Divulgación de Información
                            </strong>
                            <p>
                                No vendemos ni alquilamos información personal a
                                terceros bajo ninguna circunstancia. Estamos
                                comprometidos con proteger la privacidad de
                                nuestros usuarios y mantenemos toda la
                                información recopilada dentro de nuestra
                                plataforma exclusivamente para operar y mejorar
                                los servicios que ofrecemos
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                5. Seguridad de los Datos
                            </strong>
                            <p>
                                Tomamos la seguridad de sus datos muy en serio.
                                Implementamos medidas técnicas y organizativas
                                adecuadas para proteger sus datos personales
                                contra el acceso no autorizado, la alteración,
                                la divulgación o la destrucción.
                            </p>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                6. Sus Derechos
                            </strong>
                            <p>
                                No manejamos cuentas de usuario ni almacenamos
                                información personal que pueda ser editada o
                                gestionada por los usuarios. Como resultado, no
                                ofrecemos opciones para acceder, corregir,
                                borrar, transferir, restringir u objetar el
                                procesamiento de información personal.
                            </p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <strong className="step-header">
                                7. Cambios en la Política de Privacidad
                            </strong>
                            <p>
                                Cualquier cambio que realicemos en nuestra
                                política de privacidad en el futuro se publicará
                                en esta página y, cuando sea apropiado, se le
                                notificará por correo electrónico. Por favor,
                                revise frecuentemente para ver actualizaciones o
                                cambios en nuestra política de privacidad.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                            className="img-rounded-top"
                            src="/images/imagePolitica.webp"
                            alt="Descripción de la Imagen"
                        />
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

export default PoliticaModal;
