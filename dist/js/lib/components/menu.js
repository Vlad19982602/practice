import $ from "../core.js";

$.prototype.menu = function() {
    let menuToggle = document.querySelector('#submenu:more');
    let header = document.querySelector('header');
    menuToggle.onclick = function() {
        header.classList.toggle('active');
    }
}

$('#submenu:more').menu();