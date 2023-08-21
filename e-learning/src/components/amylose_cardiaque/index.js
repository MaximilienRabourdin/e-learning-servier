import React from "react";
import AmyloseStyled from "./AmyloseStyled";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

function Amylose() {
  return (
    <AmyloseStyled>
      <div className="all_page">
        <div className="text_section">
          <h1>
          Une étude de cas clinique interactive sur une amylose cardiaque
          </h1>

          <h2>
            {" "}
            Préparé en collaboration avec 
le Pr Nadia Laredj et le Pr Jean-Baptiste Anzouan

            <br />
           
          </h2>
        </div>
      </div>

      <div className="button_section">
        <Link to="/cas_clinique_interactive_amylose_cardiaque">
          <IoIosArrowForward className="arrow_forward" />
        </Link>{" "}
        <img className="servier_logo" src="/servier_logo.png" />
      </div>
    </AmyloseStyled>
  );
}

export default Amylose;
