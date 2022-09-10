alert('script.js works')

// Controlling the modal
const openBtn = document.querySelector("#openModal");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close");
const openModal = (event) => {
    modal.style.display = "block";
}
const closeModal = (event) => {
    modal.style.display = "none";
}

const openEggBtn = document.querySelector("#openEgg");
const eggModal = document.querySelector("#egg-modal");
const closeEggBtn = document.querySelector("#closeEgg");
openEggModal = (event)=> {
    eggModal.style.display = 'block';
}
const closeEggModal = (event)=> {
    eggModal.style.display = 'none';
}

// Controlling the egg modal
// const openEggBtn = document.querySelector("#openEggModal");
// const eggModal = document.querySelector("#egg-modal");
// const closeEggBtn = document.querySelector("#closeEggModal");
// const openEggModal = (event) => {
//     eggModal.style.display = 'block';
// }
// const closeEggModal = (event) => {
//     eggModal.style.display = 'none';
// }


//carousel
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentImageIndex = 0; // current available index this must be in the global space. what image is currently showing by setting a global index counter variable:
let previousImgIndex = 0;

const images = document.querySelectorAll('.image')
next.addEventListener('click', (event) => {
    // Inside the event listener for our "next" class, set previousImgIndex to currentImgIndex, and increment currentImgIndex by 1.
    previousImgIndex = currentImageIndex;
    //      Next, inside the event listener for our "next" class, select the currently showing carousel image with:
    // images[previousImageIndex]
    if (currentImageIndex < images.length - 1) {
        currentImageIndex += 1
    } else {
        currentImageIndex = 0;
    }
    images[previousImgIndex].style.display = 'none';
    images[currentImageIndex].style.display = 'block';
})
prev.addEventListener('click', (event) => {
    previousImgIndex = currentImageIndex;
    if (currentImageIndex > 0) {
        currentImageIndex -= 1;
    } else {
        currentImageIndex = images.length - 1
    }
    images[previousImgIndex].style.display = 'none';
    images[currentImageIndex].style.display = 'block';
})
// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    assets: [],
    wallet: 0
}


class Career {
    constructor(name, description, income, id) {
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    }
]
const careerIncomes = [
    8501,
    18501,
    2850,
    3850,
    4850,
    5850,
    6850
];
const careers = [];


const randomization = (limit) => {
    return Math.floor(Math.random() * limit)
}

const randomPrice = (price) => {
    //range 0.7 -2.0 this is very important
    return price * ((Math.random() * 1.3) + 0.7)
}

for (let i = 10; i > 0; i--) {
    const job = careerDescriptions[randomization(careerDescriptions.length)]
    const income = careerIncomes[randomization(careerIncomes.length)];
    careers.push(new Career(job.name, job.description, income, `${job.name}-${income}`))
}


barbie.career = careers[randomization(careers.length)]

class Clothing {
    constructor(name, designer, color, type, size, price) {
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470)
const redBottoms = new Clothing('Red Bottoms', 'Christian Loubitin', 'black', 'shoes', '4', 800)
class Asset {
    constructor(name, value, cashFlow, color) {
        this.name = name;
        this.value = value;
        this.cashFlow = cashFlow;
        this.color = color;
    }
}

const rental = new Asset('Rental Property', 50000, 500, 'pink')

// Game Screen




barbie.el = document.getElementById('barbie');

barbie.render = () => {
    barbie.el.innerHTML = `
     <h1 class='wallet'>${barbie.name} Status</h1>
     <h3>${barbie.name} works as a ${barbie.career.name} </h3>
     <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
     <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
     <div> <h2>Wardrobe Contains: </h2> 
     <ul>${barbie.wardrobe.map(((item, index) => {
        return `<li key="${index}" class="wardrobe-item" price="${randomPrice(item.price)}">
             ${barbie.name} has a ${item.color} 
             ${item.name} made by ${item.designer}
             that is worth ${item.price} in size 
             ${item.size}
             <button class="sell">Sell ${item.name}</button> 
             </li>`
    })).join('')
        }</ul>
     </div>
     <div> <h2>Assets Are: </h2> 
     <ul>${barbie.assets.map(((item, index) => {
            return `<li>
             ${barbie.name} has a ${item.color} 
             ${item.name} 
             that is worth ${item.value}
             </li>`
        })).join('')
        }</ul>
     </div>
 `;
    const wardrobeButtons = document.querySelectorAll('.wardrobe-item > .sell')
    wardrobeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            barbie.wallet += parseInt(button.parentNode.getAttribute('price'))
            barbie.wardrobe.splice(button.parentNode.getAttribute('key'), 1)
            button.parentNode.remove()
            barbie.render()
        })
    })
}




//Event Listeners
openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
closeBtn.addEventListener('click', barbie.render)
setTimeout(openModal, 3000);// 


openEggBtn.addEventListener('click', openEggModal)
closeEggBtn.addEventListener('click', closeEggModal)


const rentalButton = document.getElementById('rental');

rentalButton.addEventListener('click', () => {
    if (barbie.wallet >= rental.value) {
        barbie.assets.push(rental)
        barbie.wallet -= rental.value
        barbie.career.income += rental.cashFlow
        barbie.render()
    } else {
        alert('This is a good decision unfortunately it is not your season yet sis')
    }
})



const redButton = document.getElementById('red-bottoms');

redButton.addEventListener('click', () => {
    if (barbie.wallet >= redBottoms.price) {
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render()
    } else {
        alert("Girl,you need to re-evaluate what you are doing!")
    }
})

const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', () => {
    if (barbie.wallet >= birkin.price) {
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
        // the object control the information that is visible to us on the screen
        // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})


const workButton = document.getElementById('work');
workButton.addEventListener('click', () => {
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    barbie.render();
})
function myFunction() {
    document.getElementById("frm1").submit();
}
