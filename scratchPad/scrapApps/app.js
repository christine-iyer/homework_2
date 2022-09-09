const satchel = [
     'chair',
     'table',
     'candle',
     'map',
     'magnifying glass',
     'ethereum',
     'Pepto Bismol',
     'boomerang'
 ];
 for (let i = 0; i< satchel.length; i++) {
     console.log("Oh mymymy" + satchel[i] + "!!")
 }

 satchel.forEach(function(item){
     console.log("Oh mymymy" + item + "!!");
 })
 ////////////////////////////////

 const uss_sch = {
     name:"USS_Sz",
     hull: 20,
     firepower: 5,
     accuracy: .7
}

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
aliens.forEach((element, index, array) => {
     console.log(element.x); // 100, 200, 300
     console.log(index); // 0, 1, 2
     console.log(array); // same myArray object 3 times
 });
 console.log(aliens)

// aliens.forEach(function(alien of aliens){
//      console.log("Oh mymymy" + alien + "!!");
//  })

const h1El=document.createElement("#id");
h1El.innerText = 

const people = [
     {name: 'John', age: 23}, 
     {name: 'Andrew', age: 3}, 
     {name: 'Peter', age: 8}, 
     {name: 'Hanna', age: 14}, 
     {name: 'Adam', age: 37}];
 
 const anyAdult = people.some(person => person.age >= 18);
 console.log(anyAdult); // true

 const myArray = [{x:100}, {x:200}, {x:300}];
 
// const newArray = myArray.filter(element => element.x > 250);
// console.log(newArray); 

const para = document.createElement("p");
let node = document.createTextNode("This is new text...highlighted ibn purple. ");
node = document.createTextNode("Tricked ya!");
para.appendChild(node);
para.style.fontWeight = "bold";
para.style.background = "#f3f3f3";
para.style.fontSize = "x-large";
const element = document.getElementById("div1");
element.appendChild(para);
const aliens = [
     new AlienShip('alien Level 1', this.accuracy, this.firepower,this.hull) ,
     new AlienShip('alien Level 2', this.accuracy, this.firepower,this.hull) ,
     new AlienShip('alien Level 3', this.accuracy, this.firepower,this.hull) ,
     new AlienShip('alien Level 4', this.accuracy, this.firepower,this.hull) ,
     new AlienShip('alien Level 5', this.accuracy, this.firepower,this.hull) 
]
aliens.forEach((element, index, array) => {
     console.log(element.x); // 100, 200, 300
     console.log(index); // 0, 1, 2
     console.log(array); // same myArray object 3 times
 });
 console.log(aliens);

const h1El = document.getElementById("class");
h1El.textContent = aliens;
h1El.appendChild('div')

