const favContainer = document.getElementById('favoriteViewFavContainer');

favContainer.addEventListener('click', async (e) => {
  if (e.target.className !== 'bookmark') { return; }
  e.preventDefault();
  const id = e.target.getAttribute('ids');

  console.log(id);
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
