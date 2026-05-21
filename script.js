/* ======================================================
   ZFA PRÜFUNGSTRAINER
====================================================== */

/* ======================================================
   FRAGEN
====================================================== */

const questions = {

  /* ======================================================
     GAP 1 — PRAXISVERWALTUNG
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
     GAP 1 — BEHANDLUNGSASSISTENZ
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
     GAP 1 — GESUNDHEITSSCHUTZ
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
    }, {
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
let answerChecked = false;
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
    questions[currentCategory][currentQuestion];

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

    document
      .getElementById("feedback")
      .innerText = "";

    return;
  }

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

  const q =
    questions[currentCategory][currentQuestion];

  if(!q){
    return;
  }

  // =====================================
  // ANTWORT PRÜFEN
  // =====================================

  if(!answerChecked){

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

      // Richtige Antworten

      if(q.correct.includes(index)){

        label.style.border =
          "2px solid #8dffb5";

        label.style.background =
          "rgba(141,255,181,0.15)";
      }

      // Falsch ausgewählte Antworten

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
  // NÄCHSTE FRAGE
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

    backToLastMenu();

    return;
  }

  answerChecked = false;

  showQuestion();
}
