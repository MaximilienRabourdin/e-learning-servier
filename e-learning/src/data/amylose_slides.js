const amylose_slide = [
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
    author: "Pr Nadia Laredj",
    text: "Cheffe du service de Cardiologie, Centre Hospitalo-Universitaire d’Oran - Université d’Oran 1 - Faculté de Médecine d’Oran - Oran, Algérie",
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
      "Comprendre l‘intérêt des techniques d'échocardiographie pour le diagnostic et la stratification du pronostic de l‘amylose cardiaque",
      "Identifier l‘hypertrophie ventriculaire symétrique et reconnaitre l‘aspect granité et brillant du myocarde faisant suspecter une amylose cardiaque",
      "Comprendre l‘intérêt de l‘étude de la déformation longitudinale",
    ],
  },
  {
    id: 5,
    type: "mesuredechocardiographie",
    title: "Mesures d’échocardiographie transthoracique ou ETT",
    imageSrc: "/ett.png",
    imageAlt: "Image d'échocardiographie",
    categorie: {
      title: "Ventricules",
      mesures: [
        {
          titre: "Ventricules",
          parametres: [
            "- Taille",
            "- Masse",
            "- Epaisseur des parois du VG",
            "- Fonction systolique et diastolique (fraction d’éjection, fraction de raccourcissement, rapport E/A…)",
            "- Flux d’éjection",
            "- Mouvements des parois",
            "- Pressions",
          ],
        },
        {
          titre: "Oreillettes",
          parametres: ["- Taille", "- Pressions"],
        },
        {
          titre: "Aorte et veine cave inférieure",
          parametres: ["- Diamètre"],
        },
        {
          titre: "Artère pulmonaire",
          parametres: ["- Pression"],
        },
        {
          titre: "Veines pulmonaires",
          parametres: ["- Flux"],
        },
      ],
      subtext:
        "Mitchell C, Rahko PS, Blauwet LA, et al J Am Soc Echocardiogr. 2019;32(1):1-64. Illustration ® smart.servier.com",
    },
  },

  {
    id: 6,
    type: "et_imagerie_deformation",
    title: "ETT et imagerie de déformation",
    imageSrc: "/imagerie.png",
    imageAlt: "Image d'échocardiographie",
    text: (
      <>
        <p>
          Suivi de structure ou speckle tracking (analyse de la déformation du
          myocarde)
        </p>
        <p>
          Le strain est le degré de déformation du myocarde durant le cycle
          cardiaque
        </p>
        <p>Contraction (strain positif) et relaxation (strain négatif)</p>
        <p>
          3 types de strains en fonction de l’orientation des fibres musculaires
          : longitudinal, radial et circonférentiel
        </p>
        <p>Strain global = moyenne des strain des segments individuels</p>
        <p>Différences régionales dans la fonction contractile</p>
        <p>Strain longitudinal = marqueur robuste de la fonction cardiaque</p>
      </>
    ),
    subtext:
      "Nouvelles techniques échocardiographiques. Cardiologie Pratique. Published May 19, 2011. Accessed February 17, 2023. Illustration ® smart.servier.com",
  },

  {
    id: 7,
    type: "patientPresentation",
    title: "Patiente X : Présentation",
    imageSrc: "/patiente_z.png",
    imageAlt: "Image de la patiente X",
    patientInfo: {
      age: "41 ans",
      gender: "Femme",
      medicalHistory: "Sans antécédents particuliers",
      consultationReasons: [
        "- Douleurs abdominales",
        "Consultation en hépato-gastrologie pour investigation",
      ],
      clinicalExamination: [
        "Etat général moyen",
        "Asthénie",
        "Douleurs abdominales",
        "Distension abdominale avec hépatosplénomégalie",
        "Macroglossie",
      ],
      ecgFindings: [
        "Rythme régulier sinusal à 90 bpm",
        "Intervalle P-R : 0,18 s",
        "HVG électrique",
      ],
      additionalInfo:
        "ECG : électrocardiogramme ; HVG : hypertrophie ventriculaire gauche",
    },
  },

  {
    id: 7,
    type: "imageWithText",
    title: "Patiente X : ETT",
    text1: (
      <>
        - FEVG préservée (FEVG = 53 % en Simpson Biplan) <br />
        - Cinétique segmentaire homogène <br />
      </>
    ),
    text2: (
      <>
        - Pressions de remplissage normales <br />
        - Épaississement des valves mitrale et tricuspide <br />- Pas d’HTAP
      </>
    ),
    images: [
      {
        src: "/ett1.png",
        alt: "Photo",
      },
      {
        src: "/ett2.png",
        alt: "Photo",
      },
    ],
    subtext:
      "FEVG : fraction d’éjection du ventricule gauche ; HTAP : hypertension artérielle pulmonaire",
  },

  {
    id: 8,
    type: "examen_medical",
    title: "Patiente X : ETT",
    subtitle: "Examen physique",
    text: (
      <>
        <p>
          <b className="blue_text"> Etude de la déformation longitudinale :</b>
        </p>
        <br />
        <p>- 2D-SLG du VG diminué (&lt;- 10,4 %) </p>
        <br />
        <p>
          {" "}
          - Prédominance de l‘infiltration sur les segments basaux avec
          préservation des segments apicaux
          <br />→ gradient base-apex
        </p>
        <br />
      </>
    ),
    images: [
      {
        src: "/longitudinale.png",
        alt: "Photo",
      },
    ],
    subtext: "SLG : strain longitudinal global ; VG : ventricule gauche",
  },
  // {
  //   id: 8,
  //   type: "video",
  //   title: "Patiente Z : Echocardiographie Transthoracique",
  //   videoSrc1: "./path/to/video.mp4",
  //   videoSrc2: "./path/to/video.mp4",
  // },
  {
    id: 9,
    type: "quizz",
    title: "Question 1",
    text: "Quel diagnostic évoquez-vous ?",
    answers: [
      {
        text: "Insuffisance cardiaque à FEVG préservée",
        correct: false,
      },
      {
        text: "Cardiomyopathie hypertrophique",
        correct: false,
      },
      {
        text: "Rétrécissement aortique calcifié",
        correct: false,
      },
      {
        text: "Amylose à chaînes légères (AL)",
        correct: true,
      },
    ],
  },

  {
    id: 10,
    type: "information",
    title: "Amylose à chaînes légères (AL)",
    text: (
      <>
        <p> - Maladie rare</p>
        <p> - Trouble clonal des cellules B</p>
        <p>- Manifestation de plusieurs maladies systémiques</p>
        <p>
          - Accumulation extracellulaire de protéines fibrillaires insolubles
          qui se déposent et envahissent progressivement les tissus
        </p>
      </>
    ),
    subtext:
      "Desport E, Bridoux F, Sirac C, et al. Orphanet Journal of Rare Diseases. 2012;7(1):54.",
  },

  {
    id: 11,
    type: "quizzmultiple",
    title: "Question 2",
    text: "Quels examens demanderiez-vous pour confirmer ce diagnostic ? Trois réponses possibles",
    answers: [
      {
        text: "Examens biologique",
        correct: true,
      },
      {
        text: "Biopsies et analyses histologiques (infiltration amyloïde)",
        correct: true,
      },
      {
        text: "Scanner abdominal",
        correct: false,
      },
      {
        text: "IRM cardiaque",
        correct: true,
      },
      {
        text: "Coronarographie",
        correct: false,
      },
      {
        text: "Holter ECG",
        correct: false,
      },
    ],
    subtext:
      "ECG : électrocardiogramme ; IRM : imagerie par résonance magnétique",
  },

  {
    id: 12,
    type: "informationX",
    title: "Patiente X : Biologie",
    text: [
      {
        title: "Electrophorèse des protéines sériques",
        content: (
          <>
            <p>Réaction inflammatoire aigue et hypogammaglobulinémie</p>
            <p> Dosage pondéral: </p>
            <p>IgG = 4,52 g (7 - 16)</p>
            <p>IgM = 1,36 g (0,31 - 0,77)</p>
          </>
        ),
      },
      {
        title: "Dosage des chaines légères libres sériques",
        content: (
          <>
            <p>Chaines kappa : 198,25 mg/L (3,3 - 19,4)</p>
            <p>Chaines lambda : 18,67 mg/L (5,71 - 26,30)</p>
            <p>Rapport kappa/lambda : 10,62</p>
          </>
        ),
      },
      {
        title: "Electrophorèse des protéines urinaires",
        content: (
          <>
            <p>
              {" "}
              <b> Atteinte urinaire avec fuite protéique importante </b>
            </p>
            <p>Immunofixation : absence de protéinurie de Bence Jones</p>
          </>
        ),
      },
      {
        title: "Dosage des biomarqueurs cardiaques",
        content: (
          <>
            <p>
              {" "}
              <b> Dosage du NT-proBNP = 3177 pg/mL </b>{" "}
            </p>
            <p>
              {" "}
              <b>
                {" "}
                Dosage de la troponine = 0,06 µg/L soit 14 fois la normale{" "}
              </b>{" "}
            </p>
          </>
        ),
      },
    ],
    subtext: "NT-proBNP : N-terminal pro Brain Natriuretic Peptide",
    image: "photo_attente.png",
  },

  {
    id: 13,
    type: "text_cardiopathie",
    title: "Patiente X : Analyses histologiques",
    text: (
      <>
        <b>Ponction-biopsie hépatique </b>
        Présence de dépôts extracellulaires positifs à la coloration au rouge
        Congo composés d’une substance anhiste éosinophile
        <br />
        <br />
        <b style={{ color: "#0089e3" }}> → amylose hépatique </b> sans
        prolifération tumorale
        <br />
        <br />
        <b>Ponction-biopsie ostéo-médullaire</b>- Moelle de richesse cellulaire
        III avec dépôts interstitiels d’une substance éosinophile homogène
        pouvant rappeler l’<b> amylose </b>
        - Absence d’infiltration tumorale
        <br />
        <br />
        <b>Ponction-biopsie des glandes salivaires :</b>
        <br />- Aspect d’une sialadénite chronique sans signe de malignité
      </>
    ),
  },

  {
    id: 14,
    type: "text_cardiopathie",
    title: "Diagnostic de l’amylose cardiaque",
    text: (
      <>
        <b> Le diagnostic de certitude reste la biopsie endomyocardique </b>
        <br />- Identification des dépôts amyloïdes intracardiaques
        <br />- Caractère invasif et peu accessible.
        <br /> <b> Le diagnostic peut aussi être confirmé si : </b>
        <br />- Des dépôts amyloïdes sont identifiés dans une biopsie
        extracardiaque.
        <br />- <b>Et </b>des éléments caractéristiques sont retrouvés à
        l’échocardiographie ou à l’IRM cardiaque Des métastases intracardiaques
        (rare).
        <br />
        <br /> <b> Les signes cliniques de l’amylose AL </b>
        <br />- Extracardiaques : macroglossie, hématomes cutanés, protéinurie,
        insuffisance rénale
        <br />- Cardiaques : hypotension, élévation du NT-proBNP, élévation
        persistante de la troponine
      </>
    ),
    subtext:
      "Garcia-Pavia P, et al. Diagnosis and treatment of cardiac amyloidosis: a position statement of the ESC Working Group on Myocardial and Pericardial Diseases. Eur Heart J. 2021;42(16):1554‑1568. McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599‑3726.",
  },

  {
    id: 15,
    type: "interet_imagerie",
    title: "Intérêt de l’imagerie cardiaque dans le diagnostic",
    subtitle:
      "L’échocardiographie et l’IRM cardiaque sont complémentaires. Les éléments caractéristiques retrouvés à :",
    text: (
      <>
        <h3>
          <b>L’échocardiographie</b>
        </h3>
        <ul>
          <li>un aspect granuleux et brillant du myocarde,</li>
          <li>
            une augmentation de l’épaisseur de la paroi ventriculaire droite,
          </li>
          <li>
            une augmentation de l’épaisseur des valves mitrale ou tricuspide,
          </li>
          <li>un épanchement péricardique,</li>
          <li>un strain longitudinal diminué avec une préservation apicale.</li>
        </ul>
      </>
    ),
    text2: (
      <>
        <h3>
          <b>L’IRM cardiaque</b>
        </h3>
        <ul>
          <li>un rehaussement tardif sous-endocardique après gadolinium,</li>
          <li>une augmentation des valeurs du T1 natif,</li>
          <li>une augmentation du volume extracellulaire,</li>
          <li>une cinétique anormale du gadolinium.</li>
        </ul>
      </>
    ),
    reference:
      "Garcia-Pavia P, et al. Diagnosis and treatment of cardiac amyloidosis: a position statement of the ESC Working Group on Myocardial and Pericardial Diseases. Eur Heart J. 2021;42(16):1554‑1568. McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599‑3726.",
  },

  {
    id: 16,
    type: "quizzmultiple",
    title: "Question 3",
    text: "Quels sont les marqueurs pronostiques de l’amylose AL ? Trois réponses possibles",
    answers: [
      {
        text: "Elévation de la troponine T et du NT-proBNP",
        correct: true,
      },
      {
        text: "Diminution du débit de filtration glomérulaire",
        correct: false,
      },
      {
        text: "Altération du strain longitudinal",
        correct: true,
      },
      {
        text: "Altération de la FEVG",
        correct: false,
      },
      {
        text: "Réhaussement tardif à l’IRM",
        correct: true,
      },
      {
        text: "Elargissement des complexes QRS",
        correct: false,
      },
    ],
    subtext:
      "FEVG : fraction d’éjection du ventricule gauche; IRM : imagerie par résonance magnétique ; NT-proBNP : N-terminal pro Brain Natriuretic Peptide",
  },

  {
    id: 19,
    title: "Marqueurs pronostiques et stratification",
    type: "default",
    subtitle: "- A l’ETT, altération du strain longitudinal",
    text: "Normale : -18 % Forme sévère : < -15 % Forme très sévère : < -10 %",
    subtitle2:
      "- A l’IRM, rehaussement tardif après injection de gadolinium et T1 mapping > normale",
    text2:
      "Transfert au service de cancérologie (Hôpital Cheikhoul Khadim) pour une prise en charge oncologique",
    subtext: "5-HIAA : acide 5-hydroxy-indol-acétique",
  },
  {
    id: 20,
    title: "Patiente X : Traitement",
    type: "cardiopathie carcinoïde",
    subtitle:
      "La patiente reçoit depuis plus de 6 mois une chimiothérapie associant 3 classes thérapeutiques (VCD) : ",
    text2: (
      <>
        <br />
        - Un inhibiteur du protéasome (bortezomib = V)
        <br />
        - Un agent alkylant (cyclophosphamide = C)
        <br />
        - Des corticoïdes (déxaméthasone = D)
        <br />
        - Des anticorps anti-CD38 (daratumumab)
      </>
    ),

    text3: (
      <>
        - La pierre angulaire du traitement des amyloses AL repose sur la
        neutralisation du précurseur protéique qu’est la chaine légère
        d’immunoglobuline, sécrétée en excès par un clone plasmocytaire dans le
        cadre d’une gammapathie.
        <br />
      </>
    ),
  },
  {
    id: 21,
    title: "Conclusions",
    type: "conclusion",
    text: (
      <>
        - L’amylose est la manifestation de plusieurs maladies systémiques ;
        elle se caractérise par une accumulation extracellulaire de protéines
        fibrillaires insolubles qui se déposent et envahissent progressivement
        les tissus.
        <br />
        - L'atteinte cardiaque mène typiquement à une insuffisance cardiaque à
        fraction d’éjection préservée et constitue le principal facteur
        pronostique avant, pendant et après le traitement.
        <br />
        - Le diagnostic repose sur un faisceau d’arguments cliniques,
        échocardiographiques, et d’IRM, associés à une biopsie extracardiaque
        positive.
        <br />
        <b>
          - L’ETT permet à la fois le diagnostic et la stratification
          pronostique avec les nouvelles techniques d’imagerie (2D strain)
        </b>
      </>
    ),
  },
];

export default amylose_slide;
