import React from "react";
import HomeStyled from "./HomeStyled";

function Home() {
  return (
    <HomeStyled>
      <div className="all_page">
       <div className='text_section'>
        <h1>
          Une étude de cas clinique interactive sur une cardiopathie carcinoïde
        </h1>

        <h2>
          {" "}
          Préparé en collaboration avec le Pr Abdoul Kane et le Pr Jean-Baptiste
          Anzouan.
          <br />
          Merci également au Dr KHADRA, Dr MBAYE et Dr LEYE.
        </h2>
        </div>
      </div>

      <div className="button_section"> 
      <button> button </button>
      </div>

      <div className="logo_section">
      <img className='servier_logo' src='/servier_logo.png'/>
      </div>
    </HomeStyled>
  );
}

export default Home;
