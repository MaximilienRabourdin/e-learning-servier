import styled from "styled-components";

const CentralBoxStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  font-family: Abel;

  h1 {
    font-weight: 800;
  }

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
    text-decoration:none;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }

  .link-button_exit { 
  text-decoration:none;
  width:100%}

  .text-button_exit {
    font-size: 16px;
    margin:0;
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

    .button a {
      text-decoration:none;
    }

    
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
    border-radius: 30px;
  }

  .image_echocardiographie {
    width: 90%;
    cursor: zoom-in; /* Curseur indiquant que l'image est cliquable pour le zoom */

  }

  .enlargedImage {
  width: auto; /* Ajustez la hauteur en conséquence pour préserver les proportions */
}

  .enlargedImage.zoomed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ajustez la taille tout en préservant les proportions */
  z-index: 9999; /* Pour que l'image agrandie apparaisse au-dessus de tout le reste */
  cursor: zoom-out; /* Curseur indiquant que l'image est cliquable pour réduire le zoom */
}

  p {
    font-size: 18px;
  }

  li {
    font-size: 22px;
  }

  .objectives_section_title {
    font-size: 24px;
    text-align: center;
  }

  .objective_group {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin-top: 3rem;
  }

  .objective {
    width: 30%;
    list-style: none;
    margin: 1rem;
    padding: 2rem;
    background-color: #21b0f0;
    color: white;
    border-radius: 20px;
    position: relative; /* Positionnement relatif pour les nombres */
  }

  .objective_number {
    background-color: #1172c0;
    font-weigth: bold;
    margin: 0; /* Supprimer la marge autour du nombre */
    padding: 1rem;
    border-radius: 50%; /* Utiliser 50% pour obtenir un border-radius rond */
    position: absolute; /* Positionnement absolu pour les nombres */
    top: 0; /* Aligner le nombre en haut */
    left: 0; /* Aligner le nombre à gauche */
    transform: translate(-50%, -50%); /* Centrer le nombre */
  }

    /* Styles pour la section de droite (texte) */
    .right_section {
    flex: 1; /* Prenez autant d'espace que possible */
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
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    align-content: center;
    align-items:center;

    
  }

  .examenmedical_section .subtext{
  margin-top:4rem;  
  }

  .examenmedical_section_left {
    width: 30%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .examenmedical_section img {
    max-width: 80%;
  }

  .examenmedical_section_center {
    width: 33%;
    display:flex;
    justify-content:center;
    border-right: 3px solid #E0EBF4
  }

  .examenmedical_section_center p {
    margin: 0.2rem;
  }

  .examenmedical_section_right {
    width: 33%;
    display:flex;
    justify-content:center;
    padding-left:4rem;
  }

  .examenmedical_section_right p {
    margin: 0.2rem;
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
    color: #21B0F0;
    font-family: Abel;
    font-size: 30px;
    margin-left: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
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
    margin: 0;
  }

  .additional_references {
    width: 100%;
    font-size: 12px;
    color: #7f7f7f;
    margin: 0;
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
    justify-content: space-around;
  }

  .image_patienteZ {
    border-radius: 10px;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    transition: transform 0.3s; /* Animation de transition pour un effet de zoom fluide */
    align-content: center;
    padding-right: 2rem;
  }

  .image_patienteZ:hover {
    transform: scale(1.2); /* Zoom sur l'image lors du survol de la souris */
    cursor: zoom-in; /* Curseur indiquant que l'image est cliquable pour le zoom */
  }

  .text_patienteZ {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0rem 4rem;
    padding-left: 4rem;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    border-left: 2px solid #1172c0;
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

  /* quizz section */

  .quizz-container { 
    background-color:#1172C0;
  }
  .quizz_slide {
    text-align: left;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color:white;
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
    padding: 1rem;
    border-radius: 50px;
  }

  .answer_button.correct {
    color: green;
    border: 1px solid #C4E0B2;
    border-radius: 50px;
    background-color: #C4E0B2;
    margin:0.4rem;
  }

  .answer_button.incorrect {
  }

  /* quizz section end  */

  .echocardiographie_image {
    width: 100%;
  }

  .all_presentation_slide {
     display:flex;
     align-items:center;
     align-content:center;
     justify-content:center;
     width:100%;
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
    width: calc(100% - 7rem);
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
    display: flex;
    position: fixed;
    left: 1rem;
    bottom: 1rem;
  }

  .logo_section_springerhealthcare_logo {
    position: fixed;
    left: 12rem;
    bottom: 1.4rem;
  }

  .servier_logo {
    width: 10%;
    border-radius: 16px;
    background: #f6fcff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06) inset,
      4px 0px 4px 0px rgba(0, 0, 0, 0.06) inset;
  }

  .springerhealthcare_logo {
    width: 20%;
    border-radius: 16px;
    margin-left: 2rem;
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
    font-size: 14px;
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

  /* instruction slide start */
  .all_instruction_slide {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-direction: column;
    margin: 1rem 0rem;
  }

  .all_instruction_control{
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:space-between;
  }

  .instruction_control_buttonside {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    align-content: center;
    margin-right:2rem;

    .button_instruction {
      height: 70px;
      width: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      margin: 0.4rem 1rem;
    }
  }


  .instruction_navigation {
    width: 50%;
    height:100%;

  }

  .button_instruction_navigation {
    height: 70px;
    width: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
   
  }


  h5 {
    margin: 0;
  }

  .description_button_text {
    margin: 0;
    text-decoration:none;
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

  .cardiopathie_section {
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    
  }

  .cardiopathie_section_text1 {
    background-color: #37AEFF;
    color:white;
    padding:1rem;
    margin-right:1rem;
    border-radius:10px;
  }


  .cardiopathie_section_text2 {
    background-color: #1789E3;
    color:white;
    padding:1rem;
    margin-right:1rem;
    border-radius:10px;
  }


  .cardiopathie_section_text3 {
    background-color: #1172C0;
    color:white;
    padding:1rem;
    margin-right:1rem;
    border-radius:10px;
  }

  .info_additional {
    margin-top:2rem;
  }



  .cardiopathie_section_left {
    width: 80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    align-content:flex-start;;
    justify-content:flex-start;
    background-color:#1172C0;
    color:white;
    padding:2rem;
    margin-right:2rem;
    border-radius:10px;
  }

  .cardiopathie_section_right {
    background-color:#1172C0;
    color:white;
    padding:0 2rem 2rem 2rem;
    border-radius:10px;
  }

  .additional_info_text_cardiopathie {
    margin-top:2rem;
    display: flex;
    justify-content:flex-start;
    align-items:flex-start;
  }

  .image_with_text_slide {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.image_section {
  flex: 1;
  margin-right: 1rem;
  text-align: center;
}

.image_section img {
  max-width: 100%;
  cursor: pointer;
  transition: transform 0.3s;
}

.image_credit {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.text_section {
  width:50%;
  display:flex;
justify-content:center;
  flex-direction:column;
  align-items:flex-start;
  align-content:center;
}

.text_section h2 {
  font-size: 1.2rem;
  margin: 0;
}

.text_section p {
  margin: 0;
}

.conclusions-container {
 background-color:#FDC002;
 color:white;
h1 {
  color:white;
}
.conclusion_text {
  font-size:24px;
  color:black;
}
}
}




  /* instruction slide end */
`;

export default CentralBoxStyled;
