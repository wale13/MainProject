document.querySelector('.overlay').addEventListener('click', closeNav)
document.querySelector('.burger-button').addEventListener('click', openNav)

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}