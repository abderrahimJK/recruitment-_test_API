const { 
    Question,
    Category,
    Question_tag,
    Tag
} = require('../models')



const getAllQuestions  = () => {
    try{
        const questions = Question.findAll({
            include:[
                Category
            ]
        });
        return questions;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

//add new question including (category, tags)

/* const createNewQuestion = (question) => {

    const tags = question.tags;
    try{
        const createdQuestion = Question.create(question);

        createdQuestion.setTags(tags);
     
        return createdQuestion;
    }catch(error){
        throw { status : 500, message : error ?.message || error};
    }
}
 */

//add new question including (category, tags)

const createNewQuestion = (question) => {

    try{
        const createdQuestion = Question.create(question,{
            include: [{
              model: Tag,
              as: 'question_tag',
              through : Question_tag
            }]
          });
    
        return createdQuestion;
    }catch(error){
        throw { status : 500, message : error ?.message || error};
    }
}


module.exports = {
    createNewQuestion,
    getAllQuestions,
}