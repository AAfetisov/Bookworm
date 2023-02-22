const React = require('react');
const Layout = require('./Layout');

function SignInForm({ user }) {
  return (
    <Layout user={user}>
      <>
        <div className="title-login">
          <h2>Логин</h2>
        </div>

        <div className="cont">

          <form id="authSignInForm" action="/auth/signin" method="post">
            <label htmlFor="login-input">E-mail:</label>
            <input className="login-input" type="text" name="email" id="email" />
            <label htmlFor="login-input">Password:</label>
            <input className="login-input" type="password" name="password" id="password" />
            <button id="authSubmitBtn" className="authSubmitBtn" type="submit">Login</button>
            <div id='errText'>
            Wrong E-mail or Password
            </div>
          </form>
        </div>
      </>
      <script src="/js/signin.js" />
    </Layout>
  );
}
module.exports = SignInForm;
