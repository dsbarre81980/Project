const card = document.querySelector('.container');
const description = document.getElementById('description');
const changeTextButton = document.getElementById('changeTextButton');

const text1 = "Ingeniero de sistemas, apasionado por los datos, AWS, desarrollo web, nuevas tecnologías y el mundo de la computación.";
const text2 = "Seminarista anglicano, tengo novia y planeo casarme en 3 años.";

let isText1 = true;

window.addEventListener('load', () => {
    card.classList.add('highlight');

    card.addEventListener('animationend', () => {
        card.classList.remove('highlight');
    });
});

changeTextButton.addEventListener('click', () => {
    if (isText1) {
        description.textContent = text2;
    } else {
        description.textContent = text1;
    }
    isText1 = !isText1; 
});