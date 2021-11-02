const sideMenu = document.getElementById("contact-container");
const contactButton = document.getElementById("contact-bttn");
let animationCounter = 0
let sideMenuPosition = 0
let startInterval

const setAnimationCounter = () => {
    animationCounter = 0
    console.log("poner contador a cero")
}

const countAnimationTime = () => {
    animationCounter ++
    if (animationCounter >= 3) {
        clearInterval(startInterval)
        sideMenu.classList.remove("fake-hover")
    }
    console.log("contar tiempo")
}

const showContactMenu = () => {
    sideMenu.classList.add("fake-hover")   
    console.log("mostrar") 
}

const setTimeAnimation = () => {
    startInterval = setInterval(countAnimationTime, 1000);
}

contactButton.addEventListener('click', setTimeAnimation)
contactButton.addEventListener('click', showContactMenu)
contactButton.addEventListener('click', setAnimationCounter)