'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //Category<-Questions
      Category.hasMany(models.Question, {
        foreignKey: 'categoryId',
        onDelete: 'CASCADE',
      })
     
    }
  }
  Category.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    category: {
      type:DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName:'Categories',
    modelName: 'Category',
  });
  return Category;
};