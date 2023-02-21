const express = require('express');
const render = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const { sequelize, User, Pet } = require('../db/models');

const router = express.Router();


router.get('/', async (req, res) => {
  const { user } = req.session;
  let pets = [];

  try {
    if (user) {
      pets = await Pet.findAll({ where: { userId: user.id } });
    }
    if (pets.length === 0) { pets = undefined; }
    const users = await User.findAll();
    render(MainPage, { user, users, pets }, res);
  } catch (err) {
    console.log(err);
    res.send('Error in database:', err);
  }
});

module.exports = router;
