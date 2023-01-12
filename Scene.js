class Scene extends PIXI.Container {
  // textField = new createTextField();
  constructor() {
    super();
    this.wheel = new createWheel();
    this.stopper = new createStopper();
    this.addChild(this.wheel, this.stopper);
  }
}
