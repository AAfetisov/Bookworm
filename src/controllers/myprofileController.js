const { render } = require('react-dom');
const renderTemplate = require('../lib/renderTemplate');
const MyProfile = require('../views/myProfile/Myprofile');
const AddBook = require('../views/myProfile/AddBook');
const EditPostForm = require('../views/myProfile/EditPost');

const FavoritesView = require('../views/FavoritesView');

// Импортим модель из БД
const {
  sequelize, Book, Favorite, Rating,
} = require('../db/models');
const isNumeric = require('../lib/utils');

const renderMyProfile = async (req, res) => {
  const { user } = req.session;
  if (!user) { res.status(400).send('Authentication required'); return; }
  try {
    const posts = await Book.findAll({
      order: [['updatedAt', 'DESC']],
      where: { userId: user.id },
    });
    const arating = [];
    // const arating = await Rating.findAll({
    //   attributes: ['bookId',
    //     [sequelize.fn('AVG', sequelize.col('rating')), 'averageRating'],
    //   ],
    //   where: { bookId: id },
    //   group: ['bookId'],
    //   raw: true,
    //   nested: true,
    // });

    renderTemplate(MyProfile, { user, posts, arating: arating?.at(0)?.averageRating }, res);
  } catch (error) {
    console.error(error);
  }
};

const MyPostDelete = async (req, res) => {
  const { user } = req.session;
  const { id } = req.body;
  if (!user) { res.status(400).send('Authentication required'); return; }

  try {
    const postOwner = await Book.findByPk(id);
    console.log();
    if (postOwner?.userId !== user.id) { res.status(401).json({ err: 'Cant delete posts of other users' }); return; }
    const deletePost = await Book.destroy({ where: { id } });
    res.sendStatus(200);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'Post does not exist or db error' });
  }
};

// ! addBook

const addBookPage = (req, res) => {
  const user = req.session?.user?.name;
  const titleName = 'Add BookReview';
  renderTemplate(AddBook, { user, titleName }, res);
};


const addbookForm = async (req, res) => {
  const { user } = req.session;
  const {
    author, title, description, img,
  } = req.body;
  if (!user) { res.status(400).send('Authentication required'); return; }
  if (!author || !title || !description || !img) { res.status(401).json({ err: 'Fields can not be empty' }); return; }

  try {
    const createBook = await Book.create({
      userId: user.id,
      img,
      title,
      author,
      description,
    });
    res.sendStatus(200);
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(500).json({ err: error });
    }
  }
};

// ! put
const renderformPage = async (req, res) => {
  const titleName = 'Edit Post';
  const { user } = req.session;
  const { id } = req.params;

  if (!user) { res.status(400).send('Authentication required'); return; }
  const rec = await Book.findByPk(id);
  console.log(rec);
  if (rec?.userId !== user.id) { res.status(400).send('Authentication required'); return; }

  try {
    const post = await Book.findOne({
      raw: true,
      where: { id },
    });
    renderTemplate(EditPostForm, { user, post }, res);
  } catch (error) {
    console.error(error);
  }
};

const postEditform = async (req, res) => {
  const {
    img, title, description, author, id,
  } = req.body;

  const { user } = req.session;

  if (!user) { res.status(400).send('Authentication required'); return; }
  if (!author || !title || !description || !img) { res.status(401).json({ err: 'Fields can not be empty' }); }

  const rec = await Book.findByPk(id);
  if (rec?.userId !== user.id) { res.status(400).send('Authentication required'); return; }

  try {
    const post = await Book.update(
      {
        title,
        author,
        description,
        img,
      },
      {
        where: { id },
      },
    );
    res.sendStatus(200);
    return;
  } catch (error) {
    console.error(error);
  }
};

const addFav = async (req, res) => {
  const { id } = req.body;
  const { user } = req.session;
  if (!user) { return; }

  try {
    const [favs, created] = await Favorite.findOrCreate({
      where: { userId: user.id, bookId: id },
      defaults: { bookId: id, userId: user.id },
    });

    if (!created) {
      favs.destroy();
      await favs.save();
      res.status(200).json('unfaved');
      return;
    }
    res.status(200).json('faved');
  } catch (error) {
    console.log(error);
  }
};

const renderFavs = async (req, res) => {
  const { user } = req.session;
  if (!user) { res.status(401).redirect('/auth/signin'); return; }
  try {
    let favs = await Book.findAll({
      raw: true,
      include: {
        model: Favorite,
        where: { userId: user.id },
      },
    });
    if (favs.length === 0) { favs = undefined; }
    renderTemplate(FavoritesView, { user, favs }, res);
  } catch (error) {
    console.log(error);
  }
};

const rateBook = async (req, res) => {
  const { user } = req.session;
  const { id, value } = req.body;
  if (!user) { res.status(401).json({ err: 'User authentication required' }); return; }
  try {
    const exist = await Rating.findOne({ where: { userId: user.id, bookId: id } });
    if (exist) {
      exist.rating = value;
      await exist.save();
      res.json({ response: 'ok' });
    } else {
      await Rating.create({ userId: user.id, bookId: id, rating: value });
      res.json({ response: 'ok' });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  renderMyProfile,
  MyPostDelete,
  addBookPage,
  addbookForm,
  renderformPage,
  postEditform,
  renderFavs,
  addFav,
  rateBook,
};
