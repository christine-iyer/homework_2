// Make the USS_Schwarzenegger object.
alert('js yes!');

const uss_sch = {
     name:"USS_Sz",
     hull: 20,
     firepower: 5,
     accuracy: .7
}
const alienAccuracy = (Math.floor(Math.random() * 3) + 6) / 10;
const alienFirepower = firepower = Math.floor(Math.random() * 3) + 2;
const alienHull = Math.floor(Math.random() * 4) + 3;
class AlienShip {
     constructor(name, hull, firepower, accuracy) {
          this.name = name;
          this.hull = Math.floor(Math.random() * 4) + 3;
          this.firepower = firepower = Math.floor(Math.random() * 3) + 2;
          this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
     }
}
     const aliens = [
          new AlienShip('alien Level 1', this.accuracy, this.firepower,this.hull) ,
          new AlienShip('alien Level 2', this.accuracy, this.firepower,this.hull) ,
          new AlienShip('alien Level 3', this.accuracy, this.firepower,this.hull) ,
          new AlienShip('alien Level 4', this.accuracy, this.firepower,this.hull) ,
          new AlienShip('alien Level 5', this.accuracy, this.firepower,this.hull) 
     ]


     const alien = aliens.forEach=() => {
          accuracy = alienAccuracy(accuracy);
          hull = alienHull(hull);
          firepower = setFirePower(firepower);
          aliens.push;
     }
const shipPropEl = document.getElementById('ship-prop');
shipPropEl.innerHTML = 
`
<h6>The ${uss_sch.name} has ${uss_sch.accuracy} percent accuracy, ${uss_sch.firepower} firepower, and ${uss_sch.hull} hull</h6>`



const alienShipEl = document.getElementById('alien-prop');
alienShipEl.innerHTML = 
`<h6>${aliens[1].name} has ${aliens[1].accuracy} percent  accuracy, ${aliens[1].firepower}  firepower, and ${aliens[1].hull}  hull</h6>`
     


     // takeAim(USS_Schwarzenegger) {

     // }
     // getHit(USS_Schwarzenegger){

    // }


     


     // setAccuracy(accuracy) {
     //      this.accuracy = alienAccuracy;

     // }
     // setFirePower(firepower) {
     //      this.firepower = alienFirepower;

     // }
     // setHull(hull) {
     //      this.hull = alienHull;

     // }    

   
   
   console.log(alien[0]);



//const alienAmmo = 

// Make a single alien ship object.


// Simulate a battle between your ship and a single 
// alien ship first.




// Make a method for the USS Schwarzenegger that will attack a 
// given target. The target can be an input to the method.




// Run the method and pass it the alien ship.

// Make it so the method reduces the target's hull by the 
// firepower of the USS Schwarz.

// Make a game object

// Make a method in the game object that will run a 'check win' for 
// the health of the alien(s) and/or the USS Schwarzenegger. If the 
// hull is 0 or less, display a message that the ship went kabloo-ey.

// Make it so the alien will only be hit if a Math.random call is below 
// the accuracy threshold.

// Make a method for the alien ship to attack a target.

// At a status console log for the end of the round.

// PROBLEM: If you make the alien ship go kabloo-ey, then the alien 
// should not then be able to attack you. Fix this.

// Make it so the attacks will keep occuring until someone's hull 
// is at 0. Isolate what it is that you want to repeat.

// Make many alien ships with a Class. Make each object 
// slightly different . . .

// hull between 3 and 6, firepower between 2 and 4, accuracy 
// between 0.6 and 0.8.