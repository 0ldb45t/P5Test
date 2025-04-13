//const dessin = document.getElementById("dessin");
const body = document.getElementsByTagName("body")[0];
const radioForme = document.getElementById("formeSelect");
const radioTaille = document.getElementById("tailleSelect");
const bouton = document.getElementById("go");
const stop = document.getElementById("clear");
const tailleMax = window.innerWidth;
const choixRouge = document.getElementById("red");
choixRouge.style.background = "red";
const choixVert = document.getElementById("green");
choixVert.style.background = "green";
const choixBleu = document.getElementById("blue");
choixBleu.style.background = "blue";

const choixFond = document.getElementById("fondSelect");
const test = document.getElementById("testClick");
const test2 = document.getElementById("testSansClick");
const corps = document.getElementById("tout");
let footer = document.createElement("footer");
let rouge = choixRouge.value;
let vert = choixVert.value;
let bleu = choixBleu.value;
choixFond.addEventListener("change", changerFond);
bouton.addEventListener("click", selectionner);
stop.addEventListener("click", nettoyer);
footer.innerHTML =
	'Bastien Bontemps grâce à <a href="https://p5js.org/">p5.js</a> &copy 2025';
choixRouge.addEventListener("change", colorerSample);
choixVert.addEventListener("change", colorerSample);
choixBleu.addEventListener("change", colorerSample);
window.addEventListener("keypress", pause);
window.addEventListener("load", instructions);
function changerFond(e) {
	switch (choixFond.value) {
		/*case "quadrillage":
			body.style.backgroundColor = "none";
			body.style.background =
				'linear-gradient(rgba(0, 0, 0, 0.5),rgba(95, 95, 95, 0.5),rgba(0, 0, 0, 0.5)),url("IMAGES/fondg.jpg");';

			break;*/
		case "sombre":
			body.style.background = "none";
			body.style.backgroundColor = "rgb(59, 59, 59)";
			body.style.color = "aliceblue";
			radioForme.style.color = "aliceblue";
			radioTaille.style.color = "aliceblue";
			choixFond.style.color = "aliceblue";
			break;
		case "clair":
			body.style.background = "none";
			body.style.backgroundColor = "rgb(228, 228, 228)";
			body.style.color = "rgb(59, 59, 59)";
			break;
	}
}
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
				taille / 3
			);
			break;
	}
}
