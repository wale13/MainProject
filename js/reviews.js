let n = 0, len;
getReviews(n);
function getReviews(n) {
    fetch('json/reviews.json')
        .then( response => response.json() )
        .then( showData => {
            document.querySelector('.reviewer').innerText = showData.revs[n].reviewer;
            document.querySelector('.review').innerText = showData.revs[n].review;
            len = showData.revs.length;
        });
}
document.querySelector('.next-review').addEventListener('click', next);
function next() {
if (n < len-1) {
  n++;
  getReviews(n);
  }
}
document.querySelector('.prev-review').addEventListener('click', prev);
function prev() {
if (n > 0) {
  n--;
  getReviews(n);
  }
}