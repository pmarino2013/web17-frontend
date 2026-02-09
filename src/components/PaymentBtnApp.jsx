import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

//importar función petición a sercidor payment

const PaymentBtnApp = ({ datos }) => {
  const [idReference, setIdReference] = useState(null);

  // Inicializa Mercado Pago con tu Public Key usando variables de entorno
  const publicKey;

  initMercadoPago(publicKey);

  useEffect(() => {
    //Obtener referencia de pago llamando al servidor usando la API de mercadopago y guardarla en el estado
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
