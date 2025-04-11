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
/*print la vieille versiobn avant de redessiner */
/*let sketchCarre = function (sketch) {
	// if (daron) {
	// 	/*sketch.save(sketch.canvas, "canva");
	// 	sketch.clear();
	// 	sketch.print("canva");*/
// 	sketch.createCanvas(700, 700);
// }
// sketch.setup = function () {
// 	//sketch.clear();
// 	sketch.createCanvas(700, 700);
// 	sketch.angleMode("degrees");
// 	console.log(sketch.canvas);
// 	//test.parent("dessin");
// };
function draw() {
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
	switch (formePrinted) {
		case "carre":
			square(0, 0, taillePrinted);
			break;
		case "cercle":
			circle(0, 0, taillePrinted);
			break;
		case "rectangle":
			rect(0, 0, taillePrinted, taillePrinted - 50);
			break;
		default:
			break;
	}

	//rotation != 0 ? sketch.rotate(rotationGlobale) : (rotation = 0);
	//sketch.square(sketch.mouseX, sketch.mouseY, taille);
}
