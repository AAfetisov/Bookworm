const express = require('express');
const { renderBook, postComment } = require('../controllers/book.controllers');

const router = express.Router();


router.get('/:id', renderBook);
router.post('/comment', postComment);

module.exports = router;
