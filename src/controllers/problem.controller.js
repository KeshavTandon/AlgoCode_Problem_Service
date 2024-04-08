const { StatusCodes } = require("http-status-codes");
const NotImplementedServerError = require("../errors/Notimplemented.error");

function pingCheckController(req, res) {
  return res.json({ message: "Ping controller is up" });
}
function addProblem(req, res,next) {
  try {
    //not implemented
    throw new NotImplementedServerError("addProblem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingCheckController,
};
