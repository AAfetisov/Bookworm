const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const { sequelize, User } = require('../db/models');
// Импорт модели Book
const { Book, Favorite, Rating } = require('../db/models');


const mainPage = async (req, res) => {
  const { user } = req.session;
  try {
    // const books = await Book.findAll({ include: [{ model: User, attributes: ['name'] }], raw: true, nested: true });
    let favs = [];

    const books = await Book.findAll({
      attributes: [
        'id',
        'title',
        'author',
        'description',
        'img',
        [sequelize.fn('AVG', sequelize.col('Ratings.rating')), 'averageRating'],
      ],
      include: [{
        model: Rating,
        attributes: [],
      },
      { model: User, attributes: ['name'] }],
      group: ['Book.id', 'User.name'],
      raw: true,
      nested: true,
    });

    if (user) {
      favs = await Favorite.findAll({ where: { userId: user.id } });
    }
    if (favs.length !== 0) {
      const arrFavs = favs.map((f) => f.bookId);
      const arrBooks = books.map((book) => (arrFavs.includes(book.id) ? { ...book, liked: true } : { ...book, liked: false }));
      renderTemplate(MainPage, { user, books: arrBooks }, res);
    } else {
      renderTemplate(MainPage, { user, books }, res);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = mainPage;
