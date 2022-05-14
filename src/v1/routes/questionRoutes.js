const express = require("express");
const router = express.Router();
const questionController = require('../../controllers/questionController')

router.post('/question', questionController.createQuestion);
router.get('/questions', questionController.getAllQuestions);
router.delete('/:questionId', questionController.createQuestion);


module.exports = router;