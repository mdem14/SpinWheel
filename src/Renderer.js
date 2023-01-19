import * as PIXI from 'pixi.js';
import { Scene } from './Scene.js';

export class Renderer extends PIXI.Application {
  constructor() {
    super({
      backgroundColor: 0xffffff,
      resizeTo: window,
    });
    this.addScene();
  }

  addScene() {
    this.scene = new Scene();
    this.scene.position.set(window.innerWidth / 2, window.innerHeight / 2);
    this.stage.addChild(this.scene);
  }
}
