function setup() {
	let canvas = createCanvas(tailleMax - 50, 745);
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
	/*if (!mouseIsPressed) {
		push();
		translate(mouseX, mouseY);
		rotate(rotationGlobale);
		fill(rouge - 40, vert - 40, bleu - 40, 100); // transparence
		noStroke();
		fct === rect
			? fct(0, 0, taillePrinted, taillePrinted / 23)
			: fct(0, 0, taillePrinted);
		pop();
	}*/
	if (mouseIsPressed === true) {
		fill(rouge, vert, bleu);
		rotationGlobale++;
		translate(mouseX, mouseY);
		rotate(rotationGlobale);
	} else {
		translate(mouseX, mouseY);
		rotate(rotationGlobale);
		fill(rouge - 40, vert - 40, bleu - 40, 79);
	}
	fct === rect
		? fct(0, 0, taillePrinted, taillePrinted / 3)
		: fct(0, 0, taillePrinted);
}
