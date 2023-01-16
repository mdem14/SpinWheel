class Renderer extends PIXI.Application {
  constructor() {
    super({
      backgroundColor: 0xffffff,
      resizeTo: window,
    });
    this.scene();
  }

  scene() {
    this.scene = new Scene();
    this.stage.addChild(this.scene);
  }

  static setColour(text) {
    text.tint = 0xff0000;
  }
}
