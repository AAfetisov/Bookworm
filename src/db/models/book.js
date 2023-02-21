const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Rating, { foreignKey: 'bookId' });
      this.hasMany(models.Favorite, { foreignKey: 'bookId' });
      this.hasMany(models.Comment, { foreignKey: 'bookId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Book.init({
    userId: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    title: DataTypes.TEXT,
    author: DataTypes.TEXT,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
