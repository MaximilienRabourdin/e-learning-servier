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
    border-radius: 10px;

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
    width: 80%;
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

  .ett {
    display: flex;
    flex-direction:row;
  }

  .text_ett {
    margin-bottom:1rem;
    background-color:#1875d1;
    padding:1rem;
    border-radius: 10px;
    color:white;

  }

  #image_ett {
    max-width: 50%;
  }

  .image_ett_section {
   display:flex;
   justify-content:center;

  }

  .ett_text_section {
    display:flex;
    justify-content:space-between;
  }

  .link-button_exit { 
  text-decoration:none;
  width:100%}

  .text-button_exit {
    font-size: 16px;
    margin:0;
  }


  .text_ett {
    margin:0  0.4rem;
  }

  p {
    font-size: 18px;
  }

  li {
    font-size: 18px;
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
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;

    p {
      margin: 0rem;
    }
  }

  .examenmedical_section_left {
    width: 50%;
    max-height: 100%;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content:center;
    flex-direction: column;
    background-color: #f1f8fe;
    border-radius: 1rem;
    padding: 1rem;


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
    color:white;
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
    justify-content: space-between;
    align-content:center;
    align-items:center;
    margin-top:2rem;
  }

  .image_patienteX {
    width: 36%;
    background-repeat: no-repeat;

  }

  .reasons_consultations_patient {
    width: 100%;
    display: flex;
    margin-left:1rem;
    justify-content: space-between;
    
  }

  .consultationReasons {
    margin-right: 2rem;
  }

  .consultationReasons_subtext{
    display:flex
    flex-direction:column;
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

  .cardiopathie_carcinoïde_section {
    width: 100%;
    display:flex;
    margin-top:2rem
  }

  .traitement_text {
    width: 50%;
    
  }

  .cardiopathie_section_amylose {
    width: 100%;
    margin-top:2rem;
  }

  .cardiopathie_text_amylose {
    width: 100%;
    
  }

  .cardiopathie_section {
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:2rem;
  }

  .cardiopathie_text {
    min-width: 50%;
    margin-right:2rem;
  }

  .cardiopathie_image_section {
  width: 50%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   aling-content:center;
  }


  .traitement_subtitle {
    color: #1976d2;
  }

  .pierre_angulaire {
    background-color: #1789E3;
    padding: 1rem;
    border:3px solid #1976d2;
    border-radius: 20px;
    color:white;
  }

/* quizzmultiple section */

.quizz-container { 
    background-color:#1172C0;
  }

  .quizz_slide {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color:white;
  }

  .quizz_title {
    font-size: 22px;
    color:white;
    text-position:center;
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
    color:white;
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



.information_slide_coupe {
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  margin-top:2rem;
}

.information_image {
  width: 50%;
  margin-left:2rem;
  
}

.information_text {
  width: 50%;
  background-color:#1875D1;
  padding: 1rem;
  color:white;
  border-radius:10px;
}

.additional_info_coupe {
  width: 100%;
  font-size: 14px;
    color: #7f7f7f;
    flex-direction:column;
}

.information_slide{
  display:flex;
  flex-direction:column;
  background-color:#1875d1;
  color:white;
  border-radius:10px;
  padding:1rem;
}

#add_info{
  color:white;
}

.information_slideX {
  display:flex;
  align-content:center;
  align-items:center;
  justify-content:center;
  width: 100%;

}

.information_textX {
  display:flex;
  margin-left:4rem;
  flex-direction:column;
  width: 50%;
}

.information_section {
  margin:0.4rem
  background-color: #D8D8D8; 
  padding: 0.4rem;
  
}


.information_section p {
  margin: 0;
  font-size:18px;
}

.information_section h3 {
  margin: 0;
  font-size:16px;
  color:#1875d1;
}

.information_slide_patienteX {
  display:flex;
}


.information_reference_patienteX {
  font-size: 18px;
  margin:0;
  padding: 0;
}

.imageX_section {
  display:flex;
  width:50%;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  align-content:center;
}

.informationX_image {
  width:100%;
  text-position:center;


}

  .echocardiographie_image {
    width: 100%;
  }

  .presentation_slide_text {
    width: 100%;
    display: flex;
    justify-content: center;
  
  }


/* interet imagerie  */

.title_interet_imagerie {
  font-size:20px;
}
.interet_imagerie_slide {
  width: 100%;
  display:flex;
  justify-content:center;
}

.interet_imagerie_left_side {
  width: 40%;
  margin-right:2rem;
  background-color:#1875d1;
  padding:1rem;
  border-radius:20px;
  color:white;
}

.interet_imagerie_right_side {
  width: 40%;
  background-color:#0089E3;
  padding:1rem;
  border-radius:20px;
  color:white;
}

#add_info{
  display:flex;
  text-align:center;
  color:grey;
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

  .enlargedImage {
    border-radius: 50px;
    background-color: #0190EF;
  
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
    overflow-y: auto;
  }

  .mesuredechocardiographie_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size:10px;

  }

  .mesuredechocardiographie_text {
    width:60%;
    background-color: #f1f8fe;
    padding: 0.2rem;
    border-radius: 1rem;
  }

  
  .imagerie_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }

  .imagerie_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    max-width: 40%; /* Réduisez la largeur maximale */
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
    font-size: 15px;
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

.quizz-container {
  h1 { color : white;}
}
`;

export default AmyloseModuleStyled;
