import { Wheel } from './Wheel.js';
import { Renderer } from './Renderer.js';

const app = new Renderer();
document.body.appendChild(app.view);

const wheel = new Wheel(app.scene);
window.wheel = wheel;
