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
const test = document.getElementById("testClick");
const test2 = document.getElementById("testSansClick");
let rouge = choixRouge.value;
let vert = choixVert.value;
let bleu = choixBleu.value;
const corps = document.getElementById("tout");
let footer = document.createElement("footer");
footer.innerHTML =
	'Bastien Bontemps grâce à <a href="https://p5js.org/">p5.js</a> &copy 2025';
choixRouge.addEventListener("change", colorerSample);
choixVert.addEventListener("change", colorerSample);
choixBleu.addEventListener("change", colorerSample);
window.addEventListener("keypress", pause);
window.addEventListener("load", instructions);
function instructions(e) {
	if (tailleMax < 1010) {
		alert(
			"Appuie brièvement pour dessiner\nGarde apppuyé pour pivoter et changer la teinte\n"
		);
	}
}
function pause(e) {
	if (e.code === "Space") isLooping() ? noLoop() : loop();
}
function colorerSample() {
	rouge = choixRouge.value;
	bleu = choixBleu.value;
	vert = choixVert.value;

	updatePreview();
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
	corps.append(footer);
	taillePrinted = taille;
	formePrinted = forme;
	draw();
	updatePreview();
}
function nettoyer() {
	setup();
}
function updatePreview() {
	const canvas = document.getElementById("previewCanvas");
	if (!canvas) return;
	const ctx = canvas.getContext("2d");

	// Nettoyage
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const taille = parseInt(radioTaille.value);
	const rouge = parseInt(choixRouge.value);
	const vert = parseInt(choixVert.value);
	const bleu = parseInt(choixBleu.value);

	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;

	ctx.fillStyle = `rgb(${rouge}, ${vert}, ${bleu})`;

	switch (radioForme.value) {
		case "carre":
			ctx.fillRect(
				centerX - taille / 2,
				centerY - taille / 2,
				taille,
				taille
			);
			break;
		case "cercle":
			ctx.beginPath();
			ctx.arc(centerX, centerY, taille / 2, 0, 2 * Math.PI);
			ctx.fill();
			break;
		case "rectangle":
			ctx.fillRect(
				centerX - taille / 2,
				centerY - taille / 16,
				taille,
				taille / 8
			);
			break;
	}
}
