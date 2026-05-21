// ======================================================
// SCREENS
// ======================================================

const startScreen =
document.getElementById("start-screen");

const gap1Screen =
document.getElementById("gap1-screen");

const gap2Screen =
document.getElementById("gap2-screen");

const quizScreen =
document.getElementById("quiz-screen");

// ======================================================
// QUIZ VARIABLEN
// ======================================================

let currentCategory = "";

let currentQuestion = 0;

// ======================================================
// FRAGEN
// ======================================================

const questions = {

PV:[

{
question:"Wofür steht die Abkürzung vdek?",
answers:[
"Verband der deutschen Kieferorthopäden",
"Verband der Ersatzkassen",
"Verband der deutschen Kieferchirurgen",
"Verband der deutschen Krankenkassen"
],
correct:[1]
},

{
question:"Welche Unterlagen sind bei der Patientenaufnahme nicht erforderlich?",
answers:[
"Anamnese",
"Versichertenkarte",
"Datenschutzerklärung",
"Sozialversicherungsnachweis"
],
correct:[3]
},

{
question:"Welche Stelle ist für die Quartalsabrechnung zuständig?",
answers:[
"KZVB",
"BLZK",
"ZBV",
"BZÄK"
],
correct:[0]
},

{
question:"Welche Aussagen zum Recall sind richtig?",
answers:[
"Patienten müssen zustimmen",
"Recall erinnert an neuen Termin",
"Recall ist verboten",
"Jeder Patient muss aufgenommen werden"
],
correct:[0,1]
},

{
question:"Welche Aussage zum Datenschutz ist richtig?",
answers:[
"Alle Daten regelmäßig sichern",
"Datenschutz gilt nur digital",
"Patientendaten lebenslang speichern",
"Dritte dürfen immer zugreifen"
],
correct:[0]
},

{
question:"Was gehört nicht zur Hardware?",
answers:[
"Monitor",
"Drucker",
"PVS",
"Maus"
],
correct:[2]
},

{
question:"Welches Passwort ist sicher?",
answers:[
"12345678",
"abcdefgh",
"IwdPb2223!",
"Sarah2008"
],
correct:[2]
}

],

// ======================================================
// BA
// ======================================================

BA:[

{
question:"Welche Vertragsart liegt beim Behandlungsvertrag vor?",
answers:[
"Werkvertrag",
"Dienstvertrag",
"Kaufvertrag",
"Mietvertrag"
],
correct:[1]
},

{
question:"Welche Aussage zur Einwilligung ist richtig?",
answers:[
"Patient kann nie widerrufen",
"Nur bei OP notwendig",
"Kann jederzeit widerrufen werden",
"Nur schriftlich gültig"
],
correct:[2]
},

{
question:"Wann liegt Geschäftsführung ohne Auftrag vor?",
answers:[
"Notfallbehandlung bewusstloser Patient",
"Routinekontrolle",
"Professionelle Zahnreinigung",
"Terminvereinbarung"
],
correct:[0]
},

{
question:"Mit welcher Berufsgruppe besteht meist ein Werkvertrag?",
answers:[
"ZFA",
"Handwerker/Zahntechniker",
"Zahnarzt",
"Patient"
],
correct:[1]
}

],

// ======================================================
// GS
// ======================================================

GS:[

{
question:"Wozu dient ein Anti-Viren-Programm?",
answers:[
"Patientenschutz",
"PC vor Viren schützen",
"Desinfektion ersetzen",
"Papier sparen"
],
correct:[1]
},

{
question:"Welche Aussage zum Datenschutz ist richtig?",
answers:[
"Passwort hinter Monitor kleben",
"Sicheres Passwort mit Sonderzeichen",
"Immer gleiches Passwort",
"Kurzes Passwort ist sicher"
],
correct:[1]
},

{
question:"Was ist beim Datenschutz nicht korrekt?",
answers:[
"Befunde laut im Wartezimmer nennen",
"Patienten diskret behandeln",
"Technikerzugriff einschränken",
"Datenschutz beachten"
],
correct:[0]
}

]

};

