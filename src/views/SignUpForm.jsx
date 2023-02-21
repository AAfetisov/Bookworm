const React = require('react');
const Layout = require('./Layout');

function SignUpForm({ user = {} }) {
  return (
    <Layout user={user}>
      <>
        <h2>Регистрация</h2>
        <div className="cont">
          <form id="authSignUpForm" action="/auth/signup" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">E-mail:</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button id="authSubmitBtn" className="button" type="submit">Register</button>
            <div id="errText" className="authErrTxt">Wrong E-mail or Password</div>
          </form>
        </div>
      </>
      <script src="/js/signup.js" />
    </Layout>
  );
}
module.exports = SignUpForm;
