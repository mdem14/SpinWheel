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

  wheel(sectorNumber) {
    sectorNumber;
    this.wheel = new Wheel(this.scene.wheel, sectorNumber);
    this.wheel.start();
  }
}
