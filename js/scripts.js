const card = document.querySelector('.container');

window.addEventListener('load', () => {
    card.classList.add('highlight');

    card.addEventListener('animationend', () => {
        card.classList.remove('highlight');
    });
});