// ======================================================
// GAP ÖFFNEN
// ======================================================

function openGap1(){

startScreen.classList.remove("active");

gap1Screen.classList.add("active");

}

function openGap2(){

startScreen.classList.remove("active");

gap2Screen.classList.add("active");

}

// ======================================================
// ZURÜCK
// ======================================================

function backToStart(){

gap1Screen.classList.remove("active");

gap2Screen.classList.remove("active");

quizScreen.classList.remove("active");

startScreen.classList.add("active");

}

function backToGap1(){

quizScreen.classList.remove("active");

gap1Screen.classList.add("active");

}

// ======================================================
// KATEGORIE
// ======================================================

function openCategory(category){

currentCategory = category;

currentQuestion = 0;

gap1Screen.classList.remove("active");

quizScreen.classList.add("active");

document.getElementById("quiz-title").innerHTML =
getCategoryName(category);

loadQuestion();

}

// ======================================================
// NAME
// ======================================================

function getCategoryName(category){

if(category === "PV") return "Praxisverwaltung";

if(category === "BA") return "Behandlungsassistenz";

if(category === "GS") return "Gesundheitsschutz";

}

// ======================================================
// FRAGE LADEN
// ======================================================

function loadQuestion(){

const q =
questions[currentCategory][currentQuestion];

document.getElementById("question-number").innerHTML =
"Frage "
+
(currentQuestion + 1)
+
" von "
+
questions[currentCategory].length;

document.getElementById("question").innerHTML =
q.question;

const answersDiv =
document.getElementById("answers");

answersDiv.innerHTML = "";

const multiple =
q.correct.length > 1;

q.answers.forEach((answer,index)=>{

answersDiv.innerHTML +=

`
<label class="answer">

<input
type="${multiple ? "checkbox" : "radio"}"
name="answer"
value="${index}"
>

<span>${answer}</span>

</label>
`;

});

document.getElementById("feedback").innerHTML = "";

}

// ======================================================
// NÄCHSTE FRAGE
// ======================================================

function nextQuestion(){

const selected =
document.querySelectorAll(
"input:checked"
);

if(selected.length === 0){

alert("Bitte Antwort auswählen 😄");

return;

}

const currentQ =
questions[currentCategory][currentQuestion];

const correctAnswers =
currentQ.correct;

const selectedAnswers = [];

selected.forEach(box=>{

selectedAnswers.push(
parseInt(box.value)
);

});

const allAnswers =
document.querySelectorAll(".answer");

let isCorrect = true;

// prüfen

if(
selectedAnswers.length
!==
correctAnswers.length
){

isCorrect = false;

}

correctAnswers.forEach(answer=>{

if(
!selectedAnswers.includes(answer)
){

isCorrect = false;

}

});

// markieren

allAnswers.forEach((answerDiv,index)=>{

// richtige

if(correctAnswers.includes(index)){

answerDiv.style.border =
"2px solid #8dffb5";

answerDiv.style.background =
"rgba(141,255,181,0.18)";

}

// falsche

if(
selectedAnswers.includes(index)
&&
!correctAnswers.includes(index)
){

answerDiv.style.border =
"2px solid #ff7b7b";

answerDiv.style.background =
"rgba(255,123,123,0.18)";

}

});

// feedback

const feedback =
document.getElementById("feedback");

if(isCorrect){

feedback.innerHTML =
"✅ Richtig";

}else{

feedback.innerHTML =
"❌ Falsch";

}

// button deaktivieren

const nextBtn =
document.querySelector(".next-btn");

if(nextBtn){

nextBtn.disabled = true;

}

// nächste frage

setTimeout(()=>{

currentQuestion++;

if(
currentQuestion
<
questions[currentCategory].length
){

loadQuestion();

}else{

document.getElementById("question").innerHTML =
"🎉 Bereich abgeschlossen!";

document.getElementById("answers").innerHTML =
"";

document.getElementById("feedback").innerHTML =
"";

document.getElementById("question-number").innerHTML =
"";

}

if(nextBtn){

nextBtn.disabled = false;

}

},2000);

}