const express = require('express');
const render = require('../lib/renderTemplate');
const BookView = require('../views/BookView');
const { Book, Comment, User } = require('../db/models');
const isNumeric = require('../lib/utils');

const router = express.Router();


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = req.session;

  if (!isNumeric(id)) { res.status(401).send('404 Page does not exist!'); return; }

  try {
    const book = await Book.findByPk(id);
    let comments = await Comment.findAll({
      where: { bookId: id }, order: [['id', 'ASC']], include: [{ model: User, attributes: ['name'] }], raw: true, nested: true,
    });

    if (comments.length === 0) { comments = undefined; }
    render(BookView, { user, book, comments }, res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something wrong with db');
  }
});

router.post('/comment', async (req, res) => {
  const { id, comment } = req.body;

  const { user } = req.session;
  if (!user) { res.status(401).json({ err: 'Must be authorized' }); return; }
  if (!isNumeric(id)) { res.status(401).json('Provide valid bookId'); return; }

  try {
    const post = Comment.create({ bookId: id, userId: user.id, body: comment });
    res.sendStatus(200);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send('Something wrong with db');
  }
});

module.exports = router;
