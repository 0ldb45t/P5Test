class PatternPerso {
	constructor(forme, taille) {
		this.forme = forme;
		this.taille = taille;
		this.rotation = 0;
	}
}
function setup() {
	createCanvas(700, 700);
	angleMode("degrees");
}

let fct;

// switch (formePrinted) {
// 	case "carre":
// 		fct = square;
// 		break;
// 	case "cercle":
// 		fct = circle;
// 		break;
// 	case "rectangle":
// 		fct = rect;
// 		break;
// 	default:
// 		break;
// }
function draw() {
	fct = formePrinted.forme;
	forme = "";
	drawTest(fct);
}
function drawTest(fct) {
	if (fct === undefined) return;
	if (mouseIsPressed === true) {
		fill(114);
		rotationGlobale++;
		translate(mouseX, mouseY);
		rotate(rotationGlobale);
	} else {
		translate(mouseX, mouseY);
		rotate(rotationGlobale);
		fill(255);
	}
	fct(0, 0, taillePrinted, taillePrinted - 50);
}
