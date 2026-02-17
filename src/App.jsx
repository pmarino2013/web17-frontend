import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./views/LoginScreen";
import HomeScreen from "./views/HomeScreen";
import Error404Screen from "./views/Error404Screen";
import ProductSearchScreen from "./views/ProductSearchScreen";
import TemplateLayout from "./layout/TemplateLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<TemplateLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/buscar/:termino" element={<ProductSearchScreen />} />
        </Route>
        <Route path="/*" element={<Error404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}
