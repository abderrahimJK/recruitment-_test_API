const {Question_tags} = require('../models')

exports.addTutorial = (questionId,tagId) => {
    try {
        Question_tags.create(questionId,tagId)
    } catch (error) {
        throw { status : 500, message : error ?.message || error};
    }
  };