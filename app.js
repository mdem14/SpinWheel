const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
  backgroundColor: 0x23395d,
});
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

const loader = PIXI.Loader.shared;
loader.add(['./fonts/font_wheel.fnt']).load(createText).load(matrica);

function sectortoAngle(n) {
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

const WHEEL_ANGLE = [];

function matrica() {
  for (i = 0; i < 36; i++) {
    WHEEL_ANGLE.push(sectortoAngle(i + 1));
  }
}

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

// wheel.start = function (sectorNumber) {
//   gsap.fromTo(
//     wheel,
//     {
//       rotation: 0,
//     },

//     {
//       pixi: { rotation: +1080 + sectorAngle(sectorNumber) + '_cw' },
//       duration: 5,
//       // ease: 'elastic',
//       ease: 'circ.out',
//     }
//   );
//   let currentSector = gsap.getProperty(wheel, 'pixi: rotation');

//   return testText(currentSector);
// };

// wheel.start = function (sectorNumber) {
//   matrica();
//   gsap.to(wheel, {
//     pixi: { rotation: +1080 + WHEEL_ANGLE[sectorNumber - 1] + '_cw' },
//     duration: 5,
//     // ease: 'elastic',
//     ease: 'circ.out',
//     onUpdate: function () {
//       // let currentAngle = (gsap.getProperty(wheel, 'rotation') * 180) / Math.PI;
//       // console.log(currentAngle);
//       // let currentSector = sectorAngle(currentAngle);
//       // testText(currentSector);
//       // var currentSector = Math.round(gsap.getProperty(wheel, 'rotation'));
//       // $('#stats_rotation_current > span').text(currentAngle);
//     },
//   });
// };

wheel.start = function (sectorNumber) {
  gsap.fromTo(
    wheel,
    {
      rotation: 0,
    },

    {
      pixi: { rotation: +1080 + WHEEL_ANGLE[sectorNumber - 1] + '_cw' },
      duration: 5,
      // ease: 'elastic',
      ease: 'circ.out',
      onUpdate: function () {
        let currentAngle =
          (gsap.getProperty(wheel, 'rotation') * 180) / Math.PI;
        // console.log(currentAngle);
        currentAngle = currentAngle - Math.floor(currentAngle / 360) * 360;
        // console.log(currentAngle);
        let currentSector =
          WHEEL_ANGLE.indexOf(
            WHEEL_ANGLE.reduce(function (a, c) {
              return Math.abs(a - currentAngle) < Math.abs(c - currentAngle)
                ? a
                : c;
            })
          ) + 1;
        console.log(currentSector);
        testText(currentSector);
        // WHEEL_ANGLE.reduce(function (a, c) {
        //   return Math.abs(a - currentAngle) < Math.abs(c - currentAngle)
        //     ? a
        //     : c;
        // });
        // } = WHEEL_ANGLE.indexOf(currentAngle - 1080);
        // console.log(currentSector);
        //       // let currentSector = sectorAngle(currentAngle);
      },
    }
  );
  // let currentSector = gsap.getProperty(wheel, 'pixi: rotation');

  // return testText(currentSector);
};

// var textObj = new PIXI.Text(19, {
//   fontName: 'font_wheel',
// });

// textObj.anchor.set(0.5, 0.5);
// textObj.x = app.screen.width / 2;
// textObj.y = app.screen.height / 2;
// app.stage.addChild(textObj);

var textObj = 'text';

function createText() {
  textObj = new PIXI.BitmapText(19, {
    fontName: 'font_wheel',
    fontSize: 70,
    align: 'center',
  });
  textObj.anchor.set(0.5, 0.5);
  textObj.x = app.screen.width / 2;
  textObj.y = app.screen.height / 2;
  app.stage.addChild(textObj);
  // app.ticker.add(function (delta) {
  //   text.text = Number(text.text) + 1;
  // });
  // textObj.interactive = true;
  // return textObj;
}

// const setNumber = (value) => {
//   number = value;
//   textObj.setText(number);
// };
// console.log(sectorNumber);

function testText(sectorNumber) {
  textObj.text = sectorNumber;
}

// console.log(currentSector);
