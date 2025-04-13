//const dessin = document.getElementById("dessin");
const radioForme = document.getElementById("formeSelect");
const radioTaille = document.getElementById("tailleSelect");
const bouton = document.getElementById("go");
const stop = document.getElementById("clear");
const tailleMax = window.innerWidth;
bouton.addEventListener("click", selectionner);
stop.addEventListener("click", nettoyer);
const choixRouge = document.getElementById("red");
const choixVert = document.getElementById("green");
const choixBleu = document.getElementById("blue");
const test = document.getElementById("test");
let rouge = choixRouge.value;
let vert = choixVert.value;
let bleu = choixBleu.value;
let etatPause = 0;
choixRouge.addEventListener("change", colorerSample);
choixVert.addEventListener("change", colorerSample);
choixBleu.addEventListener("change", colorerSample);
window.addEventListener("keypress", pause);
function pause(e) {
	if (e.code === "Space") isLooping() ? noLoop() : loop();
}
function colorerSample() {
	rouge = choixRouge.value;
	bleu = choixBleu.value;
	vert = choixVert.value;
	test.style.backgroundColor =
		"rgb(" + rouge + ", " + vert + ", " + bleu + ")";
}

let taille = 0;
let forme = "";
let rotation = 0;
let rotationGlobale = 0;
let daron;
let formePrinted = "";

function selectionner(e) {
	e.preventDefault();
	forme = radioForme.value;
	taille = radioTaille.value;
	daron = document.getElementById("defaultCanvas0");
	daron ? "" : setup();
	taillePrinted = taille;
	formePrinted = forme;
	console.log(test);
	draw();
}
function nettoyer() {
	setup();
}
