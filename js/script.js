const header = document.querySelector(".header")
const headerButton = document.querySelector(".button-header");

const allText = document.querySelector(".header__animated-name");
const topText = document.querySelector(".header__animated-name-container");
const bottomText = document.querySelector(".header__animated-info-span");



const hideHeader = () => {    
    headerButton.classList.add("button-header--animOut");
    bottomText.classList.add("header__animated-info-span--animOut");
    topText.classList.add("header__animated-name-container--animOut");
    allText.classList.add("header__animated-name--animOut");

    setTimeout(() => {
        header.style.display = "none";
    }, 1100);
}

headerButton.addEventListener("click", hideHeader);