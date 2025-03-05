const card = document.querySelector('.container');
const description = document.getElementById('description');
const changeTextButton = document.getElementById('changeTextButton');
const themeToggleButton = document.getElementById('themeToggleButton');
const body = document.body;

const text1 = "Ingeniero de sistemas, apasionado por los datos, AWS, desarrollo web, nuevas tecnologías y el mundo de la computación.";
const text2 = "Seminarista anglicano, tengo novia y planeo casarme en 3 años.";

let isText1 = true;

if (card) {
    window.addEventListener('load', () => {
        card.classList.add('highlight');

        card.addEventListener('animationend', () => {
            card.classList.remove('highlight');
        });
    });
}

if (changeTextButton && description) {
    changeTextButton.addEventListener('click', () => {
        if (isText1) {
            description.textContent = text2;
        } else {
            description.textContent = text1;
        }
        isText1 = !isText1;
    });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    updateThemeButtonIcon(true);
} else {
    body.classList.remove('dark-theme');
    updateThemeButtonIcon(false);
}

if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        const isDarkTheme = body.classList.contains('dark-theme');
        
        if (confirm(isDarkTheme ? "¿Cambiar a tema claro?" : "¿Cambiar a tema oscuro?")) {
            body.classList.toggle('dark-theme');
            
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }

            updateThemeButtonIcon(body.classList.contains('dark-theme'));
        }
    });
}

function updateThemeButtonIcon(isDarkTheme) {
    const icon = themeToggleButton?.querySelector('i');
    if (icon) {
        if (isDarkTheme) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i> Cambiar Tema';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i> Cambiar Tema';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});