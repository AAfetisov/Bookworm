const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const { sequelize, User } = require('../db/models');
// Импорт модели Book
const { Book } = require('../db/models');


const mainPage = async (req, res) => {
  const { user } = req.session;
  try {
    const books = await Book.findAll({ include: [{ model: User, attributes: ['name'] }], raw: true, nested: true });
    renderTemplate(MainPage, { user, books }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mainPage;
