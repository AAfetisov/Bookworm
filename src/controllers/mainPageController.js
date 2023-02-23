const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const { sequelize, User } = require('../db/models');
// Импорт модели Book
const { Book, Favorite } = require('../db/models');


const mainPage = async (req, res) => {
  const { user } = req.session;
  try {
    const books = await Book.findAll({ include: [{ model: User, attributes: ['name'] }], raw: true, nested: true });
    const favs = await Favorite.findAll({ where: { userId: user.id } });

    const arrFavs = favs.map((f) => f.bookId);

    const arrBooks = books.map((book) => (arrFavs.includes(book.id) ? { ...book, liked: true } : { ...book, liked: false }));

    renderTemplate(MainPage, { user, books: arrBooks }, res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mainPage;
