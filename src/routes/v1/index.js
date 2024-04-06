const express = require("express");

const ProblemRouter=require('./problem.routes')

const v1Router = express.Router();

v1Router.use('/problems',ProblemRouter); //api/v1/problems will be mapped to the ProblemRouter

module.exports=v1Router;