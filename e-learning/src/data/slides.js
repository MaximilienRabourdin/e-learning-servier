const slides = [
  {
    id: 1,
    type: "instruction",
    title: "Instructions pour les participants",
    voiceOver: "Mettez ici les instructions de la slide 2...",
    imageSrc: "",
    imageAlt: "Image d'instructions",
  },
  {
    id: 2,
    type: "default",
    title: "Introduction",
    subtitle: "Présentation",
    author: "Pr Abdoul KANE",
    text: "Chef du Service de Cardiologie, Hôpital Dalal Jamm - Guédiawaye, Sénégal",
    subtext: "Pas de conflits d'intérêts pour cette présentation",
  },
  {
    id: 3,
    type: "video",
    title: "Vidéo de présentation du cas clinique",
    videoSrc: "./path/to/video.mp4",
  },
  {
    id: 4,
    type: "objectives",
    title: "Objectifs d’apprentissage",
    text: "À la fin de cette présentation de cas interactive, les apprenants seront en mesure de:\n\n",
    objectivesList: [
      "Identifier les signes échocardiographiques de la cardiopathie carcinoïde",
      "Décrire les examens indispensables pour le dépistage d’une maladie carcinoïde",
      "Poser un diagnostic de cardiopathie carcinoïde",
    ],
  },
  // {
  //   "id": 5,
  //   "type": "video",
  //   "title": "Mesures d'échocardiographie transthoracique ou ETT",
  //   "content": {
  //     "Ventricules": {
  //       "Mesures": [
  //         "Taille",
  //         "Masse",
  //         "Épaisseur des parois du VG"
  //       ],
  //       "Fonctions": [
  //         "Fonction systolique et diastolique",
  //         "Fraction d'éjection",
  //         "Fraction de raccourcissement",
  //         "Rapport E/A"
  //       ],
  //       "Autres": [
  //         "Flux d'éjection",
  //         "Mouvements des parois",
  //         "Pressions"
  //       ]
  //     },
  //     "Oreillettes": {
  //       "Mesures": [
  //         "Taille"
  //       ],
  //       "Autres": [
  //         "Pressions"
  //       ]
  //     },
  //     "Aorte et Veine Cave Inférieure": {
  //       "Mesures": [
  //         "Diamètre"
  //       ]
  //     },
  //     "Artère Pulmonaire": {
  //       "Mesures": [
  //         "Pression"
  //       ]
  //     },
  //     "Veines Pulmonaires": {
  //       "Mesures": [
  //         "Flux"
  //       ]
  //     },
  //     "VG": "Ventricule Gauche"
  //   },
  //   "reference": "Mitchell C, Rahko PS, Blauwet LA, et al. J Am Soc Echocardiogr. 2019;32(1):1-64. Illustration © smart.servier.com"
  // },
  {
    id: 5,
    type: "patientPresentation",
    title: "Patiente Z : Présentation",
    imageSrc: "/patiente_z.png",
    imageAlt: "Image de la patiente Z",
    patientInfo: {
      age: "52 ans",
      gender: "Femme",
      riskFactors: [
        "Sédentarité",
        "HTA découverte récemment (Hypertension artérielle)",
      ],
      consultationReasons: [
        "Depuis 3 mois : Dyspnée d’effort",
        "Amaigrissement non chiffré",
      ],
      additionalInfo: "HTA : hypertension artérielle",
    },
  },
  {
    id: 6,
    type: "examen_medical",
    title: "Patiente Z : Examen Médical",
    subtitle: "Examen physique",
    text: (
      <>
        <p> FC = 92 bpm</p> <br />
        <p>TA bras gauche = 142/87 mmHg</p> <br />
        <p>TA bras gauche = 142/87 mmHg</p>
        <br />
        <p>TA bras droit = 145/82 mmHg </p>
        <br />
        <p>FR = 22 cpm </p>
        <br />
        <p>SaO2 = 96 % (air ambiant)</p>
        <br />
      </>
    ),
    text2: (
      <>
        <p> Température = 36,7 °C</p> <br />
        <p>Souffle systolique 4/6 au niveau du foyer tricuspide</p> <br />
        <p>Éclat B2 pulmonaire</p>
        <br />
        <p>Champs pulmonaires libres </p>
        <br />
        <p>Hépatomégalie</p>
        <br />
        <p>Œdèmes des membres inférieurs bilatéraux en chaussette</p>
        <br />
      </>
    ),
    subtext:
      "FC : fréquence cardiaque ; FR : fréquence respiratoire ; RHJ : reflux hépato jugulaire ; SaO2 : saturation artérielle en oxygène ; TA : tension artérielle ; TSVJ : turgescence spontanée des veines jugulaires",
  },
  {
    id: 7,
    type: "video",
    title: "Patiente Z : Echocardiographie Transthoracique",
    videoSrc1: "./path/to/video.mp4",
    videoSrc2: "./path/to/video.mp4",
  },
  {
    id: 8,
    type: "quizz",
    title: "Question 1",
    text: "Quelles sont vos hypothèses diagnostiques ?",
    answers: [
      {
        text: "Cœur pulmonaire chronique",
        correct: false,
      },
      {
        text: "Cardiopathie carcinoïde",
        correct: true,
      },
      {
        text: "Cardiopathie rhumatismale",
        correct: false,
      },
      {
        text: "Valvulopathie médicamenteuse",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    type: "imageWithText",
    title: "Patiente Z : Echocardiographie Transthoracique",
    text: "Un texte explicatif sera rajouté ici",
    images: [
      {
        src: "/echocardiographie transthoracique.png",
        alt: "Photo",
      },
    ],
  },

  {
    id: 10,
    type: "imageWithText",
    title: "Patiente Z : Echocardiographie Transthoracique",
    text: "Un texte explicatif sera rajouté ici",
    images: [
      {
        src: "/echocardiographie transthoracique 2.png",
        alt: "Photo",
      },
    ],
  },

  {
    id: 11,
    type: "bilan",
    title: "Patiente Z : Bilan de l‘Echocardiographie Transthoracique",
    text: (
      <>
        - VG de taille normale avec conservation de la fonction systolique
        <br />
        - Valves mitrale et aortique normales
        <br />
        - VD dilaté avec conservation de la fonction systolique longitudinale
        <br />
        - Valve tricuspide épaissie, figée en bâton de tambour où siège une
        fuite ; sténose importante
        <br />
        - Péricarde normal
        <br />
      </>
    ),
    subtext: "VD : ventricule droit ; VG : ventricule gauche",
  },
  {
    id: 12,
    type: "quizz",
    title: "Question 2",
    text: "Au vu de ce bilan, quel(s) autres examens préconiseriez-vous ?",
    answers: [
      {
        text: "IRM cardiaque",
        correct: false,
      },
      {
        text: "Électrocardiogramme",
        correct: false,
      },
      {
        text: "Dosage de la chromogranine A",
        correct: false,
      },
      {
        text: "Dosage du BNP",
        correct: false,
      },
      {
        text: "Scanner thoraco-abdomino pelvien",
        correct: true,
      },
    ],
  },
  {
    id: 13,
    type: "patientHistory",
    title: "L’histoire de la patiente continue",
    text: `Scanner thoraco-abdomino pelvien : \n
  Aspect en faveur d’une tumeur grêlique avec localisations secondaires hépatique et pulmonaire \n

  → diagnostic de cardiopathie carcinoïde \n`,
    images: [
      {
        src: "/public/thoraco-abdomino.png",
        alt: "Photo",
      },
    ],
  },
  {
    id: 14,
    type: "text_cardiopathie",
    title: "La cardiopathie carcinoïde",
    text: (
      <>
        - Atteinte valvulaire droite organique secondaire à la libération
        excessive de sérotonine sécrétée par une tumeur endocrine maligne à
        prédominance digestive.
        <br />- Son incidence est de l'ordre de 1 à 2/100 000 dans la population
        générale.
        <br />
        <br />
        <b>Physiopathologie :</b>
        <br />- Un dépôt fibreux se forme sur les valves, secondaire à des
        flushs de sérotonine, entraînant une rétraction valvulaire.
        <br />- Les valves se figent et entraînent à la longue une insuffisance
        cardiaque droite.
        <br />- L’atteinte gauche est rare car les poumons font office de filtre
        physiologique.
        <br />-{" "}
        <b>
          En cas d’atteinte du cœur gauche, un foramen ovale perméable (FOP)
          doit être recherché.
        </b>
      </>
    ),
    subtext: (
      <>
        Pellikka PA, et al. Carcinoid heart disease. Clinical and
        echocardiographic spectrum in 74 patients. <i> Circulation</i>.
        1993;87(4):1188-1196
        <br />
        Kulke MH, Mayer RJ. Carcinoid tumors. <i>N Engl J Med.</i>{" "}
        1999;340(11):858-868
        <br />
        Roberts WC. A unique heart disease associated with a unique cancer:
        carcinoid heart disease. <i>Am J Cardiol</i> 1997;80(2):251-256
        <br />
        Mansencal N, et al. Assessment of patent foramen ovale in carcinoid
        heart disease. <i>Am Heart J</i> 2006;151(5):1129.e1-6
        <br />
        Ram P, et al. Carcinoid Heart Disease: Review of Current Knowledge.
        <i>Texas Heart Institute Journal</i>. 2019;46(1):21‑27
      </>
    ),
  },
  {
    id: 15,
    type: "text_cardiopathie",
    title: "La cardiopathie carcinoïde",
    text: (
      <>
        <b> Deux formes : </b>
        <br />- Une valvulopathie droite isolée ou associée à une valvulopathie
        gauche.
        <br />- La principale valve touchée est la valve tricuspide.
        <br />- Les lésions valvulaires fuyantes sont plus fréquentes que les
        sténoses, mais elles sont, en pratique, souvent combinées.
        <br />- La sténose valvulaire apparaît lorsque la valve devient
        complètement immobile.
        <br />
        Des métastases intracardiaques (rare).
        <br />
        <br /> <b> Signes cliniques frustes : </b>
        <br />- Signes cliniques de l’insuffisance cardiaque droite.
        <br />- Patients paucisymptomatiques : découverte fortuite lors d’une
        échocardiographie ou lors d’un bilan chez un patient présentant une
        tumeur neuroendocrine.
      </>
    ),
    subtext: (
      <>
        Roberts WC. A unique heart disease associated with a unique cancer:
        carcinoid heart disease. <i>Am J Cardiol</i>. 1997;80(2):251-256.
        <br />
        Bhattacharyya S, et al. Features of carcinoid heart disease identified
        by 2- and 3-dimensional echocardiography and cardiac MRI.{" "}
        <i>Circ Cardiovasc Imaging</i>. 2010;3(1):103-111.",
      </>
    ),
    images: [
      {
        src: "/chemin/vers/les/images/carcinoid_heart_disease.jpg",
        alt: "Image de la cardiopathie carcinoïde",
      },
    ],
  },
  {
    id: 16,
    type: "quizz",
    title: "Question 3",
    text: "Quels sont les marqueurs biologiques à doser pour le diagnostic et le suivi d’une cardiopathie carcinoïde ?",
    answers: [
      {
        text: "NT-proBNP",
        correct: true,
      },
      {
        text: "Troponine T",
        correct: false,
      },
      {
        text: "Chromogranine A",
        correct: false,
      },
      {
        text: "Métabolite de la sérotonine (5-HIAA)",
        correct: true,
      },
    ],
    subtext: (
      <>
        5-HIAA : acide 5-hydroxy-indol-acétique ; NT-proBNP :{" "}
        <i>N-terminal pro Brain Natriuretic Peptide</i>
      </>
    ),
  },
  {
    id: 17,
    title: "L’histoire de la patiente continue",
    type: "default",
    subtitle: "- Biologie",
    text: "Dosage urinaire du métabolite de la sérotonine (5-HIAA) en cours",
    subtitle2: "- Evolution",
    text2:
      "Transfert au service de cancérologie (Hôpital Cheikhoul Khadim) pour une prise en charge oncologique",
    subtext: "5-HIAA : acide 5-hydroxy-indol-acétique",
  },
  {
    id: 18,
    title: "La cardiopathie carcinoïde",
    type: "cardiopathie carcinoïde",
    subtitle: "Dosage plasmatique ou urinaire du 5-HIAA",
    text: "-Taux significativement élevé en cas d’atteinte cardiaque",
    subtitle2: "Pronostic\n",
    text2: (
      <>
        - Le pronostic des tumeurs endocrines digestives est meilleur que celui
        de nombreuses tumeurs.
        <br />
        - La présence d’une cardiopathie carcinoïde est un facteur pronostique
        péjoratif de la maladie carcinoïde.
        <br />
        - Le 5-HIAA et le NT-proBNP sont des facteurs prédictifs de la
        progression de la cardiopathie.
        <br />- La principale cause de décès est l’insuffisance cardiaque.
      </>
    ),
    subtitle3: "Traitement\n",
    text3: (
      <>
        - Analogues de la somatostatine et chimiothérapie.
        <br />
        - Résection chirurgicale de la tumeur endocrine digestive et des
        métastases hépatiques.
        <br />- Remplacement valvulaire = seul traitement curatif efficace de
        l’atteinte cardiaque
      </>
    ),
    subtext: (
      <>
        5-HIAA : acide 5-hydroxy-indol-acétique ; NT-proBNP :{" "}
        <i>N-terminal pro Brain Natriuretic Peptide</i>,
      </>
    ),
    subtext2: (
      <>
        <br/>Møller JE, et al. Factors associated with progression of carcinoid heart
        disease. <i>N Engl J Med.</i> 2003;348(11):1005‑1015. 
        <br/> Møller JE, et al.Prognosis of carcinoid heart disease: analysis of 200 cases over two
        decades. <i>Circulation</i>2005;112(21):3320-3327.
        <br/> Mansencal N, et al.Comparison of prognostic value of tissue Doppler imaging in carcinoid
        heart disease versus the value in patients with the carcinoid syndrome
        but without carcinoid heart disease. <i>Am J Cardiol</i>. 2010;105(4):527-531.
        <br/>Davar J, et al. Diagnosing and Managing Carcinoid Heart Disease in Patients With Neuroendocrine Tumors. <i>Journal of the American College of
        Cardiology</i>. 2017;69(10):1288‑1304 
        <br/>Lyon AR, et al. 2022 ESC Guidelines on cardio-oncology. <i>European Heart Journal</i>. 2022;0:1-133
      </>
    ),
  },
  {
    id: 19,
    title: "Conclusions",
    type: "default",
    text: (
      <>
        - Le syndrome carcinoïde est une pathologie rare.
        <br />
        - L’atteinte cardiaque est à rechercher systématiquement chez les
        patients présentant un syndrome carcinoïde.
        <br />
        - L’échocardiographie transthoracique est l’examen de référence pour
        diagnostiquer une cardiopathie carcinoïde.
        <br />- Le pronostic est péjoratif mais peut être amélioré par le
        remplacement chirurgical valvulaire.
      </>
    ),
  },
];

export default slides;
