import React from "react";
import HomeStyled from "./HomeStyled";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

function Home() {
  return (
    <HomeStyled>
      <div className="all_page">
        <div className="text_section">
          <h1>
            Une étude de cas clinique interactive sur une cardiopathie
            carcinoïde
          </h1>

          <h2>
            {" "}
            Préparé en collaboration avec le Pr Abdoul Kane et le Pr
            Jean-Baptiste Anzouan.
            <br />
            Merci également au Dr KHADRA, Dr MBAYE et Dr LEYE.
          </h2>
        </div>
      </div>

      <div className="button_section">
        <Link to="/cas_clinique_cardiopathie_carcinoïde">
          <IoIosArrowForward className="arrow_forward" />
        </Link>{" "}
        <img className="servier_logo" src="/servier_logo.png" />
      </div>
    </HomeStyled>
  );
}

export default Home;
