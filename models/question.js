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

  Question.associate = models => {
    Question.hasMany(models.Category, {
      foreignKey: 'question_id'
    })
  }
  return Question;
};