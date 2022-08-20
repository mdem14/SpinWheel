const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = 0x23395d;

document.body.appendChild(app.view);

const wheel = PIXI.Sprite.from('./images/wheel.png');
wheel.anchor.set(0.5, 0.5);
wheel.x = app.screen.width / 2;
wheel.y = app.screen.height / 2;
app.stage.addChild(wheel);

const stopper = PIXI.Sprite.from('./images/stopper.png');
stopper.x = app.screen.width / 2 - 15.5; // изменить 15.5 на что-то поумнее
stopper.y = app.screen.height / 2;
app.stage.addChild(stopper);

// app.ticker.add((delta) => loop(delta));

// function loop(delta) {
//   wheel.rotation += 0.01;
// }

// function start() {
//   createjs.Tween.get(wheel)
//     // .to({ rotation: 0 }, 10)
//     .to({ rotation: ((360 * 3 + 340) * Math.PI) / 180 }, 5500);
//   // .easing(TWEEN.Easing.Quadratic.Out)
//   createjs.Ease.getPowInOut(4);
// }

// var tween = new TWEEN.Tween(wheel).to(
//   { rotation: ((360 * 3 + 10) * Math.PI) / 180 },
//   5500
// );
// .to({ x: 200 }, 1000)

// animate();

// function animate() {
//   requestAnimationFrame(animate);
//   TWEEN.update();
// }

// wheel.start = function (sectorNumber) {
// let sectorAngle = 0;
// // sectorNumber = +sectorNumber;
// if (sectorNumber >= 1 && sectorNumber <= 9) {
//   sectorAngle = (9 - sectorNumber) * 20 + 10;
// } else if (sectorNumber >= 10 && sectorNumber <= 19) {
//   sectorAngle = 180 - 20 * (sectorNumber - 10);
// } else if (sectorNumber >= 20 && sectorNumber <= 27) {
//   sectorAngle = 360 - 20 * (sectorNumber - 19);
// } else if (sectorNumber >= 28 && sectorNumber <= 36) {
//   sectorAngle = 350 - 20 * (sectorNumber - 28);
// } else {
//   console.log('Введите число от 1 до 36');
//   // return break;
// }

//   RotationPlugin.install();

//   var tween = new TWEEN.Tween(wheel)
//     .to(
//       {
//         rotation: ((360 * 3 + sectorAngle(sectorNumber)) * Math.PI) / 180,
//         rotationDir: 0,
//       },
//       5500
//     )
//     .start();

//   console.log(sectorAngle(sectorNumber));
//   console.log(sectorNumber);
// };

function sectorAngle(n) {
  if (n >= 1 && n <= 9) {
    return (9 - n) * 20 + 10;
  } else if (n >= 10 && n <= 19) {
    return 180 - 20 * (n - 10);
  } else if (n >= 20 && n <= 27) {
    return 360 - 20 * (n - 19);
  } else if (n >= 28 && n <= 36) {
    return 350 - 20 * (n - 28);
  } else {
    return console.log('Ошибка! Введите число от 1 до 36');
  }
}

wheel.start = function () {
  gsap.to(wheel, {
    // rotation: (sectorAngle(sectorNumber) * Math.PI) / 180,
    rotation: '360_cw',
    // duration: 5,
  });
};
