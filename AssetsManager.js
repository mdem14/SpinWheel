class CreateWheel extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.from('src/images/wheel.png'));
    this.init();
  }

  init() {
    this.anchor.set(0.5, 0.5);
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
  }
}

class CreateStopper extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.from('src/images/stopper.png'));
    this.init();
  }

  init() {
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
    this.beginFill(0xff0000).drawCircle(40, 40, 40).endFill();
    this.x = (window.innerWidth - this.width) / 2;
    this.y = (window.innerHeight - this.height) / 2;
  }
}

class CreateTextValue extends PIXI.Text {
  constructor(text = '10') {
    super(text, {
      fontName: 'font_wheel',
      fontSize: 50,
      align: 'center',
      fill: 0xffffff,
    });

    this.load();
    this.init();
  }

  load() {
    PIXI.Assets.load('src/fonts/font_wheel.fnt');
  }

  init() {
    this.anchor.set(0.5, 0.5);
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
  }
}
