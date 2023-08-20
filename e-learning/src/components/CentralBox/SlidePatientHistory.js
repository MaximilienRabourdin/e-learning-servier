import React from "react";

const SlidePatientHistory = ({ slideData }) => {
  const { title, text } = slideData;

  return (
    <div className="slide_content_thoraco-abdomino">
      <div
        className="
        slide_content_thoraco_abdomino"
      >
        <img src="/thoraco-abdomino.png" alt="thoraco-abdomino" />;
      </div>

      <div className="presentation_slide">
        <p>
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SlidePatientHistory;
