// Достаём форму
const { addForm } = document.forms;
// console.log(addForm);
const myProfile = document.querySelector('.MyProfile');
// console.log(myProfile);
// Достаёем форму и кнопку
const { editForm } = document.forms;
// console.log(editForm);


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
  document.location = ('/private/myprofile');
});


// Delete
if (myProfile) {
  myProfile.addEventListener('click', async (event) => {
    if (event.target.id === 'buttonDeletePost') {
      event.preventDefault();
      try {
        const postId = event.target.closest('.PostContainer');
        const obj = { id: postId.id };
        const response = await fetch('/private/myprofile', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        if (response.status === 200) {
          postId.remove();
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (event.target.id === 'buttonEditPostForm') {
      const postchange = event.target.closest('.PostContainer');
      document.location = `private/editform/${postchange.id}`;
    }
  });
}

if (editForm) {
  editForm.addEventListener('submit', async (event) => {
    // Останавливаем событие
    event.preventDefault();
    try {
      const postId = event.target.children[0].id;
      // Достаём данные из inputs
      const {
        img, title, description, author,
      } = editForm;
      // Заворачиваем в объект
      const myPost = {
        img: img.value,
        title: title.value,
        description: description.value,
        author: author.value,
      };
      // Fetch:
      const response = await fetch(
        `/private/private/editform/${postId}`,
        {
          method: 'Put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(myPost),
        },
      );
      if (response.status !== 200) {
        const post = await response.json();
        alert(post.error);
      } else {
        response.json();
        alert('Данные успешно изменены!');
        document.location = '/private/myprofile';
      }
    } catch (error) {
      console.error(error);
    }
  });
}
