const express = require('express');
const render = require('../lib/renderTemplate');
// const BookView = require('../views/BookView');
const {
  Book, Comment, User, Rating, sequelize, Favorite,
} = require('../db/models');
const isNumeric = require('../lib/utils');

const router = express.Router();


router.get('/', async (req, res) => {
  const { user } = req.session;
  let { page, limit } = req.query;
  const BOOKS_PER_PAGE_MAX = 3;
  page = page || 0;
  limit = limit < BOOKS_PER_PAGE_MAX ? limit : BOOKS_PER_PAGE_MAX;

  const startIndex = (page - 1) * limit;

  try {
    const booksWithFavs = await Book.findAll({
      attributes: {
        include: [
        // [sequelize.fn('COUNT', sequelize.col('Favorites.id')), 'liked'],
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
    res.json(booksWithFavs);
  } catch (err) {
    console.log(err);
    res.send({ err });
  }
});

module.exports = router;
