const { Problem } = require("../models");

//this will interact with dB and on receiving problem details it will create a new problem 
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
    });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems(){
    try {
      const problems=Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id){
    try {
      const response=Problem.findById(id);
      return response;
    } catch (error) {
      
    }
  }
}



module.exports = ProblemRepository;
