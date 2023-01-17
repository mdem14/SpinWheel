import { SECTORS, SECTOR_COLORS, WHEEL_COLORS } from './constants.js';

export class Wheel {
  constructor(scene) {
    this.scene = scene;
    this.angle_per_sector = 360 / SECTORS.length;
  }

  start(sector_number) {
    this.sector_number = sector_number;
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
          let update_angle =
            (gsap.getProperty(this.scene.wheel, 'rotation') * 180) / Math.PI;
          this.update_angle =
            update_angle - Math.floor(update_angle / 360) * 360;

          this.getUpdateSector();
          this.getUpdateColour();
          this.setFieldColour();
          this.setTextValue();

          // console.log(this.updateSector);
          // console.log(this.updateColour);
        },
      }
    );
  }

  getTargetAngle() {
    let sector_index = SECTORS.indexOf(this.update_sector_number);
    this.target_angle = this.angle_per_sector * sector_index;
  }

  getUpdateSector() {
    let sector_index = this.update_angle / this.angle_per_sector;
    this.update_sector_number = SECTORS.at(-Math.round(sector_index));
  }

  getUpdateColour() {
    this.colourRed = SECTOR_COLORS[WHEEL_COLORS.RED].includes(
      this.update_sector_number
    )
      ? true
      : false;
  }

  setFieldColour() {
    this.scene.textField.tint = this.colourRed ? 0xff0000 : 0x000000;
  }

  setTextValue() {
    this.scene.textValue.text = this.update_sector_number;
  }
}
