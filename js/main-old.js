let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
	type = "canvas";
}

PIXI.utils.sayHello(type);

let Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.resources,
	Sprite = PIXI.Sprite,
	video = document.querySelector("#videoElement");

//Create a Pixi Application
let app = new Application({
	// width: wWidth,
	// height: wHeight,
	transparent: false
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

loader.add("assets/eyeball.png").load(setup);

function setup() {
	let eb0 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb1 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb2 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb3 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb4 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb5 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb6 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb7 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb8 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb9 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb10 = new Sprite(loader.resources["assets/eyeball.png"].texture),
		eb11 = new Sprite(loader.resources["assets/eyeball.png"].texture);

	app.renderer.view.style.position = "absolute";
	app.renderer.view.style.display = "block";
	app.renderer.autoDensity = true;
	// app.renderer.resize(window.innerWidth, window.innerHeight);
	app.renderer.resize(1024,768);


	// ~~~~~~~~`

	eb0.anchor.set(0.5);
	eb0.position.set(64, 64);
	eb0.scale.set(0.2);

	eb1.anchor.set(0.5);
	eb1.position.set(192, 64);
	eb1.scale.set(0.2);

	eb2.anchor.set(0.5);
	eb2.position.set(320, 64);
	eb2.scale.set(0.2);

	eb3.anchor.set(0.5);
	eb3.position.set(448, 64);
	eb3.scale.set(0.2);

	eb4.anchor.set(0.5);
	eb4.position.set(576, 64);
	eb4.scale.set(0.2);

	eb5.anchor.set(0.5);
	eb5.position.set(704, 64);
	eb5.scale.set(0.2);

	eb6.anchor.set(0.5);
	eb6.position.set(832, 64);
	eb6.scale.set(0.2);

	eb7.anchor.set(0.5);
	eb7.position.set(960, 64);
	eb7.scale.set(0.2);

	
	// ~~~~~~~~`

	app.stage.addChild(eb0);
	app.stage.addChild(eb1);
	app.stage.addChild(eb2);
	app.stage.addChild(eb3);
	app.stage.addChild(eb4);
	app.stage.addChild(eb5);
	app.stage.addChild(eb6);
	app.stage.addChild(eb7);

}

