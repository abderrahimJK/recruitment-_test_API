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
      //  Question->Category
      Question.belongsTo(models.Category, {
        foreignKey: 'categoryId',
      })

      //  Question<->Tags
      Question.belongsToMany(models.Tag, { 
        through: 'Question_tags', timestamps: false 
      })

    }
    //attributes that should not be returned to the user
    toJSON(){
      return {...this.get(), createdAt: undefined, updatedAt: undefined}
    }
  }
  Question.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    content: {
      type:DataTypes.STRING(60),
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