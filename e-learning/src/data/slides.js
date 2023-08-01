const slides = [
  {
    id: 1,
    type: "presentation",
    title:
      "Une étude de cas clinique interactive sur une cardiopathie carcinoïde",
    subtitle:
      "Préparé en collaboration avec\nle Pr Abdoul Kane et le Pr Jean-Baptiste Anzouan.",
    text: "Merci également au Dr KHADRA, Dr MBAYE et Dr LEYE.",
  },
  {
    id: 2,
    type: "imageWithVoiceOver",
    title: "Instructions",
    voiceOver: "Mettez ici les instructions de la slide 2...",
    imageSrc: "./path/to/image.jpg",
    imageAlt: "Image d'instructions",
  },
  {
    id: 3,
    type: "default",
    title: "Introduction",
    subtitle: "Présentation",
    author: "Pr Abdoul KANE",
    text: "Chef du Service de Cardiologie, Hôpital Dalal Jamm - Guédiawaye, Sénégal",
    subtext: "Pas de conflits d'intérêts pour cette présentation",
  },
  {
    id: 4,
    type: "video",
    title: "Vidéo de présentation du cas clinique",
    videoSrc: "./path/to/video.mp4",
  },
  {
    id: 5,
    type: "objectives",
    title: "Objectifs d’apprentissage",
    objectivesList: [
      "Identifier les signes échocardiographiques de la cardiopathie carcinoïde",
      "Décrire les examens indispensables pour le dépistage d’une maladie carcinoïde",
      "Poser un diagnostic de cardiopathie carcinoïde",
    ],
  },
  {
    id: 6,
    type: "patientPresentation",
    title: "Patiente Z : Présentation",
    imageSrc: "/public/patiente_z.png",
    imageAlt: "Image de la patiente Z",
    patientInfo: {
      age: "52 ans",
      gender: "Femme",
      riskFactors: [
        "Sédentarité",
        "HTA découverte récemment (Hypertension artérielle)",
      ],
      consultationReasons: [
        "Dyspnée d’effort",
        "Amaigrissement non chiffré depuis 3 mois",
      ],
      additionalInfo: "HTA : hypertension artérielle",
    },
  },
  // Ajoutez les autres diapositives ici...
];

export default slides;
