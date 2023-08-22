import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CentralBox from "./components/CentralBox";
import Home from "./components/cardiopathie_carcinoïde/Home";
import ChoiceModule from "./components/ChoiceModule";
import Amylose from "./components/amylose_cardiaque";
import AmyloseModule from "./components/AmyloseModule";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChoiceModule />} />

        {/* Route pour la page d'accueil */}
        <Route
          exact
          path="/accueil_cas_clinique_cardiopathie_carcinoïde"
          element={<Home />}
        />

        <Route
          exact
          path="/accueil_cas_clinique_interactive_amylose_cardiaque"
          element={<Amylose />}
        />

        {/* Route pour la boîte centrale */}
        <Route
          path="/cas_clinique_cardiopathie_carcinoïde"
          element={<CentralBox />}
        />

        <Route
          path="/cas_clinique_interactive_amylose_cardiaque"
          element={<AmyloseModule />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
