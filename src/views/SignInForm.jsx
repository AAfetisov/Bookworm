const React = require('react');
const Layout = require('./Layout');

function SignInForm({ user = {} }) {
  return (
    <Layout user={user}>
      <>
        <h2>Логин</h2>
        <div className="cont">

          <form id="authSignInForm" action="/auth/signin" method="post">
            <label htmlFor="authEmail">E-mail:</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="authPassword">Password:</label>
            <input type="password" name="password" id="password" />
            <button id="authSubmitBtn" className="button" type="submit">Login</button>
            <span className="authErrTxt" id="errText">Wrong E-mail or Password</span>
          </form>
        </div>
      </>
      <script src="/js/signin.js" />
    </Layout>
  );
}
module.exports = SignInForm;
