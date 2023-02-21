const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Book, { foreignKey: 'userId' });
      this.hasMany(models.Rating, { foreignKey: 'userId' });
      this.hasMany(models.Favorite, { foreignKey: 'userId' });
      this.hasMany(models.Comment, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
