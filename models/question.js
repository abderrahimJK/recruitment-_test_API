'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // defining association  
     
      Question.belongsToMany(models.Category, { through: 'Question_category', timestamps: false })
      Question.belongsToMany(models.Tag, { through: 'Question_tags', timestamps: false })
      Question.hasMany(models.Answer, {
        foreignKey: 'question_id',
      })
    }
    //attributes that should not be returned to the user
    toJSON(){
      return {...this.get(), createdAt: undefined, updatedAt: undefined}
    }
  }
  Question.init({
    content: {
      type:DataTypes.STRING(60),
      allowNull: false
    },
    tags:{
      type:DataTypes.STRING,
      allowNull: false
    },
    type: {
      type:DataTypes.STRING(32),
      allowNull: false
    },
    

  }, {
    sequelize,
    tableName:"questions",
    modelName: 'Question',
  });
  return Question;
};