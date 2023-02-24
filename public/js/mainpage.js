const bookList = document.getElementsByClassName('book-list')[0];

bookList.addEventListener('click', async (e) => {
  if (e.target.className !== 'bookmark') { return; }
  e.preventDefault();
  const id = e.target.getAttribute('ids');


  let response;
  try {
    response = await fetch('/private/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (response.status === 200) {
      const data = await response.json();
      if (data === 'faved') { e.target.src = '/img/Bookmark_red.png'; }
      if (data === 'unfaved') { e.target.src = '/img/Bookmark_black.png'; }
    }
  } catch (err) {
    console.log(e.target, err.message);
  }
});

const averageRatingsAll = document.getElementsByClassName('simpleRating');

for (let i = 0; i < averageRatingsAll.length; i++) {
  let arating = averageRatingsAll[i].getAttribute('arating');
  const id = averageRatingsAll[i].getAttribute('ids');

  arating = arating || 0;

  arating = Math.round(arating);
  const rating = '\u2605'.repeat(arating) + '\u2606'.repeat(5 - arating);

  const starsElem = document.createElement('p');
  starsElem.innerText = rating;
  averageRatingsAll[i].appendChild(starsElem);

}
