const express = require('express');

const router = express.Router();
const {
  renderSignInForm,
  checkUserAndCreateSession,
  destroySession,
  createUserAndSession,
  renderSignUpForm,
} = require('../controllers/auth.controllers');
const { isAuth, isValid } = require('../middleware/auth.mid');

router
  .route('/signin')
  .get(renderSignInForm)
  .post(checkUserAndCreateSession);

router
  .route('/signup')
  .get(renderSignUpForm)
  .post(isValid, createUserAndSession);

router.get('/signout', isAuth, destroySession);


module.exports = router;
