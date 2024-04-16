const logger = require("../config/logger.config");
const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models");

//this will interact with dB and on receiving problem details it will create a new problem
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
        difficulty:problemData.difficulty ? problemData.difficulty:"easy"
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const response = await Problem.findById(id);
      if (!response) {
        throw new NotFound("Problem", id);
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteProblem(id){
    try {
      const response=await Problem.findByIdAndDelete(id);
      if(!response)
      {
        throw new NotFound('Problem',id);
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateProblem(id,data){
    try {
      const response=await Problem.findByIdAndUpdate(id,data);
      if(!response)
      {
        logger.error(`Problem Not Found`);
        throw new NotFound('Problem',id);
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemRepository;
