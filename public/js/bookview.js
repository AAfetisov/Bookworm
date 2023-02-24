const { commentForm } = document.forms;

commentForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { method, action } = e.target;
  const id = e.target.getAttribute('ids');
  let response;
  try {
    response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, comment: e.target.comment.value }),
    });

    if (response.status !== 200) {
      const data = await response.json();
      return;
    }
    e.target.comment.value = '';
    console.log(response.status);
    location.reload();
  } catch (err) {
    console.log(e.target, err.message);
  }
});

const userRating = document.getElementById('userRating');

userRating.addEventListener('click', async (e) => {
  if (e.target.name !== 'stars') { return; }
  const star = e.target;
  const { value } = star;
  const id = star.parentNode.getAttribute('ids');
  try {
    await fetch('/private/rating', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, value }),
    });
  } catch (err) {
    console.log(err);
  }
});
const urating = userRating.getAttribute('urating');
if (urating) {
  const r = ['e', 'd', 'c', 'b', 'a'];
  const starId = `star-${r[urating - 1]}`;
  document.getElementById(starId).checked = true;
}

const averageRating = document.getElementById('averageRating');
let arating = averageRating.getAttribute('arating');

if (arating) {
  arating = Math.round(arating);
  const r = ['e', 'd', 'c', 'b', 'a'];
  const astarId = `astar-${r[arating - 1]}`;
  document.getElementById(astarId).checked = true;
}
