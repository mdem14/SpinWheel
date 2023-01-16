class CreateWheel extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.from('src/images/wheel.png'));
    this.anchor.set(0.5, 0.5);
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
  }
}

class CreateStopper extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.from('src/images/stopper.png'));
    this.anchor.set(0.5, 0);
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.angle = 180;
  }
}

class CreateTextField extends PIXI.Graphics {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.beginFill(0xffffff).drawCircle(40, 40, 40).endFill();
    this.x = (window.innerWidth - this.width) / 2;
    this.y = (window.innerHeight - this.height) / 2;
  }
}
