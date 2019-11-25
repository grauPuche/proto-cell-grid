const app = new PIXI.Aplication({
	witdh: 1024,
	height: 768,
	resolution: window.devicePixelRatio || 1,
	transparent: true
});
document.body.appendChild(app.view);

const ebTexture = PIXI.Texture.from("assets/eyeball")