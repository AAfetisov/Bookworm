const express = require('express');
const render = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const { sequelize, User, Pet } = require('../db/models');

const router = express.Router();


router.get('/', async (req, res) => {
  const { user } = req.session;
  render(MainPage, { user }, res);
});

module.exports = router;
