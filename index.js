// gsap.registerPlugin(PixiPlugin);
// PixiPlugin.registerPIXI(PIXI);

const app = new Renderer();
document.body.appendChild(app.view);
app.wheel(3);

// const wheel = {
//   start(sectorNumber) {
//     app.wheel(sectorNumber);
//   },
// };

// const wheel = new Wheel();
// window.wheel = wheel;

// let wheel = {};
// wheel.start = function (sectorNumber) {
//   app.wheel(sectorNumber);
// };

// let wheel = app.wheel(123);
// console.log('wheel: ' + app.wheel(123));
// let wheel = new Wheel();
// let wheel =;
// wheel.start = function (sectorNumber) {
//   app.wheel(sectorNumber);
// };

// const wheel.start = (sectorNumber) => {
//   app.wheel(sectorNumber);
// };

// let wheel = new Wheel();
// wheel.start(12);

// function wheel(number) {
//   let wheel = new Wheel(number);
// }

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
