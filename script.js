/* ======================================================
   ZFA PRÜFUNGSTRAINER
====================================================== */

/* ======================================================
   FRAGEN
====================================================== */

const questions = {

  /* ======================================================
     PRAXISVERWALTUNG
  ====================================================== */

  PV: [

    {
      question:
      "Frau Meier ist bei der AOK versichert. Welche beiden Aussagen zur AOK sind richtig?",

      multiple: true,

      answers: [
        "AOK ist die Abkürzung für Allgemeine Ortskrankenkasse.",
        "AOK ist die Abkürzung für Ärztliche Ortskrankenkasse.",
        "Die AOK gehört zu den Regionalkassen.",
        "Die AOK gehört zum Verband der Ersatzkassen.",
        "Die AOK ist eine Privatversicherung.",
        "Die AOK gehört zu den sonstigen Kostenträgern."
      ],

      correct: [0,2]
    },

    {
      question:
      "Wofür steht die Abkürzung vdek?",

      multiple: false,

      answers: [
        "Verband der deutschen Kieferorthopäden",
        "Verband der Ersatzkassen",
        "Verband der deutschen Kieferchirurgen",
        "Verband der deutschen Krankenkassen",
        "Verband der deutschen Zahnärztekammern"
      ],

      correct: [1]
    },

    {
      question:
      "Welche Unterlagen sind bei der Patientenaufnahme nicht erforderlich?",

      multiple: false,

      answers: [
        "Anamnese",
        "Versichertenkarte",
        "ggf. vorherige Behandlungsberichte",
        "unterschriebene Datenschutzerklärung",
        "Sozialversicherungsnachweis"
      ],

      correct: [4]
    },

    {
      question:
      "Welche der nachfolgenden Krankenkassen gehören zu den Primärkassen?",

      multiple: true,

      answers: [
        "TK",
        "IKK",
        "Barmer",
        "KKH",
        "AOK",
        "DAK"
      ],

      correct: [1,4]
    },

    {
      question:
      "Zu welcher Kassengruppe gehört die DAK?",

      multiple: false,

      answers: [
        "PKV",
        "Regionalkasse",
        "Sonstige Kostenträger",
        "vdek",
        "Berufsgenossenschaft"
      ],

      correct: [3]
    },



  ],

  /* ======================================================
     BEHANDLUNGSASSISTENZ
  ====================================================== */

  BA: [

    {
      question:
      "Was bedeutet der Begriff Screening?",

      multiple: false,

      answers: [
        "eine Bissflügelaufnahme",
        "ein systematisches Kontrollverfahren",
        "eine Fissurenversiegelung",
        "eine Verlaufskontrolle",
        "eine Konstanzaufnahme"
      ],

      correct: [1]
    },

    {
      question:
      "Unter Biofilm versteht man ...",

      multiple: false,

      answers: [
        "chemisch angeraute Dentinschicht",
        "bakterielle Beläge auf Zahnoberflächen",
        "mikrobielle Schichten in wasserführenden Systemen",
        "Testsubstanzen für Sterilisationsgeräte",
        "helle Flecken im Zahnschmelz"
      ],

      correct: [1]
    }

  ],

  /* ======================================================
     GESUNDHEITSSCHUTZ
  ====================================================== */

  GS: [

    {
      question:
      "Was gehört zur persönlichen Schutzausrüstung?",

      multiple: true,

      answers: [
        "Handschuhe",
        "Mundschutz",
        "Schutzbrille",
        "Schokolade"
      ],

      correct: [0,1,2]
    },

    {
      question:
      "Wodurch erreicht man Keimfreiheit?",

      multiple: false,

      answers: [
        "Sterilisation im Autoklaven",
        "Bohrerbad",
        "Ultraschallbad",
        "Wischdesinfektion"
      ],

      correct: [0]
    }

  ]

};

/* ======================================================
   VARIABLEN
====================================================== */

let currentCategory = "";
let currentQuestion = 0;
let answerChecked = false;

/* ======================================================
   NAVIGATION
====================================================== */

function openGap1(){

  document
    .getElementById("start-screen")
    .classList.remove("active");

  document
    .getElementById("gap1-screen")
    .classList.add("active");
}

