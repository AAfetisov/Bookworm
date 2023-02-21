const express = require('express');

const mainPage = require('../controllers/mainPageController');

const router = express.Router();


router.get('/', mainPage);

module.exports = router;
