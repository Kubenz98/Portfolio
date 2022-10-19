import '../node_modules/@glidejs/glide/dist/glide.js';
import '../node_modules/jquery/dist/jquery.min.js';
import {disableScroll} from './scroll.js'
import '../js/mail.js';
import {hideHeader, showContent} from './htmlAnims.js'

disableScroll();

const headerButton = document.querySelector(".button-header")

headerButton.addEventListener("click", hideHeader);
headerButton.addEventListener("click", showContent);

new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 1,
    focusAt: 0,
}).mount()