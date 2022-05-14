'use strict';
const {Question} = require('./question')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Answer.belongsTo(models.Question, {
        foreignKey: 'question_id'
      })
      
    }//attributes that should not be returned to the user
    /* toJSON(){
      return {...this.get(), id: undefined}
    } */
  }
  Answer.init({
    title:{
      type:DataTypes.STRING(60),
      allowNull: false
    },
    right: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    score: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'answer',
    modelName: 'Answer',
    timestamps: false ,
  });
  return Answer;
};