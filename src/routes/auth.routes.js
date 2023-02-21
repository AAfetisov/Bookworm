const express = require('express');

const router = express.Router();
const { renderSignInForm, checkUserAndCreateSession } = require('../controllers/auth.controllers');


router
  .route('/signin')
  .get(renderSignInForm)
  .post(checkUserAndCreateSession);

// (req, res) => {
//   const { user } = req.session;
//   render(SignInForm, user, res);
// });


// router.post('/signin', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) { res.status(401); res.json({ err: 'Email or password is empty' }); return; }

//   try {
//     const user = await User.findOne({ where: { email } });
//     if (user) {
//       const passCheck = await bcrypt.compare(password, user.password);
//       if (!passCheck) { res.status(401); res.json({ err: 'Wrong password' }); return; }
//       req.session.user = { id: user.id, name: user.name, email: user.email };
//       res.sendStatus(200);
//     } else {
//       res.status(401).json({ err: 'Wrong email' });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err: `Err in database: ${err} ` });
//   }
// });

// router.get('/signout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err)res.send(err);
//     res.clearCookie('exam');
//     res.redirect('/');
//   });
// });

// router.get('/signup', (req, res) => {
//   const { user } = req.session;
//   render(SignUpForm, user, res);
// });


// router.post('/signup', async (req, res) => {
//   try {
//     const {
//       name, email, password,
//     } = req.body;

//     if (!name || !email || !password) {
//       res.status(401).json({ err: 'Empty name, email or password' });
//       return;
//     }

//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       res.status(401).json({ err: 'User with this email already exists' });
//       return;
//     }

//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const user = await User.create({
//       name,
//       password: hashedPassword,
//       email,
//     });

//     req.session.user = { id: user.id, name: user.name, email: user.email };
//     res.sendStatus(200);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err: `Err in database: ${err} ` });
//   }
// });


module.exports = router;
