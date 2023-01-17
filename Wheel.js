import { SECTORS, SECTOR_COLORS, WHEEL_COLORS } from './constants.js';

export class Wheel {
  static angle_per_sector = 360 / SECTORS.length;

  constructor(scene) {
    this.scene = scene;
  }
  start(SECTOR_NUMBER) {
    this.SECTOR_NUMBER = SECTOR_NUMBER;
    this.getTargetAngle();

    gsap.fromTo(
      this.scene.wheel,
      {
        rotation: 0,
      },
      {
        pixi: { rotation: +360 * 4 - this.target_angle },
        duration: 5,
        // ease: 'elastic',
        // ease: 'circ.out',

        onUpdate: () => {
          let updateAngle =
            (gsap.getProperty(this.scene.wheel, 'rotation') * 180) / Math.PI;
          updateAngle = updateAngle - Math.floor(updateAngle / 360) * 360;

          this.getSector(updateAngle);
          this.getColour(this.updateSector);
          this.setFieldColour();
          this.setText();

          // console.log(this.updateSector);
          // console.log(this.updateColour);
        },
      }
    );
  }
  getTargetAngle() {
    let sector_index = SECTORS.indexOf(this.SECTOR_NUMBER);
    this.target_angle = Wheel.angle_per_sector * sector_index;
  }

  getColour(sector) {
    if (SECTOR_COLORS[WHEEL_COLORS.RED].includes(sector))
      return (this.updateColour = 'RED');
    else return (this.updateColour = 'BLACK');
  }

  getSector(angle) {
    let sector_index = angle / Wheel.angle_per_sector;
    this.updateSector = SECTORS.at(-Math.round(sector_index));
  }

  setFieldColour() {
    if (this.updateColour == 'RED')
      return (this.scene.textField.tint = 0xff0000);
    else return (this.scene.textField.tint = 0x000000);
  }

  setText() {
    this.scene.textValue.text = this.updateSector;
  }
}
