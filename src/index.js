const express = require("express");
const {sequelize} = require('../models')
const bodyParser = require('body-parser')
const v1QuestionRouter = require("./v1/routes/questionRoutes");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT;


app.use("/api/v1", v1QuestionRouter);

app.listen(PORT,async  () => {
  console.log(`API is listening on port ${PORT}`);
  await sequelize.sync({force: true});
  console.log("DataBase synced");
});