const question = require('../utils/question')


const getAllQuestions = () => {
    try{
        
        const Questions = question.getAllQuestions();
        return Questions;
    }catch(error){
        throw Error;
    }
}

const createQuestion = (newQuestion )=> {
    try{
        //adding
        const createdQuestion = question.createNewQuestion(newQuestion);
        return createdQuestion;
    }catch(error){
        throw Error;
    }
}

module.exports = {
    createQuestion,
    getAllQuestions,
}