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
      
    }
  }
  Tag.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    type: {
      type:DataTypes.STRING(32),
      allowNull: false
    }
  }, 
  {
    sequelize,
    timestamps: false,
    tableName: 'tags',
    modelName: 'Tag',
  });
  return Tag;
};