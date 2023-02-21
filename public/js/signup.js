const { authSignUpForm } = document.forms;
const errDisplay = document.getElementById('errText');

authSignUpForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { method, action } = e.target;
  // console.log(method, action);
  let response;
  try {
    response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    console.log(1111, response.status);
    if (response.status !== 200) {
      const data = await response.json();
      console.log('response status code:', response.status);
      errDisplay.innerText = data.err;
      errDisplay.style.visibility = 'visible';
      return;
    }
    window.location.href = '/';
  } catch (err) {
    console.log(e.target, err.message);
  }
});

authSignInForm?.addEventListener('input', (event) => {
  errDisplay.innerText = '';
  errDisplay.style.visibility = 'hidden';
});
