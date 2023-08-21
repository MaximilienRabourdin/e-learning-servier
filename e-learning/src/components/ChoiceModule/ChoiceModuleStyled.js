import styled from "styled-components";

const ChoiceModuleStyled = styled.div`
  margin: 0;
  padding: 0;

  .all_section_choicemodule {
    min-width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
  }

  .firstModule,
  .secondModule,
  .thirdModule {
    min-width: 33.4%;
    height: 100vh;
    background-color: #ebf5ff;
    border: none;
    color: #005994;
    font-size: 42px;
    font-family: Abel, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; /* Utilisation de text-align pour centrer le texte */
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
  }

  .firstModule:hover,
  .secondModule:hover,
  .thirdModule:hover {
    background-color: #047ed0;
    color: white;
  }

  .servier_logo {
    position: fixed;
    width: 10rem;
    left: 1rem;
    bottom: 1rem;
    width: 10%;
    border-radius: 16px;
    background: #f6fcff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06) inset,
      4px 0px 4px 0px rgba(0, 0, 0, 0.06) inset;
  }
`;

export default ChoiceModuleStyled;
