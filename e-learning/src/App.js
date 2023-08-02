import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CentralBox from "./components/CentralBox";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route exact path="/" element={<Home />} />

        {/* Route pour la boîte centrale */}
        <Route
          path="/cas_clinique_cardiopathie_carcinoïde"
          element={<CentralBox />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
