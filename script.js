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

    {
      question:
      "Welche Daten gehören zu den Stammdaten der Patienten?",

      multiple: false,

      answers: [
        "Name, Adresse, Geburtsdatum und Befund",
        "Name, Adresse, Geburtsdatum und Telefonnummer",
        "Name, Adresse, Geburtsdatum und Diagnose",
        "Name, Adresse, Geburtsdatum und Behandlung",
        "Name, Adresse, Befund und Diagnose"
      ],

      correct: [1]
    },

    {
      question:
      "Welche Verwaltungstätigkeit ist bei der Patientenaufnahme nicht erforderlich?",

      multiple: false,

      answers: [
        "Anamneseerhebung",
        "eGK einlesen",
        "Patientenakte anlegen",
        "Datenschutzerklärung unterschreiben lassen",
        "Impfpass digitalisieren"
      ],

      correct: [4]
    },

    {
      question:
      "Wofür steht die Abkürzung ZBV?",

      multiple: false,

      answers: [
        "Zahnärztlicher Bundesverband",
        "Zahnärztlicher Bezirksverband",
        "Zahnärzte-Bayern-Verbund",
        "Zahnärztliche Bundesvereinigung",
        "Zahnbeschwerden-Verband"
      ],

      correct: [1]
    },

    {
      question:
      "Wofür steht die Abkürzung KZVB?",

      multiple: false,

      answers: [
        "Kassenzahnärztlicher Bundesverband",
        "Kassenzahnärztlicher Verband Bayern",
        "Kassenzahnärztliche Vereinigung Bayern",
        "Kollegiale Zahnärztliche Bundesvereinigung",
        "Kollegiale Zahnärztliche Vereinigung Bayern"
      ],

      correct: [2]
    },

    {
      question:
      "Welche Stelle ist für die Quartalsabrechnung zuständig?",

      multiple: false,

      answers: [
        "KZV",
        "KZVB",
        "BLZK",
        "ZBV",
        "BZÄK"
      ],

      correct: [1]
    },

    {
      question:
      "Welche beiden Aussagen zum Recall sind richtig?",

      multiple: true,

      answers: [
        "Recall bedeutet Erinnerung an einen Termin.",
        "Recall bedeutet Erinnerung an neue Terminvereinbarung.",
        "Jeder Patient muss aufgenommen werden.",
        "Patienten müssen zustimmen.",
        "Jede Praxis muss Recall anbieten.",
        "Praxis entscheidet über Aufnahme."
      ],

      correct: [1,3]
    },

    {
      question:
      "Welche Aussage zum Datenschutz ist richtig?",

      multiple: false,

      answers: [
        "Alle Patientendaten werden regelmäßig gesichert.",
        "Es darf kein Zugriff durch Dritte erfolgen.",
        "Patientendaten lebenslang aufbewahren.",
        "Datenschutz gilt nur digital.",
        "Nach Behandlung sofort löschen."
      ],

      correct: [1]
    },

    {
      question:
      "Was gehört nicht zur Hardware?",

      multiple: false,

      answers: [
        "Monitor",
        "eGK-Lesegerät",
        "PVS",
        "Drucker",
        "Maus"
      ],

      correct: [2]
    },

    {
      question:
      "Welche Aussagen zum Datenschutzbeauftragten sind richtig?",

      multiple: true,

      answers: [
        "Jede Praxis braucht immer einen.",
        "Nur Erstkraft darf das sein.",
        "Achtet auf DSGVO.",
        "Muss Kammerprüfung machen.",
        "Immer bei Internet nötig.",
        "Muss Datenschutzregeln kennen."
      ],

      correct: [2,5]
    },

    {
      question:
      "Welches Passwort ist sicher?",

      multiple: false,

      answers: [
        "Abcdefgh",
        "12345678",
        "987654321",
        "Sarah12122008",
        "IwdPb2223!"
      ],

      correct: [4]
    },

    {
      question:
      "Wie viele Seiten hat eine Nachricht laut Schulz von Thun?",

      multiple: false,

      answers: [
        "2",
        "3",
        "4",
        "5",
        "6"
      ],

      correct: [2]
    },

    {
      question:
      "Welche Ebene gibt es beim 4-Ohren-Modell nicht?",

      multiple: false,

      answers: [
        "Appell-Ebene",
        "Sach-Ebene",
        "Ich-Ebene",
        "Du-Ebene",
        "Beziehungs-Ebene"
      ],

      correct: [3]
    },

    {
      question:
      "Welche Aussagen treffen auf Watzlawick zu?",

      multiple: true,

      answers: [
        "Es gibt nichts Gutes außer man tut es",
        "Reden ist Silber",
        "Man kann nicht nicht kommunizieren",
        "Wer zuletzt lacht denkt zu langsam",
        "Keine Antwort ist auch eine Antwort"
      ],

      correct: [2,4]
    }

  ],

  /* ======================================================
     BA
  ====================================================== */

  BA: [

    {
      question:
      "Was bedeutet Screening?",

      multiple: false,

      answers: [
        "Bissflügelaufnahme",
        "systematisches Kontrollverfahren",
        "Fissurenversiegelung",
        "Verlaufskontrolle",
        "Konstanzaufnahme"
      ],

      correct: [1]
    },

    {
      question:
      "Unter Biofilm versteht man ...",

      multiple: false,

      answers: [
        "angeraute Dentinschicht",
        "bakterielle Beläge",
        "mikrobielle Schichten",
        "Testsubstanzen",
        "helle Flecken"
      ],

      correct: [1]
    },

    {
      question:
      "Welche Faktoren begünstigen Karies?",

      multiple: true,

      answers: [
        "geringe Biofilmansammlung",
        "Remineralisation",
        "hohe Biofilmansammlung",
        "regelmäßige Fluoridierung",
        "Zahnfehlstellungen"
      ],

      correct: [2,4]
    }

  ],

  /* ======================================================
     GS
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
        "Autoklav",
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

function backToGap1(){

  document
    .getElementById("quiz-screen")
    .classList.remove("active");

  document
    .getElementById("gap1-screen")
    .classList.add("active");
}

/* ======================================================
   KATEGORIE
====================================================== */

function openCategory(category){

  currentCategory = category;

  currentQuestion = 0;

  document
    .getElementById("gap1-screen")
    .classList.remove("active");

  document
    .getElementById("quiz-screen")
    .classList.add("active");

  showQuestion();
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
}

/* ======================================================
   NÄCHSTE FRAGE
====================================================== */

function nextQuestion(){

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

  const answerLabels =
    document.querySelectorAll(".answer");

  answerLabels.forEach((label,index)=>{

    if(q.correct.includes(index)){

      label.style.border =
        "2px solid #8dffb5";

      label.style.background =
        "rgba(141,255,181,0.15)";
    }

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

  setTimeout(()=>{

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

    showQuestion();

  },2000);
}