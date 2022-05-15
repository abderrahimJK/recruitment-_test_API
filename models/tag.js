'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tag.belongsToMany(models.Question, { through: 'Question_tags' , timestamps: false })
    }
  }
  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    tableName: 'tags',
    modelName: 'Tag',
  });
  return Tag;
};