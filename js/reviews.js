{
    let reviewNumber = 0;
    let len;
    const reviewer = document.querySelector('.reviewer');
    const review = document.querySelector('.review');
    getReviews(reviewNumber);

    function getReviews(reviewNumber) {
        fetch('json/reviews.json')
            .then(response => response.json())
            .then(showData => {
                reviewer.innerText = showData[reviewNumber].reviewer;
                review.innerText = showData[reviewNumber].review;
                len = showData.length;
            });
    }
    document.querySelector('.next-review').addEventListener("click", function(e) {
        if (reviewNumber < len - 1) {
            reviewNumber++;
            getReviews(reviewNumber);
            reviewer.classList.remove("lightSpeedIn");
            review.classList.remove("lightSpeedIn");
            void reviewer.offsetWidth;
            void review.offsetWidth;
            reviewer.classList.add("lightSpeedIn");
            review.classList.add("lightSpeedIn");
        }
    });
    document.querySelector('.prev-review').addEventListener("click", function(e) {
        if (reviewNumber > 0) {
            reviewNumber--;
            getReviews(reviewNumber);
            reviewer.classList.remove("lightSpeedIn");
            review.classList.remove("lightSpeedIn");
            void reviewer.offsetWidth;
            void review.offsetWidth;
            reviewer.classList.add("lightSpeedIn");
            review.classList.add("lightSpeedIn");
        }
    });
}
