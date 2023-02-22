const renderTemplate = require('../lib/renderTemplate');
const AddBook = require('../views/myProfile/AddBook');

// Импорт модели Farm:
const { Book } = require('../db/models');

// Рендерим страницу AddBookForm
const addBookPage = (req, res) => {
  const titleName = 'Add BookReview';
  renderTemplate(AddBook, { user: req.session?.user?.login, titleName }, res);
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
    const { author, title, description, img } = req.body;
    // Добавляем книгу в таблицу Book:
    const createBook = await Book.create({
      userId: id,
      img,
      title,
      author,
      description,
    });
    console.log(`Пост пользователя ${req.session?.user.login} успешно опубликован!`);
    // res.status(200).end();
    res.json({ status: 200 });
  } catch (error) {
    if (error) {
      console.log('3) ОШИБКА ПРИ СОЗДАНИИ: =====> Текст ошибки:', error.message);
      res.json({ error: error.message });
    }
  }
};
console.log('asdsa');

module.exports = {
  addBookPage,
  addbookForm,
};
