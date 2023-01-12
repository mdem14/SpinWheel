const SECTORS = [
  10, 1, 11, 2, 12, 3, 13, 4, 14, 5, 15, 6, 16, 7, 17, 8, 18, 9, 19, 28, 20, 29,
  21, 30, 22, 31, 23, 32, 24, 33, 25, 34, 26, 35, 27, 36,
];

class Wheel {
  constructor(wheel) {
    this.wheel = wheel;
  }
  start(sectorNumber) {
    this.sectorNumber = sectorNumber;
    this.getTargetAngle();

    gsap.fromTo(
      this.wheel,
      {
        rotation: 0,
      },
      {
        pixi: { rotation: +360 * 4 - this.target_angle },
        duration: 5,
        // ease: 'elastic',
        // ease: 'circ.out',
        // onUpdate: function () {
        //   let currentAngle =
        //     (gsap.getProperty(app.scene.loader.wheel, 'rotation') * 180) /
        //     Math.PI;
        //   currentAngle = currentAngle - Math.floor(currentAngle / 360) * 360;
        //   let currentSector =
        //     WHEEL_ANGLE.indexOf(
        //       WHEEL_ANGLE.reduce(function (a, c) {
        //         return Math.abs(a - currentAngle) < Math.abs(c - currentAngle)
        //           ? a
        //           : c;
        //       })
        //     ) + 1;
      }
    );
  }
  getTargetAngle() {
    let angle_per_sector = 360 / SECTORS.length;
    // console.log(angle_per_sector);
    let sector_index = SECTORS.indexOf(this.sectorNumber);
    this.target_angle = angle_per_sector * sector_index;
  }
}
