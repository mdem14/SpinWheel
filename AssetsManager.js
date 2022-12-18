const wheel = PIXI.Sprite.from('./src/images/wheel.png');
wheel.anchor.set(0.5, 0.5);
wheel.x = app.screen.width / 2;
wheel.y = app.screen.height / 2;
app.stage.addChild(wheel);

const stopper = PIXI.Sprite.from('./src/images/stopper.png');
stopper.anchor.set(0.5, 0);
stopper.x = app.screen.width / 2;
stopper.y = app.screen.height / 2;
app.stage.addChild(stopper);

// const loader = PIXI.Loader.shared;
// loader.add(['./src/fonts/font_wheel.fnt']).load(createText).load(matrica);

const textCircle = new PIXI.Graphics();
textCircle.beginFill(0xffffff);
textCircle.drawCircle(0, 0, 40);
textCircle.endFill();
textCircle.x = app.screen.width / 2;
textCircle.y = app.screen.height / 2;
app.stage.addChild(textCircle);
