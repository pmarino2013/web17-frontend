import React from "react";

const Error404Screen = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#ff0000" }}>404</h1>
      <p style={{ fontSize: "24px", color: "#333" }}>Página no encontrada</p>
    </div>
  );
};

export default Error404Screen;
