'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question_tag.belongsTo(models.Question, { foreignKey: 'question_id', targetKey: 'id', as: 'question' })
      Question_tag.belongsTo(models.Tag, { foreignKey: 'tag_id', targetKey: 'id', as: 'tag' })
    }
  }
  Question_tag.init({
    
    question_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: false,
      references: {
        model: 'question',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
     
    },
    tag_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: false,
      references: {
        model: 'tag',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      
    }
  }, {
    sequelize,
    timestamps: false ,
    modelName: 'Question_tag'
  });
  return Question_tag;
};