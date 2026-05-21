/* ======================================================–
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
    }


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
  "Welche Stelle ist für die Quartalsabrechnung für einen Zahnarzt in Bayern zuständig?",

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
    "Recall bedeutet, dass der Patient per Anruf an seinen Termin erinnert wird.",
    "Recall bedeutet, dass der Patient erinnert wird, wieder einen Termin zu vereinbaren.",
    "Jeder Patient muss in die Recall-Datei aufgenommen werden.",
    "Patienten müssen dem Recall zustimmen, damit sie erinnert werden dürfen.",
    "Jede Zahnarztpraxis muss Recall anbieten.",
    "Die Zahnarztpraxis entscheidet, welcher Patient in die Recall-Datei aufgenommen wird."
  ],

  correct: [1,3]
},

{
  question:
  "Welche Aussage zum Datenschutz ist richtig?",

  multiple: false,

  answers: [
    "Alle Patientendaten werden regelmäßig gesichert.",
    "Es darf kein Zugriff auf Patientendaten durch Dritte erfolgen.",
    "Patientendaten müssen lebenslang aufbewahrt werden.",
    "Datenschutz gilt nur für digitale Daten.",
    "Alle Patientendaten müssen nach Abschluss der Behandlung gelöscht werden."
  ],

  correct: [1]
},

{
  question:
  "Was gehört nicht zur Hardware?",

  multiple: false,

  answers: [
    "Monitor",
    "Lesegerät für die eGK",
    "Patientenverwaltungssystem (PVS)",
    "Drucker",
    "Maus"
  ],

  correct: [2]
},

{
  question:
  "Welche beiden Aussagen zum Datenschutzbeauftragten sind richtig?",

  multiple: true,

  answers: [
    "Jede Praxis muss unabhängig von ihrer Größe eine Datenschutzbeauftragte bestellen",
    "Nur die Erstkraft darf zur Datenschutzbeauftragten ernannt werden.",
    "Die Datenschutzbeauftragte achtet auf die Einhaltung der Datenschutzgrundverordnung (DSGVO) und anderer Vorschriften zum Datenschutz.",
    "Um Datenschutzbeauftragte werden zu können, muss man eine Prüfung vor der Zahnärztekammer ablegen.",
    "Eine Datenschutzbeauftragte muss immer benannt werden, wenn die Praxis einen Internetzugang hat.",
    "Die Datenschutzbeauftragte muss die gesetzlichen Regelungen zum Datenschutz kennen und anwenden können."
  ],

  correct: [2,5]
},

{
  question:
  "Welche beiden Aussagen zum Datenschutz sind falsch?",

  multiple: true,

  answers: [
    "Eltern dürfen immer die Aufzeichnungen ihrer Kinder einsehen, bis diese 18 Jahre alt sind.",
    "Ein Patient kann von seinem Zahnarzt Auskunft verlangen, an welche Empfänger seine persönlichen Daten weitergegeben werden.",
    "Ein Patient kann von seinem Zahnarzt Auskunft über den Zweck der Speicherung seiner persönlichen Daten verlangen.",
    "Wünscht ein Patient Auskunft über seine persönlichen Daten, dann kann der Zahnarzt ihm in seine Aufzeichnungen Einblick gewähren.",
    "Bei der Auskunftserteilung über die gespeicherten persönlichen Daten von Patienten handelt es sich um eine Zusatzleistung, die nach GOZ abgerechnet werden kann.",
    "Ein Patient kann, bis auf wenige Ausnahmen, von seinem Zahnarzt Auskunft über die zu seiner Person gespeicherten Daten verlangen."
  ],

  correct: [0,4]
},

{
  question:
  "Welche beiden Aussagen zum Umgang mit personenbezogenen Daten gemäß DSGVO sind falsch?",

  multiple: true,

  answers: [
    "Ein Patient hat das Recht, dass seine Daten berichtigt werden, wenn sie unrichtig sind.",
    "Personenbezogene Daten dürfen nicht von Auszubildenden eingesehen werden.",
    "Ein Patient hat das Recht, dass seine Daten berichtigt werden, wenn diese falsch sind.",
    "Ein Patient hat das Recht, dass auch Verdachtsdiagnosen, die sich nicht bewahrheitet haben, gelöscht werden.",
    "Personenbezogene Daten dürfen nicht gelöscht werden, wenn die Aufbewahrungsfrist noch läuft.",
    "Ein Patient hat das Recht, dass seine Daten gelöscht werden, wenn ihre Speicherung nicht erlaubt ist."
  ],

  correct: [1,3]
},

{
  question:
  "Welche beiden Aussagen zum Datenschutz sind richtig?",

  multiple: true,

  answers: [
    "Ein gutes Passwort sollte kurz sein.",
    "Ein sicheres Passwort sollte Sonderzeichen und Großbuchstaben enthalten.",
    "Ein Passwort sollte über Jahre gleich bleiben.",
    "Passwörter sollte man hinter dem Monitor notieren.",
    "Die Speicherung von Passwörtern sollte ausgeschaltet werden.",
    "Wenn Kolleginnen das Passwort kennen, sollte es geändert werden."
  ],

  correct: [1,4]
},

{
  question:
  "Welches Verhalten von Manuela ist nicht korrekt?",

  multiple: false,

  answers: [
    "Manuela bittet einen schwerhörigen Patienten in ein Behandlungszimmer.",
    "Manuela schützt Daten an der Anmeldung.",
    "Manuela verweigert Rezeptausgabe ohne Vollmacht.",
    "Manuela gibt der angeblichen AOK telefonisch Auskunft.",
    "Manuela beschränkt den Zugriff des Technikers."
  ],

  correct: [3]
},

{
  question:
  "Welche Aussage über eine digitale Patientendatei ist richtig?",

  multiple: false,

  answers: [
    "Als Hardware braucht man ein Zahnarztprogramm.",
    "Als Hardware braucht man PC, Monitor und Drucker.",
    "In digitalen Karteikarten sind nur Bewegungsdaten.",
    "Jede Praxis nutzt zusätzlich Papierkarteikarten.",
    "In digitalen Karteikarten sind nur Stammdaten."
  ],

  correct: [1]
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
  "Welche beiden Ziele verfolgt der Datenschutz?",

  multiple: true,

  answers: [
    "Personal- und Patientendaten sicher verwalten.",
    "Zugriff soll überall möglich sein.",
    "Recall braucht immer Zustimmung.",
    "PCs sollen passwortgeschützt sein.",
    "Risiko eines PC-Ausfalls verringern.",
    "Patientendaten dürfen für Werbung genutzt werden."
  ],

  correct: [0,4]
}

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
