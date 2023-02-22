const renderTemplate = require('../lib/renderTemplate');
const MyProfile = require('../views/myProfile/Myprofile');

// Импортим модель из БД
const { Book } = require('../db/models');
const isNumeric = require('../lib/utils');

const renderMyProfile = async (req, res) => {
  const { user } = req.session;
  if (!user) { res.status(400).send('Authentication required'); return; }
  try {
    const posts = await Book.findAll({
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


module.exports = { renderMyProfile, MyPostDelete };