function openGap2(){

  document
    .getElementById("start-screen")
    .classList.remove("active");

  document
    .getElementById("gap2-screen")
    .classList.add("active");
}

function backToStart(){

  document
    .getElementById("gap1-screen")
    .classList.remove("active");

  document
    .getElementById("gap2-screen")
    .classList.remove("active");

  document
    .getElementById("quiz-screen")
    .classList.remove("active");

  document
    .getElementById("start-screen")
    .classList.add("active");
}

function backToGap1(){

  document
    .getElementById("quiz-screen")
    .classList.remove("active");

  document
    .getElementById("gap1-screen")
    .classList.add("active");
}

/* ======================================================
   KATEGORIE ÖFFNEN
====================================================== */

function openCategory(category){

  currentCategory = category;

  currentQuestion = 0;

  answerChecked = false;

  document
    .getElementById("gap1-screen")
    .classList.remove("active");

  document
    .getElementById("quiz-screen")
    .classList.add("active");

  document
    .getElementById("quiz-title")
    .innerText =
    getCategoryName(category);

  showQuestion();
}

function getCategoryName(category){

  if(category === "PV"){
    return "Praxisverwaltung";
  }

  if(category === "BA"){
    return "Behandlungsassistenz";
  }

  if(category === "GS"){
    return "Gesundheitsschutz";
  }
}

/* ======================================================
   FRAGE ZEIGEN
====================================================== */

function showQuestion(){

  const q =
    questions[currentCategory][currentQuestion];

  document
    .getElementById("question-number")
    .innerText =
    "Frage "
    + (currentQuestion + 1)
    + " von "
    + questions[currentCategory].length;

  document
    .getElementById("question")
    .innerText =
    q.question;

  const answersDiv =
    document.getElementById("answers");

  answersDiv.innerHTML = "";

  q.answers.forEach((answer,index)=>{

    const label =
      document.createElement("label");

    label.className =
      "answer";

    label.innerHTML =

      `<input
        type="${
          q.multiple
          ? 'checkbox'
          : 'radio'
        }"
        name="answer"
        value="${index}"
      >

      ${answer}`;

    answersDiv.appendChild(label);
  });

  document
    .getElementById("feedback")
    .innerText = "";

  document.querySelector(
    ".next-btn"
  ).innerText =
  "Antwort prüfen";
}

/* ======================================================
   NÄCHSTE FRAGE
====================================================== */

function nextQuestion(){

  // =====================================
  // ERSTER KLICK = PRÜFEN
  // =====================================

  if(!answerChecked){

    const q =
      questions[currentCategory][currentQuestion];

    const selected =

      [...document.querySelectorAll(
        "input:checked"
      )]

      .map(el =>
        parseInt(el.value)
      )

      .sort();

    if(selected.length === 0){

      alert(
        "Bitte Antwort auswählen 😄"
      );

      return;
    }

    const correct =
      [...q.correct].sort();

    const isCorrect =

      JSON.stringify(selected)
      ===
      JSON.stringify(correct);

    const feedback =
      document.getElementById("feedback");

    feedback.innerText =

      isCorrect
      ? "✅ Richtig"
      : "❌ Falsch";

    // Antworten markieren

    const answerLabels =
      document.querySelectorAll(".answer");

    answerLabels.forEach((label,index)=>{

      // richtige Antwort

      if(q.correct.includes(index)){

        label.style.border =
          "2px solid #8dffb5";

        label.style.background =
          "rgba(141,255,181,0.15)";
      }

      // falsch markiert

      if(
        selected.includes(index)
        &&
        !q.correct.includes(index)
      ){

        label.style.border =
          "2px solid #ff7b7b";

        label.style.background =
          "rgba(255,123,123,0.15)";
      }

    });

    document.querySelector(
      ".next-btn"
    ).innerText =
    "Weiter →";

    answerChecked = true;

    return;
  }

  // =====================================
  // ZWEITER KLICK = NÄCHSTE FRAGE
  // =====================================

  currentQuestion++;

  if(
    currentQuestion
    >=
    questions[currentCategory].length
  ){

    alert(
      "Bereich abgeschlossen 🎉"
    );

    backToGap1();

    return;
  }

  answerChecked = false;

  showQuestion();
}
