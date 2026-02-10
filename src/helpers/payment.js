const url = "http://localhost:9005/api/payment";

export const pagarMercadoPago = async (datos) => {
  try {
    //petición POST con autenticación incluida para realizar el pago por mercado Pago. Usar los datos recibidos para enviarlos como cuerpo de la petición.

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(datos),
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};
