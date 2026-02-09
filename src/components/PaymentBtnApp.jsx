import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { pagarMercadoPago } from "../helpers/payment";

const PaymentBtnApp = ({ datos }) => {
  const publicKey = import.meta.env.VITE_MP_PUBLIC_KEY;
  // initMercadoPago("APP_USR-f3bb0534-996a-4766-8856-4b54b18a81cc");
  initMercadoPago(publicKey);

  const [idReference, setIdReference] = useState(null);
  // Inicializa Mercado Pago con tu Public Key

  useEffect(() => {
    pagarMercadoPago({
      title: "Carrito de compras",
      cantidad: 1,
      precio: datos.total,
    }).then((response) => {
      console.log(response);
      setIdReference(response.id);
    });
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
      {/* <h1>Botón de Pago</h1>
      <p>Haz clic en el botón para realizar el pago.</p> */}
      {/* Renderiza el botón de pago */}
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
