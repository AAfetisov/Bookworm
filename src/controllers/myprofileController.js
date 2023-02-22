const renderTemplate = require('../lib/renderTemplate');
const MyProfile = require('../views/myProfile/Myprofile');
const AddBook = require('../views/myProfile/AddBook');
const EditPostForm = require('../views/myProfile/EditPost');

// Импортим модель из БД
const { Book } = require('../db/models');
const isNumeric = require('../lib/utils');

const renderMyProfile = async (req, res) => {
  const { user } = req.session;
  if (!user) { res.status(400).send('Authentication required'); return; }
  try {
    const posts = await Book.findAll({

      order: [['updatedAt', 'DESC']],
      where: { userId: user.id },
    });
    renderTemplate(MyProfile, { user, posts }, res);
  } catch (error) {
    console.error(error);
  }
};

const MyPostDelete = async (req, res) => {
  const { user } = req.session;
  const { id } = req.body;

  if (!isNumeric(id)) { res.status(401).send('404 Page does not exist!'); return; }
  if (!user) { res.status(400).send('Authentication required'); return; }

  try {
    const postOwner = await Book.findByPk(id);
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
const putformPage = async (req, res) => {
  const titleName = 'Edit Post';
  console.log('req.params =================>', req.params);
  const user = req.session?.user?.name;
  const { id } = req.params;
  try {
    const post = await Book.findOne({
      raw: true,
      where: { id },
    });
    console.log('post ====>', post);
    renderTemplate(EditPostForm, { user, post }, res);
  } catch (error) {
    console.error(error);
  }
};

const postEditform = async (req, res) => {
  // console.log(req.body);
  const user = req.session?.user.name;
  const {
    title, description, author, img,
  } = req.body;
  const { id } = req.params;
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
    console.log('Данные в БД успешно изменены!');
    res.json({ status: 200 });
  } catch (error) {
    console.error(error);
  }
};


module.exports = {
  renderMyProfile,
  MyPostDelete,
  addBookPage,
  addbookForm,
  putformPage,
  postEditform,
};
