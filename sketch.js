function setup() {
	let canvas = createCanvas(tailleMax - 50, 700);
	canvas.parent("tout");
	angleMode("degrees");
}

let fct;

function draw() {
	switch (formePrinted) {
		case "carre":
			fct = square;
			break;
		case "cercle":
			fct = circle;
			break;
		case "rectangle":
			fct = rect;
			break;
		default:
			break;
	}
	forme = "";
	drawTest(fct);
}
function drawTest(fct) {
	if (fct === undefined) return;
	if (mouseIsPressed === true) {
		fill(rouge, vert, bleu);
		rotationGlobale++;
		translate(mouseX, mouseY);
		rotate(rotationGlobale);
	} else {
		translate(mouseX, mouseY);
		rotate(rotationGlobale);
		fill(rouge - 10, vert - 10, bleu - 10);
	}
	fct(0, 0, taillePrinted, taillePrinted - 50);
}
