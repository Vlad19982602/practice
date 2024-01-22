
const dropdown = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
            btn = document.querySelector(trigger);

    cards.forEach(card => {
        card.classList.add('animate__animated', 'animate__fadeInDown');
    });

    if(btn) {
        btn.addEventListener('click', () => {
            cards.forEach(card => {
                card.classList.remove('menu__tooltip-menu');
                card.classList.add('menu__tooltip-menu_show');
            });
            btn.remove();     
        });
    }

};

export default dropdown;