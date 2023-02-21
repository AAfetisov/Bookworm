const bcrypt = require('bcrypt');
const render = require('../lib/renderTemplate');
const SignInForm = require('../views/SignInForm');
const SignUpForm = require('../views/SignUpForm');
const { sequelize, User } = require('../db/models');

function renderSignInForm(req, res) {
  const { user } = req.session;
  render(SignInForm, user, res);
}

function checkUserAndCreateSession(req, res) {
  console.log(123);
}

module.exports = {
  // renderSignUpForm,
  // createUserAndSession,
  renderSignInForm,
  checkUserAndCreateSession,
  // destroySession
};
