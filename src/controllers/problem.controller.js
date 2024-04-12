const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const problemService = new ProblemService(new ProblemRepository()); //doubt

function pingCheckController(req, res) {
  return res.json({ message: "Ping controller xis up" });
}

async function addProblem(req, res, next) {
  try {
    const newproblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success:true,
      message:"Successfully Added new problem",
      error:{},
      data:newproblem
    })
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res,next) {
  try {
    const problem=await problemService.getProblem(req.params.id);
     return res.status(StatusCodes.OK).json({
       success: true,
       message: "Successfully Fetched the problem",
       error: {},
       data: problem,
     });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res,next) {
  try {
    const response=await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the problems",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res,next) {
 try {
  const problem=await problemService.deleteProblem(req.params.id);
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Successfully Deleted the problem",
    error: {},
    data: problem,
  });
 } catch (error) {
  next(error);
 }
}

async function updateProblem(req, res,next) {
  try {
    const problem=await problemService.updateProblem(req.params.id,req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully Updated the problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingCheckController,
};
