const { 
    Question,
    Category,
    Answer
} = require('../../models')

const getAllQuestions  = () => {
    try{
        const questions = Question.findAll({include:Category});
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