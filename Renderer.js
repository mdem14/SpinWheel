class Renderer extends PIXI.Application {
  constructor() {
    super({
      backgroundColor: 0xffffff,
      resizeTo: window,
    });
    this.scene();
    // this.wheel();
  }

  scene() {
    this.scene = new Scene();
    this.stage.addChild(this.scene);
  }

  // wheel(sectorNumber) {
  //   console.log('privet ' + sectorNumber);
  // }
  wheel(sectorNumber) {
    sectorNumber;
    this.wheel = new Wheel(this.scene.wheel, sectorNumber);
    this.wheel.start();
  }
}
