const { addForm } = document.forms;
const myProfile = document.querySelector('.MyProfile');
const { fetchF } = document.forms;


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
        img: event.target.img.value,
        title: event.target.title.value,
        author: event.target.author.value,
        description: event.target.description.value,
      }),
    });
    if (response.status !== 200) {
      const data = await response.json();
      const errText = document.getElementById('errText');
      errText.innerText = data?.err;
      errText.style.visibility = 'visible';
    }
  } catch (err) {
    console.error(err);
  }
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
        console.log(postId.id);
        const response = await fetch('/private/myprofile', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        });
        console.log(response.status);
        if (response.status === 200) {
          postId.remove();
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (event.target.id === 'buttonEditPostForm') {
      const postchange = event.target.closest('.PostContainer');
      document.location = `editform/${postchange.id}`;
    }
  });
}

if (fetchF) {
  fetchF.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const postId = event.target.children[0].id;
      // Достаём данные из inputs
      const {
        img, title, description, author,
      } = fetchF;
      // Заворачиваем в объект
      const myPost = {
        img: img.value,
        title: title.value,
        description: description.value,
        author: author.value,
        id: postId,
      };
      // Fetch:
      const response = await fetch(
        '/private/editform',
        {
          method: 'PUT',
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
        alert('Данные успешно изменены!');
        document.location = '/private/myprofile';
      }
    } catch (error) {
      console.error(error);
    }
  });
}
