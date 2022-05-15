const questionService = require('../services/questionService')

const getAllQuestions  =async (req,res) => {
    try{

        const allQuestions = await questionService.getAllQuestions();
        res.send({status:'ok',data: allQuestions});
    }catch(error){
        res
        .status(error?.status)
        .send({status:'FAILED', data :{
            error : error?.message || error
        }});
    }
}

const createQuestion = async  (req, res) => {

    const { body } = req

    //fields are required
    if( !body.content || !body.type || !body.category){
        res.status(400)
            .send({status: 'FAILED', data : {
                error: "One of the following keys is missing or is empty in request body: 'title', 'tags', 'type'"
            }});
        return;
    }

    const question = {
        content : body.content,
        tags : body.tags,
        type: body.type,
        categoryId: body.category
    }

    try{

        const createdQuestion = await questionService.createQuestion(question);
        res.status(200).send({status : "OK", data : createdQuestion})
        
    }catch(err){
        res
        .status(err?.status || 500)
        .send({status : "FAILED", data :{error: err?.message || err}});
    }
}

module.exports = {
    createQuestion,
    getAllQuestions,
}