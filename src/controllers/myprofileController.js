const renderTemplate = require('../lib/renderTemplate');
const MyProfile = require('../views/myProfile/Myprofile');

// Импортим модель из БД
const { Book } = require('../db/models');

const renderMyProfile = async (req, res) => {
  const user = req.session?.user;
  const { id } = req.session?.user;
  try {
    const posts = await Book.findAll({
      raw: true,
      where: { userId: id },
    });
    renderTemplate(MyProfile, { user, posts }, res);
  } catch (error) {
    console.error(error);
  }
};

// const MyPublicDelete = async (req, res) => {
//   const user = req.session?.user;
//   // console.log('===========>',req.params);
//   // const { id } = req.params;
//   const { id } = req.body;
//   try {
//     const deletePost = await Post.destroy({
//       where: { id },
//     });
//     console.log('Пост успешно удалён!');
//     res.json({ status: 200 });
//   } catch (error) {
//     console.error(error);
//   }
// };


module.exports = { renderMyProfile };
