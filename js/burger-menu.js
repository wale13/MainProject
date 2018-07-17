document.querySelector('.overlay').addEventListener('click', toggleBurgerMenu);
document.querySelector('.burger-button').addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
    const overlay = document.querySelector('#myNav');
    overlay.classList.toggle("shown");
}
