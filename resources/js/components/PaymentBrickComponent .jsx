import React, { useEffect } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";

const PaymentBrickComponent = () => {
  useEffect(() => {
    const renderPaymentBrick = async (bricksBuilder) => {
      const mp = new MercadoPago('APP_USR-51376186-6a3a-4e29-be9f-99a2eba087b7', {
        locale: 'es'
      });
      const bricksBuilder = mp.bricks();
  
      const settings = {
        initialization: {
          amount: 10000,
          preferenceId: "<PREFERENCE_ID>",
          payer: {
            firstName: "",
            lastName: "",
            email: "",
          },
        },
        customization: {
          visual: {
            style: {
              theme: "default",
            },
          },
          paymentMethods: {
            bankTransfer: "all",
            atm: "all",
            onboarding_credits: "all",
            wallet_purchase: "all",
            maxInstallments: 1
          },
        },
        callbacks: {
          onReady: () => {
            /*
             Callback llamado cuando el Brick está listo.
             Aquí puede ocultar cargamentos de su sitio, por ejemplo.
            */
          },
          onSubmit: ({ selectedPaymentMethod, formData }) => {
            // callback llamado al hacer clic en el botón de envío de datos
            return new Promise((resolve, reject) => {
              fetch("/process_payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              })
                .then((response) => response.json())
                .then((response) => {
                  // recibir el resultado del pago
                  resolve();
                })
                .catch((error) => {
                  // manejar la respuesta de error al intentar crear el pago
                  reject();
                });
            });
          },
          onError: (error) => {
            // callback llamado para todos los casos de error de Brick
            console.error(error);
          },
        },
      };
      window.paymentBrickController = await bricksBuilder.create(
        "payment",
        "paymentBrick_container",
        settings
      );
    };
    renderPaymentBrick();
  }, []);

  return (
    <div id="paymentBrick_container"></div>
  );
};

export default PaymentBrickComponent;
