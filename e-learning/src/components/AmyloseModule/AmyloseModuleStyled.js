import styled from "styled-components";

const AmyloseModuleStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  font-family: Abel;

  .all-box {
    background: white;
    background-image: url("/background_band.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: white;
    margin: 4rem 8rem 6rem 8rem;
    height: 84vh;
    width: 80vw;
    display: flex;
    filter: drop-shadow(0px 7px 36px rgba(0, 89, 148, 0.24));
    border-radius: 10px;
    position: relative; /* Ajout de la propriété position relative */
  }

  .sidebar {
    width: 6rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #0089e3;
    border-radius: 10px 0px 0px 10px;
  }

  .all_button {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }

  .button {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    height: 80px;
    width: 80px;
    color: #0071bb;

    a {
      margin-top: 0.4rem;
      color: #fff;
      font-family: Abel;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: white;
    }
  }

  img {
    width: 80%;
    cursor: pointer;
  }

  .image_ett {
    width: 50%;
  }

  .image_ett_section {
    display:flex;
  }

  .ett_text_section {
    display:flex;
    justify-content:space-between;
    width: 100%:
  }

  .text_ett {
    margin:0  1rem;
  }

  p {
    font-size: 18px;
  }

  li {
    font-size: 18px;
  }

  .objectives_section_title {
    font-size: 24px;
  }

  .right_section {
    width: 100%;
    height: 100%;
  }

  .slide_content {
    padding: 0 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    max-width: 100%;
  }

  .examenmedical_section {
    width: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-content: flex-start;

    p {
      margin: 0rem;
    }
  }

  .examenmedical_section_left {
    width: 50%;
    max-height: 100%;
    display: flex;
    align-items: flex-end;
    align-content: center;
    flex-direction: column;
  }

  .divider {
    border: 2px solid #e0ebf4;
    margin: 0 4rem;
  }

  .examenmedical_section_right {
    width: 50%;
    max-height: 100%;
    display: flex;
    align-items: flex-start;
    align-content: center;
    flex-direction: column;
  }

  .slide-fade-enter {
    opacity: 0;
  }

  .slide-fade-enter-active {
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .slide-fade-exit {
    opacity: 1;
  }

  .slide-fade-exit-active {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .slide_content_thoraco-abdomino {
    display: flex;
  }

  .slide_title {
    color: #005994;
    font-family: Abel;
    font-size: 30px;
    margin-left: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .slide_subtitle {
    /* Ajoutez les styles que vous souhaitez pour le sous-titre des diapositives */
  }

  .default_slide_content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .image_with_voice_over_section {
    /* Ajoutez les styles spécifiques pour les diapositives de type "imageWithVoiceOver" */
    audio {
      /* Ajoutez les styles pour le lecteur audio ici */
    }

    img {
    }
  }

  .additional_info {
    width: 100%;
    font-size: 14px;
    color: #7f7f7f;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .subtext {
    width: 100%;
    font-size: 14px;
    color: #7f7f7f;
    text-align: left;
  }

  .video_section {
    position: relative;
    width: 70%;
    height: 70%;
  }

  .video_section video {
    width: 100%;
    height: 100%;
  }

  .patient_presentation_section {
    display: flex;
    justify-content: center;
    align-content:center;
    align-items:center;
  }

  .image_patienteX {
    width: 10%;
    background-repeat: no-repeat;

  }

  .text_patienteX {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left:2rem;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
  }

  .patientHistory {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 4rem 0rem 0rem 4rem;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .cardiopathie_section {
    background_color: red;
    width: 80%;
    height: 50%;
  }

  /* quizz section */
  .quizz_slide {
    text-align: left;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .quizz_title {
    font-size: 22px;
    margin-top: 4rem;
  }

  #quizz {
    list-style-type: none;
    padding-left: 0;
  }

  .answer_button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    color: inherit;
    padding: 1rem;
  }

  .answer_button:hover {
    border: 1px solid #f1f8fe;
    color: #005a94;
    background-color: #f1f8fe;
    cursor: pointer;
    padding: 1.2rem;
    border-radius: 50px;
  }

  .answer_button.correct {
    color: green;
  }

  .answer_button.incorrect {
    color: red;
  }

  /* quizz section end  */

  .echocardiographie_image {
    width: 100%;
  }

  .presentation_slide_text {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .step_bar {
    position: fixed;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0.5rem;
    background: #f1f8ff;
    width: calc(
      100% - 7rem
    ); /* Utilisation de calc() pour ajuster la largeur */
    bottom: 0rem;
    z-index: 1; /* Ajout de la propriété z-index */
  }

  .previous_button {
    color: #0071bb;
    border: none;
    background-color: #f1f8ff;
    font-family: Abel;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

  .linear_progress {
    width: 80%;
    margin: 1rem;
  }

  .next_button {
    color: #0071bb;
    border: none;
    background-color: #f1f8ff;
    font-family: Abel;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

  .logo_section {
    position: fixed;
    left: 1rem;
    bottom: 1rem;
  }

  .servier_logo {
    width: 10%;
    border-radius: 16px;
    background: #f6fcff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06) inset,
      4px 0px 4px 0px rgba(0, 0, 0, 0.06) inset;
  }

  /* Pop UP */

  h4  {
    font-size: 30px;
    margin: 1rem 0rem;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* Fond semi-transparent */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background-color: white;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06) inset,
      4px 0px 4px 0px rgba(0, 0, 0, 0.06) inset;
  }

  #references p {
    font-size: 14px;
  }

  .close-button {
    background-color: #0071bb;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-family: Abel;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 1rem;
  }

  .abbreviation_text {
    font-size: 20px;
  }

  .instruction_control_buttonside {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
  }

  .button_instruction {
    height: 70px;
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin: 0.5rem 1rem;
  }
  .button_instruction_navigation {
    height: 70px;
    width: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin: 0.5rem 0rem;
  }

  .instruction_navigation {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  h5 {
    margin: 0;
  }

  .description_button_text {
    margin: 0;
  }

  .arrow_direction_instruction_left {
    image-orientation: revert;
    font-size: 30px;
    color: blue;
  }

  .arrow_direction_instruction_right {
    image-orientation: revert;
    font-size: 30px;
    color: blue;
    -webkit-transform: rotate(180deg);
  }
  .mesuredechocardiographie_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;
    overflow-y: auto;
  }

  .mesuredechocardiographie_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-height: 60vh;
  }

  .mesuredechocardiographie_text {
    flex: 1;
    margin-right: 20px;
    background-color: #f1f8fe;
    padding: 1rem;
    border-radius: 1rem;
  }

  .text_blue {
    color: ;
  }
  .imagerie_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;
    overflow-y: auto;
  }

  .imagerie_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .echocardiographie_image_container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    transition: background-color 0.3s ease-in-out;
  }
  .echocardiographie_image {
    max-width: 70%; /* Réduisez la largeur maximale */
    max-height: 250px; /* Réduisez la hauteur maximale */
  }

  .mesuredechocardiographie_title {
    font-weight: bold;
  }

  .mesuredechocardiographie_text p {
    margin: 0;
  }

  .mesuredechocardiographie_text ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mesuredechocardiographie_text li {
    font-size: 18px;
    transition: 0.3s ease-in-out;
    background-color: #f1f8fe;
    margin: 0.2rem 0rem;
    border-radius: 10px;
  }

  .subtext_echocardiographie {
    width: 100%;
    font-size: 14px;
    color: #7f7f7f;
    text-align: left;
  }
`;

export default AmyloseModuleStyled;
