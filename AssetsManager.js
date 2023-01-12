class createWheel extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.from('src/images/wheel.png'));
    this.anchor.set(0.5, 0.5);
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
  }
}

class createStopper extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.from('src/images/stopper.png'));
    this.anchor.set(0.5, 0);
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.angle = 180;
  }
}
