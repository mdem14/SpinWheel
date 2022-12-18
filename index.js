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
