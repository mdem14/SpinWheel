import { Wheel } from './Wheel.js';
// import { AssetLoader } from 'https://cdn.jsdelivr.net/npm/pixi.js@7.x/dist/pixi.min.js';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

// await AssetLoader('/src/fonts/font_wheel.fnt');

const app = new Renderer();
document.body.appendChild(app.view);

const wheel = new Wheel(app.scene);
window.wheel = wheel;

// window.wheel = wheel; // https://stackoverflow.com/questions/68184070/how-to-call-or-access-a-class-method-in-javascript-from-the-browsers-console
