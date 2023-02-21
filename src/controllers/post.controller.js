const render = require('../lib/renderTemplate');
const { sequelize, User } = require('../db/models');

function renderPost(req, res) {
  const { user } = req.session;
  const { id } = req.params;

  //   render(Post, user, res);
}
