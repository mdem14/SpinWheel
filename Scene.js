class Scene extends PIXI.Container {
  wheel = new createWheel();
  stopper = new createStopper();
  // textField = new createTextField();
  constructor() {
    super();
    this.addChild(this.wheel, this.stopper);
  }
}
