import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

//importar función petición a servidor payment
import { pagarMercadoPago } from "../helpers/payment";

const PaymentBtnApp = ({ datos }) => {
  const [idReference, setIdReference] = useState(null);

  // Inicializa Mercado Pago con tu Public Key usando variables de entorno
  const publicKey = "APP_USR-dab76a6e-adad-4b25-8532-5e2dca3649bd";

  initMercadoPago(publicKey);

  useEffect(() => {
    //Obtener referencia de pago llamando al servidor usando la API de mercadopago y guardarla en el estado
    pagarMercadoPago({
      titulo: "Carrito de compras",
      cantidad: 1,
      precio: datos.total,
    }).then((response) => setIdReference(response.id));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div style={{ width: "300px" }}>
        {idReference && (
          <Wallet
            initialization={{
              preferenceId: idReference,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentBtnApp;
