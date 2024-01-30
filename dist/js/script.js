import scrolling from "./lib/modules/btnUp.js";
import loading from "./lib/modules/loading.js";
import $ from "./lib/lib.js";
import dropdown from "./lib/modules/dropdownMenu.js";
import animation from "./lib/modules/animation.js";

window.addEventListener('DOMContentLoaded', () => {

    scrolling('.btnup');
    loading('.jobs__buttonwrapper', '.jobs__col');
    dropdown('.arrow-main', '.menu__list_item');
    animation();
});