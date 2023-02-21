const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const { sequelize, User } = require('../db/models');
// Импорт модели Book
const { Book } = require('../db/models');


const mainPage = async (req, res) => {
  const { user } = req.session;
  try {
    const books = await Book.findAll({
      raw: true,
    });
    console.log(books);
    renderTemplate(MainPage, { user, books }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mainPage
