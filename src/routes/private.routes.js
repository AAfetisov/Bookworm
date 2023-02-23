const express = require('express');

const router = express.Router();

const {
  renderMyProfile,
  MyPostDelete,
  addBookPage,
  addbookForm,
  putformPage,
  postEditform,
  renderFavs,
  addFav,
} = require('../controllers/myprofileController');


// Импортим middleware, котороя будет проверять авторизованного пользователя
// const isAuth = require('../middlewares/auth');

// myProfile:
router.get('/myprofile', renderMyProfile);
router.delete('/myprofile', MyPostDelete);


// private/editform/:id
router.get('/private/editform/:id', putformPage);
router.put('/private/editform/:id', postEditform);


// addFarmPage:
router.get('/addbook/new', addBookPage);
router.post('/addbook/new', addbookForm);

router.get('/favorites', renderFavs);
router.post('/favorites', addFav);

module.exports = router;
