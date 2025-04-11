//const dessin = document.getElementById("dessin");
const radiosForme = document.querySelectorAll(".forme");
radiosForme.forEach((bouton) => bouton.addEventListener("click", selectionner));
const radiosTaille = document.querySelectorAll(".taille");
const radiosRotation = document.querySelectorAll(".rotation");
radiosRotation.forEach((bouton) =>
	bouton.addEventListener("click", selectionner)
);
let taille = 0;
let forme = "";
let rotation = 0;
let rotationGlobale = 0;
let daron;
let s;
let taillePrinted = 0;
let formePrinted = "";
radiosTaille.forEach((bouton) =>
	bouton.addEventListener("click", selectionner)
);

function selectionner(e) {
	radiosForme.forEach((bouton) =>
		bouton.value != e.srcElement.value
			? (bouton.checked = false)
			: (forme = e.srcElement.value)
	);
	radiosTaille.forEach((bouton) =>
		bouton.value != e.srcElement.value
			? (bouton.checked = false)
			: (taille = e.srcElement.value)
	);

	e.srcElement.className === "rotation"
		? (rotation = e.srcElement.value)
		: "";

	if (taille !== 0 && forme !== "") {
		daron = document.getElementById("defaultCanvas0");
		daron ? "" : setup();
		taillePrinted = taille;
		formePrinted = forme;
		taille = 0;
		forme = "";
		draw();
	}
}
function faireTourner(e) {
	console.log("tourne!");
	rotationGlobale += 10;
}
