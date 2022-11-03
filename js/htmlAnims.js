import {enableScroll} from './scroll.js'

const header = document.querySelector(".header")
const headerButton = document.querySelector(".button-header");

const allText = document.querySelector(".header__animated-name");
const topText = document.querySelector(".header__animated-name-container");
const bottomText = document.querySelector(".header__animated-info-span");

const nav = document.querySelector(".nav");
const aboutTitle = document.querySelector(".title__about");
const aboutText = document.querySelector(".about__container");
const techStackTitle = document.querySelector(".title__tech-stack");
const techStackContent = document.querySelectorAll(".tech-stack__container-set");
const projectsTitle = document.querySelector(".title__projects");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const footer = document.querySelector(".footer");

export const hideHeader = () => {
    window.scrollTo(0, 0);
    headerButton.classList.add("button-header--animOut");
    bottomText.classList.add("header__animated-info-span--animOut");
    topText.classList.add("header__animated-name-container--animOut");
    allText.classList.add("header__animated-name--animOut");

    setTimeout(() => {
        header.style.display = "none";
        enableScroll();
    }, 1100);
}
export const showContent = () => {
    setTimeout(() => {
        nav.classList.add("nav--active")
        aboutTitle.classList.add("title__about--active");
        aboutText.classList.add("about__container--active");
        techStackTitle.classList.add("title__tech-stack--active");

        techStackContent.forEach((set, index) => {
            setTimeout(() => {
                set.classList.add("tech-stack__container-set--active")
            }, 50 * (index + 1))
        })
        setTimeout(() => {
            projectsTitle.classList.add("title__projects--active")
        }, 250);
        setTimeout(() => {
            projects.classList.add("projects--active");
        }, 300);
        setTimeout(() => {
            contact.classList.add("contact--active");
        }, 350)
        setTimeout(() => {
            footer.classList.add("footer--active");
        }, 400)
    }, 800)
}