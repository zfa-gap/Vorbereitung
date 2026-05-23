/* ======================================================
   ZFA PRÜFUNGSTRAINER
====================================================== */

/* ======================================================
   FRAGEN
====================================================== */
function saveProgress(data) {
  localStorage.setItem("quizProgress", JSON.stringify(data));
}

function loadProgress() {
  const saved = localStorage.getItem("quizProgress");

  if (saved) {
    return JSON.parse(saved);
  }

  return null;
}





const questions = {

  /* ======================================================
     GAP 1 — PRAXISVERWALTUNG
  ====================================================== */

  PV: [

  
    {
      question:
      "Frau Meier ist bei der AOK versichert. Welche beiden Aussagen zur AOK sind richtig? (2 Antworten)",

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
      "Welche der nachfolgenden Krankenkassen gehören zu den Primärkassen? (2 Antworten)",

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
  "Welche beiden Aussagen zum Recall sind richtig? (2 Antworten)",

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
  "Ordnen Sie die Aufgaben den Organisationen zu!",

  type: "matching",

  categories: [
    "KZVB",
    "BLZK",
    "ZBV"
  ],

  items: [
    "Quartalsabrechnung",
    "Standesvertretung aller Zahnärzte",
    "Durchführung der GAP 1 und GAP 2",
    "Genehmigung der Ausbildungsverträge",
    "Zahnärztlichen Notdienst einteilen",
    "Abrechnungsfortbildungen",
    "Erstellen der GAP 1 und GAP 2",
    "Verkürzungsanträge der Ausbildungsdauer genehmigen"
  ],

  correct: [0,1,2,2,0,1,1,2]
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
  "Welche beiden Aussagen zum Datenschutzbeauftragten sind richtig? (2 Antworten)",

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
  "Welche beiden Aussagen zum Datenschutz sind falsch? (2 Antworten)",

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
  "Welche beiden Aussagen zum Umgang mit personenbezogenen Daten gemäß DSGVO sind falsch? (2 Antworten)",

  multiple: true,

  answers: [
    "Ein Patient hat das Recht, dass seine Daten berichtigt werden, wenn sie unrichtig sind.",
    "Personenbezogene Daten dürfen nicht von Auszubildenden eingesehen werden.",
    "Ein Patient hat das Recht, dass seine Daten berichtigt werden, wenn diese falsch sind",
    "Ein Patient hat das Recht, dass auch Verdachtsdiagnosen, die sich nicht bewahrheitet haben, gelöscht werden.",
    "Personenbezogene Daten einer Zahnarztpraxis dürfen nicht gelöscht werden, wenn ihre gesetzlich vorgeschriebene Aufbewahrungsfrist noch nicht abgelaufen ist. ",
    "Ein Patient hat das Recht, dass seine Daten gelöscht werden, wenn ihre Speicherung nicht erlaubt ist. "
  ],

  correct: [1,3]
},

{
  question:
  "Welche beiden Aussagen zum Datenschutz sind richtig? (2 Antworten)",

  multiple: true,

  answers: [
    "Ein besonders gutes Passwort für ein Computerprogramm sollte nicht länger als 4 Zeichen sein und möglichst aus persönlichen Daten bestehen, damit man es sich leicht merken kann",
    "Ein sicheres Passwort sollte Sonderzeichen und Großbuchstaben enthalten.",
    "Wenn man sich ein gutes Passwort ausgedacht hat, dann kann man das über mehrere Jahre behalten, damit man nicht immer neu nachdenken muss.",
    "Damit man sein Passwort nicht vergisst, sollte man es an einem geheimen Ort aufschreiben, z. B. hinter dem Monitor.",
    "Die Speicherung von Passwörtern sollte ausgeschaltet werden.",
    "Wenn Kolleginnen das Passwort kennen, sollte es geändert werden."
  ],

  correct: [1,5]
},

{
  question:
  "Beurteilen Sie das Verhalten der ZFA Manuela hinsichtlich des Einhaltens des Datenschutzes. Welches Verhalten von Manuela ist nicht korrekt?",

  multiple: false,

  answers: [
    "Manuela bittet einen schwerhörigen Patienten in ein Behandlungszimmer, um ihm auf Anweisung des Zahnarztes einen Befund mitzuteilen.",
    "Manuela achtet darauf, dass an der Anmeldung die anderen Patienten die Daten des Patienten, den sie gerade bedient, nicht mithören oder sehen können.",
    "Ein Mann betritt die Praxis und sagt, dass er das Rezept für seine Frau abholen will. Der Mann hat keine Vollmacht dabei. Manuela weigert sich, dem Mann das Rezept mitzugeben.",
    "Manuela erhält einen Anruf. Der Anrufer behauptet von der AOK zu sein und möchte den Grund der Krankschreibung des Patienten Hilbert Meyer wissen. Manuela gibt bereitwillig Auskunft, dass der Anrufer ja gesagt hat, dass er von der AOK ist und sie weiß, Krankenkassen bestimmte Auskunftsrechte haben. ",
    "Manuela achtet darauf, dass der Techniker, der die Computeranlage repariert, nicht mehr Einblick in die Patientendaten hat, als es zur Erfüllung seiner Aufgabe notwendig ist."
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
  "Welche beiden Ziele verfolgt der Datenschutz? (2 Antworten)",

  multiple: true,

  answers: [
    "Personal- und Patientendaten sicher verwalten.",
    "Der Zugriff auf Patientendaten soll in jedem Behandlungszimmer möglich sein.",
    "Beim Recall muss der Patient immer zustimmen.",
    "Um Daten vor Diebstahl zu schützen, muss der PC immer passwortgeschützt sein..",
    "Risiko eines PC-Ausfalls verringern.",
    "Patientendaten dürfen ohne Einwilligung für Werbezwecke genutzt werden."
  ],

  correct: [0,4]
},


     {
  question:
  "Welche der folgenden Feststellungen ist richtig?",

  multiple: false,

  answers: [

    "Die Behandlungstage gehören zu den Stammdaten.",
    "Die Angabe der behandelten Zähne gehört zu den Stammdaten.",
    "Die Kartenleiste nimmt die Stammdaten des Patienten auf.",
    "Die Stammdaten ändern sich häufig während der Behandlungsdauer.",
    "Die Adresse des Patienten gehört zu den Stammdaten."

  ],

  correct: [4]
},

{
  question:
  "Welche Aussagen zum Anti-Viren-Programm sind richtig? (2 Antworten)",

  multiple: true,

  answers: [

    "Das Anti-Viren-Programm gehört zur Hardware.",
    "Das Anti-Viren-Programm dient dazu, dass sich die Patienten nicht mit Viren infizieren.",
    "Das Anti-Viren-Programm gehört zur Software.",
    "Ein Anti-Viren-Programm funktioniert nur mit ordnungsgemäßer Desinfektion.",
    "Das Anti-Viren-Programm schützt den PC vor Viren und Online-Bedrohungen.",
    "Ein Anti-Viren-Programm ersetzt regelmäßige Datensicherungen vollständig."

  ],

  correct: [2,4]
},

{
  question:
  "Welche beiden Aussagen zur Einwilligungspflicht sind richtig? (2 Antworten)",

  multiple: true,

  answers: [

    "Erst durch die ausdrückliche Einwilligung des Patienten in die ärztliche Behandlung ist die Rechtsvoraussetzung für die Behandlung gegeben. Ansonsten liegt immer Körperverletzung vor, auch bei einer Notfallbehandlung.",
    "Eine Einwilligung ist nicht notwendig, wenn nur durch rasches Handeln eine Lebensgefahr des Patienten abgewendet werden kann.",
    "Die Einwilligung kann immer nur von geschäftsfähigen Patienten gegeben werden. Bei Patienten unter 18 Jahren ist immer die Einwilligung der gesetzlichen Vertreter notwendig.",
    "Der Patient kann seine Einwilligung in die zahnärztliche Behandlung jederzeit widerrufen.",
    "Der Patient kann seine Einwilligung in die zahnärztliche Behandlung nicht jederzeit widerrufen.",
    "Die Einwilligung ist nur bei operativen Eingriffen notwendig, nicht bei einfachen Behandlungen."

  ],

  correct: [1,3]
},

{
  question:
  "Welche Aussage zur Einwilligungspflicht bei einem Behandlungsvertrag ist falsch?",

  multiple: false,

  answers: [

    "Erst durch die ausdrückliche Einwilligung des Patienten in die ärztliche Behandlung ist die Rechtsvoraussetzung für die Behandlung gegeben.",
    "Die Einwilligung kann immer nur von geschäftsfähigen Patienten gegeben werden. Bei Patienten unter 18 Jahren ist immer die Einwilligung der gesetzlichen Vertreter notwendig, ansonsten liegt immer Körperverletzung vor!",
    "Die Einwilligung kann grundsätzlich nur von geschäftsfähigen Patienten gegeben werden.",
    "Bei Kindern ist immer die Einwilligung der gesetzlichen Vertreter notwendig.",
    "Der Patient kann seine Einwilligung in die zahnärztliche Behandlung jederzeit widerrufen."

  ],

  correct: [1]
},

{
  question:
  "Eine „Geschäftsführung ohne Auftrag“ liegt vor, wenn ...",

  multiple: false,

  answers: [

    "der Geschäftsführer einer Firma einem Zahnarzt ein unverlangtes Angebot zusendet.",
    "eine zahnmedizinische Fachangestellte mit Patienten Termine vereinbart, ohne von ihrem Chef dazu beauftragt zu sein.",
    "ein Zahnarzt einen Patienten gegen dessen Willen behandelt.",
    "ein Zahnarzt einen Patienten, der seine eGK nicht vorgelegt hat, trotzdem behandelt.",
    "ein Zahnarzt einem bewusstlosen Patienten Erste Hilfe leistet."

  ],

  correct: [4]
},

{
  question:
  "Ein Zahnarzt führt eine Wurzelspitzenresektion bei einem Patienten durch. Um welche Vertragsart handelt es sich?",

  multiple: false,

  answers: [

    "Arbeitsvertrag",
    "Dienstvertrag",
    "Werkvertrag",
    "Behandlungsvertrag",
    "Geschäftsführung ohne Auftrag"

  ],

  correct: [3]
},

{
  question:
  "Mit welcher Berufsgruppe wird typischerweise ein Werkvertrag abgeschlossen?",

  multiple: false,

  answers: [

    "Rechtsanwalt",
    "Zahnarzt",
    "Handwerker/Zahntechniker",
    "Steuerberater",
    "Kieferchirurg"

  ],

  correct: [2]
},

{
  question:
  "Wann behandelt ein Zahnarzt einen Patienten ohne einen Vertrag mit dem Patienten abzuschließen?",

  multiple: false,

  answers: [

    "Werkvertrag",
    "Dienstvertrag",
    "Arbeitsvertrag",
    "Behandlungsvertrag",
    "Geschäftsführung ohne Auftrag"

  ],

  correct: [4]
},

{
  question:
  "In welchem Fall handelt es sich um einen Werkvertrag?",

  multiple: false,

  answers: [

    "Ein Patient gibt seine Einwilligung zu einer Kieferoperation.",
    "Ein Zahnarzt erteilt einem Zahnlabor den Auftrag zur Reparatur einer Zahnprothese.",
    "Ein Arzt behandelt am Unfallort einen bewusstlosen Patienten.",
    "Ein Zahnarzt beauftragt in einem Streitfall einen Rechtsanwalt.",
    "Ein Patient erscheint zur Routineuntersuchung in der Praxis."

  ],

  correct: [1]
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
  "Welche 2 Aussagen treffen auf Watzlawicks bekannteste Kommunikationsregel zu?",

  multiple: true,

  answers: [

    "Es gibt nichts Gutes, außer man tut es.",
    "Reden ist Silber, Schweigen ist Gold.",
    "Man kann nicht nicht kommunizieren.",
    "Wer zuletzt lacht, denkt zu langsam.",
    "Keine Antwort ist auch eine Antwort."

  ],

  correct: [2,4]
},

{
  question:
  "Welche Antwort ist richtig?",

  multiple: false,

  answers: [

    "Bei einem Patienten mit einer Angststörung ist die Angst oft übertrieben und kann durch „sich zusammenreißen“ beherrscht werden.",
    "Bei einem Patienten mit einer Angststörung kann die Angst von der ZFA in der Regel gar nicht wahrgenommen werden.",
    "Ein Panikanfall beim Anblick einer Spritze kann sogar mit Todesangst beim Patienten einhergehen.",
    "Ein Panikanfall beim Anblick einer Spritze geht niemals mit Todesangst beim Patienten einher.",
    "Angststörungen spielen in der Zahnarztpraxis keine Rolle."

  ],

  correct: [2]
},

{
  question:
  "Wann ist keine schriftliche Kommunikation angebracht?",

  multiple: false,

  answers: [

    "Kündigungsschreiben",
    "Ausbildungsvertrag",
    "Mahnung",
    "Mitarbeiterbesprechung",
    "Auftragsbestätigung"

  ],

  correct: [3]
},

{
  question:
  "Was zählt nicht zur nonverbalen Kommunikation?",

  multiple: false,

  answers: [

    "Körpersprache",
    "Mimik",
    "Körperhaltung",
    "Kleidung",
    "Tonfall"

  ],

  correct: [4]
},

{
  question:
  "Welches sind die 3 „Todsünden“ in der Kommunikation?",

  multiple: true,

  answers: [

    "Sich herablassend benehmen",
    "Ich-Botschaften geben",
    "Ungebetene Ratschläge aussprechen",
    "Keine Gerüchte verbreiten",
    "Nicht zu seiner eigenen Botschaft stehen",
    "Empathie zeigen"

  ],

  correct: [0,2,4]
},

{
  question:
  "Was gehört nicht zu einer guten Gesprächsvorbereitung?",

  multiple: false,

  answers: [

    "genügend Zeit einplanen",
    "ruhigen Raum reservieren",
    "sich über das Gegenüber informieren",
    "passende Kleidung",
    "sich Rechtfertigungen überlegen"

  ],

  correct: [4]
},

{
  question:
  "Welche Kommunikationsform ist die wichtigste in der Zahnarztpraxis?",

  multiple: false,

  answers: [

    "E-Mail",
    "Telefon",
    "persönliche Interaktion",
    "Videokonferenz",
    "Social Media"

  ],

  correct: [2]
},

{
  question:
  "Welche Kommunikation ist am effizientesten, um Patienten über die Öffnungszeiten der Zahnarztpraxis zu informieren?",

  multiple: false,

  answers: [

    "E-Mail",
    "Telefon",
    "persönliche Interaktion",
    "Videokonferenz",
    "Internetauftritt"

  ],

  correct: [4]
},

{
  question:
  "Welche nonverbale Kommunikation kann eine ZFA verwenden, um den Patienten zu beruhigen?",

  multiple: false,

  answers: [

    "Augenbrauen heben",
    "Lächeln",
    "Mundwinkel nach unten",
    "Kopf schütteln",
    "Augen schließen"

  ],

  correct: [1]
},

{
  question:
  "Was versteht man unter paraverbaler Kommunikation?",

  multiple: false,

  answers: [

    "Kommunikation über Worte",
    "Kommunikation durch Gebärden",
    "Kommunikation durch Körpersprache",
    "Kommunikation durch Emotionen",
    "Kommunikation durch Stimme und Tonfall"

  ],

  correct: [4]
},

{
  question:
  "Es kommt häufiger vor, dass sich Patienten beschweren. Um die Patientenzufriedenheit zu verbessern, müssen alle MitarbeiterInnen ihr Verhalten verbessern. Welches Verhalten sollten Sie vermeiden?",

  multiple: false,

  answers: [

    "Genau zuhören und wichtige Informationen notieren.",

    "Patientenansprache mit Namen und Blickkontakt verbessern die Gesprächsatmosphäre.",

    "Freundlich und höflich mit Patienten umgehen.",

    "Sich gegenüber dem Patienten um eine verständliche Ausdrucksweise bemühen.",

    "Wenn Probleme durch das Verhalten von KollegInnen auftreten, sollte der Patient gesagt bekommen, wer das Problem verursacht hat und wen die Schuld trifft.",

    "Den Patienten auch für die Zukunft aktive Hilfe anbieten, um Ängste und Ungewissheiten aufzubauen."

  ],

  correct: [4]
},

{
  question:
  "Welche Redewendung gibt den Grundsatz der Kommunikation nach Watzlawick am besten wieder?",

  multiple: true,

  answers: [

    "Reden ist Silber, Schweigen ist Gold.",
    "Morgenstund hat Gold im Mund.",
    "Freundlich und höflich mit Patienten umgehen.",
    "Es ist nicht alles Gold, was glänzt.",
    "Keine Antwort ist auch eine Antwort.",
    "Wie du mir, so ich dir."

  ],

  correct: [0,4]
}

  ],

  /* ======================================================
     GAP 1 — BEHANDLUNGSASSISTENZ
  ====================================================== */

  BA: [

{
  question:
  "Welche Faktoren begünstigen die Entstehung von Karies?",

  multiple: true,

  answers: [
    "hohe Biofilmansammlung",
    "regelmäßige Fluoridierung",
    "Zahnfehlstellungen",
    "Remineralisation durch Speichel",
    "gute Mundhygiene"
  ],

  correct: [0,2]
},

{
  question:
  "Welche Untersuchungsmethoden eignen sich zur Kariesdiagnostik?",

  multiple: true,

  answers: [
    "Bissflügelaufnahme",
    "Fluoreszenzmessung",
    "Kariesdetektoren",
    "Fernröntgenseitenaufnahme",
    "Lichtdurchleuchtung"
  ],

  correct: [0,1,2,4]
},

{
  question:
  "Welche Aussage zur Fissurenversiegelung ist richtig?",

  multiple: false,

  answers: [
    "Die Zahnoberfläche wird mit H2O2 konditioniert.",
    "Die Fissuren müssen kariesfrei sein.",
    "Makrogefüllte Komposite sind am besten geeignet.",
    "Die Versiegelung erfolgt ohne Trockenlegung."
  ],

  correct: [1]
},

{
  question:
  "Mit welchem Hilfsmittel wird absolute Trockenlegung erreicht?",

  multiple: false,

  answers: [
    "Watterollen",
    "Speichelzieher",
    "Kofferdam",
    "Luftbläser"
  ],

  correct: [2]
},

{
  question:
  "Welche Aussagen zur Polymerisationslampe sind richtig?",

  multiple: true,

  answers: [
    "Das Licht kann die Augen schädigen.",
    "Der Abstand zur Füllung sollte gering sein.",
    "Das Lichtaustrittsfenster muss kontrolliert werden.",
    "Das Lichtaustrittsfenster darf nie desinfiziert werden.",
    "Akkubetriebene Lampen sollten geladen sein."
  ],

  correct: [0,1,2,4]
},

{
  question:
  "Welche Instrumente werden für eine PAR-Behandlung benötigt?",

  multiple: true,

  answers: [
    "Scaler",
    "Küretten",
    "Polierer",
    "Excavator",
    "Ultraschallgerät"
  ],

  correct: [0,1,4]
},

{
  question:
  "Bringen Sie die Schritte der professionellen Zahnreinigung in die richtige Reihenfolge!",

  type: "ordering",

  items: [
    "Anfärben der Beläge",
    "Entfernen harter Beläge",
    "Entfernen weicher Beläge",
    "Politur",
    "Fluoridierung"
  ],

  correct: [0,1,2,3,4]
},

{
  question:
  "Welche Aussagen zur Gingivitis sind richtig?",

  multiple: true,

  answers: [
    "Sie ist reversibel.",
    "Sie betrifft den Zahnhalteapparat.",
    "Biofilm ist eine Ursache.",
    "Es kommt immer zu Knochenabbau.",
    "Zahnfleischbluten kann auftreten."
  ],

  correct: [0,2,4]
},

{
  question:
  "Welche Materialien werden bei einer Wurzelkanalbehandlung benötigt?",

  multiple: true,

  answers: [
    "Papierspitzen",
    "Guttapercha",
    "Kofferdam",
    "Amalgamträger",
    "Endofeilen"
  ],

  correct: [0,1,2,4]
},

{
  question:
  "Bringen Sie die Schritte einer Wurzelkanalbehandlung in die richtige Reihenfolge!",

  type: "ordering",

  items: [
    "Trepanation",
    "Längenbestimmung",
    "Aufbereitung",
    "Spülung",
    "Wurzelfüllung"
  ],

  correct: [0,1,2,3,4]
},

{
  question:
  "Welche Aussagen zur Trepanation sind richtig?",

  multiple: true,

  answers: [
    "Sie dient der Druckentlastung.",
    "Das Pulpakavum wird eröffnet.",
    "Sie erfolgt immer ohne Anästhesie.",
    "Sie wird bei Schmerzen durchgeführt.",
    "Danach erfolgt immer eine Extraktion."
  ],

  correct: [0,1,3]
},

{
  question:
  "Was versteht man unter Germektomie?",

  multiple: false,

  answers: [
    "Entfernung eines Zahnkeimes",
    "Entfernung einer Wurzelspitze",
    "Entfernung eines Fremdkörpers",
    "Entfernung eines Zahnes"
  ],

  correct: [0]
},

{
  question:
  "Welche Instrumente werden bei einer Extraktion benötigt?",

  multiple: true,

  answers: [
    "Hebel",
    "Extraktionszange",
    "Mundspiegel",
    "Kürette",
    "Sonde"
  ],

  correct: [0,1,3]
},

{
  question:
  "Bringen Sie die chirurgischen Arbeitsschritte in die richtige Reihenfolge!",

  type: "ordering",

  items: [
    "Anästhesie",
    "Lösen des Zahnes",
    "Extraktion",
    "Kürettage",
    "Tamponade"
  ],

  correct: [0,1,2,3,4]
},

{
  question:
  "Welche Aussagen zur Wurzelspitzenresektion sind richtig?",

  multiple: true,

  answers: [
    "Die Wurzelspitze wird entfernt.",
    "Der Knochen wird eröffnet.",
    "Sie erfolgt nur bei Milchzähnen.",
    "Eine retrograde Füllung kann notwendig sein.",
    "Sie gehört zur Kieferorthopädie."
  ],

  correct: [0,1,3]
},

{
  question:
  "Welche Aussagen zur Lokalanästhesie sind richtig?",

  multiple: true,

  answers: [
    "Sie dient der Schmerzausschaltung.",
    "Vor Injektion sollte aspiriert werden.",
    "Sie wirkt sofort unbegrenzt.",
    "Eine Leitungsanästhesie kann im Unterkiefer erfolgen.",
    "Sie ist immer ohne Risiken."
  ],

  correct: [0,1,3]
},

{
  question:
  "Ordnen Sie die Anästhesieformen zu!",

  type: "matching",

  categories: [
    "Infiltrationsanästhesie = 1",
    "Leitungsanästhesie = 2"
  ],

  items: [
    "häufig im Oberkiefer",
    "Unterkieferseitenzahnbereich",
    "Nerv wird direkt betäubt",
    "Diffusion im Gewebe"
  ],

  correct: [0,1,1,0]
},

{
  question:
  "Welche Materialien werden für eine Abformung benötigt?",

  multiple: true,

  answers: [
    "Abformlöffel",
    "Alginat",
    "Silikon",
    "Guttapercha",
    "Anmischspatel"
  ],

  correct: [0,1,2,4]
},

{
  question:
  "Bringen Sie die Herstellung einer Krone in die richtige Reihenfolge!",

  type: "ordering",

  items: [
    "Präparation",
    "Abformung",
    "Provisorium",
    "Herstellung im Labor",
    "Eingliederung"
  ],

  correct: [0,1,2,3,4]
},

{
  question:
  "Welche Aussagen zum Provisorium sind richtig?",

  multiple: true,

  answers: [
    "Es schützt den präparierten Zahn.",
    "Es dient der Ästhetik.",
    "Es ersetzt dauerhaft die Krone.",
    "Es kann aus Kunststoff bestehen.",
    "Es verhindert Zahnwanderungen."
  ],

  correct: [0,1,3,4]
},

{
  question:
  "Welche Maßnahmen gehören zur Individualprophylaxe?",

  multiple: true,

  answers: [
    "Fluoridierung",
    "Mundhygieneinstruktion",
    "Fissurenversiegelung",
    "Wurzelspitzenresektion",
    "Professionelle Zahnreinigung"
  ],

  correct: [0,1,2,4]
},

{
  question:
  "Welche Aussagen zu Fluoriden sind richtig?",

  multiple: true,

  answers: [
    "Sie fördern die Remineralisation.",
    "Sie machen Zähne weicher.",
    "Sie erhöhen die Kariesresistenz.",
    "Sie wirken nur bei Erwachsenen.",
    "Sie können lokal angewendet werden."
  ],

  correct: [0,2,4]
},

{
  question:
  "Bringen Sie die Schritte der Mundhygiene in die richtige Reihenfolge!",

  type: "ordering",

  items: [
    "Zahnbürste ansetzen",
    "von Rot nach Weiß putzen",
    "Außenflächen reinigen",
    "Innenflächen reinigen",
    "Kauflächen reinigen"
  ],

  correct: [0,1,2,3,4]
}, 

     {
  question:
  "Eine „Geschäftsführung ohne Auftrag“ liegt vor, wenn ...",

  multiple: false,

  answers: [

    "der Geschäftsführer einer Firma einem Zahnarzt ein unverlangtes Angebot zusendet.",
    "eine zahnmedizinische Fachangestellte mit Patienten Termine vereinbart, ohne von ihrem Chef dazu beauftragt zu sein.",
    "ein Zahnarzt einen Patienten gegen dessen Willen behandelt.",
    "ein Zahnarzt einen Patienten, der seine eGK nicht vorgelegt hat, trotzdem behandelt.",
    "ein Zahnarzt einem bewusstlosen Patienten Erste Hilfe leistet."

  ],

  correct: [4]
},

{
  question:
  "Ein Zahnarzt führt eine Wurzelspitzenresektion bei einem Patienten durch. Um welche Vertragsart handelt es sich?",

  multiple: false,

  answers: [

    "Arbeitsvertrag",
    "Dienstvertrag",
    "Werkvertrag",
    "Behandlungsvertrag",
    "Geschäftsführung ohne Auftrag"

  ],

  correct: [3]
},

{
  question:
  "Mit welcher Berufsgruppe wird typischerweise ein Werkvertrag abgeschlossen?",

  multiple: false,

  answers: [

    "Rechtsanwalt",
    "Zahnarzt",
    "Handwerker/Zahntechniker",
    "Steuerberater",
    "Kieferchirurg"

  ],

  correct: [2]
},

{
  question:
  "Wann behandelt ein Zahnarzt einen Patienten ohne einen Vertrag mit dem Patienten abzuschließen?",

  multiple: false,

  answers: [

    "Werkvertrag",
    "Dienstvertrag",
    "Arbeitsvertrag",
    "Behandlungsvertrag",
    "Geschäftsführung ohne Auftrag"

  ],

  correct: [4]
},

{
  question:
  "In welchem Fall handelt es sich um einen Werkvertrag?",

  multiple: false,

  answers: [

    "Ein Patient gibt seine Einwilligung zu einer Kieferoperation.",
    "Ein Zahnarzt erteilt einem Zahnlabor den Auftrag zur Reparatur einer Zahnprothese.",
    "Ein Arzt behandelt am Unfallort einen bewusstlosen Patienten.",
    "Ein Zahnarzt beauftragt in einem Streitfall einen Rechtsanwalt.",
    "Ein Patient erscheint zur Routineuntersuchung in der Praxis."

  ],

  correct: [1]
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
  "Welche 2 Aussagen treffen auf Watzlawicks bekannteste Kommunikationsregel zu?",

  multiple: true,

  answers: [

    "Es gibt nichts Gutes, außer man tut es.",
    "Reden ist Silber, Schweigen ist Gold.",
    "Man kann nicht nicht kommunizieren.",
    "Wer zuletzt lacht, denkt zu langsam.",
    "Keine Antwort ist auch eine Antwort."

  ],

  correct: [2,4]
},

{
  question:
  "Welche Antwort ist richtig?",

  multiple: false,

  answers: [

    "Bei einem Patienten mit einer Angststörung ist die Angst oft übertrieben und kann durch „sich zusammenreißen“ beherrscht werden.",
    "Bei einem Patienten mit einer Angststörung kann die Angst von der ZFA in der Regel gar nicht wahrgenommen werden.",
    "Ein Panikanfall beim Anblick einer Spritze kann sogar mit Todesangst beim Patienten einhergehen.",
    "Ein Panikanfall beim Anblick einer Spritze geht niemals mit Todesangst beim Patienten einher.",
    "Angststörungen spielen in der Zahnarztpraxis keine Rolle."

  ],

  correct: [2]
},

{
  question:
  "Wann ist keine schriftliche Kommunikation angebracht?",

  multiple: false,

  answers: [

    "Kündigungsschreiben",
    "Ausbildungsvertrag",
    "Mahnung",
    "Mitarbeiterbesprechung",
    "Auftragsbestätigung"

  ],

  correct: [3]
},

{
  question:
  "Was zählt nicht zur nonverbalen Kommunikation?",

  multiple: false,

  answers: [

    "Körpersprache",
    "Mimik",
    "Körperhaltung",
    "Kleidung",
    "Tonfall"

  ],

  correct: [4]
},

{
  question:
  "Welches sind die 3 „Todsünden“ in der Kommunikation?",

  multiple: true,

  answers: [

    "Sich herablassend benehmen",
    "Ich-Botschaften geben",
    "Ungebetene Ratschläge aussprechen",
    "Keine Gerüchte verbreiten",
    "Nicht zu seiner eigenen Botschaft stehen",
    "Empathie zeigen"

  ],

  correct: [0,2,4]
},

{
  question:
  "Was gehört nicht zu einer guten Gesprächsvorbereitung?",

  multiple: false,

  answers: [

    "genügend Zeit einplanen",
    "ruhigen Raum reservieren",
    "sich über das Gegenüber informieren",
    "passende Kleidung",
    "sich Rechtfertigungen überlegen"

  ],

  correct: [4]
},

{
  question:
  "Welche Kommunikationsform ist die wichtigste in der Zahnarztpraxis?",

  multiple: false,

  answers: [

    "E-Mail",
    "Telefon",
    "persönliche Interaktion",
    "Videokonferenz",
    "Social Media"

  ],

  correct: [2]
},

{
  question:
  "Welche Kommunikation ist am effizientesten, um Patienten über die Öffnungszeiten der Zahnarztpraxis zu informieren?",

  multiple: false,

  answers: [

    "E-Mail",
    "Telefon",
    "persönliche Interaktion",
    "Videokonferenz",
    "Internetauftritt"

  ],

  correct: [4]
},

{
  question:
  "Welche nonverbale Kommunikation kann eine ZFA verwenden, um den Patienten zu beruhigen?",

  multiple: false,

  answers: [

    "Augenbrauen heben",
    "Lächeln",
    "Mundwinkel nach unten",
    "Kopf schütteln",
    "Augen schließen"

  ],

  correct: [1]
},

{
  question:
  "Was versteht man unter paraverbaler Kommunikation?",

  multiple: false,

  answers: [

    "Kommunikation über Worte",
    "Kommunikation durch Gebärden",
    "Kommunikation durch Körpersprache",
    "Kommunikation durch Emotionen",
    "Kommunikation durch Stimme und Tonfall"

  ],

  correct: [4]
},

{
  question:
  "Welches Verhalten sollten Sie vermeiden, um die Patientenzufriedenheit zu verbessern?",

  multiple: false,

  answers: [

    "Genau zuhören und wichtige Informationen notieren.",
    "Patienten mit Namen ansprechen und Blickkontakt halten.",
    "Freundlich und höflich mit Patienten umgehen.",
    "Sich verständlich ausdrücken.",
    "Dem Patienten sagen, welche Kollegin schuld am Problem ist.",
    "Auch zukünftig Hilfe anbieten."

  ],

  correct: [4]
},

{
  question:
  "Welche Redewendung gibt den Grundsatz der Kommunikation nach Watzlawick am besten wieder?",

  multiple: false,

  answers: [

    "Reden ist Silber, Schweigen ist Gold.",
    "Morgenstund hat Gold im Mund.",
    "Freundlich und höflich mit Patienten umgehen.",
    "Es ist nicht alles Gold, was glänzt.",
    "Keine Antwort ist auch eine Antwort.",
    "Wie du mir, so ich dir."

  ],

  correct: [4]
}

],

  /* ======================================================
     GAP 1 — GESUNDHEITSSCHUTZ
  ====================================================== */

  GS: [

{
  question:
  "Nach erfolgter Prothetik Behandlung sollen Sie den Arbeitsplatz hygienisch aufbereiten. Ordnen Sie zu!",

  type: "matching",

  categories: [
    "kritisch = 1",
    "semikritisch = 2",
    "unkritisch = 3"
  ],

  items: [
    "Abformlöffel aus Metall",
    "Gesichtsbogen",
    "Fräse und Gummipolierer zur Entfernung von Druckstellen",
    "Halter für Okklusionsfolie",
    "Bohr- und Schleifinstrumente für Präparation",
    "Elektrotom"
  ],

  correct: [2,1,2,1,0,0]
},

{
  question:
  "Nehmen Sie für die verwendeten Medizinprodukte die Risikobewertung vor!",

  type: "matching",

  categories: [
    "unkritisch = 1",
    "semikritisch = 2",
    "kritisch = 3"
  ],

  items: [
    "Durchdringen Haut oder Schleimhaut",
    "Kommen mit intakter Haut in Berührung",
    "kommen mit Schleimhaut oder krankhaft veränderter Haut in Berührung"
  ],

  correct: [2,0,1]
},

{
  question:
  "Bringen Sie die Schritte der hygienischen Aufbereitung in die richtige Reihenfolge!",

  type: "ordering",

  items: [
     "Grobreinigung",
     "gesicherter Transport zum Aufbereitungsbereich",
     "RDG / Desinfektionsbad",
    "Feinreinigung (Lupenkontrolle)",
    "Pflegen, Ölen",
    "Einschweißen oder Einsortieren in Trays",
    "Sterilisation",
    "Freigabe durch Hygienebeauftragte"
  ],

  correct: [1,0,2,3,4,5,6,7]
},

{
  question:
  "Nach einem chirurgischen Eingriff sollen Sie die kontaminierten Medizinprodukte nach RKI-Vorgaben aufbereiten. Welche Reihenfolge müssen Sie einhalten?",

  multiple: false,

  answers: [
    "Desinfektion - geschlossener Transport - Pflege - Sterilisation - Verpacken - Dokumentation - Freigabe",
    "geschlossener Transport - Desinfektion - Verpacken - Pflege - Sterilisation - Dokumentation - Freigabe",
    "geschlossener Transport - Desinfektion - Pflege - Verpacken - Sterilisation - Dokumentation - Freigabe",
    "Desinfektion - geschlossener Transport - Pflege - Sterilisation - Verpacken - Freigabe - Dokumentation",
    "Pflege - Desinfektion - geschlossener Transport - Sterilisation - Verpacken - Dokumentation - Freigabe"
  ],

  correct: [2]
},

{
  question:
  "Durch eine Sterilisation mit einem Autoklaven der Klasse B wird folgendes erreicht:",

  multiple: true,

  answers: [
    "Nur Bakterien werden unschädlich gemacht.",
    "Bei sachgerechter Anwendung wird völlige Keimfreiheit erzielt.",
    "Nur Krankheitserreger werden abgetötet.",
    "Nur Viren und Sporen werden abgetötet.",
    "Auch Innenbereiche von Hohlkörpern werden keimfrei gemacht.",
    "Klasse-B-Sterilisatoren reinigen und pflegen Instrumente."
  ],

  correct: [1,4]
},

{
  question:
  "Bringen Sie den Ablauf der Klasse-B-Sterilisation in die richtige Reihenfolge!",

  type: "ordering",

  items: [
    "Vakuumphase",
    "Dampfeinlass",
    "Sterilisationsphase",
    "Druckablass",
    "Entlüftungsphase"
  ],

  correct: [0,1,2,3,4]
},

{
  question:
  "Absolute Keimfreiheit von Medizinprodukten wird erreicht durch:",

  multiple: false,

  answers: [
    "Einlegen in das Bohrerbad",
    "Thermodesinfektion im RDG",
    "Ultraschallreinigung",
    "Sterilisation im Autoklaven",
    "Sprühdesinfektion"
  ],

  correct: [3]
},

{
  question:
  "Welche Aussage zur hygienischen Aufbereitung ist richtig?",

  multiple: false,

  answers: [
    "PAR-Instrumente sind unkritisch.",
    "Stumpfe Instrumente müssen vor Desinfektion geschliffen werden.",
    "Untersuchungssonden sind kritisch.",
    "Polierbürstchen sind nach einmaligem Gebrauch zu entsorgen.",
    "Sterile PAR-Trays sind 8 Monate verwendbar."
  ],

  correct: [3]
},

{
  question:
  "Welche Aussagen zum Hygieneplan sind richtig?",

  multiple: true,

  answers: [
    "Der Hygieneplan muss nicht angepasst werden.",
    "Jeder Praxisinhaber muss ihn individuell anpassen.",
    "Mitarbeiter müssen geschult werden.",
    "Nur der Praxisinhaber muss informiert sein.",
    "Aktualisierungen sind unnötig.",
    "Der Hygieneplan muss jährlich neu erstellt werden."
  ],

  correct: [1,2]
},

{
  question:
  "Welche Aussagen zur Verwendung von Schutzhandschuhen sind richtig?",

  multiple: true,

  answers: [
    "Handschuhe müssen zwischen Patienten gewechselt werden.",
    "Handschuhe unterliegen keinen Qualitätsanforderungen.",
    "Handschuhe spätestens nach 60 Minuten wechseln.",
    "Handschuhe können mehrfach desinfiziert werden.",
    "Bei Reinigungsarbeiten müssen beständige Handschuhe getragen werden.",
    "Bei Händedesinfektion kann man auf Handschuhe verzichten."
  ],

  correct: [0,2,4]
},

{
  question:
  "Was gehört zu Ihrer persönlichen Schutzausrüstung?",

  multiple: true,

  answers: [
    "Handschuhe",
    "Mund-Nasenschutz",
    "Händedesinfektionsmittel",
    "geschlossene Schuhe",
    "Schutzbrille",
    "wasserabweisende Behandlungskittel"
  ],

  correct: [0,1,3,4,5]
},

{
  question:
  "Unterscheiden Sie zwischen hygienischer und chirurgischer Händedesinfektion!",

  type: "matching",

  categories: [
    "hygienische Händedesinfektion",
    "chirurgische Händedesinfektion"
  ],

  items: [
    "Vor Arbeitsplatzvorbereitung",
    "Vor umfangreichen chirurgischen Eingriffen",
    "Vor jeder Behandlung",
    "Nach Ausziehen der Handschuhe",
    "Nach Toilettenbenutzung",
    "Desinfektionsmittel nur aus Spendern entnehmen"
  ],

  correct: [0,1,0,0,0,0]
},

{
  question:
  "Welche Aussagen zur Händedesinfektion sind richtig?",

  multiple: true,

  answers: [
    "Vor der hygienischen Händedesinfektion werden Hände gewaschen.",
    "Die Einwirkzeit beträgt 30 bis 60 Sekunden.",
    "Nur pathogene Keime werden abgetötet.",
    "Bei chirurgischer Desinfektion werden nur apathogene Keime abgetötet.",
    "Die hygienische Händedesinfektion benötigt mehr Mittel."
  ],

  correct: [1,2]
},

{
  question:
  "Welche Aussagen zur Abfallentsorgung sind richtig?",

  multiple: true,

  answers: [
    "Röntgenfilme gehören in den Sondermüll.",
    "Fotochemikalien gehören in Gruppe C.",
    "Fotochemikalien dürfen in den Abguss.",
    "Abfälle mit meldepflichtigen Erregern gehören zu Gruppe E.",
    "Abgebundener Zement ist Sondermüll.",
    "Kanülen dürfen verschlossen in den Hausmüll."
  ],

  correct: [1,3]
},

{
  question:
  "Welche Aussagen zum Hygieneplan sind falsch?",

  multiple: true,

  answers: [
    "Er regelt Reinigungsmaßnahmen.",
    "Er regelt Entsorgungsmaßnahmen.",
    "Er regelt Beleuchtungsstärke.",
    "Bei Änderungen müssen Beschäftigte eingewiesen werden.",
    "Er muss aushängen.",
    "Er regelt Gesundheitsvorsorgeuntersuchungen."
  ],

  correct: [2,5]
},

{
  question:
  "Welche Aussagen sind richtig?",

  multiple: true,

  answers: [
    "Benutzte Instrumente müssen vor Reinigung desinfiziert werden.",
    "Längere Desinfektionszeit verbessert Wirkung.",
    "Höhere Dosierung verbessert Wirkung.",
    "Höhere Wassertemperatur verbessert Wirkung.",
    "Desinfektionslösungen müssen jede Woche neu angesetzt werden.",
    "Rotierende Instrumente benötigen gesonderte Aufbereitung."
  ],

  correct: [0,5]
},

{
  question:
  "Welche Aussagen sind richtig?",

  multiple: true,

  answers: [
    "Chirurgische Instrumente werden nur sterilisiert.",
    "Behandlungsbereich wird einmal täglich gereinigt.",
    "Abformungen müssen desinfiziert werden.",
    "Sprühdesinfektion ist besser.",
    "Thermodesinfektoren reinigen und desinfizieren.",
    "Abdrücke können im Thermodesinfektor desinfiziert werden."
  ],

  correct: [2,4]
},

{
  question:
  "Welche Aussagen sind richtig?",

  multiple: true,

  answers: [
    "Sterilisatoren arbeiten mit gespanntem Dampf.",
    "Im Autoklav wird destilliertes Wasser verwendet.",
    "Im Autoklaven erfolgt die Ausgleichszeit auf die Abtötungszeit.",
    "Während der Ausgleichszeit erreicht das Sterilgut Betriebstemperatur.",
    "Heißluftsterilisatoren benötigen zusätzliche Phasen.",
    "Heißluftsterilisatoren arbeiten schneller."
  ],

  correct: [0,1]
},

{
  question:
  "Welche Aussagen sind richtig?",

  multiple: true,

  answers: [
    "Heißluftsterilisatoren arbeiten mit 2000°C.",
    "Gummi ohne 200°C-Aufschrift darf nicht sterilisiert werden.",
    "Entlüftungszeit ist höher als beim Autoklav.",
    "Gassterilisation ist Kaltersterilisation.",
    "Bei B-Sterilisatoren wird Vakuum erzeugt."
  ],

  correct: [3,4]
}

],

  /* ======================================================
     GAP 1 — RÖNTGEN
  ====================================================== */

  RO: [

    {
      question:
      "Wofür steht die Abkürzung OPG?",

      multiple: false,

      answers: [
        "Orthopantomogramm",
        "Orale Panoramagrafie",
        "Optische Prüfaufnahme",
        "Ortho-Prophylaxe-Gerät"
      ],

      correct: [0]
    }, 

{
  question:
  "Warum sind Röntgenstrahlen für den Menschen gefährlich?",

  multiple: false,

  answers: [
    "weil sie Moleküle in der Zelle ionisieren können",
    "weil sie sich im Vakuum mit Lichtgeschwindigkeit ausbreiten",
    "weil sie sogar Materialien hoher Dichte ungehindert durchdringen können",
    "weil sie sich geradlinig ausbreiten",
    "weil sie fluoreszierende Stoffe aufleuchten lassen"
  ],

  correct: [0]
},

{
  question:
  "Warum ist es unverantwortlich, den Sensor im Mund des Patienten zu halten?",

  multiple: false,

  answers: [
    "weil der Fingerabdruck den Sensor beschädigt",
    "weil die häufige Bestrahlung der Finger zu Hautkrebs führen kann",
    "weil bereits geringe Strahlendosen zu Nekrosen führen",
    "weil der Finger auf der Aufnahme abgebildet wird",
    "weil Röntgenstrahlen Gelenkentzündungen begünstigen"
  ],

  correct: [1]
},

{
  question:
  "Die Menge der entstehenden Röntgenstrahlen wird beeinflusst durch ...",

  multiple: true,

  answers: [
    "die Einschaltdauer",
    "die Röhrenspannung",
    "die Stromstärke",
    "die Temperatur der Rohre",
    "die Größe des Tubus",
    "die Bildgröße"
  ],

  correct: [0,1,2]
},

{
  question:
  "Warum müssen metallhaltige Gegenstände vor einer OPG-Aufnahme entfernt werden?",

  multiple: false,

  answers: [
    "weil sie die Haut erwärmen",
    "weil sie die Diagnose erschweren können",
    "weil sie elektrisch aufgeladen werden können",
    "weil von ihnen Streustrahlung ausgeht",
    "weil sie beschädigt werden"
  ],

  correct: [1]
},

{
  question:
  "Was stellt sich auf einer Röntgenaufnahme als Verschattung dar?",

  multiple: false,

  answers: [
    "eine Zyste",
    "eine Metallkrone",
    "eine Karies",
    "eine Höhle nach Wurzelspitzenresektion",
    "der Mandibularkanal"
  ],

  correct: [1]
},

{
  question:
  "Warum wird bei der Paralleltechnik ein Filmhalter benötigt?",

  multiple: false,

  answers: [
    "damit Film und Zahn senkrecht zueinander stehen",
    "damit der Zentralstrahl parallel zur Winkelhalbierenden steht",
    "weil Patienten den Film nicht selbst halten können",
    "damit der Zentralstrahl senkrecht auf Film und Zahn trifft",
    "damit der Zentralstrahl parallel zur Zahnachse verläuft"
  ],

  correct: [3]
},

{
  question:
  "Welche Technik wird gewählt, um zwei Wurzelkanäle sichtbar zu machen?",

  multiple: false,

  answers: [
    "Bissflügelaufnahme",
    "Aufbissaufnahme",
    "orthoradiale Einstellung",
    "exzentrische Einstellung",
    "gebogener Film"
  ],

  correct: [3]
},

{
  question:
  "Was gilt bei Röntgenaufnahmen bei Schwangeren?",

  multiple: false,

  answers: [
    "die Röhrenspannung muss unter 50 kV liegen",
    "Aufnahmen nur mit Zustimmung des Frauenarztes",
    "Röntgenaufnahmen sind verboten",
    "Röntgenaufnahmen sind nur außerhalb bestimmter Monate erlaubt",
    "bei zwingender Notwendigkeit darf geröntgt werden"
  ],

  correct: [4]
},

{
  question:
  "Die rechtfertigende Indikation ...",

  multiple: true,

  answers: [
    "ist für jede Röntgenaufnahme aufzuzeichnen",
    "wird alle fünf Jahre überprüft",
    "wird nur bei auffälligem Befund verlangt",
    "stellt der Zahnarzt persönlich fest",
    "ist nur für Kassenpatienten nötig",
    "wird nur bei Schwangeren notiert"
  ],

  correct: [0,3]
},

{
  question:
  "Was versteht man unter Abnahmeprüfung?",

  multiple: false,

  answers: [
    "regelmäßige Kontrolle der Bildqualität",
    "stichprobenartige Prüfung durch Sachverständige",
    "Überprüfung der Röntgeneinrichtung vor Inbetriebnahme",
    "Überprüfung der Aufnahme durch Gutachter",
    "quartalsweise Kontrolle der Röntgenstelle"
  ],

  correct: [2]
},

{
  question:
  "Wie heißt der Bereich, in dem sich während der Belichtung nur der Patient aufhält?",

  multiple: false,

  answers: [
    "Schutzbereich",
    "Sicherheitsbereich",
    "Überwachungsbereich",
    "Kontrollbereich",
    "Röntgenbereich"
  ],

  correct: [3]
},

{
  question:
  "Nach Beendigung des Röntgenvorgangs ...",

  multiple: false,

  answers: [
    "sind nur noch im Kontrollbereich Strahlen vorhanden",
    "geben die Wände noch Strahlen ab",
    "strahlt die Röhre noch nach",
    "ist im Raum keine Strahlung mehr vorhanden",
    "ist im Film weiterhin Strahlung vorhanden"
  ],

  correct: [3]
},

{
  question:
  "Wie oft muss der Kenntnisnachweis aktualisiert werden?",

  multiple: false,

  answers: [
    "jedes Jahr",
    "alle fünf Jahre",
    "bei Arbeitsplatzwechsel",
    "nie",
    "bei Fehlern in der Filmverarbeitung",
    "nur während aktiver Tätigkeit"
  ],

  correct: [1]
},

{
  question:
  "Wie lange müssen Inhalte der Konstanzprüfung aufbewahrt werden?",

  multiple: false,

  answers: [
    "gar nicht",
    "3 Monate",
    "2 Jahre",
    "5 Jahre",
    "10 Jahre"
  ],

  correct: [4]
},

{
  question:
  "Wie lange müssen Röntgenaufnahmen eines 12-jährigen Kindes aufbewahrt werden?",

  multiple: false,

  answers: [
    "1 Jahr",
    "bis 18",
    "bis 22",
    "bis 28",
    "10 Jahre"
  ],

  correct: [3]
},

{
  question:
  "Welche Aufnahme eignet sich zur Darstellung von Approximalkaries?",

  multiple: false,

  answers: [
    "distalexzentrische Aufnahme",
    "Fernröntgenseitenaufnahme",
    "Bissflügelaufnahme",
    "Aufbissaufnahme",
    "DVT"
  ],

  correct: [2]
},

{
  question:
  "Eine Panoramaschichtaufnahme ist ...",

  multiple: false,

  answers: [
    "eine Übersichtsaufnahme beider Kiefer",
    "eine Kiefergelenksaufnahme",
    "eine Aufbissaufnahme",
    "eine Fernröntgenseitenaufnahme",
    "eine digitale Volumentomografie"
  ],

  correct: [0]
},

{
  question:
  "Welche Untersuchungsmethode eignet sich nicht zur Kariesdiagnostik?",

  multiple: false,

  answers: [
    "Bissflügelaufnahme",
    "Durchleuchten mit Lichtquelle",
    "Fernröntgenseitenaufnahme",
    "Kariesdetektoren",
    "Fluoreszenzmessung"
  ],

  correct: [2]
}, {
  question:
  "Ordnen Sie die Materialien nach ihrer Strahlendurchlässigkeit!",

  multiple: false,

  answers: [
    "Schleimhaut → Dentin → Knochen → Zahnschmelz → Goldgussfüllung",
    "Goldgussfüllung → Zahnschmelz → Knochen → Dentin → Schleimhaut",
    "Schleimhaut → Knochen → Dentin → Zahnschmelz → Goldgussfüllung",
    "Dentin → Schleimhaut → Knochen → Goldgussfüllung → Zahnschmelz"
  ],

  correct: [0]
},

{
  question:
  "Was erkennen Sie als Aufhellung auf einem Röntgenbild?",

  multiple: false,

  answers: [
    "eine Zyste",
    "eine Metallkrone",
    "eine Wurzelkanalfüllung",
    "eine Amalgamfüllung",
    "einen Wurzelrest"
  ],

  correct: [0]
},

{
  question:
  "Wozu dient der Aluminiumfilter?",

  multiple: false,

  answers: [
    "Abfangen weicher Strahlung",
    "Eingrenzung des Nutzstrahlenbündels",
    "Messung der Strahlenschutzwirkung",
    "Ausrichtung des Zentralstrahls"
  ],

  correct: [0]
},

{
  question:
  "Je größer die Beschleunigungsspannung ist ...",

  multiple: false,

  answers: [
    "desto kürzer wird die Wellenlänge",
    "desto weicher wird die Strahlung",
    "desto stärker steigt die biologische Wirkung",
    "desto länger wird die Wellenlänge"
  ],

  correct: [0]
},

{
  question:
  "Was versteht man unter Äquivalentdosis?",

  multiple: false,

  answers: [
    "Maß für die Belichtungszeit",
    "Messwert für Mindestabstand",
    "Messung der Gewebedichte",
    "Maß für die biologische Wirkung der Röntgenstrahlen",
    "Bleigleichwert der Schürze"
  ],

  correct: [3]
},

{
  question:
  "Warum sind Röntgenstrahlen für Menschen gefährlich?",

  multiple: false,

  answers: [
    "weil sie Moleküle ionisieren können",
    "weil sie Lichtgeschwindigkeit haben",
    "weil sie alles durchdringen",
    "weil sie sich geradlinig ausbreiten",
    "weil Stoffe fluoreszieren"
  ],

  correct: [0]
},

{
  question:
  "Welche Aussage zur Fernröntgenseitenaufnahme ist richtig?",

  multiple: false,

  answers: [
    "Darstellung von Speichelsteinen",
    "Schichtaufnahme",
    "Spezialprojektion zur kieferorthopädischen Diagnostik",
    "Kiefergelenksaufnahme",
    "Abstand maximal 0,5 m"
  ],

  correct: [2]
},

{
  question:
  "Welche Aufnahmen dienen der Wachstumsanalyse in der KFO?",

  multiple: true,

  answers: [
    "Fernröntgenseitenaufnahmen",
    "Panoramaschichtaufnahmen",
    "Kiefergelenksaufnahmen",
    "Röntgenaufnahmen der Hand"
  ],

  correct: [0,3]
},

{
  question:
  "Ein Röntgenfilm ist viel zu hell. Welche Ursache vermuten Sie?",

  multiple: false,

  answers: [
    "zu lange belichtet",
    "zu lange entwickelt",
    "Entwicklertemperatur zu hoch",
    "zu kurz belichtet",
    "Kilovoltzahl zu hoch"
  ],

  correct: [3]
},

{
  question:
  "Wann sollte eine Speicherfolie ausgelesen werden?",

  multiple: false,

  answers: [
    "erst nach mehreren Stunden",
    "Zeitpunkt spielt keine Rolle",
    "möglichst sofort nach Belichtung",
    "erst am Tagesende"
  ],

  correct: [2]
},

{
  question:
  "230 V auf dem Typenschild bedeutet ...",

  multiple: false,

  answers: [
    "Röhrenstrom",
    "Beschleunigungsspannung",
    "Filterung",
    "Netzanschlussspannung"
  ],

  correct: [3]
},

{
  question:
  "Was muss bei der wöchentlichen Prüfung dokumentiert werden?",

  multiple: true,

  answers: [
    "Konzentration des Entwicklers",
    "Dauer der Filmverarbeitung",
    "Temperatur des Entwicklers",
    "optische Dichte des Prüffilms",
    "Belichtungszeit"
  ],

  correct: [2,3]
},

{
  question:
  "Wie wird der Niedrigkontrast digitaler Röntgenbilder bewertet?",

  multiple: false,

  answers: [
    "Anzahl sichtbarer Graustufen",
    "Anzahl sichtbarer Bohrungen",
    "Strahlenbelastung",
    "Linienpaare pro mm",
    "Kilovolt-Angabe"
  ],

  correct: [1]
},

{
  question:
  "Wo befindet sich der Kontrollbereich?",

  multiple: false,

  answers: [
    "Schutzbereich",
    "Sicherheitsbereich",
    "Überwachungsbereich",
    "Kontrollbereich",
    "Röntgenbereich"
  ],

  correct: [3]
},

{
  question:
  "Röntgenstrahlen sind energiereicher ...",

  multiple: false,

  answers: [
    "je höher die Röhrenspannung",
    "je höher die Stromstärke",
    "bei längerer Einschaltdauer",
    "bei größerer Entfernung",
    "bei niedrigem Kilovoltwert"
  ],

  correct: [0]
},

{
  question:
  "Wodurch wird das Strahlenbündel begrenzt?",

  multiple: false,

  answers: [
    "durch die Blende",
    "durch die Kathode",
    "durch den Aluminiumfilter",
    "durch den Filmhalter",
    "durch die Anode"
  ],

  correct: [0]
},

{
  question:
  "Der Zentralstrahl ist ...",

  multiple: false,

  answers: [
    "ein Streustrahl",
    "ein Strahl zwischen Kathode und Anode",
    "eine Einstellhilfe",
    "der gedachte Mittelstrahl des Nutzstrahlenbündels",
    "ein Laserstrahl"
  ],

  correct: [3]
},

{
  question:
  "Wie zeigt sich ein Defekt der Dunkelkammerleuchte?",

  multiple: false,

  answers: [
    "Bilder werden zu hell",
    "helle Streifen entstehen",
    "Bilder werden kontrastarm und dunkler",
    "Bilder werden unscharf"
  ],

  correct: [2]
},
     {
  question:
  "Was ist bei der Lagerung von Röntgenfilmen zu beachten?",

  multiple: true,

  answers: [
    "Sie sollten feucht gelagert werden.",
    "Die Filme sollten vor Belichtung gelagert werden.",
    "Sie müssen vor kurzwelliger Bestrahlung geschützt werden.",
    "Sie sollten kühl aufbewahrt werden.",
    "Sie müssen steril gelagert werden."
  ],

  correct: [2,3]
},

{
  question:
  "Was bedeutet die teratogene Wirkung von Röntgenstrahlen?",

  multiple: false,

  answers: [
    "Schädigung von Körperzellen",
    "Zerlegung von Zellsubstanz",
    "Schädigung von Erbinformation",
    "Schädigung während der Embryonalzeit",
    "Aufleuchten bestimmter Stoffe"
  ],

  correct: [3]
},

{
  question:
  "Welche Rolle spielt die Temperatur der Entwicklerlösung?",

  multiple: true,

  answers: [
    "Bei Zimmertemperatur werden Bilder am besten.",
    "Je wärmer der Entwickler, desto dunkler die Bilder.",
    "Je kälter der Entwickler, desto dunkler die Bilder.",
    "Je wärmer der Entwickler, desto heller die Bilder.",
    "Die vorgeschriebene Entwicklertemperatur muss eingehalten werden."
  ],

  correct: [1,4]
},

{
  question:
  "Welche Aussagen zu Sensoren sind richtig?",

  multiple: true,

  answers: [
    "Es wird ein CCD-Chip verwendet.",
    "Ein Scanner muss vorhanden sein.",
    "Die Daten müssen innerhalb von 30 Minuten ausgelesen werden.",
    "Eine Ausleseeinheit muss vorhanden sein.",
    "Die Anwendung erfolgt wie beim filmgestützten Röntgen.",
    "Die Aufnahme ist sofort sichtbar."
  ],

  correct: [0,5]
},

{
  question:
  "Was muss bei einer Röntgenaufnahme dokumentiert werden?",

  multiple: true,

  answers: [
    "frühere Infektionskrankheiten",
    "Vorhandensein eines Herzschrittmachers",
    "frühere Röntgenaufnahmen im fraglichen Gebiet",
    "Angaben zur Krankenversicherung",
    "das Filmformat",
    "die rechtfertigende Indikation"
  ],

  correct: [2,5]
},

{
  question:
  "Wie stark darf die optische Dichte maximal abweichen?",

  multiple: false,

  answers: [
    "gar nicht",
    "nur eine Stufe weniger dicht",
    "eine Stufe nach oben oder unten",
    "nur eine Stufe dichter",
    "wird individuell festgelegt"
  ],

  correct: [2]
},

{
  question:
  "Was wird bei der monatlichen Konstanzprüfung dokumentiert?",

  multiple: true,

  answers: [
    "Schaltdaten der Konstanzaufnahme",
    "Entwicklungszeit",
    "Dichteunterschied zur Ursprungsaufnahme",
    "Größe des Nutzstrahlenfeldes",
    "Anzahl der Dichtestufen"
  ],

  correct: [0,2,4]
},

{
  question:
  "Welche Aussage zur Panoramaschichtaufnahme ist falsch?",

  multiple: false,

  answers: [
    "Schmuck und Zahnersatz müssen entfernt werden.",
    "Die Frankfurter Horizontale muss eingestellt werden.",
    "Der Patient darf den Kopf nicht drehen.",
    "Die Zunge soll an den Gaumen gelegt werden.",
    "Der Patient soll die Luft anhalten."
  ],

  correct: [4]
},

{
  question:
  "Welche Aussage zur Kilovolt-Einstellung bei Kindern ist richtig?",

  multiple: false,

  answers: [
    "Die Spannung wird reduziert, damit das Bild nicht zu dunkel wird.",
    "Die erhöhte Absorption muss ausgeglichen werden.",
    "Die Einstellung ist unabhängig vom Alter.",
    "Digitale Systeme haben einen hohen Belichtungsspielraum."
  ],

  correct: [0]
},

{
  question:
  "Welche anatomischen Strukturen erscheinen als Aufhellung?",

  multiple: true,

  answers: [
    "Zysten",
    "Metallkronen",
    "Kieferhöhle",
    "leere Alveole",
    "Foramen mentale",
    "Wurzelkanalfüllung"
  ],

  correct: [0,2,3,4]
},

{
  question:
  "Welche Aussage zu Röntgenstrahlen ist richtig?",

  multiple: false,

  answers: [
    "Sie werden mit 60 oder 70 Volt erzeugt.",
    "Sie werden energiereicher bei höherer Röhrenspannung.",
    "Sie ergeben schärfere Bilder bei längerer Belichtung.",
    "Ihre Energie bleibt bei Entfernung unverändert.",
    "Sie werden durch hohe Stromstärke härter."
  ],

  correct: [1]
},

{
  question:
  "Welche Aussage zur Speicherung digitaler Bilder ist richtig?",

  multiple: false,

  answers: [
    "Speicherfolien können nur einmal genutzt werden.",
    "Sensoren benötigen keinen Computer.",
    "Digitale Bilder können nachbearbeitet werden.",
    "Digitale Bilder haben keine Graustufen."
  ],

  correct: [2]
},

{
  question:
  "Welche Aussage zur Bissflügelaufnahme ist richtig?",

  multiple: false,

  answers: [
    "Sie zeigt beide Kiefer vollständig.",
    "Sie dient der Kariesdiagnostik im Approximalbereich.",
    "Sie wird nur bei Kindern eingesetzt.",
    "Sie ist eine Fernröntgenaufnahme."
  ],

  correct: [1]
},

{
  question:
  "Welche Aussage zur Paralleltechnik ist richtig?",

  multiple: false,

  answers: [
    "Der Film liegt schräg zur Zahnachse.",
    "Der Zentralstrahl trifft senkrecht auf Zahn und Film.",
    "Filmhalter sind unnötig.",
    "Die Technik wird nur bei OPG genutzt."
  ],

  correct: [1]
},

{
  question:
  "Welche Aussage zur digitalen Volumentomografie ist richtig?",

  multiple: false,

  answers: [
    "Sie ersetzt jede intraorale Aufnahme.",
    "Sie liefert dreidimensionale Aufnahmen.",
    "Sie wird nur in der KFO eingesetzt.",
    "Sie benötigt keine rechtfertigende Indikation."
  ],

  correct: [1]
},

{
  question:
  "Welche Aussage zur Konstanzprüfung ist richtig?",

  multiple: false,

  answers: [
    "Sie wird nur einmal durchgeführt.",
    "Sie überprüft die gleichbleibende Bildqualität.",
    "Sie ersetzt die Sachverständigenprüfung.",
    "Sie ist nur bei analogen Geräten nötig."
  ],

  correct: [1]
},

{
  question:
  "Welche Aussage zur Strahlenbelastung ist richtig?",

  multiple: false,

  answers: [
    "Digitale Systeme benötigen meist geringere Strahlendosen.",
    "Digitale Systeme benötigen höhere Strahlendosen.",
    "Die Strahlenbelastung ist immer gleich.",
    "Strahlenschutz ist bei digitalen Geräten unnötig."
  ],

  correct: [0]
},

{
  question:
  "Welche Aussage zum Strahlenschutz ist richtig?",

  multiple: true,

  answers: [
    "Abstand reduziert die Strahlenbelastung.",
    "Bleischürzen können schützen.",
    "Schutzmaßnahmen sind freiwillig.",
    "Die Belichtungszeit sollte möglichst kurz sein."
  ],

  correct: [0,1,3]
}

  ],

  /* ======================================================
     GAP 2 — PRAXISVERWALTUNG
  ====================================================== */

  PV2: [


    {
      question: 
	"Berechnen Sie die Mehrwertsteuer von 750,00 €, netto.",

 multiple: false,

      answers: [
        "142,00 €",
        "142,50 €",
        "148,20 €",
        "928,20 €",
        "892,50 €"
      ],

      correct: [1]
    },

    {
      question: "Für Zahlung innerhalb von 8 Tage nach Rechnungsdatum darf Dr. Ritter 2% Skonto vom Rechnungsbetrag abziehen. Der Rechnungsbetrag lautet 892,50 €. Wie lautert der Überweisungsbetrag, wenn er innerhalb der Skontofrist bezahlt?",

 multiple: false,

      answers: [
        "17,85 €",
        "874,00 €",
        "875,00 €",
        "874,65 €",
        "892,50 €"
      ],
      correct: [3]
    },

    {
      question: "Für Zahlung innerhalb von 7 Tage nach Rechnungsdatum darf ein Zahnarzt 3 % Skonto vom Rechnungsbetrag abziehen. Der Rechnungsbetrag lautet 1.286,33 €. Wie lautet der Überweisungsbetrag, wenn er innerhalb der Skontofrist bezahlt?",

 multiple: false,

      answers: [
        "1.286,33 €",
        "1.324,89 €",
        "38,59 €",
        "38,00 €",
        "1.247,74 €"
      ],
      correct: [4]
    },

    {
      question: "Der Listenpreis einer Patientenliege beträgt 1.783,00 €. Dr. Ritter bekommt einen Rabatt und muss nur 1.693,85 € bezahlen. Wie viel % Rabatt hat er erhalten?",

 multiple: false,

      answers: [
        "5%",
        "10%",
        "95 %",
        "105%",
        "15%"
      ],
      correct: [0]
    },

    {
      question: "Aufgrund besonders guter Leistungen erhält eine ZFA eine Gehaltserhöhung von 2,5%. Sie bekommt nach der Erhöhung 2.562,50 € pro Monat. Wie hoch (in €) war ihr Gehalt vor der Gehaltserhöhung?",

 multiple: false,

      answers: [
        "2.626,56 €",
        "2.626,00 €",
        "64,06 €",
        "2.500,00 €",
        "2.437,50 €"
      ],
      correct: [3]
    },

    {
      question: "Bei einer 40 Stundenwoche (SW) verdient eine ZFA monatlich 2.700,00 €. Wie hoch ist ihr Gehalt, wenn sie nur 32 Stunden pro Woche arbeitet?",

 multiple: false,

      answers: [
        "2.165,00 €",
        "2.732,00 €",
        "1.864,00 €",
        "2.160,00 €",
        "2.100,00 €"
      ],
      correct: [3]
    },

    {
      question: "Eine Auszubildende hat Anspruch auf 27 Urlaubstage (UT) im Jahr. Wie viele Urlaubstage bekommt sie, wenn das Ausbildungsverhältnis in diesem Jahr erst seit 01.09. besteht.",

 multiple: false,

      answers: [
        "6 Urlaubstage",
        "7 Urlaubstage",
        "8 Urlaubstage",
        "9 Urlaubstage",
        "20 Urlaubstage"
      ],
      correct: [3]
    },

    {
      question: "Am 27.02. nimmt Dr. Ritter kurzfristig einen Kredit in Höhe von 2.480,00 € auf und zahlt 243 Tage zu spät am 31.10. einschließlich Zinsen 2.590,57 € zurück. Mit welcher Formel berechnen Sie den Zinssatz?",

 multiple: false,

      answers: [
        "p= k*t/100*360",
        "p= k*Z/100",
        "p= Z*100*K/360*t",
        "p=Z/K*t",
        "p= Z*100*360/K*T"
      ],
      correct: [4]
    },

    {
      question: "Am 27.02. nimmt Dr. Ritter einen Kredit von 2.480,00 € auf und zahlt 243 Tage später mit einem Zinssatz von 3,7% den Kredit wieder zurück. Wie viel Zinsen muss Dr. Ritter bezahlen?",

 multiple: false,

      answers: [
        "61,94 €",
        "62,00 €",
        "917,60 €",
        "16,74 €",
        "3,70 €"
      ],
      correct: [0]
    },

    {
      question: "Was gehört nicht zur bargeldlosen Zahlung?",

 multiple: false,

      answers: [
        "Überweisung",
        "Dauerauftrag",
        "SEPA Lastschrift",
        "Barzahlung gegen Quittung",
        "Zahlung mit Kreditkarte"
      ],
      correct: [3]
    },

    {
      question: "Für welche Art der Zahlung eignet sich ein Dauerauftrag am besten?",

 multiple: false,

      answers: [
        "jährliche Einkommensteuernachzahlungen",
        "Stromrechnungen",
        "monatliche Miete",
        "Lieferantenrechnung",
        "Prüfungsgebühren"
      ],
      correct: [2]
    },

    {
      question: "Was ist kein notwendiger Bestandteil einer Quittung?",

 multiple: false,

      answers: [
        "Datum der Zahlung",
        "Unterschrift des Zahlungsempfängers",
        "Zahlungsgrund",
        "Unterschrift des Zahlenden",
        "Zahlungsbetrag"
      ],
      correct: [3]
    }, 

{
  question:
  "Der Patient Erwin Müller hat am 03.04.2024 seine Rechnung erhalten. Die Zahlungsbedingung lautet: „Die Rechnung ist sofort zur Zahlung fällig. Bei Nichtbegleichen der Rechnung tritt gemäß § 286 BGB 30 Tage nach Rechnungserhalt Verzug ein.“ Herr Müller hat bis heute (24.06.2024) nicht bezahlt. Für wie viele Verzugstage können wir Verzugszinsen verlangen?",

  multiple: false,

  answers: [
    "81 Tage",
    "51 Tage",
    "111 Tage",
    "54 Tage",
    "84 Tage"
  ],

  correct: [1]
},

{
  question:
  "Dr. Ritter kauft Verbandsmaterial bei einer Großhandlung. Ein Zahlungstermin wird nicht vereinbart. Wann kommt der Zahnarzt in Zahlungsverzug, wenn die Rechnung keine Zahlungsbedingungen enthält?",

  multiple: false,

  answers: [
    "Sofort nach Erhalt der Ware",
    "Wenn die Überweisung nicht innerhalb von 10 Tagen ab Rechnungsdatum erfolgt.",
    "Automatisch ohne Mahnung 30 Tage nach Fälligkeit und Zugang der Rechnung",
    "Immer automatisch ohne Mahnung 21 Tage nach Erhalt der Ware",
    "Wenn er die Rechnung nicht unverzüglich (= ohne schuldhaftes Zögern) begleicht"
  ],

  correct: [2]
},

{
  question:
  "Zu welchem Zeitpunkt kommt ein Verbraucher in Zahlungsverzug, wenn im Kaufvertrag keine bestimmte Zahlungsfrist vereinbart wurde?",

  multiple: false,

  answers: [
    "Nach Zugang einer 3. Mahnung des Verkäufers",
    "30 Tage nach Zugang der Rechnung",
    "Mit Lieferung des bestellten Gerätes",
    "Mit Beantragung des Mahnbescheides",
    "Mit dem Zugang einer Mahnung"
  ],

  correct: [4]
},

{
  question:
  "Wann muss Dr. Ritter eine Rechnung von HenrySchein bezahlen, wenn keinerlei Zahlungsbedingungen angegeben sind?",

  multiple: false,

  answers: [
    "Sofort, ohne Abzug",
    "Im Voraus",
    "Innerhalb von 7 Tagen ohne Abzug",
    "Innerhalb von 30 Tagen",
    "Sofort, mit Abzug von Mehrwertsteuer"
  ],

  correct: [0]
},

{
  question:
  "Welche Aussagen zum außergerichtlichen Mahnverfahren sind richtig? (2 Antworten)",

  multiple: true,

  answers: [
    "Die Mahnschreiben sollen den Patienten verärgern.",
    "Der offene Rechnungsbetrag soll so schneller beglichen werden.",
    "Der Forderungsbetrag wird gerichtlich festgestellt.",
    "Der Patient wird zur sofortigen Zahlung gezwungen.",
    "Es können für den Schuldner zusätzliche Mahngebühren fällig werden.",
    "Ein Inkassounternehmen hat mehr Befugnisse als der Zahnarzt."
  ],

  correct: [1,4]
},

{
  question:
  "Aus welchem Grund vermeidet Dr. Ritter ein gerichtliches Mahnverfahren bei geringen Honorarforderungen?",

  multiple: false,

  answers: [
    "Ein gerichtliches Mahnverfahren darf nur durch einen Rechtsanwalt beantragt werden.",
    "Die Kosten für ein gerichtliches Mahnverfahren sind im Vergleich zum außergerichtlichen Mahnverfahren niedriger.",
    "Die Verjährung wird im gerichtlichen Mahnverfahren nicht gehemmt.",
    "Bei geringen Honorarforderungen sind die Kosten für ein gerichtliches Mahnverfahren meist relativ hoch.",
    "Ein gerichtliches Mahnverfahren darf erst ab einem Betrag von 100,00 Euro beantragt werden."
  ],

  correct: [3]
},

{
  question:
  "Wie ist die richtige Reihenfolge beim gerichtlichen Mahnverfahren?",

  multiple: false,

  answers: [
    "Mahnbescheid – Vollstreckungsbescheid – Zwangsvollstreckung",
    "Mahnbescheid – Zwangsvollstreckung – Vollstreckungsbescheid",
    "Einreichung der Klage – Urteil – Zwangsvollstreckung",
    "Mahnbescheid – Urteil – Zwangsvollstreckung",
    "Vollstreckungsbescheid – Mahnbescheid – Zwangsvollstreckung"
  ],

  correct: [0]
},

{
  question:
  "Was sind Vorteile eines effizienten kaufmännischen Mahnverfahrens in einer Zahnarztpraxis? (2 Antworten)",

  multiple: true,

  answers: [
    "Erkennen des Zahlungsverzugs von Patienten",
    "Gewährleistungsansprüche werden gesichert",
    "Liquiditätsvorteile für die Zahnarztpraxis",
    "Die Patientenzufriedenheit wird verbessert",
    "Behandlungsmethoden werden angepasst",
    "Kostensenkung bei der Abrechnung"
  ],

  correct: [0,2]
},

{
  question:
  "Patientin Müller hat die Rechnung ihrer erhaltenen Zusatzleistungen nicht bezahlt. Nach drei schriftlichen Mahnungen wird Dr. Ritter ...",

  multiple: false,

  answers: [
    "...einen gerichtlichen Mahnbescheid schreiben.",
    "...die Zwangsvollstreckung beim Amtsgericht beantragen.",
    "...ein Inkassobüro beauftragen.",
    "...einen Rechtsanwalt beauftragen, der das Geld eintreibt.",
    "...die Zustellung eines gerichtlichen Mahnbescheids beantragen."
  ],

  correct: [4]
},

{
  question:
  "Wie ist die korrekte Reihenfolge, wenn der Patient eine Rechnung erhalten hat mit Zahlungsziel und das Zahlungsziel überschritten ist?",

  type: "ordering",

  items: [
     "Erlass eines Mahnbescheides",
     "Patient ist in Zahlungsverzug",
	"Zwangsvollstreckung",
    "Erlass eines Vollstreckungsbescheides",
	"kaufmännisches Mahnverfahren"
   
    
  ],

  correct: [1,4,0,3,2]
},

{
  question:
  "Wodurch wird die Verjährung einer Geldforderung gehemmt?",

  multiple: false,

  answers: [
    "Durch einen eingeschriebenen Brief mit Einschreiben",
    "Durch das Ausstellen eines Schuldscheins",
    "Durch das Schreiben eines Rechtsanwalts",
    "Durch die Bitte um Stundung der Forderung",
    "Durch die Zustellung eines gerichtlichen Mahnbescheids"
  ],

  correct: [4]
}, 


{
  question:
  "Nach zwei Mahnungen überweist Herr Ott einen Teilbetrag der Rechnung an den Zahnarzt. Welche Auswirkung hat diese Zahlung auf die Verjährung der Forderung?",

  multiple: false,

  answers: [
    "Die Zahlung hat keine Auswirkung auf die Verjährung.",
    "Die Verjährung läuft nochmals zwei Jahre ab dem Tag der Teilzahlung.",
    "Die Verjährung läuft nochmals zwei Jahre ab Ende des Jahres.",
    "Die Verjährung läuft nochmals drei Jahre ab dem Tag der Teilzahlung.",
    "Die Verjährungsfrist beträgt nun 30 Jahre"
  ],

  correct: [3]
},

{
  question:
  "Was bedeutet die „Hemmung“ im Zusammenhang mit der Verjährung von Forderungen?",

  multiple: false,

  answers: [
    "Die Verjährungsfrist ist 30 Jahre taggenau",
    "Zur aktuellen Verjährungsfrist werden 6 Monate hinzugezählt",
    "Die Verjährungsfrist ist 3 Jahre zum 31.12. des Jahres",
    "Die Verjährungsfrist beginnt neu zu laufen, diesmal taggenau",
    "Die Hemmung verhindert die Verjährung"
  ],

  correct: [4]
},

{
  question:
  "Welche Voraussetzung muss für die Erteilung eines Dauerauftrages gegeben sein?",

  multiple: false,

  answers: [
    "eine regelmäßige Zahlung in wechselnder Höhe",
    "eine unregelmäßige Zahlung an wechselnde Gläubiger",
    "eine unregelmäßige Zahlung in gleicher Höhe",
    "eine regelmäßige, gleichbleibende Zahlung an immer denselben Gläubiger",
    "eine regelmäßige Zahlung an verschiedene Gläubiger"
  ],

  correct: [3]
},

{
  question:
  "Bei welcher Zahlungsart kann der Schuldner die geleistete Zahlung von seiner Bank ohne Angabe von Gründen 8 Wochen lang zurückbuchen lassen?",

  multiple: false,

  answers: [
    "Dauerauftrag",
    "Sepa-Lastschrift-Verfahren",
    "Überweisung",
    "Kreditkarte",
    "Electronic Cash"
  ],

  correct: [1]
},

{
  question:
  "Wofür steht die Abkürzung BGB?",

  multiple: false,

  answers: [
    "Bundesgesetzbuch",
    "Bayerisches Gesetzbuch",
    "Bürgerliches Gesetzbuch",
    "Betriebsgesetzbuch",
    "Bürgerliches Grundgesetz"
  ],

  correct: [2]
},



{
  question:
  "Welche der folgenden Aussagen zu Freizeichnungsklauseln sind korrekt? (2 Antworten)",

  multiple: true,

  answers: [
    "Sie machen immer das gesamte Angebot verbindlich.",
    "Sie können Teile des Angebots unverbindlich machen.",
    "Sie beziehen sich auf die Preisbindung.",
    "\"Solange Vorrat reicht\" ist eine Form der Freizeichnung.",
    "Sie haben keine rechtliche Wirkung.",
    "Sie machen das Angebot ohne Einschränkungen verbindlich."
  ],

  correct: [1,3]
},

{
  question:
  "Was passiert, wenn ein unbefristetes Angebot nicht rechtzeitig angenommen wird?",

  multiple: false,

  answers: [
    "Es bleibt gültig, bis der Anbieter es widerruft.",
    "Es erlischt.",
    "Der Käufer kann das Angebot später annehmen.",
    "Der Verkäufer muss das Angebot erneut unterbreiten.",
    "Das Angebot wird automatisch zu einem befristeten Angebot."
  ],

  correct: [1]
},

{
  question:
  "Was versteht man unter einem Fixkauf?",

  multiple: false,

  answers: [
    "Lieferung erfolgt sofort nach Bestellung.",
    "Lieferung erfolgt zu einem bestimmten Liefertermin.",
    "Der Käufer kann die Lieferung nach Belieben anfordern.",
    "Der Verkäufer muss die Ware unverzüglich versenden.",
    "Der Käufer hat Anspruch auf einen Nachlass bei verspäteter Lieferung."
  ],

  correct: [1]
},

{
  question:
  "Dr. Ritter hat einen Karteischrank zur Lieferung innerhalb 4 Wochen bestellt. Um welchen Kauf handelt es sich hinsichtlich der Lieferzeit?",

  multiple: false,

  answers: [
    "Barkauf",
    "Abzahlungskauf",
    "Fixkauf",
    "Zielkauf",
    "Terminkauf"
  ],

  correct: [4]
},

{
  question:
  "Welche Zahlungsbedingung gilt nach dem BGB für die Bezahlung einer Sache, wenn im Kaufvertrag keine Zahlungsvereinbarung getroffen wurde?",

  multiple: false,

  answers: [
    "zahlbar innerhalb 14 Tagen nach Erhalt der Lieferung abzüglich 2 % Skonto",
    "zahlbar innerhalb von 7 Tagen nach Lieferung netto Kasse",
    "zahlbar sofort nach Erhalt der Lieferung mit Abzug von 3 % Skonto",
    "zahlbar innerhalb einer angemessenen Zeit nach der Lieferung",
    "zahlbar sofort nach Erhalt der Lieferung ohne Abzug"
  ],

  correct: [4]
},

{
  question:
  "Welche Bedeutung hat die Vertragsbedingung „Alle Lieferungen erfolgen unter Eigentumsvorbehalt“?",

  multiple: false,

  answers: [
    "Die Ware bleibt so lange Eigentum des Lieferers, bis sie vollständig bezahlt wurde.",
    "Der Lieferer kann die Ware auch nach vollständiger Bezahlung zurückverlangen.",
    "Der Lieferer garantiert dem Käufer hiermit ein Rückgaberecht.",
    "Der Kunde kann niemals Eigentümer der Ware werden.",
    "Der Begriff „Eigentumsvorbehalt\" hat keine rechtliche Bedeutung."
  ],

  correct: [0]
},


{
  question:
  "Das Unternehmen Prodent KG bietet auf Wunsch eine Zahlungsfrist von 60 Tagen. Wie nennt man diese Art von Kauf?",

  multiple: false,

  answers: [
    "Zielkauf",
    "Fixkauf",
    "Terminkauf",
    "Ratenkauf",
    "Barkauf"
  ],

  correct: [0]
},

{
  question:
  "Erklären Sie die Zahlungsbedingung „Zahlung innerhalb von 30 Tagen netto“.",

  multiple: false,

  answers: [
    "Dr. Ritter muss nur den Nettobetrag zahlen. Die Umsatzsteuer trägt der Anbieter.",
    "Dr. Ritter muss den Bruttobetrag innerhalb von 30 Tagen zahlen, er darf weder Umsatzsteuer noch Skonto vom Rechnungsbetrag abziehen.",
    "Dr. Ritter muss den Nettobetrag an den Anbieter zahlen und die Umsatzsteuer an das Finanzamt überweisen.",
    "Dr. Ritter kann die Umsatzsteuer als Treuebonus betrachten und für sich behalten.",
    "Die Aussage „netto“ hat keine Auswirkung auf die Zahlung, da sie nur für das Finanzamt bestimmt ist."
  ],

  correct: [1]
},

{
  question:
  "Die ZMV Lotte Weber hat für das Wartezimmer der Praxis Dr. Ritter eine neue Garderobe bestellt. Bei der Lieferung überprüft sie die Garderobe und stellt fest, dass sie starke Schäden hat, die man nicht reparieren kann. Welches Recht sollte die Praxis Dr. Ritter in Anspruch nehmen?",

  multiple: false,

  answers: [
    "Schadensersatz",
    "Ersatzlieferung",
    "Nachbesserung",
    "Rücktritt vom Vertrag",
    "Preisnachlass"
  ],

  correct: [1]
},

{
  question:
  "In welchen beiden Fällen ist keine Mahnung erforderlich, damit Lieferungsverzug eintritt?",

  multiple: true,

  answers: [
    "Es wurde ein kalendermäßig bestimmter Liefertermin vereinbart.",
    "Es wurde „Lieferung frühestens Anfang März“ vereinbart.",
    "Es wurde „Lieferung ab Mai“ vereinbart.",
    "Der Lieferer teilt mit, dass er nicht rechtzeitig liefern kann.",
    "Es wurde „Lieferung so bald wie möglich“ vereinbart.",
    "Es wurde nichts für die Lieferung vereinbart."
  ],

  correct: [0,3]
},

{
  question:
  "Welches Recht hat der Käufer unter anderem, wenn der Lieferer in Lieferungsverzug geraten ist?",

  multiple: false,

  answers: [
    "Er kann dem Lieferer einen Mahnbescheid senden.",
    "Er kann Verzugszinsen verlangen.",
    "Er kann Minderung verlangen.",
    "Er kann auf Lieferung bestehen.",
    "Er kann einen Selbsthilfeverkauf vornehmen."
  ],

  correct: [3]
},

{
  question:
  "Am 13.08.2024 bekommt die Praxis Dr. Ritter eine E-Mail von der Tzimas AG, dass die Bestellung der neuen Sitzbank für das Wartezimmer bestätigt wurde. Bestellt wurde am 12.08.2024. Bis zum 03.09.2024 wurde nicht geliefert. Liegt hier ein Lieferungsverzug vor?",

  multiple: false,

  answers: [
    "Nein, da der Lieferungsverzug erst 30 Tage nach der Bestellung eintritt",
    "Nein, erst mit Zustellung einer Anmahnung der Lieferung mit Setzung einer Nachfrist",
    "Nein, erst nachdem eine, in einer Mahnung festgelegte Nachfrist, verstrichen ist",
    "Ja, da die zwei Wochen, in denen die Lieferung zugesagt wurde, schon überschritten sind",
    "Ja, da Dr. Ritter rechtzeitig bestellt hat und somit ein Kaufvertrag zustande kam"
  ],

  correct: [1]
},

{
  question:
  "Dr. Ritter hat ein Angebot von der Firma Soares-Dent KG bekommen und bestellt am 05.07.2024 neue Instrumente für das Behandlungszimmer 4. In der Auftragsbestätigung steht eine Lieferfrist von etwa 5 Wochen. Am 18.08.2024 wurden die Instrumente immer noch nicht geliefert. Welche der folgenden Aussagen ist richtig?",

  multiple: false,

  answers: [
    "Dr. Ritter kann vom Kaufvertrag zurücktreten",
    "Dr. Ritter kann automatisch nach 30 Tagen Verzugszinsen verlangen",
    "Die Soares-Dent KG befindet sich seit dem 05.06.2024 in Lieferungsverzug",
    "Die Soares-Dent KG befindet sich seit dem 12.06.2024 in Lieferungsverzug",
    "Dr. Ritter muss die Soares-Dent KG erst durch eine Mahnung in Verzug setzen, bevor er Rechte geltend machen kann"
  ],

  correct: [4]
},

{
  question:
  "Die bestellten Instrumente werden schnell benötigt, da fast alle alten Instrumente beim Umbau am 04.10.2024 schon entsorgt wurden. Wann ist für Dr. Ritter ein Deckungskauf möglich?",

  multiple: false,

  answers: [
    "Das Gesetz sieht in diesem Fall keinen Deckungskauf vor",
    "Ein Deckungskauf wäre bereits ab dem 06.07.2024 möglich gewesen",
    "Ab dem 12.10.2024, da an diesem Tag die Lieferfrist schon um zwei Wochen überschritten wurde",
    "Ab dem 14.10.2024",
    "Nach Ablauf einer Nachfrist, die Dr. Ritter im Rahmen einer Mahnung festgelegt hat"
  ],

  correct: [4]
},

{
  question:
  "Die ZFA Hanna Hinterhuber hat für die Praxis Dr. Ritter am 20.07.2024 zehn Packungen FFP2-Masken bei der Firma Maskenprofi Deluxe KG bestellt. Noch am selben Tag erhält sie per E-Mail eine Auftragsbestätigung. Für die Lieferung wurde der 25.07.2024 vereinbart. Ab wann befindet sich die Maskenprofi Deluxe KG im Lieferungsverzug?",

  multiple: false,

  answers: [
    "Ab dem 25.07.2024",
    "Nach Zugang einer Mahnung durch die Praxis Dr. Ritter",
    "Nach Ablauf einer, in einer Mahnung vorgegebenen, Nachfrist",
    "Ab dem 26.07.2024",
    "Ab dem 21.07.2024"
  ],

  correct: [3]
},


{
  question:
  "Der tägliche Verbrauch von Einmalhandschuhen liegt bei 60 Stück, die Lieferzeit beträgt 2 Tage. Der Mindestbestand soll immer 100 Stück sein. Der Höchstbestand soll bei 5000 Stück liegen. Wie hoch ist der Meldebestand?",

  multiple: false,

  answers: [
    "120 Stück",
    "5100 Stück",
    "120 Stück",
    "220 Stück",
    "4880 Stück"
  ],

  correct: [3]
},

{
  question:
  "Der tägliche Verbrauch von Einmalhandschuhen liegt bei 60 Stück, die Lieferzeit beträgt 2 Tage. Der Mindestbestand soll immer 100 Stück sein. Der Höchstbestand soll bei 5000 Stück liegen. Wie hoch ist die Bestellmenge?",

  multiple: false,

  answers: [
    "5100",
    "4900",
    "220",
    "5000",
    "60"
  ],

  correct: [1]
},

{
  question:
  "Nennen Sie zwei Vorteile für ein kleines Lager.",

  multiple: true,

  answers: [
    "Wenig „Verderb“ der gelagerten Produkte",
    "Mengenrabatte können in Anspruch genommen werden",
    "Geringere Mietkosten beim Lagerraum",
    "Weniger Lieferkosten",
    "Übersichtlicher als ein großes Lager",
    "Patienten beschweren sich weniger"
  ],

  correct: [0,2]
},

{
  question:
  "Welche Aussagen zur Dokumentation von Chargennummern sind richtig und welche falsch?",

  type: "matching",

  items: [
    "Die Chargennummer ist die Patientennummer.",
    "Die Freigabe des Sterilisationsgutes darf nur eine vom ZA benannte und ausgebildete ZFA übernehmen.",
    "Die Chargenkontrolle erfolgt immer bei der Rechnungserstellung für die Privatpatienten.",
    "Die Dokumentation der Chargennummer ist aufgrund der Dokumentationspflicht bei einigen Behandlungen einzuhalten.",
    "Die Chargenkontrolle ist nur vom Praxisinhaber durchzuführen.",
    "Chargen unterstützen die Kontrolle des MHD von Lagerartikeln.",
    "Das Lager wird nach dem Prinzip „first-in-first-out“ organisiert."
  ],

  categories: [
    "Richtig",
    "Falsch"
  ],

  correct: [1,0,1,0,1,0,0]
},

{
  question:
  "Was braucht nicht bei der Freigabe auf dem aufbereiteten Medizinprodukt dokumentiert werden? (2 Antworten)",

  multiple: true,

  answers: [
    "Die freigebende Person",
    "Laufende Nummer des Sterilisationsprozesses",
    "Patientennummer und Behandlungsdatum",
    "Sterilisierdatum",
    "Inhalt, sofern nicht erkennbar",
    "Praxisadresse und Homepage der Zahnarztpraxis"
  ],

  correct: [2,5]
},

{
  question:
  "Wer ist nach § 135a Sozialgesetzbuch V verpflichtet ein Qualitätsmanagement einzuführen?",

  multiple: false,

  answers: [
    "alle Vertragszahnärzte",
    "alle angestellten Zahnärzte",
    "alle Zahnärzte, die ausschließlich Privatpatienten behandeln",
    "alle Berufsschulen",
    "alle Zahnmedizinische Fachangestellte"
  ],

  correct: [0]
},

{
  question:
  "Welche Aussagen zum Qualitätsmanagement (QM) sind falsch? (2 Antworten)",

  multiple: true,

  answers: [
    "Die Einführung eines QM dient der ständigen Verbesserung der Qualität der zahnmedizinischen Versorgung.",
    "Durch QM können alle Behandlungsfehler vermeiden werden",
    "QM soll die Arbeitszufriedenheit der Praxismitarbeiter erhöhen.",
    "QM ist Aufgabe aller Mitarbeiter einer Zahnarztpraxis.",
    "In bestimmten Bereichen kann die Qualität der zahnmedizinischen Versorgung auch gemessen werden.",
    "Auszubildende können in das QM nicht eingebunden werden."
  ],

  correct: [1,5]
},

{
  question:
  "Welche Handlungen von Dr. Ritter zählt nicht zu einem praxisinternen Qualitätsmanagement?",

  multiple: false,

  answers: [
    "Dr. Ritter behandelt seine Patienten entsprechend dem aktuellen Stand der zahnmedizinischen Wissenschaft.",
    "Dr. Ritter hat in den Weihnachtsferien die Praxis geschlossen.",
    "Dr. Ritter legt Wert auf regelmäßige Teambesprechungen.",
    "Dr. Ritter hat schriftlich festgelegt, welche Mitarbeiter wofür zuständig ist.",
    "Alle Mitarbeiter von Dr. Ritter nehmen jährlich an zwei Fortbildungen teil.",
    "Dr. Ritter gewährt seinen Mitarbeitern den gesetzlichen Mindesturlaub."
  ],

  correct: [5]
},

{
  question:
  "Was ist richtig (r) und was ist falsch (f)? Zu den Instrumenten des Qualitätsmanagements gehören:",

  type: "matching",

  items: [
    "die Einführung regelmäßiger Teambesprechungen",
    "die übertarifliche Bezahlung der Mitarbeiter",
    "die Verwendung von Checklisten",
    "die Nutzung von Fehlern zur Einleitung von Verbesserungen",
    "die Durchführung von Patientenbefragungen",
    "die Festlegung von Zielen für die Praxis"
  ],

  categories: [
    "Richtig",
    "Falsch"
  ],

  correct: [0,1,0,0,0,0]
},


{
  question:
  "Welche der folgenden Handlungen zählt nicht zum praxisinternen QM?",

  multiple: false,

  answers: [
    "Dr. Ritter erstellt eine genaue Anleitung für die Arbeitsschritte zur Sterilisation der benutzten Instrumente.",
    "Dr. Ritter hat nach einer Teambesprechung schriftlich festgelegt, wie viel Prozent der Anteil der Privatpatienten in seiner Praxis dieses Jahr wachsen soll.",
    "Dr. Ritter hat ein Organigramm erstellt, in dem genau festgehalten ist, wer wem Weisungen erteilen darf.",
    "Dr. Ritter hat eine Checkliste zur Reinigung des Behandlungszimmers nach der Behandlung eines Patienten erstellt.",
    "Dr. Ritter hat einen Ablaufplan zum Beschwerdemanagement schriftlich festgelegt."
  ],

  correct: [1]
},

{
  question:
  "Welche Funktion hat das Organigramm in einer Zahnarztpraxis?",

  multiple: false,

  answers: [
    "Es dient der Visualisierung der Praxisabläufe und Prozesse",
    "Es ermöglicht die Optimierung der Personalkosten",
    "Es dient der Dokumentation der Qualifikationen der Mitarbeiter",
    "Es verdeutlicht die hierarchische Struktur und Aufgabenverteilung und Weisungsbefugnis",
    "Es hat keine Funktion, da es nur Kliniken haben."
  ],

  correct: [3]
},

{
  question:
  "Welche Funktion hat die Ablauforganisation in einer Zahnarztpraxis?",

  multiple: false,

  answers: [
    "Sie legt die Struktur und Hierarchie der Praxis fest.",
    "Sie bestimmt die Öffnungszeiten und Sprechstunden der Praxis.",
    "Sie definiert, wie die Arbeitsabläufe in der Praxis gestaltet werden sollen.",
    "Sie regelt, wie die Aufgaben und Verantwortlichkeiten verteilt werden.",
    "Sie hat keine Funktion, da es nur Kliniken haben."
  ],

  correct: [2]
},

{
  question:
  "Welche Auswirkungen hat der autoritäre Führungsstil von Herrn Dr. Ritter auf die Motivation der Mitarbeiter in seinem Zahnarztbetrieb?",

  multiple: false,

  answers: [
    "Die Mitarbeiter werden weder motiviert noch demotiviert, da der autoritäre Führungsstil keine Auswirkungen auf die Motivation hat.",
    "Die Mitarbeiter werden motiviert, da sie klare Anweisungen und Erwartungen erhalten.",
    "Die Mitarbeiter werden demotiviert, da sie keine Mitsprache und Eigeninitiative zeigen können.",
    "Die Mitarbeiter werden motiviert, da sie klare Strukturen und Verantwortlichkeiten haben.",
    "Es gibt keine autoritären Führungsstile mehr."
  ],

  correct: [2]
},

{
  question:
  "Was beschreibt die Prozessqualität in einer Zahnarztpraxis?",

  multiple: false,

  answers: [
    "Die Ausstattung der Praxis und die Qualität.",
    "Diagnostischen und therapeutischen Maßnahmen im Prozess eines Behandlungsfalles",
    "Die Zufriedenheit der Patienten",
    "Die Ausbildung der Mitarbeiter",
    "Die Ausstattung des Wartezimmers"
  ],

  correct: [1]
},

{
  question:
  "Welche der folgenden Aussagen beschreibt die Strukturqualität?",

  multiple: false,

  answers: [
    "Die Wartezeit der Patienten",
    "Die Ausstattung der Praxis",
    "Die Ergebnisse der Behandlung",
    "Die Kommunikation mit den Patienten",
    "Ob die Krone hält."
  ],

  correct: [1]
},

{
  question:
  "Was ist ein Beispiel für Ergebnisqualität?",

  multiple: false,

  answers: [
    "Die Wartezeit der Patienten",
    "Die Zufriedenheit der Patienten nach der Behandlung",
    "Die Hygienevorschriften",
    "Die Ausbildung der Mitarbeiter",
    "Ob es einen Aufzug in der Praxis gibt."
  ],

  correct: [1]
},

{
  question:
  "Warum wurde in der Praxis von Dr. Ritter ein Qualitätsmanagement eingeführt?",

  multiple: false,

  answers: [
    "Er möchte den Gewinn seiner Praxis maximieren",
    "Dr. Ritter kann seine Mitarbeiter verwalten und die Gehaltsabrechnung durchführen",
    "Zur Produktentwicklung und Markforschung",
    "Dr. Ritter möchte sein Risiko minimieren",
    "Dr. Ritter kann so die Versorgung von Patienten verbessern und sicherstellen"
  ],

  correct: [4]
},

{
  question:
  "Wie lüftet man richtig, um Energieverlust zu reduzieren?",

  multiple: false,

  answers: [
    "nur gekippte Fenster in der kalten Jahreszeit",
    "Klimaanlagen nur im Dauerbetrieb verwenden",
    "Lüften auch tagsüber nur mit gekipptem Fenster",
    "In der warmen Jahreszeit Lüften durch möglichst ständig offene Türen und Fenster",
    "Stoßlüften in der kalten Jahreszeit"
  ],

  correct: [4]
},


{
  question:
  "Dr. Ritter möchte auch in der Verwaltung den Grundsatz der Nachhaltigkeit verfolgen. Welcher der folgenden Vorschläge ist falsch?",

  multiple: false,

  answers: [
    "Verwendung von recyceltem Papier, z.B. chlorfreies Recyclingpapier bei Druckerpapier, Einmalhandtüchern",
    "Bedrucken Sie Papier, wenn möglich nicht beidseitig, sondern nur einseitig.",
    "Verwenden Sie energieeffiziente Computer und Drucker.",
    "Kaufen Sie langlebige Medizinprodukte mit einer möglichst langen Garantie.",
    "Senden Sie Terminerinnerungen per E-Mail oder SMS oder wenn per Post, auf Recyclingpapier"
  ],

  correct: [1]
},

{
  question:
  "Welche Möglichkeit ist die geeignetste (aus zeitlicher und ökologischer Sicht), um Strom zu sparen?",

  multiple: false,

  answers: [
    "Nutzung des Energiesparmodus in der Nacht",
    "jedes EDV-Gerät muss am Abend einzeln ausgeschalten werden",
    "alle Geräte bleiben dauerhaft eingeschaltet",
    "Einrichtung von abschaltbaren Steckerleisten",
    "alle Geräte bleiben über Nacht im Stand-By-Betrieb"
  ],

  correct: [3]
},

{
  question:
  "Welchen Vorteil hat ein Öko- oder Naturstromanbieter?",

  multiple: false,

  answers: [
    "Die Leuchtkraft wird in allen Zimmern gesteigert.",
    "Die Lebensdauer der elektronischen Geräte steigt.",
    "Es wird deutlich weniger Strom verbraucht.",
    "Kohlendioxidemissionen werden reduziert.",
    "Kohlendioxidemissionen können gesteigert werden."
  ],

  correct: [3]
},

{
  question:
  "Dr. Ritter möchte den Energieverbrauch in der ZA-Praxis reduzieren. Welche Aussagen sind richtig? (2 Antworten)",

  multiple: true,

  answers: [
    "Heizkörper sind effizienter, wenn Sie regelmäßig entlüftet werden und nicht abgedeckt und verdeckt stehen.",
    "Schalten Sie Geräte, insbesondere Computer, Drucker, Monitore und v.a. Stand-by Geräte nachts und zum Wochenende nicht ab.",
    "Beim Kauf von neuen Geräten braucht der Energieverbrauch nicht beachtet werden.",
    "Wärmedämmende Folien an den Praxisfenstern können das Aufheizen der Räume im Sommer steigern.",
    "Lichtschalter, die an Bewegungsmelder gekoppelt sind, können in Praxisräumen, die nur kurz benutzt werden, dabei helfen, den Stromverbrauch zu reduzieren.",
    "RDG und Autoklaven haben einen geringen Energiebedarf."
  ],

  correct: [0,4]
},

{
  question:
  "Dr. Ritter möchte seinen ökologischen Fußabdruck in der Praxis reduzieren. Was wäre eine geeignete Maßnahme?",

  multiple: false,

  answers: [
    "Anschaffung von Druckern für jeden Mitarbeiter",
    "Nutzung von konventionellen Glühbirnen statt LEDs",
    "Verwendung von digitalen bildgebenden statt analogen Verfahren",
    "Einführung von neuen Papierformularen für Patienten",
    "Verwendung von gedruckten Formularen und Papier anstelle von Nachrichten über Messaging-Diensten"
  ],

  correct: [2]
},

{
  question:
  "Praxis Dr. Ritter ist an Nachhaltigkeit interessiert. Welche Aussage ist richtig?",

  multiple: false,

  answers: [
    "Dauerlüften in der warmen Jahreszeit",
    "Dr. Ritter sucht nach Einsparpotentialen bei der Energienutzung",
    "alle elektronischen Geräte auch nachts in Stand-By-Funktion",
    "Klimaanlagen in Dauerbetrieb halten für einen guten Patientenkomfort",
    "Einsatz von Bewegungsmeldern nur in der Nacht"
  ],

  correct: [1]
},

{
  question:
  "Wo hat die Zahnarztpraxis nur beschränkten Einfluss auf die Nachhaltigkeit?",

  multiple: false,

  answers: [
    "Materialverbrauch",
    "Stromverbrauch",
    "Müllentsorgung",
    "Bau der Praxis bei der Übernahme",
    "Raumtemperaturkontrolle"
  ],

  correct: [3]
}
     

  ],

  /* ======================================================
     GAP 2 — BEHANDLUNGSASSISTENZ
  ====================================================== */

  BA2: [

  ],

  /* ======================================================
     GAP 2 — GESUNDHEITSSCHUTZ
  ====================================================== */

  GS2: [

  ],

  /* ======================================================
     GAP 2 — RÖNTGEN
  ====================================================== */

  RO2: [

  ]

};






/* ======================================================
   VARIABLEN
====================================================== */

let currentCategory = "";
let currentQuestion = 0;
let currentQuestions = [];
let answerChecked = false;
let xp = 0;
let streak = 0;
let bestStreak = 0;

let correctCount = 0;
let wrongCount = 0;

let wrongQuestions = [];

let timer;
let timeLeft = 90;
let currentGap = "";

/* ======================================================
   NAVIGATION
====================================================== */

function openGap1(){

  currentGap = "GAP1";

  document
    .getElementById("start-screen")
    .classList.remove("active");

  document
    .getElementById("gap1-screen")
    .classList.add("active");
}

function openGap2(){

  currentGap = "GAP2";

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

function backToLastMenu(){

  // Quiz schließen

  document
    .getElementById("quiz-screen")
    .classList.remove("active");

  // Beide Menüs schließen

  document
    .getElementById("gap1-screen")
    .classList.remove("active");

  document
    .getElementById("gap2-screen")
    .classList.remove("active");

  // Richtiges Menü öffnen

  if(currentGap === "GAP1"){

    document
      .getElementById("gap1-screen")
      .classList.add("active");
  }

  if(currentGap === "GAP2"){

    document
      .getElementById("gap2-screen")
      .classList.add("active");
  }
}

/* ======================================================
   KATEGORIE ÖFFNEN
====================================================== */

function openCategory(category){

  currentCategory = category;

  currentQuestion = 0;

  currentQuestions =
  [
    ...questions[currentCategory]
  ];

  currentQuestions.sort(
    () => Math.random() - 0.5
  );

  answerChecked = false;

  document
    .getElementById("gap1-screen")
    .classList.remove("active");

  document
    .getElementById("gap2-screen")
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
/* ======================================================
   KATEGORIEN
====================================================== */

function getCategoryName(category){

  if(category === "PV"){
    return "Praxisverwaltung GAP 1";
  }

  if(category === "BA"){
    return "Behandlungsassistenz GAP 1";
  }

  if(category === "GS"){
    return "Gesundheitsschutz GAP 1";
  }

  if(category === "RO"){
    return "Röntgen GAP 1";
  }

  if(category === "PV2"){
    return "Praxisverwaltung GAP 2";
  }

  if(category === "BA2"){
    return "Behandlungsassistenz GAP 2";
  }

  if(category === "GS2"){
    return "Gesundheitsschutz GAP 2";
  }

  if(category === "RO2"){
    return "Röntgen GAP 2";
  }

  return "Quiz";
}

/* ======================================================
   FRAGE ANZEIGEN
====================================================== */

function showQuestion(){

  const q =
    currentQuestions[currentQuestion];

  if(!q){

    document
      .getElementById("question-number")
      .innerText = "";

    document
      .getElementById("question")
      .innerText =
      "Noch keine Fragen vorhanden 😄";

    document
      .getElementById("answers")
      .innerHTML = "";



    return;
  }

  document
    .getElementById("question-number")
    .innerText =
    "Frage "
    + (currentQuestion + 1)
    + " von "
    + currentQuestions.length;

  document
    .getElementById("question")
    .innerText =
    q.question;

  const answersDiv =
    document.getElementById("answers");

  answersDiv.innerHTML = "";

/* =========================
   MATCHING
========================= */

if(q.type === "matching"){

  q.items.forEach((item,index)=>{

    const row =
      document.createElement("div");

    row.className = "matching-row";

    let options =
      `<option value="">Auswählen</option>`;

    q.categories.forEach((cat,catIndex)=>{

      options +=
      `<option value="${catIndex}">
        ${cat}
      </option>`;
    });

    row.innerHTML = `

      <div class="match-item">
        ${item}
      </div>

      <select>
        ${options}
      </select>
    `;

    answersDiv.appendChild(row);
  });
}

/* =========================
   ORDERING
========================= */

else if(q.type === "ordering"){

  q.items.forEach((item,index)=>{

    const row =
      document.createElement("div");

    row.className = "matching-row";

    let options =
      `<option value="">Position wählen</option>`;

    for(let i = 1; i <= q.items.length; i++){

      options +=
      `<option value="${i-1}">
        ${i}
      </option>`;
    }

    row.innerHTML = `

      <div class="match-item">
        ${item}
      </div>

      <select>
        ${options}
      </select>
    `;

    answersDiv.appendChild(row);
  });
}

/* =========================
   NORMALE FRAGEN
========================= */

else{

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
}

  document
    .getElementById("feedback")
    .innerText = "";
clearInterval(timer);

timeLeft = 90;

document
  .getElementById("feedback")
  .innerText =
  "⏳ " + timeLeft + " Sekunden";

timer = setInterval(()=>{

  timeLeft--;

  document
    .getElementById("feedback")
    .innerText =
    "⏳ " + timeLeft + " Sekunden";

if(timeLeft <= 0){

  clearInterval(timer);

  wrongCount++;

  wrongQuestions.push(q);

  document
    .getElementById("feedback")
    .innerText =
    "⏰ Zeit abgelaufen";

  answerChecked = true;

  setTimeout(()=>{

    currentQuestion++;

    saveProgress({
      currentCategory,
      currentQuestion,
      score,
      userAnswers
    });

    if(
      currentQuestion >=
      currentQuestions.length
    ){

      localStorage.removeItem("quizProgress");

      finishQuiz();

      return;
    }

    answerChecked = false;

    showQuestion();

  },1000);

});

/* ======================================================
   NÄCHSTE FRAGE
====================================================== */



  if(!answerChecked){
clearInterval(timer);

    let isCorrect = false;

    /* MATCHING + ORDERING */

    if(
      q.type === "matching"
      ||
      q.type === "ordering"
    ){

      const selects =

        [...document.querySelectorAll(
          "#answers select"
        )];

      const selected =
        selects.map(select =>
          parseInt(select.value)
        );

   if(selected.some(isNaN)){

        alert(
          "Bitte alles auswählen 😄"
        );

        return;
      }

      isCorrect =

        JSON.stringify(selected)
        ===
        JSON.stringify(q.correct);

      selects.forEach((select,index)=>{

        if(
          selected[index]
          ===
          q.correct[index]
        ){

      select.classList.add("correct");
        }

        else{

        select.classList.add("wrong");
        }
      });
    }

    /* NORMALE FRAGEN */

    else{

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

      isCorrect =

        JSON.stringify(selected)
        ===
        JSON.stringify(correct);

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
    }

    document
      .getElementById("feedback")
      .innerText =

      isCorrect
      ? "✅ Richtig"
      : "❌ Falsch";

if(isCorrect){

  xp += 10;

  streak++;

  correctCount++;

  if(streak > bestStreak){

    bestStreak = streak;
  }
}

else{

  streak = 0;

  wrongCount++;

  wrongQuestions.push(q);
}
    
document.querySelector(
      ".next-btn"
    ).innerText =
    "Weiter →";

    answerChecked = true;

    return;
  }

  currentQuestion++;

  if(
    currentQuestion
    >=
   currentQuestions.length
  ){
localStorage.removeItem("quizProgress");
  finishQuiz();

return;

    return;
  }

  answerChecked = false;

function showQuestion(){

  const q =
    currentQuestions[currentQuestion];

  if(!q){

    document
      .getElementById("question-number")
      .innerText = "";

    document
      .getElementById("question")
      .innerText =
      "Noch keine Fragen vorhanden 😄";

    document
      .getElementById("answers")
      .innerHTML = "";

    return;
  }

  document
    .getElementById("question-number")
    .innerText =
    "Frage "
    + (currentQuestion + 1)
    + " von "
    + currentQuestions.length;

  document
    .getElementById("question")
    .innerText =
    q.question;

  const answersDiv =
    document.getElementById("answers");

  answersDiv.innerHTML = "";

  /* =========================
     MATCHING
  ========================= */

  if(q.type === "matching"){

    q.items.forEach((item,index)=>{

      const row =
        document.createElement("div");

      row.className = "matching-row";

      let options =
        `<option value="">Auswählen</option>`;

      q.categories.forEach((cat,catIndex)=>{

        options +=
        `<option value="${catIndex}">
          ${cat}
        </option>`;
      });

      row.innerHTML = `

        <div class="match-item">
          ${item}
        </div>

        <select>
          ${options}
        </select>
      `;

      answersDiv.appendChild(row);
    });
  }

  /* =========================
     ORDERING
  ========================= */

  else if(q.type === "ordering"){

    q.items.forEach((item,index)=>{

      const row =
        document.createElement("div");

      row.className = "matching-row";

      let options =
        `<option value="">Position wählen</option>`;

      for(let i = 1; i <= q.items.length; i++){

        options +=
        `<option value="${i-1}">
          ${i}
        </option>`;
      }

      row.innerHTML = `

        <div class="match-item">
          ${item}
        </div>

        <select>
          ${options}
        </select>
      `;

      answersDiv.appendChild(row);
    });
  }

  /* =========================
     NORMALE FRAGEN
  ========================= */

  else{

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
  }

  document
    .getElementById("feedback")
    .innerText = "";

  clearInterval(timer);

  timeLeft = 90;

  document
    .getElementById("feedback")
    .innerText =
    "⏳ " + timeLeft + " Sekunden";

  timer = setInterval(()=>{

    timeLeft--;

    document
      .getElementById("feedback")
      .innerText =
      "⏳ " + timeLeft + " Sekunden";

    if(timeLeft <= 0){

      clearInterval(timer);

      wrongCount++;

      wrongQuestions.push(q);

      document
        .getElementById("feedback")
        .innerText =
        "⏰ Zeit abgelaufen";

      answerChecked = true;

      setTimeout(()=>{

        currentQuestion++;

        saveProgress({
          currentCategory,
          currentQuestion,
          score,
          userAnswers
        });

        if(
          currentQuestion >=
          currentQuestions.length
        ){

          localStorage.removeItem("quizProgress");

          finishQuiz();

          return;
        }

        answerChecked = false;

        showQuestion();

      },1000);
    }

  },1000);
}




function finishQuiz(){

clearInterval(timer);

if(wrongQuestions.length > 0){

currentQuestions =
[...wrongQuestions];

wrongQuestions = [];

currentQuestion = 0;

alert(
"🔁 Nur falsche Fragen kommen nochmal 😄"
);

answerChecked = false;

showQuestion();

return;
}

const total =
correctCount + wrongCount;

const percent =
Math.round(
(correctCount / total) * 100
);

alert(

"🎉 Bereich abgeschlossen\n\n"

+ "⭐ XP: " + xp + "\n"

+ "🔥 Beste Serie: "
+ bestStreak + "\n"

+ "✅ Richtig: "
+ correctCount + "\n"

+ "❌ Falsch: "
+ wrongCount + "\n"

+ "📊 Trefferquote: "
+ percent + "%"
);

correctCount = 0;
wrongCount = 0;
streak = 0;
bestStreak = 0;

backToLastMenu();
}
