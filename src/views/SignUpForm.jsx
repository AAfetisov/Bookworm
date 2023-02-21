const React = require('react');
const Layout = require('./Layout');

function SignUpForm({ user = {} }) {
  return (
    <Layout user={user}>
      <>
        <div className='title-login mt-5'>
          <h2>Регистрация</h2>
        </div>

        <div className='container d-flex justify-content-center mt-5'>
          <form id='authSignUpForm' action='/auth/signup' method='post'>
            <label htmlFor='name'>Name:</label>
            <input className="login-input" type='text' name='name' id='name' />
            <label htmlFor='email'>E-mail:</label>
            <input className="login-input" type='text' name='email' id='email' />
            <label htmlFor='password'>Password:</label>
            <input className="login-input" type='password' name='password' id='password' />
            <button id='authSubmitBtn' className='btn btn-outline-primary' type='submit'>
              Register
            </button>
            <div id='errText' className='authErrTxt'>
              Wrong E-mail or Password
            </div>
          </form>
        </div>
      </>
      <script src='/js/signup.js' />
    </Layout>
  );
}
module.exports = SignUpForm;
