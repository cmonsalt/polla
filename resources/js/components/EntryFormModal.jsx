import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";

const EntryFormModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        last_name: "",
        phone: "",
        email: "",
        confirm_email: "",
        paymentMethod: "gateway",
    });

    const [csrfToken, setCsrfToken] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);
    const [showError, setShowError] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const response = await fetch("/csrf-token");
                if (!response.ok) {
                    throw new Error("Error al obtener el token CSRF");
                }
                const { token } = await response.json();
                setCsrfToken(token);
            } catch (error) {
                console.error(error);
                // Manejar el error
            }
        };
        fetchCsrfToken();
        return () => setIsSubmitting(false);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!isCaptchaVerified) {
            setErrorMessages(["Por favor, completa el reCAPTCHA."]);
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 5000);

            setIsSubmitting(false);
            return;
        }

        if (formData.email !== formData.confirm_email) {
            setErrorMessages(["Los correos electrónicos no coinciden."]);
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
            }, 5000);

            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            });

            const responseData = await response.json();

            if (!response.ok) {
                // console.log(responseData);
                const errors = responseData.errors
                    ? responseData.errors
                    : ["Ocurrió un error al enviar el formulario."];
                setErrorMessages(errors);
                setShowError(true);

                setTimeout(() => {
                    setShowError(false);
                }, 5000);

                setIsSubmitting(false);
                return;
            } else {
                if (responseData.id) {
                    openMercadoPagoCheckout(responseData.id);
                    onClose();
                } else {
                    // alert("El formulario se envió correctamente.");
                    setSuccessMessage(
                        "¡Registro exitoso! Bienvenido al sorteo."
                    );
                    setShowSuccessModal(true);
                    setTimeout(() => {
                        setShowSuccessModal(false);
                        onClose();
                        window.location.reload();
                    }, 3000);
                }
            }
        } catch (error) {
            alert("Ocurrió un error al procesar el formulario.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCaptchaVerify = (token) => {
        setRecaptchaToken(token); // Almacena el token ReCAPTCHA en el estado del componente
        setIsCaptchaVerified(true);
    };

    const openMercadoPagoCheckout = (preferenceId) => {
        const mp = new window.MercadoPago(
            "TEST-c076511e-0af6-47a9-8347-ecfc9bf4f639",
            {
                locale: "es-CO",
            }
        );

        mp.checkout({
            preference: {
                id: preferenceId,
            },
            autoOpen: true,
        });
    };
    const handleCloseError = () => {
        setShowError(false);
    };

    return (
        <div className="modal" style={{ display: "block" }}>
            {showError && (
                <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                    style={{
                        position: "absolute",
                        zIndex: 1050,
                    }}
                >
                    <ul>
                        {errorMessages.map((message, index) => (
                            <li key={index}>{message}</li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                        onClick={handleCloseError}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
            {showSuccessModal && (
                <div
                    className="modal d-block"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-success">
                                    Éxito
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setShowSuccessModal(false)}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">{successMessage}</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowSuccessModal(false)}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title title-style">
                            <FontAwesomeIcon
                                icon={faClipboard}
                                className="mr-2"
                            />
                            Formulario de Entrada
                        </h5>
                        <button
                            type="button"
                            className="close"
                            onClick={onClose}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {isSubmitting && (
                            <div
                                className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.5)",
                                    zIndex: 1050,
                                }}
                            >
                                <div
                                    className="spinner-border text-primary"
                                    role="status"
                                >
                                    <span className="sr-only">Cargando...</span>
                                </div>
                            </div>
                        )}
                        <input type="hidden" name="_token" value={csrfToken} />
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="name">*Nombre:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="last_name">
                                            *Apellidos:
                                        </label>
                                        <input
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            *Teléfono:
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            *Correo Electrónico:
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="confirm_email">
                                            *Confirmar Correo Electrónico:
                                        </label>
                                        <input
                                            type="email"
                                            id="confirm_email"
                                            name="confirm_email"
                                            value={formData.confirm_email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Método de Pago:</label>
                                <div className="form-check d-flex align-items-center">
                                    <input
                                        type="radio"
                                        id="gateway"
                                        name="paymentMethod"
                                        value="gateway"
                                        checked={
                                            formData.paymentMethod === "gateway"
                                        }
                                        onChange={handleChange}
                                        className="form-check-input"
                                        required
                                    />
                                    <label
                                        className="form-check-label d-flex align-items-center"
                                        htmlFor="gateway"
                                    >
                                        <img
                                            src="/images/pse.jpg"
                                            alt="Logo PSE"
                                            style={{
                                                height: "40px",
                                                width: "auto",
                                                marginLeft: "5px",
                                            }}
                                        />
                                        <img
                                            src="/images/pse.png"
                                            alt="Logo PSE"
                                            style={{
                                                height: "30px",
                                                width: "auto",
                                                marginLeft: "5px",
                                            }}
                                        />
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        id="coupon"
                                        name="paymentMethod"
                                        value="coupon"
                                        checked={
                                            formData.paymentMethod === "coupon"
                                        }
                                        onChange={handleChange}
                                        className="form-check-input"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="coupon"
                                    >
                                        Cupón
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <ReCAPTCHA
                                    sitekey="6LfW2KkpAAAAAKKagjTC-G14JJ7fxCpP3T2kPgYM"
                                    onChange={handleCaptchaVerify}
                                    required
                                />
                            </div>

                            {formData.paymentMethod === "coupon" && (
                                <div className="form-group">
                                    <label htmlFor="coupon">Cupón:</label>
                                    <input
                                        type="text"
                                        id="coupon"
                                        name="coupon"
                                        value={formData.coupon}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            )}
                            <button
                                type="submit"
                                className="btn btn-primary mt-3 cta-button"
                                disabled={isSubmitting}
                            >
                                {formData.paymentMethod === "gateway"
                                    ? "PAGAR"
                                    : "ENTRAR"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryFormModal;
