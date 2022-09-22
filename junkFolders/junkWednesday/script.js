const main = document.querySelector('main');
let htmlString = "";
let img = document.createElement('img');
let div = document.createElement('div')
img.setAttribute('src','https://i.imgur.com/jyfH8hPs.jpg')






for (let i = 0; i<10;i++){
     htmlString += `<div>Box Numero ${i}</div>`;
     if(i ===3) {
           `<div>${img}</div>`;

     }
}
main.innerHTML = img;
main.innerHTML = htmlString;


