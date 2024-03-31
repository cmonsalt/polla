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
        setIsSubmitting(true); // Deshabilitar el botón al enviar el formulario
  
        
  

        // if (!isCaptchaVerified) {
        //     alert("Por favor, completa el reCAPTCHA.");
        //     setIsSubmitting(false); // Re-habilitar el botón si hay un error
        //     return;
        // }

        if (formData.email !== formData.confirm_email) {
            alert("Los correos electrónicos no coinciden.");
            setIsSubmitting(false); // Re-habilitar el botón si hay un error
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

            const responseData = await response.json(); // Extrae los datos de la respuesta aquí, una sola vez

            if (!response.ok) {
                setIsSubmitting(false); // Re-habilitar el botón si hay un error
                // Si la respuesta no es ok, maneja los errores
                if (responseData.errors) {
                    // Construir el mensaje de error concatenando todos los mensajes
                    const errorMessage = responseData.errors.join("\n");
                    alert(errorMessage);
                } else {
                    // Si no hay un campo 'errors' específico, maneja el error de otra manera
                    alert("Ocurrió un error al enviar el formulario.");
                }
            } else {
                // Si la respuesta es exitosa y contiene preferenceId, redirige a MercadoPago
                // Esto pasa solo cuando se elije la pasarela de pago como medio  de
                if (responseData.id) {
                    openMercadoPagoCheckout(responseData.id);
                    onClose();
                } else {
                    // Si la respuesta es exitosa pero no contiene preferenceId, maneja según corresponda
                    // Podría ser un caso donde el formulario fue enviado exitosamente sin necesitar ir a MercadoPago
                    alert("El formulario se envió correctamente.");
                    onClose(); // Cierra el modal o realiza otra acción necesaria
                }
            }
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error al procesar el formulario.");
        }
    };

    const handleCaptchaVerify = (token) => {
        console.log("ReCAPTCHA token:", token);
        setRecaptchaToken(token); // Almacena el token ReCAPTCHA en el estado del componente
        setIsCaptchaVerified(true);
    };

    const openMercadoPagoCheckout = (preferenceId) => {
        // Inicializar Mercado Pago SDK con tu Public Key
        const mp = new window.MercadoPago(
            "TEST-ee6a13a8-0e8a-47c4-a052-3e04d42a7175",
            {
                locale: "es-CO", // Asegúrate de configurar el locale adecuado
            }
        );

        // Abrir el Checkout Pro con el ID de la preferencia
        mp.checkout({
            preference: {
                id: preferenceId,
            },
            autoOpen: true, // Opcional: abre el checkout automáticamente
        });
    };
    console.error(formData);

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
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
                        <input type="hidden" name="_token" value={csrfToken} />
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name">*Nombre:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
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
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
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
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
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
                                    />
                                    <label
                                        className="form-check-label d-flex align-items-center"
                                        htmlFor="gateway"
                                    >
                                        <img
                                            src="/images/pse.png"
                                            alt="Logo PSE"
                                            style={{
                                                height: "65px",
                                                width: "auto",
                                                marginRight: "35px",
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
                                className="btn btn-primary mt-3"
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
