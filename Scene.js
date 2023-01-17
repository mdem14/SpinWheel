class Scene extends PIXI.Container {
  constructor() {
    super();

    this.wheel = new CreateWheel();
    this.stopper = new CreateStopper();
    this.textField = new CreateTextField();
    this.textValue = new CreateTextValue();

    this.addChild(this.wheel, this.stopper, this.textField, this.textValue);
  }
}
