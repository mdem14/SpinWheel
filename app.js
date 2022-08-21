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

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

wheel.start = function (sectorNumber) {
  gsap.fromTo(
    wheel,
    {
      rotation: 0,
    },

    {
      pixi: { rotation: +1080 + sectorAngle(sectorNumber) + '_cw' },
      duration: 5,
      // ease: 'elastic',
    }
  );
};
