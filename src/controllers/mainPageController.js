const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const { sequelize, User } = require('../db/models');
// Импорт модели Book
const { Book, Favorite, Rating } = require('../db/models');
require('dotenv').config();

const mainPage = async (req, res) => {
  const { user } = req.session;
  let page = parseInt(req?.query?.page, 10);
  let limit = parseInt(req?.query?.limit, 10);
  const BOOKS_PER_PAGE_MAX = process.env.BOOKS_PER_PAGE_MAX || 10;
  page = page || 1;
  limit = limit <= BOOKS_PER_PAGE_MAX ? limit : BOOKS_PER_PAGE_MAX;
  const offset = (page - 1) * limit;
  const totalNumberOfRecords = await Book.count();
  let books = [];

  try {
    if (!user) {
      books = await Book.findAll({
        group: ['Book.id', 'User.id'],
        attributes: {
          include: [[sequelize.fn('AVG', sequelize.col('Ratings.rating')), 'averageRating']],
        },
        include: [
          { model: Rating, attributes: [] },
          { model: User, attributes: ['name'] },
        ],
        limit,
        offset,
        subQuery: false,
        raw: true,
      });
    }
    if (user) {
      books = await Book.findAll({
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
        { model: User, attributes: ['name'] },
        { model: Rating, attributes: [] },
        ],
        group: ['Book.id', 'Favorites.id', 'User.id'],
        order: ['id'],
        limit,
        offset,
        subQuery: false,
        raw: true,
      });
    }
    const result = {};

    if (offset + limit < totalNumberOfRecords) {
      result.next = {
        page: page + 1,
        limit,
      };
    }

    if (offset > 0) {
      result.previous = {
        page: page - 1,
        limit,
      };
    }
    result.current = {
      page,
      limit,
    };
    result.total = {
      pages: Math.ceil(totalNumberOfRecords / limit),
      limit,
    };
    result.books = books;

    renderTemplate(MainPage, { user, page: result }, res);
  } catch (err) {
    console.log(err);
    res.send({ err });
  }
};

module.exports = mainPage;
