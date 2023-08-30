import React from "react";
import ChoiceModuleStyled from "./ChoiceModuleStyled";

function ChoiceModule() {
  return (
    <ChoiceModuleStyled>
      <div className="all_section_choicemodule">
        <a
          href="/accueil_cas_clinique_cardiopathie_carcinoïde"
          className="firstModule"
        >
          {" "}
          Une étude de cas clinique interactive sur une cardiopathie carcinoïde
        </a>
        <a  href="/accueil_cas_clinique_interactive_amylose_cardiaque"
        className="secondModule">
          Une étude de cas clinique interactive sur une amylose cardiaque
        </a>
        <a className="thirdModule">?</a>
        <div className="logo_section">
        <img
          className="servier_logo"
          src="/servier_logo.png"
          alt="Servier Logo"
        />
  

        <img
          className="springerhealthcare_logo"
          src="/springer.svg"
          alt="Springer logo"
        />{" "}
      </div>      </div>
    </ChoiceModuleStyled>
  );
}

export default ChoiceModule;
