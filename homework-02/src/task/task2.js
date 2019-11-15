class Planet {
  constructor(planetName, planetDiameter) {
    this.planetName = planetName;
    this.planetDiameter = planetDiameter;
  }

  getPlaneValue() {
    console.log(
      `Планета ${this.planetName} має об'єм ${4 * Math.PI * Math.pow(this.planetDiameter / 2, 3)}`,
    );
  }
}

class Earth extends Planet {}

const planetEarth = new Earth('Earth', 13000);
module.exports.planetEart = planetEarth;
