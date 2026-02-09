import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./views/LoginScreen";
import HomeScreen from "./views/HomeScreen";
import Error404Screen from "./views/Error404Screen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/success" element={<HomeScreen />} />

        <Route path="/failure" element={<Error404Screen />} />

        <Route path="/*" element={<Error404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}
