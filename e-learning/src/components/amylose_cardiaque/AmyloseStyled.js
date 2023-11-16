import styled from "styled-components";

const AmyloseStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #005994;
  background-image: url("/background_band.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: white;

  .all_page {
  }

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

  .arrow_forward {
    font-size: 40px;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    cursor: pointer;
    text-transform:none;
    border-radius:50%;
    padding:0.4rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06) inset,
      4px 0px 4px 0px rgba(0, 0, 0, 0.06) inset;
  }

  .button_section {
    cursor: pointer;
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

  .springerhealthcare_logo {
    position: fixed;
    width: 10rem;
    left: 12rem;
    bottom: 1.2rem;
    width: 18%;
    border-radius: 16px;
    background: #f6fcff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06) inset,
      4px 0px 4px 0px rgba(0, 0, 0, 0.06) inset;
  }


`;

export default AmyloseStyled;
