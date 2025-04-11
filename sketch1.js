let sketch1 = function (sketch) {
	sketch.setup = function () {
		let test = sketch.createCanvas(600, 400);
		//test.parent("dessin");
	};

	sketch.draw = function () {
		//skyblue background
		sketch.background(135, 206, 235);

		//sun in top-right corner
		sketch.fill("yellow");
		sketch.circle(550, 50, 100);

		//grass on bottom half
		sketch.fill("green");
		sketch.rect(0, 200, 600, 200);

		//emojis
		sketch.textSize(15);
		sketch.text("🌸", 100, 250); //flower
		sketch.text("🐞", sketch.mouseX, sketch.mouseY); //ladybug
		sketch.fill(255); //white text
		sketch.text(`${sketch.mouseX}, ${sketch.mouseY}`, 20, 20);
	};
};
let sketch2 = function (sketch) {
	sketch.setup = function () {
		//creates a canvas 600 pixels wide
		//and 400 pixels high
		let test = sketch.createCanvas(600, 400);
		//test.parent("dessin");
	};

	sketch.draw = function () {
		sketch.background(135, 206, 235);

		//sun in top-right corner
		sketch.fill("yellow");
		sketch.circle(550, 50, 100);

		//grass on bottom half
		sketch.fill("green");
		sketch.rect(0, 200, 600, 200);

		//emojis
		sketch.textSize(15);
		sketch.text("🌸", 100, 250); //flower
		sketch.text("🐞", sketch.mouseX, sketch.mouseY); //ladybug
		sketch.fill(255); //white text
		sketch.text(`${sketch.mouseX}, ${sketch.mouseY}`, 20, 20);
	};
};
let s1 = new p5(sketch1, "p5sketch");
let s2 = new p5(sketch2, "p5sketch");
