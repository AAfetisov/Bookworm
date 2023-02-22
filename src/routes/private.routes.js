const express = require('express');

const router = express.Router();

const { addBookPage, addbookForm } = require('../controllers/addBookController');
const { renderMyProfile, MyPostDelete } = require('../controllers/myprofileController');

// const { editFarmPage, editFarm } = require('../controllers/editFarmController')


// Импортим middleware, котороя будет проверять авторизованного пользователя
// const isAuth = require('../middlewares/auth');

// myProfile:
router.get('/myprofile', renderMyProfile);
router.delete('/myprofile', MyPostDelete);

// addFarmPage:
router.get('/addbook/new', addBookPage);
router.post('/addbook/new', addbookForm);


module.exports = router;
