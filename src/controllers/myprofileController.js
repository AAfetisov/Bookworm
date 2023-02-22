const renderTemplate = require('../lib/renderTemplate');
const MyProfile = require('../views/myProfile/Myprofile');
const AddBook = require('../views/myProfile/AddBook');
const EditPostForm = require('../views/myProfile/EditPost');

// Импортим модель из БД
const { Book } = require('../db/models');

const renderMyProfile = async (req, res) => {
  const user = req.session?.user;
  const { id } = req.session?.user;
  try {
    const posts = await Book.findAll({
      raw: true,
      order: [['updatedAt', 'DESC']],
      where: { userId: id },
    });
    renderTemplate(MyProfile, { user, posts }, res);
  } catch (error) {
    console.error(error);
  }
};

const MyPostDelete = async (req, res) => {
  const user = req.session?.user;
  // console.log('===========>',req.body);
  // const { id } = req.params;
  const { id } = req.body;
  try {
    const deletePost = await Book.destroy({
      where: { id },
    });
    console.log('Пост успешно удалён!');
    res.json({ status: 200 });
  } catch (error) {
    console.error(error);
  }
};

// ! addBook

// Рендерим страницу AddBookForm
const addBookPage = (req, res) => {
  const user = req.session?.user?.name;
  const titleName = 'Add BookReview';
  renderTemplate(AddBook, { user, titleName }, res);
};

// Post AddBookForm:
const addbookForm = async (req, res) => {
  // Что пришло в req.body
  console.log('req.body addBookForm -->', req.body);
  // Достаём userId из сессии
  const { id } = req.session?.user;
  console.log('userID ==>', id);
  try {
    // Достаём данные из формы
    const {
      author, title, description, img,
    } = req.body;
    // Добавляем книгу в таблицу Book:
    const createBook = await Book.create({
      userId: id,
      img,
      title,
      author,
      description,
    });
    console.log(`Пост пользователя ${req.session?.user.name} успешно опубликован!`);
    // res.status(200).end();
    res.json({ status: 200 });
  } catch (error) {
    if (error) {
      console.log('3) ОШИБКА ПРИ СОЗДАНИИ: =====> Текст ошибки:', error.message);
      res.json({ error: error.message });
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
