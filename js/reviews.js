getReviews();
function getReviews() {
    fetch('json/reviews.json')
      .then( response => response.json() )
      .then( showData => {
         document.querySelector('.reviewer').innerText = showData.reviews[showData.reviews.length - 1].reviewer;
         document.querySelector('.review').innerText = showData.reviews[showData.reviews.length - 1].review;
        })
}

