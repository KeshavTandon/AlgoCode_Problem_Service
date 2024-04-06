const express = require("express");

const v1Router=require('./v1');

const apiRouter = express.Router();

apiRouter.use("/v1", v1Router);  //any request that will be /api/v1 will be mapped to the v1Router

module.exports = apiRouter;
