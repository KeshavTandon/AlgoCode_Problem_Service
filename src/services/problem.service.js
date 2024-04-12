const SanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  } //doubt
  async createProblem(problemData) {
    //1.Sanitize the description
    problemData.description = SanitizeMarkdownContent(problemData.description);
    const problem = this.problemRepository.createProblem(problemData); //doubt
    return problem;
  }

  async getAllProblems() {
    const problems = this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId){
    const problem=this.problemRepository.getProblem(problemId);
    return problem;
  }

  async deleteProblem(problemId){
    const problem=this.problemRepository.deleteProblem(problemId);
    return problem;
  }

  async updateProblem(problemId,data){
    const problem=this.problemRepository.updateProblem(problemId,data);
    return problem;
  }
}

module.exports = ProblemService;
