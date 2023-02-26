const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const { sequelize, User } = require('../db/models');
// Импорт модели Book
const { Book, Favorite, Rating } = require('../db/models');


const mainPage = async (req, res) => {
  const { user } = req.session;
  try {
    if (!user) {
      const books = await Book.findAll({
        attributes: {
          include: [[sequelize.fn('AVG', sequelize.col('Ratings.rating')), 'averageRating']],
        },
        include: [{
          model: Rating,
          attributes: [],
        },
        { model: User, attributes: ['name'] },
        ],
        group: ['Book.id', 'User.name'],
        raw: true,
      });
      renderTemplate(MainPage, { user, books }, res);
      return;
    }
    if (user) {
      const booksWithFavs = await Book.findAll({
        attributes: {
          include: [
            [sequelize.fn('AVG', sequelize.col('Ratings.rating')), 'averageRating'],
          ],
        },
        include: [{
          model: Favorite,
          attributes: ['userId'],
          where: { userId: user.id },
          required: false,
        },
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Rating,
          attributes: [],
        },
        ],
        group: ['Book.id', 'Favorites.id', 'User.id'],
        order: ['id'],
        raw: true,
      });
      renderTemplate(MainPage, { user, books: booksWithFavs }, res);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = mainPage;
