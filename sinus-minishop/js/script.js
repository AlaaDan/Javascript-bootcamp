const ash = document.querySelector(".art-1 :nth-child(3)");
ash.innerHTML = "Potato";

let home = document.querySelector("nav :nth-child(1)");
home.innerHTML = "Start";
home.classList.add("Active")

let contact = document.querySelector("nav :nth-child(3)");
contact.innerHTML = "Mail us";

let footerHome = document.querySelector("footer section article :nth-child(2)");
footerHome.innerHTML = "Start";
let footerContact = document.querySelector("footer section article :nth-child(4)");
footerContact.innerHTML = "Mail us";

const fireInfo = document.querySelector(".art-2 :nth-child(4)");
fireInfo.innerHTML = " A new information has been added";

for (let eachButton of document.getElementsByTagName('button')){
eachButton.style.backgroundColor = "#47B5FF";
eachButton.style.color = "#121212";
eachButton.innerHTML = "Add to cart"
}

const imageBackcolor = document.querySelector("figure");
imageBackcolor.style.backgroundColor = "#47B5FF";

const address = document.querySelector("footer section :nth-child(2) p");
address.innerHTML = "New address has been added";

for (let element of document.getElementsByTagName('p')){
    element.style.color = "#FF731D";
}

//const logo = document.querySelector('img');
//logo.classList.remove('logo')

const logoClick = document.querySelector(".logo");
logoClick.addEventListener("click", () => {
    console.log("Found you")
})

const ashClick = document.querySelector('.art-1');
ashClick.addEventListener('click', () =>{
    console.log("Hi, I am Ash")
} )
const fireClick = document.querySelector('.art-2');
fireClick.addEventListener('click', () =>{
    console.log("Hi, I am Fire")
} )
const waterClick = document.querySelector('.art-3');
waterClick.addEventListener('click', () =>{
    console.log("Hi, I am Water")
} )