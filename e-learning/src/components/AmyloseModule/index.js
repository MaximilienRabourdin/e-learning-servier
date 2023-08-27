import React, { useState } from "react";
import AmyloseModuleStyled from "./AmyloseModuleStyled";
import LinearProgress from "@mui/material/LinearProgress";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import amylose_slide from "../../data/amylose_slides";
import SlidePatientHistory from "./SlidePatientHistory";

import { CSSTransition } from "react-transition-group";

function AmyloseModule() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [showReferencesPopup, setShowReferencesPopup] = useState(false);
  const [showAidePopup, setShowAidePopup] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showAbbreviationPopup, setShowAbbreviationPopup] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleAnswerClick = (quizId, answerIndex, correct) => {
    setQuizAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quizId]: correct,
    }));
  };

  const handleNextPage = () => {
    if (currentPage < amylose_slide.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressBarValue = ((currentPage - 1) / amylose_slide.length) * 100;

  const handleMenuButtonClick = () => {
    setShowMenuPopup(true);
  };

  const handleReferencesButtonClick = () => {
    setShowReferencesPopup(true);
  };

  const handleAideButtonClick = () => {
    setShowAidePopup(true);
  };

  const handleClosePopup = (event) => {
    const popupDivs = document.querySelectorAll(".popup-content");
    if (Array.from(popupDivs).every((div) => !div.contains(event.target))) {
      setShowMenuPopup(false);
      setShowReferencesPopup(false);
      setShowAidePopup(false);
      setShowAbbreviationPopup(false);
    }
  };

  const handleAbbreviationButtonClick = () => {
    setShowAbbreviationPopup(true);
  };

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const handleMenuClick = () => {
    setCurrentPage(1);
    setShowMenuPopup(false);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [largeImageSrc, setLargeImageSrc] = useState("");

  const openModal = (imageSrc) => {
    setModalOpen(true);
    setLargeImageSrc(imageSrc);
  };

  const closeModal = () => {
    setModalOpen(false);
    setLargeImageSrc("");
  };

  return (
    <AmyloseModuleStyled>
      <div className="all-box">
        <nav className="sidebar">
          <ul className="all_button">
            <li
              onClick={handleMenuClick} // Appelle la fonction handleMenuClick lors du clic
              className={`button ${currentPage === 1 ? "active" : ""}`}
            >
              <img className="enlargedImage" alt="icon" src="./menu_icon.svg" />
              <a className="text-button">Menu</a>
            </li>
            <li
              onClick={handleAbbreviationButtonClick}
              className={`button ${currentPage === 2 ? "active" : ""}`}
            >
              <img alt="icon" src="./abreviation_icon.svg" />
              <a className="text-button">Abréviations</a>
            </li>
            <li
              onClick={handleReferencesButtonClick}
              className={`button ${currentPage === 3 ? "active" : ""}`}
            >
              <img alt="icon" src="./references_icon.svg" />
              <a className="text-button">References</a>
            </li>
            <li
              onClick={handleAideButtonClick}
              className={`button ${currentPage === 4 ? "active" : ""}`}
            >
              <img alt="icon" src="./aide_icon.svg" />
              <a className="text-button">Aide</a>
            </li>
          </ul>
        </nav>

        {enlargedImage && (
          <div
            className="enlarged-image-overlay"
            onClick={handleCloseEnlargedImage}
          >
            <div className="enlarged-image-container">
              <img
                src={enlargedImage}
                alt="Enlarged"
                className="enlarged-image"
              />
              <button
                className="close-enlarged-button"
                onClick={handleCloseEnlargedImage}
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        <div className="right_section">
          {amylose_slide.map((slide, index) => (
            <CSSTransition key={index} classNames="slide-fade" timeout={500}>
              <div
                className={`slide_content ${
                  currentPage === index + 1 ? "show" : ""
                }`}
              >
                <h1 className="slide_title">
                  {amylose_slide[currentPage - 1].title}
                </h1>

                {amylose_slide[currentPage - 1].type === "default" && (
                  <>
                    <div className="presentation_slide">
                      <p>
                        <b> {amylose_slide[currentPage - 1].subtitle}</b>
                      </p>
                      <p> {amylose_slide[currentPage - 1].author} </p>
                      <p> {amylose_slide[currentPage - 1].text} </p>
                      <b>
                        {" "}
                        <p className="subtitle2">
                          {" "}
                          {amylose_slide[currentPage - 1].subtitle2}{" "}
                        </p>{" "}
                      </b>
                      <p className="text2">
                        {" "}
                        {amylose_slide[currentPage - 1].text2}{" "}
                      </p>

                      <p className="subtext">
                        {" "}
                        {amylose_slide[currentPage - 1].subtext}{" "}
                      </p>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "instruction" && (
                  <>
                    <div className="all_instruction_slide">
                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./menu_icon.svg"
                          />
                          <a className="text_button_instruction">Menu</a>
                        </div>
                        <div className="description_button">
                          <h5> Menu</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton pour revenir sur la première
                            slide
                          </p>
                        </div>
                      </div>
                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./abreviation_icon.svg"
                          />
                          <a className="text_button_instruction">
                            Abréviations
                          </a>
                        </div>
                        <div className="description_button">
                          <h5> Abréviations</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton pour avoir toutes les
                            abréviations des amylose_slide
                          </p>
                        </div>
                      </div>
                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./references_icon.svg"
                          />
                          <a className="text_button_instruction">Références</a>
                        </div>
                        <div className="description_button">
                          <h5> Références</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton pour avoir toutes les
                            références des amylose_slide
                          </p>
                        </div>
                      </div>
                      <div className="instruction_control_buttonside">
                        <div className="button_instruction">
                          <img
                            className="enlargedImage"
                            alt="icon"
                            src="./aide_icon.svg"
                          />
                          <a className="text_button_instruction">Aide</a>
                        </div>
                        <div className="description_button">
                          <h5> Aide</h5>
                          <p className="description_button_text">
                            {" "}
                            Cliquez sur ce bouton pour avoir la légende des
                            boutons de contrôls
                          </p>
                        </div>
                      </div>

                      <div className="instruction_navigation">
                        <p>
                          {" "}
                          Utilisez les flèches pour changer de amylose_slide{" "}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "presentation" && (
                  <>
                    <div className="presentation_slide">
                      <p>{amylose_slide[currentPage - 1].subtitle}</p>
                      <p> {amylose_slide[currentPage - 1].author} </p>
                      <p> {amylose_slide[currentPage - 1].text} </p>
                      <p> {amylose_slide[currentPage - 1].subtext} </p>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "presentation" && (
                  <>
                    <h3 className="slide_subtitle">
                      {amylose_slide[currentPage - 1].subtitle}
                    </h3>
                    <p>{amylose_slide[currentPage - 1].text}</p>
                  </>
                )}
                {amylose_slide[currentPage - 1].type ===
                  "imageWithVoiceOver" && (
                  <div className="image_with_voice_over_section">
                    <img
                      className="enlargedImage"
                      src={amylose_slide[currentPage - 1].imageSrc}
                      alt={amylose_slide[currentPage - 1].imageAlt}
                      onClick={() =>
                        handleImageClick(
                          amylose_slide[currentPage - 1].imageSrc
                        )
                      }
                    />
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "video" && (
                  <section className="video_section">
                    <video controls>
                      <source src={amylose_slide[currentPage - 1].videoSrc} />
                    </video>
                  </section>
                )}

                {amylose_slide[currentPage - 1].type === "objectives" && (
                  <div className="objectives_section">
                    <p className="objectives_section_title">
                      {amylose_slide[currentPage - 1].text}
                    </p>
                    <ul>
                      {amylose_slide[currentPage - 1].objectivesList.map(
                        (objective, index) => (
                          <li key={index}>{objective}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type ===
                  "mesuredechocardiographie" && (
                  <div className="mesuredechocardiographie_section">
                    <div className="mesuredechocardiographie_content">
                      <div className="mesuredechocardiographie_text">
                        <ul>
                          {amylose_slide[currentPage - 1].categorie.mesures.map(
                            (mesure, index) => (
                              <li key={index}>
                                <p className="mesuredechocardiographie_title">
                                  {mesure.titre}
                                </p>
                                <ul>
                                  {mesure.parametres.map((parametre, index) => (
                                    <li key={index}>{parametre}</li>
                                  ))}
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="echocardiographie_image_container">
                        <img
                          src={amylose_slide[currentPage - 1].imageSrc}
                          alt={amylose_slide[currentPage - 1].imageAlt}
                          className="echocardiographie_image"
                        />
                      </div>
                    </div>

                    <p className="subtext_echocardiographie">
                      {amylose_slide[currentPage - 1].categorie.subtext}
                    </p>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type ===
                  "et_imagerie_deformation" && (
                  <div className="imagerie_section">
                    <div className="mesuredechocardiographie_content">
                      <div className="mesuredechocardiographie_text">
                        <p className="blue_text">
                          <b>
                            {" "}
                            - Suivi de structure ou speckle tracking (analyse de
                            la déformation du myocarde){" "}
                          </b>
                        </p>
                        <br />
                        <p>
                          Le <b className="text_blue"> strain </b> est le degré
                          de déformation du myocarde durant le cycle cardiaque
                        </p>
                        <p>
                          {" "}
                          - Contraction (strain positif) et relaxation (strain
                          négatif)
                        </p>
                        <br />
                        <p>
                          3 types de strains en fonction de l’orientation des
                          fibres musculaires :
                          <b className="text_blue">
                            {" "}
                            longitudinal, radial et circonférentiel{" "}
                          </b>
                        </p>
                        <br />
                        <p>
                          {" "}
                          - Strain global = moyenne des strain des segments
                          individuels
                        </p>
                        <p>
                          {" "}
                          - Différences régionales dans la fonction contractile
                        </p>
                        <br />
                        <p>
                          {" "}
                          <b className="text_blue"> Strain longitudinal </b> =
                          marqueur robuste de la fonction cardiaque
                        </p>
                      </div>
                      <div className="echocardiographie_image_container">
                        <img
                          src={amylose_slide[currentPage - 1].imageSrc}
                          alt={amylose_slide[currentPage - 1].imageAlt}
                          className="echocardiographie_image"
                        />
                      </div>
                    </div>

                    <p className="subtext_echocardiographie">
                      {amylose_slide[currentPage - 1].subtext}
                    </p>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "quizz" && (
                  <div className="quizz_slide">
                    <p className="quizz_title">
                      {amylose_slide[currentPage - 1].text}
                    </p>
                    <ul id="quizz">
                      {amylose_slide[currentPage - 1].answers.map(
                        (answer, index) => (
                          <li key={index}>
                            <button
                              className={`answer_button ${
                                quizAnswers[
                                  amylose_slide[currentPage - 1].id
                                ] !== undefined &&
                                (quizAnswers[
                                  amylose_slide[currentPage - 1].id
                                ] === answer.correct
                                  ? "correct"
                                  : "incorrect")
                              }`}
                              onClick={() =>
                                handleAnswerClick(
                                  amylose_slide[currentPage - 1].id,
                                  index,
                                  answer.correct
                                )
                              }
                              disabled={
                                quizAnswers[
                                  amylose_slide[currentPage - 1].id
                                ] !== undefined
                              }
                            >
                              {answer.text}
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                    <p className="subtext">
                      {amylose_slide[currentPage - 1].subtext}
                    </p>
                  </div>
                )}
                {amylose_slide[currentPage - 1].type === "imageWithText" && (
                  <>
                  <div className="ett">
                  <p className="text_ett">  {amylose_slide[currentPage - 1].text1} </p>
                  <p className="text_ett">  {amylose_slide[currentPage - 1].text2} </p>

 </div>
                  <div className="image_ett_section">
                    <img
                      className="enlargedImage"
                      className="image_ett"
                      src={amylose_slide[currentPage - 1].images[0].src}
                      alt={amylose_slide[currentPage - 1].images[0].alt}
                    />
                     <img
                      className="enlargedImage"
                      className="image_ett"
                      src={amylose_slide[currentPage - 1].images[1].src}
                      alt={amylose_slide[currentPage - 1].images[1].alt}
                    />
                    </div>
                    <div className="additional_info">
                      <p>{amylose_slide[currentPage - 1].subtext}</p>
                    </div>
                  </>
                )}
                 {modalOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <img src={largeImageSrc} alt="Large Image" />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

                {amylose_slide[currentPage - 1].type ===
                  "text_cardiopathie" && (
                  <>
                    <div className="cardiopathie_section">
                      <p>{amylose_slide[currentPage - 1].text}</p>
                      <div className="additional_info">
                        <p className="subtext">
                          {amylose_slide[currentPage - 1].subtext}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {amylose_slide[currentPage - 1].type ===
                  "patientPresentation" && (
                  <div className="patient_presentation_section">
                    <img
                      className="image_patienteX" // Ajustez la classe CSS si nécessaire
                      src={amylose_slide[currentPage - 1].imageSrc}
                      alt={amylose_slide[currentPage - 1].imageAlt}
                    />
                    <div className="text_patienteX">
                      {" "}
                      {/* Ajustez la classe CSS si nécessaire */}
                      <p>
                        {amylose_slide[currentPage - 1].patientInfo.gender},{" "}
                        {amylose_slide[currentPage - 1].patientInfo.age}
                      </p>{" "}
                      <p>
                        <b className="text_blue"> Antécédents médicaux : </b> <br />
                        {
                          amylose_slide[currentPage - 1].patientInfo
                            .medicalHistory
                        }
                      </p>
                      <p>
                        <b className="blue_text"> Motif de consultation : </b> <br />
                        {amylose_slide[
                          currentPage - 1
                        ].patientInfo.consultationReasons.join(", ")}
                      </p>
                      <p>
                        <b> Examen clinique : </b> <br />
                        {amylose_slide[
                          currentPage - 1
                        ].patientInfo.clinicalExamination.join(", ")}
                      </p>
                      <p>
                        <b> ECG : </b> <br />
                        {amylose_slide[
                          currentPage - 1
                        ].patientInfo.ecgFindings.join(", ")}
                      </p>
                      <p className="additional_info">
                        {" "}
                        {
                          amylose_slide[currentPage - 1].patientInfo
                            .additionalInfo
                        }{" "}
                      </p>
                    </div>
                  </div>
                )}

                {amylose_slide[currentPage - 1].type === "examen_medical" && (
                  <>
                    <h3>{amylose_slide[currentPage - 1].subtitle}</h3>

                    <div className="examenmedical_section">
                      <div className="examenmedical_section_left">
                        <p> {amylose_slide[currentPage - 1].text} </p>
                      </div>
                      <div className="divider"> </div>
                      <div className="examenmedical_section_right">
                        <p> {amylose_slide[currentPage - 1].text2} </p>
                      </div>
                    </div>
                    <p className="subtext">
                      {" "}
                      {amylose_slide[currentPage - 1].subtext}{" "}
                    </p>
                  </>
                )}

                {amylose_slide[currentPage - 1].type === "patientHistory" && (
                  <SlidePatientHistory
                    slideData={amylose_slide[currentPage - 1]}
                  />
                )}

                {amylose_slide[currentPage - 1].type === "bilan" && (
                  <>
                    <div className="presentation_slide">
                      <p>
                        {" "}
                        <b> {amylose_slide[currentPage - 1].text} </b>{" "}
                      </p>

                      <p className="additional_info">
                        {" "}
                        {amylose_slide[currentPage - 1].subtext}{" "}
                      </p>
                    </div>
                  </>
                )}

                {amylose_slide[currentPage - 1].type ===
                  "cardiopathie carcinoïde" && (
                  <>
                    <div className="cardiopathie_section">
                      <h3>.{amylose_slide[currentPage - 1].subtitle}</h3>
                      <p>{amylose_slide[currentPage - 1].text}</p>
                      <h3>.{amylose_slide[currentPage - 1].subtitle2}</h3>
                      <p>{amylose_slide[currentPage - 1].text2}</p>
                      <h3>.{amylose_slide[currentPage - 1].subtitle3}</h3>
                      <p>{amylose_slide[currentPage - 1].text3}</p>
                    </div>
                  </>
                )}
              </div>
            </CSSTransition>
          ))}
          <div className="step_bar">
            <button
              className="previous_button"
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
            >
              <IoIosArrowBack /> Précédent
            </button>
            <LinearProgress
              className="linear_progress"
              variant="determinate"
              value={progressBarValue}
            />
            <button
              className="next_button"
              disabled={currentPage === amylose_slide.length}
              onClick={handleNextPage}
            >
              <IoIosArrowForward />
              Suivant
            </button>
          </div>
        </div>
      </div>
      <div className="logo_section">
        <img
          className="servier_logo"
          src="/servier_logo.png"
          alt="Servier Logo"
        />
      </div>
      {showMenuPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content">
            <h4>Menu Popup</h4>

            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}
      {showAbbreviationPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content">
            <h4>Abréviations</h4>
            <p>
              BNP : peptide 5-HIAA : acide 5-hydroxy-indol-acétique
              natriurétique de type B <br />
              FC : fréquence cardiaque <br />
              FR : fréquence respiratoire <br /> FOP : foramen ovale perméable{" "}
              <br />
              HTA : hypertension artérielle <br />
              IRM : imagerie par résonance magnétique <br />
              NT-proBNP : N-terminal pro Brain Natriuretic Peptide <br />
              RHJ : reflux hépatojugulaire <br />
              SaO2 : saturation artérielle en oxygène <br />
              TA : tension artérielle <br />
              TDM : tomodensitométrie <br />
              TSVJ : turgescence spontanée des veines jugulaires <br />
              VD : ventricule droit <br />
              VG : ventricule gauche
            </p>
            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}
      {showReferencesPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" id="references">
            <h4>Références</h4>

            <p>
              Bhattacharyya S, Toumpanakis C, Burke M, Taylor AM, Caplin ME,
              Davar J. Features of carcinoid heart disease identified by 2- and
              3-dimensional echocardiography and cardiac MRI. Circulation.
              Cardiovascular Imaging. 2010;3(1):103-111. doi:
              <a href="https://doi.org/10.1161/CIRCIMAGING.109.886846">
                10.1161/CIRCIMAGING.109.886846
              </a>
              <br />
              <br />
              Davar J, Connolly HM, Caplin ME, et al. Diagnosing and Managing
              Carcinoid Heart Disease in Patients With Neuroendocrine Tumors.
              Journal of the American College of Cardiology.
              2017;69(10):1288‑1304. doi:
              <a href="https://doi.org/10.1016/j.jacc.2016.12.030">
                10.1016/j.jacc.2016.12.030
              </a>
              <br />
              <br />
              Kulke MH, Mayer RJ. Carcinoid tumors. The New England Journal of
              Medicine. 1999;340(11):858-868. doi:
              <a href="https://doi.org/10.1056/NEJM199903183401107">
                10.1056/NEJM199903183401107
              </a>
              <br />
              <br />
              Lyon AR, López-Fernández T, Couch LS, et al. 2022 ESC Guidelines
              on cardio-oncology developed in collaboration with the European
              Hematology Association (EHA), the European Society for Therapeutic
              Radiology and Oncology (ESTRO) and the International
              Cardio-Oncology Society (IC-OS): Developed by the task force on
              cardio-oncology of the European Society of Cardiology (ESC).
              European Heart Journal. 2022;0:1-133. doi:
              <a href="https://doi.org/10.1093/eurheartj/ehac244">
                10.1093/eurheartj/ehac244
              </a>
              <br />
              <br />
              Mansencal N, Mitry E, Forissier JF, et al. Assessment of patent
              foramen ovale in carcinoid heart disease. The American Heart
              Journal. 2006;151(5):1129.e1-6. doi:
              <a href="https://doi.org/10.1016/j.ahj.2006.02.019">
                10.1016/j.ahj.2006.02.019
              </a>
              <br />
              <br />
              Møller JE, Connolly HM, Rubin J, Seward JB, Modesto K, Pellikka
              PA. Factors associated with progression of carcinoid heart
              disease. The New England Journal of Medicine.
              2003;348(11):1005‑1015. doi:
              <a href="https://doi.org/10.1056/NEJMoa021451">
                10.1056/NEJMoa021451
              </a>
              <br />
              <br />
              Møller JE, Pellikka PA, Bernheim AM, Schaff HV, Rubin J, Connolly
              HM. Prognosis of carcinoid heart disease: analysis of 200 cases
              over two decades. Circulation. 2005;112(21):3320-3327. doi:
              <a href="https://doi.org/10.1161/CIRCULATIONAHA.105.553750">
                10.1161/CIRCULATIONAHA.105.553750
              </a>
              <br />
              Pellikka PA, Tajik AJ, Khandheria BK, et al. Carcinoid heart
              disease. Clinical and echocardiographic spectrum in 74 patients.
              Circulation. 1993;87(4):1188-1196. doi:
              <a href="https://doi.org/10.1161/01.CIR.87.4.1188">
                10.1161/01.CIR.87.4.1188
              </a>
              <br />
              <br />
              Ram P, Penalver JL, Lo KBU, Rangaswami J, Pressman GS. Carcinoid
              Heart Disease: Review of Current Knowledge. Texas Heart Institute
              Journal. 2019;46(1):21‑27. doi:
              <a href="https://doi.org/10.14503/THIJ-17-6562">
                10.14503/THIJ-17-6562
              </a>
              <br />
              <br />
              Roberts WC. A unique heart disease associated with a unique
              cancer: carcinoid heart disease. The American Journal of
              Cardiology. 1997;80(2):251-256. doi:
              <a href="https://doi.org/10.1016/s0002-9149(97)00340-8">
                10.1016/s0002-9149(97)00340-8
              </a>
            </p>
            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}

      {showAidePopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content">
            <div className="all_instruction_slide">
              <div className="instruction_control_buttonside">
                <div className="button_instruction">
                  <img
                    className="enlargedImage"
                    alt="icon"
                    src="./menu_icon.svg"
                  />
                  <a className="text_button_instruction">Menu</a>
                </div>
                <div className="description_button">
                  <h5> Menu</h5>
                  <p className="description_button_text">
                    {" "}
                    Cliquez sur ce bouton pour revenir sur la première slide
                  </p>
                </div>
              </div>
              <div className="instruction_control_buttonside">
                <div className="button_instruction">
                  <img
                    className="enlargedImage"
                    alt="icon"
                    src="./abreviation_icon.svg"
                  />
                  <a className="text_button_instruction">Abréviations</a>
                </div>
                <div className="description_button">
                  <h5> Abréviations</h5>
                  <p className="description_button_text">
                    {" "}
                    Cliquez sur ce bouton pour avoir toutes les abréviations des
                    amylose_slide
                  </p>
                </div>
              </div>
              <div className="instruction_control_buttonside">
                <div className="button_instruction">
                  <img
                    className="enlargedImage"
                    alt="icon"
                    src="./references_icon.svg"
                  />
                  <a className="text_button_instruction">Références</a>
                </div>
                <div className="description_button">
                  <h5> Références</h5>
                  <p className="description_button_text">
                    {" "}
                    Cliquez sur ce bouton pour avoir toutes les références des
                    amylose_slide
                  </p>
                </div>
              </div>
              <div className="instruction_control_buttonside">
                <div className="button_instruction">
                  <img
                    className="enlargedImage"
                    alt="icon"
                    src="./aide_icon.svg"
                  />
                  <a className="text_button_instruction">Aide</a>
                </div>
                <div className="description_button">
                  <h5> Aide</h5>
                  <p className="description_button_text">
                    {" "}
                    Cliquez sur ce bouton pour avoir la légende des boutons de
                    contrôls
                  </p>
                </div>
              </div>

              <div className="instruction_navigation">
                <p> Utilisez les flèches pour changer de amylose_slide </p>
              </div>
            </div>

            {/* <button className="close-button" onClick={handleClosePopup}>
              Ok
            </button> */}
          </div>
        </div>
      )}
    </AmyloseModuleStyled>
  );
}

export default AmyloseModule;
