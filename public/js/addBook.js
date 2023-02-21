// Достаём форму
const { addForm } = document.forms;
console.log(addForm);


// Добавление
addForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log('Что лежит в event.target ==>', event.target);
  //  action -> /private/addfarm/new && method -> POST;
  //  Достаём: method, action==>
  const { method, action } = event.target;
  // console.log('Что лежит в event.target.picture ==>', event.target.picture.value);
  // console.log('Что лежит в event.target.petName ==>', event.target.petName.value);
  let response;
  try {
    response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Что отправляется на бэк:
        img: event.target.img.value,
        title: event.target.title.value,
        author: event.target.author.value,
        description: event.target.description.value,
      }),
    });
    if (response.status !== 200) {
      const data = await response.json();
      alert(data.error);
      // return failSignin(event.target, data.err);
    } alert('Пост успешно опубликован!');
  } catch (err) {
    console.error(err);
    // return failSignin(event.target, err.message);
  }
  // Редирект на главную
  document.location = ('/');
});
