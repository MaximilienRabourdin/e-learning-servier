import React from "react";
import CentralBoxStyled from "./CentralBoxStyled";

function CentralBox() {
  return (
    <CentralBoxStyled>
      <div className="all-box">
        <nav className="navbar">
        <ul className="all_button">
          <li className="button">
            <a href='../../public/menu_icon.svg'></a>
            <p>Menu</p>
          </li>
          <li className="button">
            <a href='../../menu_icon.svg'></a>
            <p>Menu</p>
          </li>
          <li className="button">
            <a href='../../public/menu_icon.svg'></a>
            <p>Menu</p>
          </li>
          <li className="button">
            <a href='../../../public/menu_icon.svg'></a>
            <p>Menu</p>
          </li>
        </ul>

        </nav>
        <div className="right_section"> 
        <div className="title_section">
        <p className="title_page"> Présentation du cas clinique interactif </p>
        </div>
        </div>
      </div> 
    </CentralBoxStyled>
  );
}

export default CentralBox;
