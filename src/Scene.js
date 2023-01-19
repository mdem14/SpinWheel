import * as PIXI from 'pixi.js';

export class Scene extends PIXI.Container {
  constructor() {
    super();

    this.addWheel();
    this.addStopper();
    this.addTextField();
    this.addTextValue();
  }

  addWheel() {
    this.wheel_sprite = PIXI.Sprite.from('assets/images/wheel.png');
    this.wheel_sprite.anchor.set(0.5);
    this.addChild(this.wheel_sprite);
  }

  addStopper() {
    this.stopper_sprite = PIXI.Sprite.from('assets/images/stopper.png');
    this.stopper_sprite.anchor.set(0.5, 0);
    this.stopper_sprite.angle = 180;
    this.addChild(this.stopper_sprite);
  }

  addTextField() {
    this.text_field = new PIXI.Graphics();
    this.text_field.beginFill(0xff0000).drawCircle(40, 40, 40).endFill();
    this.text_field.x = -this.text_field.width / 2;
    this.text_field.y = -this.text_field.height / 2;
    this.addChild(this.text_field);
  }

  addTextValue() {
    PIXI.Assets.load('assets/fonts/font_wheel.fnt');
    this.text_value = new PIXI.Text('10', {
      ontName: 'font_wheel',
      fontSize: 50,
      align: 'center',
      fill: 0xffffff,
    });
    this.text_value.anchor.set(0.5);
    this.addChild(this.text_value);
  }
}
