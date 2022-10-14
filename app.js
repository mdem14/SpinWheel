const Application = PIXI.Application;

const app = new Application({
  // width: 500,
  // height: 500,
  transparent: false,
  antialias: true,
  backgroundColor: 0xffffff,
  resizeTo: window,
});
document.body.appendChild(app.view);

const wheel = PIXI.Sprite.from('./images/wheel.png');
wheel.anchor.set(0.5, 0.5);
wheel.x = app.screen.width / 2;
wheel.y = app.screen.height / 2;
app.stage.addChild(wheel);

const stopper = PIXI.Sprite.from('./images/stopper.png');
stopper.x = app.screen.width / 2 - 15.5; // 15.5 - half width stopper
// stopper.x = (app.screen.width - stopper.width) / 2;
stopper.y = app.screen.height / 2;
// stopper.y = (app.screen.height - stopper.width) / 2;
app.stage.addChild(stopper);

const loader = PIXI.Loader.shared;
loader.add(['./fonts/font_wheel.fnt']).load(createText).load(matrica);

const textCircle = new PIXI.Graphics();
textCircle.beginFill(0xffffff);
textCircle.drawCircle(40, 40, 40);
textCircle.endFill();
// textCircle.anchor.set(0.5);
textCircle.x = (app.screen.width - textCircle.width) / 2;
textCircle.y = (app.screen.height - textCircle.height) / 2;
app.stage.addChild(textCircle);

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
        currentAngle = currentAngle - Math.floor(currentAngle / 360) * 360;
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
        colourSector(currentSector);
      },
    }
  );
};

var textObj = 'text';

function createText() {
  textObj = new PIXI.BitmapText(19, {
    fontName: 'font_wheel',
    fontSize: 70,
    align: 'center',
    fill: 0xffffff,
  });
  textObj.anchor.set(0.5, 0.5);
  textObj.x = app.screen.width / 2;
  textObj.y = app.screen.height / 2;
  app.stage.addChild(textObj);
}

function testText(sectorNumber) {
  textObj.text = sectorNumber;
}

function colourSector(currentSector) {
  if (
    (currentSector >= 1 && currentSector <= 9) ||
    (currentSector >= 28 && currentSector <= 36)
  ) {
    return (textCircle.tint = 0x000000);
    0x000000;
  } else {
    return (textCircle.tint = 0xff0000);
  }
}
