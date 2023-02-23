const { commentForm } = document.forms;

commentForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(1111111111);
  const { method, action } = e.target;
  const id = e.target.getAttribute('ids');
  let response;
  console.log(id, e.target.comment.value);
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
