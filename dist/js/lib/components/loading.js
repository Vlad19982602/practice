

const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
            btn = document.querySelector(trigger);

    cards.forEach(card => {
        card.classList.add('animate__animated', 'animate__fadeInUp');
    });

    if(btn) {
        btn.addEventListener('click', () => {
            cards.forEach(card => {
                card.classList.remove('animate__animated', 'animate__fadeInUp');
                card.classList.add('animate__animated', 'animate__fadeInUp');
            });    
        });
    }

};

export default showMoreStyles();