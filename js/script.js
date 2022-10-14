// DISABLE SCROLL ------------------------------------

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

  // -----------------------------------------------



//scroll to top when refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

disableScroll();

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

const hideHeader = () => {
    headerButton.classList.add("button-header--animOut");
    bottomText.classList.add("header__animated-info-span--animOut");
    topText.classList.add("header__animated-name-container--animOut");
    allText.classList.add("header__animated-name--animOut");

    setTimeout(() => {
        header.style.display = "none";
        enableScroll();
    }, 1100);
}
const showContent = () => {
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
    }, 1200)
}

headerButton.addEventListener("click", hideHeader);
headerButton.addEventListener("click", showContent);