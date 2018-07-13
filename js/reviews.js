{ let n = 0, len;
let element1 = document.querySelector('.reviewer');
let element2 = document.querySelector('.review');
getReviews(n);
function getReviews(n) {
    fetch('json/reviews.json')
        .then( response => response.json() )
        .then( showData => {
            element1.innerText = showData[n].reviewer;
            element2.innerText = showData[n].review;
            len = showData.length;
        });
}
document.querySelector('.next-review').addEventListener("click", function(e) {
    if (n < len-1) {
        n++;
        getReviews(n);
        element1.classList.remove("lightSpeedIn");
        element2.classList.remove("lightSpeedIn");
        void element1.offsetWidth;
        void element2.offsetWidth;
        element1.classList.add("lightSpeedIn");
        element2.classList.add("lightSpeedIn");
    }
});
document.querySelector('.prev-review').addEventListener("click", function(e) {
    if (n > 0) {
        n--;
        getReviews(n);
        element1.classList.remove("lightSpeedIn");
        element2.classList.remove("lightSpeedIn");
        void element1.offsetWidth;
        void element2.offsetWidth;
        element1.classList.add("lightSpeedIn");
        element2.classList.add("lightSpeedIn");
    }
});
}