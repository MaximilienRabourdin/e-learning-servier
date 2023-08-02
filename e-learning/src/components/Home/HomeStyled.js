import styled from "styled-components";

const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/background_band.svg");
  background-size: cover;
  color: #005994;

  .text_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Abel, sans-serif;

    h1 {
      font-size: 42px;
    }
  }

  .servier_logo {
      width : 10%;
  }
`;

export default HomeStyled;
