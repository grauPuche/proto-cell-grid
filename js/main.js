let Application = PIXI.Application,
	Sprite = PIXI.Sprite,
	Graphics = new PIXI.Graphics(),
	Renderer = PIXI.Renderer,
	Texture = PIXI.Texture;

const app = new Application({
	width: 1024,
	height: 768,
	// resolution: window.devicePixelRatio || 1,
	transparent: true
});
document.body.appendChild(app.view);

app.stage.interactive = true;

const ebTexture = Texture.from("assets/eyeball.png");
const irTexture = Texture.from("assets/iris.png");

let irArray = [];

for (let i = 0; i < 48; i++) {
	const eyeball = new Sprite(ebTexture);
	const iris = new Sprite(irTexture);

	eyeball.anchor.set(0.5);
	eyeball.scale.set(0.2);

	iris.anchor.set(0.5);
	iris.scale.set(0.2);

	let x = i % 8;

	if (x > 0) {
		eyeball.x = x * 128 + 64;
		iris.x = x * 128 + 64;
		eyeball.y = Math.floor(i / 8) * 128 + 64;
		iris.y = Math.floor(i / 8) * 128 + 64;
	} else {
		eyeball.x = x * 64 + 64;
		iris.x = x * 64 + 64;
		eyeball.y = Math.floor(i / 8) * 128 + 64;
		iris.y = Math.floor(i / 8) * 128 + 64;
	}

	app.stage.addChild(eyeball);
	app.stage.addChild(iris);

	irArray.push(iris);

	iris.zIndex = 5;
	eyeball.zIndex = 0;
}

animate();

function animate() {
	requestAnimationFrame(animate);

	Graphics.clear();
	for (let i = 0; i < 1; i++) {
		let x = i % 8;
		if (x > 0) {
			x = x * 128 + 64;
			y = Math.floor(i / 8) * 128 + 64;
		} else {
			x = x * 64 + 64;
			y = Math.floor(i / 8) * 128 + 64;
		}

		let mouseX = app.renderer.plugins.interaction.mouse.global.x;
		let mouseY = app.renderer.plugins.interaction.mouse.global.y;

		let xX = x - mouseX,
			yY = y - mouseY,
			angle = Math.atan2(xX, yY),
			h = Math.hypot(xX, yY),
			a = -(Math.sin(angle) * h),
			b = -(Math.cos(angle) * h);

		irArray[i].x = a*.05 + x;
		irArray[i].y = b*.05 + y;

		// app.stage.addChild(Graphics);

		Graphics.lineStyle(4, 0xff0000, 0.2);
		Graphics.moveTo(x, y);
		Graphics.lineTo(
			app.renderer.plugins.interaction.mouse.global.x,
			app.renderer.plugins.interaction.mouse.global.y
		);
	}
}
