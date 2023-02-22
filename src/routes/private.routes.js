const express = require('express');

const router = express.Router();

const { addBookPage, addbookForm } = require('../controllers/addBookController');

// const { editFarmPage, editFarm } = require('../controllers/editFarmController')


// Импортим middleware, котороя будет проверять авторизованного пользователя
// const isAuth = require('../middlewares/auth');

// addFarmPage:
router.get('/addbook/new', addBookPage);
router.post('/addbook/new', addbookForm);
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('bw');
    res.redirect('/');
  });

module.exports = router;
