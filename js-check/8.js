class Planet {

    constructor(planetName, planetDiameter) {
        this.planetName = planetName;
        this.planetDiameter = planetDiameter;
    }

    getPlaneValue() {
        console.log('Планета ' + this.planetName + ' має об\'єм ' + 4 * Math.PI * Math.pow(this.planetDiameter / 2, 3));
    }
}

class Earth extends Planet { }

const customPlanet = new Planet('My planet', 4000);
customPlanet.getPlaneValue();
const planetEarth = new Planet('Earth', 13000);
planetEarth.getPlaneValue();