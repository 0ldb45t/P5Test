const fondSketch = (p) => {
	let particules = [];

	p.setup = () => {
		console.log("sketchFond chargé");
		const fond = p.createCanvas(p.windowWidth, p.windowHeight);
		fond.position(0, 0);
		fond.style("z-index", "-1");
		fond.style("position", "fixed");
		fond.style("top", "0");
		fond.style("left", "0");
		fond.style("pointer-events", "none"); // Important : ne bloque pas l'interaction avec le contenu

		p.noStroke();
		for (let i = 0; i < 100; i++) {
			particules.push({
				x: p.random(p.width),
				y: p.random(p.height),
				r: p.random(1, 3),
				angle: p.random(p.TWO_PI),
				speed: p.random(0.1, 0.5),
			});
		}
	};

	p.draw = () => {
		p.background(100, 100, 255, 100);

		p.clear();
		p.fill(200, 200, 255, 50);
		particules.forEach((pt) => {
			pt.angle += pt.speed * 0.01;
			const offsetX = p.cos(pt.angle) * 10;
			const offsetY = p.sin(pt.angle) * 10;
			p.ellipse(pt.x + offsetX, pt.y + offsetY, pt.r);
		});
	};

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	};
};

new p5(fondSketch, document.body); // ← ici on précise où le sketch s'ancre
