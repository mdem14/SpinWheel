gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new Renderer();
document.body.appendChild(app.view);

let myWheel = new Wheel(app.scene.wheel);
window.myWheel = myWheel;

// window.wheel = wheel; // https://stackoverflow.com/questions/68184070/how-to-call-or-access-a-class-method-in-javascript-from-the-browsers-console

// function colourSector(currentSector) {
//   if (
//     (currentSector >= 1 && currentSector <= 9) ||
//     (currentSector >= 28 && currentSector <= 36)
//   ) {
//     return (textCircle.tint = 0x000000);
//     0x000000;
//   } else {
//     return (textCircle.tint = 0xff0000);
//   }
// }
