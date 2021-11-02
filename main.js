// const sideMenu = document.getElementById("contact-container");
// const contactButton = document.getElementById("contact-bttn");
// let animationCounter = 0
// let sideMenuPosition = 0

// const animateSideMenu = () => {
//     sideMenu.style.transition = ""
//     if (animationCounter < 2) {
//         animationCounter ++
//         sideMenuPosition += 2
//         sideMenu.style.left -= sideMenuPosition + 'vw'
//     } 
//     else if (animationCounter >= 2 && animationCounter <4){
//         animationCounter ++
//         sideMenuPosition -= 2
//         sideMenu.style.right += sideMenuPosition + 'vw'
//     }
//     else {
//         clearInterval()
//         sideMenu.style.transition = "0.5s ease-out"
//         sideMenu.style.right = "";
//         animationCounter = 0
//     }
    
// }

// const setTimeAnimation = () => {
//     setInterval(animateSideMenu, 1000);
// }

// contactButton.addEventListener('click', setTimeAnimation)