class Resource {
     constructor(name, earnings, expenses) {
          this.name = name;
          this.earnings = earnings;
          this.expenses = expenses;
     }
}
const resources = [
     new Resource("hustle", 6,3.7),
     new Resource('trainer', 7,3.2),
     new Resource('coder', 9,3),
     new Resource("printer", 5,4),
     new Resource("writer", 4,1)
]


class Player {
     constructor (name, hunger,fatigue, boredom,resource){
          this.name = name;
          this.hunger = hunger;
          this.fatigue = fatigue;
          this.boredom = boredom;
          this.resource = resource;

     }
     resetPlayerData (resources) {
          this.earnings = 0
          this.resource = resources.shift();
     }
     nextResource(resources){
          this.resource = resources.shift()
     }
}
// const Players = [
//      new Player('Fifi', 7,3,1),
//      new Player('Lolo', 1,6,10),
//      new Player('Saylor', 5,1,8), 
//      new Player('Edith', 4,7,2), 
//      new Player('Breezy', 1,9,3)
// ]
const player = new Player(0)
const startGame = () => {
     player.nextResource(resources)
     message('The game has started!');
     renderStore();
};
const message = (str) => {
     const info = document.querySelector('.messages');
     info.innerHTML = `
     <h5>${str}</h5>
     <h5>Current tool: <span> ${player.resource.name}</h6>
     <h5>Current earnings: <span> ${player.resource.earnings}</h6>
     <h5>Current bank acct: <span> ${player.earnings}</span></h6>
     `;
     if (player.earnings > 19){
          document.querySelector('.messages').innerHTML = 
          `<h3> You did it! You won!</h3>`;
     };
}

const renderStore = () => {
const store = document.querySelector('.store');
if (resources.length >0) {
     store.innerHTML = `
     <h5> Items available for purchase:</h5>
     <h6> ${resources[0].name}</h6>
     <h6> Purchase price: ${resources.expenses}</h6>
     `;
     store.innerHTML+=(player.earnings>= resources[0].expenses) ? `<button class='purchase'> Purchase </button>` : `<p>You can't afford this yet</p>`;
     const makePurchase = document.querySelector('.purchase');
     if (makePurchase){
          makePurchase.addEventListener('click', () => {
               player.nextResource(resources);
               player.earnings -= player.resource.expenses
               renderStore();
               message('You have upgraded!');
               })
     }
} else {
     store.innerHTML = `<h5> You have purchased all upgrades!</h5>`;

}
};

const landscape = () => {
     player.earnings+=player.resource.resources;
     message('You work hard and are making progress. Keep it up')
     renderStore();
};
startGame()
landscapeButton = document.querySelector('.landscape');
landscapeButton.addEventListener('click', landscape);
