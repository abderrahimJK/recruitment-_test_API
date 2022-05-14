const { Question, Category } = require('../../models')

const getAllQuestions  = () => {
    try{
        const questions = Question.findAll({include:[ {model:Category, as: 'categories'}]});
        return questions;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

const createNewQuestion = (question) =>{

    try{
        const createdQuestion = Question.create(question);
        return createdQuestion;
    }catch(error){
        throw { status : 500, message : error ?.message || error};
    }
}

module.exports = {
    createNewQuestion,
    getAllQuestions,
}