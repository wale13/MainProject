window.addEventListener("scroll", activateAnimation);
function activateAnimation() {
    let i;
    let x = document.querySelectorAll('.fadeInLeft, .bounceInUp, .fadeInRight');
    for (i = 0; i < x.length; i++) {
        x[i].style.WebkitAnimationPlayState = "running";
        x[i].style.animationDelay = 0.4+i/4+"s";
        x[i].style.visibility = "visible";
    }
}