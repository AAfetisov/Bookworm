const { farmInpForm } = document.forms;
const errDisplay = document.getElementById('errText');

farmInpForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { method, action } = e.target;
  let response;
  try {
    const formData = new FormData();
    const fileField = document.getElementById('petphoto');
    formData.append('name', e.target.name.value);
    formData.append('petphoto', fileField.files[0]);

    const response = await fetch('/farm/add', {
      method: 'post',
      body: formData,
    });

    if (response.status !== 200) {
      const data = await response.json();
      console.log('response status code:', response.status);
      errDisplay.innerText = data.err;
      errDisplay.style.visibility = 'visible';
      return;
    }

    console.log(response.status);
    e.target.name.value = '';
    e.target.petphoto.value = '';
    location.reload();
  } catch (err) {
    console.log(e.target, err.message);
  }
});

farmInpForm?.addEventListener('input', (event) => {
  errDisplay.innerText = '';
  errDisplay.style.visibility = 'hidden';
});

const petsUl = document.getElementsByClassName('Pets')[0];
petsUl.addEventListener('click', async (e) => {
  if (e.target.id === 'delete') {
    e.preventDefault();

    const response = await fetch('/farm/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: e.target.getAttribute('ids') }),
    });

    if (response.status === 200) {
      petsUl.removeChild(e.target.parentNode);
    } else {
      console.log('err:', await response.json());
    }
  }

  if (e.target.id === 'edit') {
    e.preventDefault();
    const editFormInnerHtml = `
         <form id="editForm"  action="/farm/update" method="put">
              <label for="editName">Pet's Name:</label>
              <input type="text" name="editName" id="editName" />
              <label for="editPetphoto">Pet's Photo:</label>
              <input id="editPetphoto" name="editPetphoto" type="file" />
              <button id="editSubmitBtn" class="button" type="submit">Save</button>
              <span class="editErrTxt" id="editErrTxt">Wrong E-mail or Password</span>
        </form>
    `;
    const editForm = document.createElement('div');
    editForm.innerHTML = editFormInnerHtml;
    document.body.appendChild(editForm);

    const editSubmitBtn = document.getElementById('editSubmitBtn');
    const id = e.target.getAttribute('ids');

    editSubmitBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      const formData = new FormData();
      const fileField = document.getElementById('editPetphoto');
      const name = document.getElementById('editName').value;

      console.log(id);

      formData.append('id', id);
      formData.append('name', name);
      formData.append('petphoto', fileField.files[0]);

      const response = await fetch('/farm/update', {
        method: 'put',
        body: formData,
      });

      if (response.status === 200) {
        location.reload();
      } else {
        const editErrTxt = document.getElementById('editErrTxt');
        const { err } = await response.json();
        editErrTxt.innerText = err;
        editErrTxt.style.visibility = 'visible';
      }
    });
  }
});
